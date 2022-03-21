import logo from "../../../../assets/Logo.png";
import styles from "./Extra.module.scss";

const Extra = () => {
  return (
    <div className={styles.extra__Container}>
      <a href="https://dev.to/">
        <img src={logo} alt="logo" className={styles.logo} />
      </a>
      <div className={styles.extra__info}>
        <h2>
          <span>DEV Community</span> is a community of 819,540 amazing
          developers
        </h2>
        <p>
          We're a place where coders share, stay up-to-date and grow their
          careers.
        </p>
        <div className={styles.auth}>
          <a
            href="https://dev.to/enter?state=new-user"
            className={styles.signup}
          >
            Create account
          </a>
          <a href="https://dev.to/enter" className={styles.login}>
            Log in
          </a>
        </div>
      </div>
    </div>
  );
};

export default Extra;
