import {Friend as FriendType} from "../../../../../types";
import styles from "./styles.module.css";

type Props = {
    friend: FriendType;
};

export default function Friend({friend}: Props) {
    return (
        <article className={styles.friend}>
            <a href={friend.url}><img src={friend.icon} alt={friend.name} /></a>
            <p>{friend.name}</p>
        </article>
    );
}