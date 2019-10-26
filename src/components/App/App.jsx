import React from 'react';

import styles from './App.module.css';

import Profile from '../Profile';
import user from '../db/user.json';

import Stats from '../Stats';
import stats from '../db/stats.json'

import FriendList from '../FriendList'
import friends from '../db/friends.json'

import TransactionHistory from '../TransactionHistory'
import transactions from '../db/transactions.json'

const App = () => (
    <div className={styles.wrap}>
        <Profile user={user} />
        <Stats title="Upload stats" stats={stats.stats} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
    </div>
);

export default App;
