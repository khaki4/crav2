import React, { Component } from 'react';
import { ReactComponent as Logo } from './logo.svg';
import styles from './App.module.scss';

class App extends Component {
  render() {
    return (
      <>
        <div className={styles.app}>
          <header className={styles.appHeader}>
            <Logo className={styles.appLogo} />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className={styles.appLink}
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </>
    );
  }
}

export default App;
