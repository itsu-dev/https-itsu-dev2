import ResponsiveSection from '../../../../components/ResponsiveSection';
import VerticalTitle from '../../../../components/VerticalTitle';
import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import useObserver from '../../../../hooks/useObserver.ts';

export default function Haiku() {
  const ref = React.useRef<HTMLDivElement>(null);
  const [haiku, setHaiku] = useState<string>('');

  useEffect(() => {
    fetch('/articles/haiku.txt')
      .then((response) => response.text())
      .then((data) => setHaiku(data));
  }, []);

  useObserver(() => {
    ref.current?.classList.add(styles.active)
  }, ref, { threshold: 1.0 });

  return (
    <ResponsiveSection className={styles.wrapper}>
      <VerticalTitle text={'Haiku'} />
      <h3 className={styles.title}>今月の一句</h3>
      <div ref={ref} className={styles.haikuWrapper}>
        <hr className={styles.lineTop} />
        <p className={styles.haiku}>{haiku}</p>
        <hr className={styles.lineBottom} />
      </div>
    </ResponsiveSection>
  );
}