import React from "react";

import styles from "./index.module.scss";

export default function App({ children }) {
  return (
    <div className={styles.home}>
      <h2>App</h2>
      {children}
    </div>
  );
}
