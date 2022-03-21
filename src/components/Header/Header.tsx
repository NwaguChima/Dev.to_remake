import { useContext } from "react";
import logo from "../../assets/Logo.png";
import { BsSearch, BsList } from "react-icons/bs";
import styles from "./Header.module.scss";
import ViewContext from "../../context/ViewContext";

const Header = () => {
  const mobileContext = useContext(ViewContext);

  return (
    <header>
      <div className={styles.logo__search}>
        <i
          className={styles.open_sidebar}
          onClick={() => mobileContext?.setMobileView(true)}
        >
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
        <i className={styles.mobile__search}>
          <BsSearch />
        </i>
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
