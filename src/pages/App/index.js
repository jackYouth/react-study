import React from 'react';
import {Link} from 'react-router-dom';

import styles from './index.module.scss';

fetch('/api/account/gettopaccountinfo')
  .then(res => res.json())
  .then(res => console.log(res));

export default function App({children}) {
  return (
    <div className={styles.app}>
      <h2>App</h2>
      {children}
      <div className={styles.app__footer}>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </div>
  );
}
