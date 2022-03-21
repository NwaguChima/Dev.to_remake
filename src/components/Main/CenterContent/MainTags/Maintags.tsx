import styles from "./MainTags.module.scss";

const Maintags = () => {
  return (
    <div className={styles.main__btn}>
      <p className={styles.relevant}>Relevant</p>
      <p>Latest</p>
      <p>Top</p>
    </div>
  );
};

export default Maintags;
