import React from 'react';
import T from 'prop-types';

import styles from './Stats.module.css';

const Stats = ({ title, stats }) => (
    < section className={styles.section} >

        {title && <h2 className={styles.title}>{title}</h2>}

        <ul className={styles.stat__list}>
            {stats.map(item => (
                <li key={item.id} className={styles.item}>
                    <span className={styles.label}>{item.label}</span>
                    <span className={styles.percentage}>{item.percentage}%</span>
                </li>
            ))}
        </ul>
    </section >
);

Stats.defaultProps = {
    title: '',
};

Stats.propTypes = {
    title: T.string,
    stats: T.arrayOf(
        T.shape({
            id: T.string.isRequired,
            label: T.string.isRequired,
            percentage: T.number.isRequired,
        }),
    ).isRequired,
};


export default Stats;
