import { RefObject, useEffect, useRef } from 'react';

export default function useObserver(
  callback: IntersectionObserverCallback,
  target: RefObject<HTMLElement | null>,
  options?: IntersectionObserverInit,
) {
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((entry, observer) => {
      const e = entry.find((e) => e.target === target.current);
      if (e && e.isIntersecting) {
        callback(entry, observer);
        observer.disconnect();
      }
    }, options);
    if (target.current) {
      observer.current?.observe(target.current);
    }
    return () => {
      observer.current?.disconnect();
    };
  }, []);

  return observer;
}
