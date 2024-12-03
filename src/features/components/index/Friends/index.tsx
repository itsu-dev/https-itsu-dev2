import ResponsiveSection from "../../../../components/ResponsiveSection";
import VerticalTitle from "../../../../components/VerticalTitle";
import styles from "./styles.module.css";
import {Friend as FriendType} from "../../../../types";
import {useEffect, useState} from "react";
import Friend from "./Friend";

export default function Friends() {
    const [friends, setFriends] = useState<FriendType[]>([]);

    useEffect(() => {
        fetch("/articles/friends.json")
            .then(response => response.json())
            .then(data => setFriends(data["friends"]));
    }, []);

    return (
        <ResponsiveSection>
            <VerticalTitle text={"Friend Links"} />
            <div className={styles.friends}>
                { friends.map((friend, index) =>
                    <Friend
                        key={index}
                        friend={friend} />
                )}
            </div>
            <p className={styles.description}>📢 掲載は連絡ください！ ⛔️</p>
        </ResponsiveSection>
    );
}