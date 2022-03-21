import { queries } from "../../../../Data/data";
import styles from "./RecentQuery.module.scss";

const RecentQuery = () => {
  return (
    <div className={styles.query__container}>
      <h3 className={styles.query__header}>recently queried</h3>
      <ul className={styles.query__list}>
        {queries.map((el) => (
          <a href={el.linK} key={el.linK}>
            <li className={styles.query}>
              <p>{el.title}</p>
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default RecentQuery;
