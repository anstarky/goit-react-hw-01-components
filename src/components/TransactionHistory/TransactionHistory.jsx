import React from 'react';
import T from 'prop-types';

import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => (
    <section className={styles.section}>
        <table className={styles.transaction__history}>
            <thead className={styles.thead}>
                <tr>
                    <th className={styles.th}>Type</th>
                    <th className={styles.th}>Amount</th>
                    <th className={styles.th}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(item => (
                    <tr key={item.id} className={styles.tr}>
                        <td className={styles.td}>{item.type.charAt(0).toUpperCase() + item.type.substr(1)}</td>
                        <td className={styles.td}>{item.amount}</td>
                        <td className={styles.td}>{item.currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </section>
);

TransactionHistory.propTypes = {
    items: T.arrayOf(
        T.shape({
            id: T.string.isRequired,
            type: T.string.isRequired,
            amount: T.string.isRequired,
            currency: T.string.isRequired,
        })).isRequired,
};


export default TransactionHistory;
