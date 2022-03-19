import React from "react";
import logo from "../../assets/Logo.png";
import { BsSearch, BsList } from "react-icons/bs";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header>
      <div className={styles.logo__search}>
        <i className={styles.open_sidebar}>
          <BsList />
        </i>
        <a href="https://dev.to/">
          <img src={logo} alt="logo" className={styles.logo} />
        </a>
        <div className={styles.search}>
          <input type="search" name="search" placeholder="Search..." />
          <i className={styles.search__icon}>
            <BsSearch />
          </i>
        </div>
      </div>
      <nav className={styles.auth}>
        <a href="https://dev.to/enter" className={styles.login}>
          Log in
        </a>
        <a href="https://dev.to/enter?state=new-user" className={styles.signup}>
          Create account
        </a>
      </nav>
    </header>
  );
};

export default Header;
