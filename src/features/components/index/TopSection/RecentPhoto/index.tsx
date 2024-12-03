import styles from './styles.module.css';
import { RecentPhoto as RecentPhotoType } from '../../../../../types';
import { useEffect, useState } from 'react';

export default function RecentImages() {
  const [photo, setPhoto] = useState<RecentPhotoType | null>(null);

  useEffect(() => {
    fetch('/articles/recent_photo.json')
      .then((response) => response.json())
      .then((data) => setPhoto(data));
  }, []);

  return (
    <section className={styles.wrapper}>
      {photo && (
        <>
          <div className={styles.background}>
            <img className={styles.background} src={photo.image} alt="写真" />
          </div>
          <div className={styles.overlay}>
            <div className={styles.descwrapper}>
              <span>{photo.description}</span>
            </div>
            <div>
              <h2 className={styles.title}>Recent Photo</h2>
              <p className={styles.cc}>
                Licensed under{' '}
                <a href={'https://creativecommons.org/licenses/by/4.0/deed.ja'}>
                  CC BY 4.0
                </a>
              </p>
            </div>
            <div className={styles.header}>
              <p className={styles.place}>📍{photo.place}</p>
              <p className={styles.date}>📆 {photo.date}</p>
            </div>
          </div>
          <img src={photo.image} alt="写真" />
        </>
      )}
      <div className={styles.nophoto}>{!photo && <p>No photo.</p>}</div>
    </section>
  );
}
