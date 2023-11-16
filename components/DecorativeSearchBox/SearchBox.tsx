import React from 'react';
import styles from './SearchBox.module.css';
import Poick from'./poisk.svg';

const DecorativeSearchBox = () => {
  return (
    <div className={styles.searchBox}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Поиск на сайте"
      />
      <button className={styles.searchButton}>
        <span role="img" aria-label="Search Icon">
          <Poick/>
        </span>
      </button>
    </div>
  );
};

export default DecorativeSearchBox;