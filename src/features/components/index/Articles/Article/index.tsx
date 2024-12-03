import styles from './styles.module.css';

type Props = {
  title: string;
  image?: string;
  link: string;
  date: string;
};

export default function Article({ title, image, link, date }: Props) {
  return (
    <article className={styles.article}>
      <a href={link} className={styles.image} target={'_blank'}>
        {image ? null : 'No Image'}
      </a>
      <div>
        <h3>{title}</h3>
        <p className={styles.date}>{date}</p>
      </div>
    </article>
  );
}
