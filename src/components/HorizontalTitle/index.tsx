import { useRef } from 'react';
import useObserver from '../../hooks/useObserver.ts';
import styles from './styles.module.css';

type Props = {
  text: string;
  isLeft?: boolean;
};

export default function HorizontalTitle({ text, isLeft }: Props) {
  const ref = useRef<HTMLHeadingElement>(null);

  useObserver(
    () => {
      ref.current?.classList.add(styles.active);
    },
    ref,
    { threshold: 1.0 },
  );

  return (
    <h2
      style={{ paddingLeft: isLeft ? '40%' : '1rem' }}
      ref={ref}
      className={styles.title}
    >
      <span>{text}</span>
    </h2>
  );
}
