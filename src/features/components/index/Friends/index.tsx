import ResponsiveSection from '../../../../components/ResponsiveSection';
import VerticalTitle from '../../../../components/VerticalTitle';
import styles from './styles.module.css';
import { Friend as FriendType } from '../../../../types';
import { useEffect, useState } from 'react';
import Friend from './Friend';

export default function Friends() {
  const [friends, setFriends] = useState<FriendType[]>([]);

  useEffect(() => {
    fetch('/articles/friends.json')
      .then((response) => response.json())
      .then((data) => setFriends(data['friends']));
  }, []);

  return (
    <ResponsiveSection>
      <VerticalTitle text={'Friend Links'} />
      <div className={styles.friends}>
        {friends.map((friend, index) => (
          <Friend key={index} friend={friend} />
        ))}
      </div>
      <div className={styles.banners}>
        <a href={"https://sites.google.com/view/happy-busy/"} target={"_blank"}>
          <img src={'/imgs/notime.png'} alt={'時間ねぇー'} />
        </a>
        <a href={'https://love.tsukuba-ac.net/'} target={"_blank"}>
          <img src={'/imgs/tsukuba-love2.png'} alt={'つくばに住んでいます。つくばの方が、楽しいので。'} />
        </a>
      </div>
      <p className={styles.description}>📢 掲載は連絡ください！ ⛔️</p>
    </ResponsiveSection>
  );
}
