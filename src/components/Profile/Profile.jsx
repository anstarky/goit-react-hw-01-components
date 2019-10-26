import React from 'react';
import T from 'prop-types';

import styles from './Profile.module.css';

const Profile = ({ user }) => (
    <section className={styles.section}>
        <div className={styles.description}>
            <img src={user.avatar} alt="user avatar" className={styles.avatar} />
            <p className={styles.name}>{user.name}</p>
            <p className={styles.tag}>@{user.tag}</p>
            <p className={styles.location}>{user.location}</p>
        </div>

        <ul className={styles.stats}>
            <li className={styles.stats__item}>
                <span className={styles.label}>Followers</span>
                <span className={styles.quantity}>{user.stats.followers}</span>
            </li>
            <li className={styles.stats__item}>
                <span className={styles.label}>Views</span>
                <span className={styles.quantity}>{user.stats.views}</span>
            </li>
            <li className={styles.stats__item}>
                <span className={styles.label}>Likes</span>
                <span className={styles.quantity}>{user.stats.likes}</span>
            </li>
        </ul>
    </section>

    /* <ul className="stats">
        {Object.keys(user.stats).map((item, index) => (
        <li>
            <span className="label">{item.charAt(0).toUpperCase()+ item.substr(1)}</span>
            <span className="quantity">{Object.values(user.stats)[index]}</span>
        </li>
        ))
    }
    </ul> */

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
