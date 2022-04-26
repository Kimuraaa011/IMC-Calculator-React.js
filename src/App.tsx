import React from 'react';
import logo from './logo.svg';
import styles from './App.module.css';
import { Header } from './components/Header/header';
import { Main } from './components/Main/main';


function App() {
  return (
    <div className={styles.main}>
      <Header />
      <Main />
    </div>
  );
}

export default App;
