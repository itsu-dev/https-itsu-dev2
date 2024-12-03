import styles from './styles.module.css';
import ResponsiveSection from '../ResponsiveSection';
import HorizontalTitle from '../HorizontalTitle';

type Props = {
  className?: string;
  column1Title: string;
  column2Title: string;
  column1Content: React.ReactNode;
  column2Content: React.ReactNode;
};

export default function TwoColumn({
  className,
  column1Title,
  column2Title,
  column1Content,
  column2Content,
}: Props) {
  return (
    <ResponsiveSection className={`${styles.wrapper} ${className}`}>
      <div>
        <HorizontalTitle isLeft text={column1Title} />
        <div className={styles.left}>{column1Content}</div>
      </div>
      <div>
        <HorizontalTitle text={column2Title} />
        <div className={styles.right}>{column2Content}</div>
      </div>
    </ResponsiveSection>
  );
}
