import React from 'react';
import T from 'prop-types';
import clsx from 'clsx';

import styles from './FriendList.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => (
    <li className={styles.item}>
        <span className=
            {clsx(styles.status, isOnline ? styles.status__online : styles.status__offline)}
        >
        </span>
        <img className={styles.avatar} src={avatar} alt={name} width="48" />
        <p className={styles.name}>{name}</p>
    </li >
);

const FriendList = ({ friends }) => (
    <section className={styles.section}>
        <ul className={styles.friend__list}>
            {friends.map(item => (
                <FriendListItem avatar={item.avatar} name={item.name} isOnline={item.isOnline} key={item.id} />
            ))}
        </ul>
    </section>
);

FriendList.propTypes = {
    friends: T.arrayOf(
        T.shape({
            avatar: T.string.isRequired,
            name: T.string.isRequired,
            isOnline: T.bool.isRequired,
            id: T.number.isRequired,
        })).isRequired,
};


export default FriendList;