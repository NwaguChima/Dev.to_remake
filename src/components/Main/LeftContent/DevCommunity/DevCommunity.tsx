import styles from "./DevCommunity.module.scss";

const DevCommunity = () => {
  return (
    <div className={styles.community__container}>
      <h3 className={styles.community_header}>
        <span className={styles.sub_header}>DEV Community </span>
        is a community of 819,628 amazing developers
      </h3>

      <p className={styles.dev_comm__text}>
        We're a place where coders share, stay up-to-date and grow their
        careers.
      </p>
      <div className={`${styles.auth} ${styles.dev_auth}`}>
        <a href="https://dev.to/enter?state=new-user" className={styles.signup}>
          Create account
        </a>
        <a href="https://dev.to/enter" className={styles.login}>
          Log in
        </a>
      </div>
    </div>
  );
};

export default DevCommunity;
