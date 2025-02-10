import FullPageSection from '../../../../components/FullPageSection';
import styles from './styles.module.css';
import RecentImages from './RecentPhoto';
import Introduction from './Introduction';
import React from 'react';
import SNSIcon from './SNSIcon';
import { BsGithub, BsTwitterX } from 'react-icons/bs';
import { SiQiita, SiZenn } from 'react-icons/si';
import VerticalTitle from '../../../../components/VerticalTitle';

export default function TopSection() {
  const ref = React.useRef<HTMLTableSectionElement>(null);
  return (
    <FullPageSection as="div" className={styles.wrapper}>
      <RecentImages />
      <section ref={ref} className={styles.introduction}>
        <VerticalTitle text={'Introduction'} />
        <Introduction />

        <menu className={styles.sns}>
          <SNSIcon
            id="@itsu-dev"
            link="https://github.com/itsu-dev"
            icon={<BsGithub color={'#6e5494'} />}
            backgroundColor="#f1f2f2"
            color="#333333"
          />
          <SNSIcon
            id="@chururi_"
            link="https://x.com/chururi_"
            icon={<BsTwitterX color={'black'} />}
            backgroundColor="#f1f2f2"
            color="#333333"
          />
          <SNSIcon
            id="@chururi"
            link="https://qiita.com/chururi"
            icon={<SiQiita color={'#55c500'} />}
            backgroundColor="#f1f2f2"
            color="#333333"
          />
          <SNSIcon
            id="@itsu_dev"
            link="https://zenn.dev/itsu_dev"
            icon={<SiZenn color={'#3ea8ff'} />}
            backgroundColor="#f1f2f2"
            color="#333333"
          />
        </menu>
      </section>
    </FullPageSection>
  );
}
