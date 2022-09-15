import styles from "./styles.module.scss";
import React from "react";
import { FaSearch } from "react-icons/fa";

export default function Searchbar() {
  return <nav className={styles.navbar}>
    <div className={styles.searchBar}>
      <form className={styles.query}>
        <input
          type="text"
          className={styles.queryContainer}
          name="query"
          placeholder="Start typing to search..."
          spellCheck="false"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
        />
        <button className={styles.searchButton} type="submit">
          <FaSearch />
        </button>
      </form>
      <div className={styles.suggestions}></div>
    </div>
  </nav>
}