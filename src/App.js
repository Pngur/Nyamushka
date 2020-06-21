import React from 'react';
import styles from './App.scss';

import Food from './components/Food';

const App = props => {
  return (
    <div className={styles.App}>
      <Food/>
    </div>
  );
}

export default App;
