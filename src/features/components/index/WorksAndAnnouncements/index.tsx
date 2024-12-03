import styles from './styles.module.css';
import MarkdownContainer from '../../../../components/MarkdownContainer';
import TwoColumn from '../../../../components/TwoColumn';

export default function WorksAndAnnouncements() {
  return (
    <TwoColumn
      className={styles.wrapper}
      column1Title={'Works'}
      column2Title={'Announcements'}
      column1Content={<MarkdownContainer url={'/articles/works.md'} />}
      column2Content={<MarkdownContainer url={'/articles/announcements.md'} />}
    />
  );
}
