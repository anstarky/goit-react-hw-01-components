import React from 'react';
import T from 'prop-types';

import styles from './Profile.module.css';

const Profile = ({ user: { avatar, name, tag, location, stats: { followers, views, likes } } }) => (
    <section className={styles.section}>
        <div className={styles.description}>
            <img src={avatar} alt="user avatar" className={styles.avatar} />
            <p className={styles.name}>{name}</p>
            <p className={styles.tag}>@{tag}</p>
            <p className={styles.location}>{location}</p>
        </div>

        <ul className={styles.stats}>
            <li className={styles.stats__item}>
                <span className={styles.label}>Followers</span>
                <span className={styles.quantity}>{followers}</span>
            </li>
            <li className={styles.stats__item}>
                <span className={styles.label}>Views</span>
                <span className={styles.quantity}>{views}</span>
            </li>
            <li className={styles.stats__item}>
                <span className={styles.label}>Likes</span>
                <span className={styles.quantity}>{likes}</span>
            </li>
        </ul>
    </section>
);

Profile.propTypes = {
    user: T.exact({
        avatar: T.string.isRequired,
        name: T.string.isRequired,
        tag: T.string.isRequired,
        location: T.string.isRequired,
        stats: T.exact({
            followers: T.number.isRequired,
            views: T.number.isRequired,
            likes: T.number.isRequired,
        }).isRequired,
    }).isRequired,
};

export default Profile;
