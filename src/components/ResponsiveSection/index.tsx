import FullPageSection from '../FullPageSection';
import styles from './styles.module.css';
import { CSSProperties } from 'react';

type Props = {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
  style?: CSSProperties;
};

export default function ResponsiveSection({
  children,
  className,
  style,
}: Props) {
  return (
    <FullPageSection className={`${styles.wrapper} ${className}`} style={style}>
      {children}
    </FullPageSection>
  );
}
