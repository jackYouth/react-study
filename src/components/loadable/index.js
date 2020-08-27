import React from 'react';
import loadable from 'react-loadable';

import styles from './index.module.scss';

//通用的过场组件
const LoadingComponent = () => {
  return <div className={styles.loadingComponent}>loading...</div>;
};

//过场组件默认采用通用的，若传入了loading，则采用传入的过场组件
export default (loader, Loading = LoadingComponent) => {
  return loadable({
    loader,
    loading: Loading,
  });
};
