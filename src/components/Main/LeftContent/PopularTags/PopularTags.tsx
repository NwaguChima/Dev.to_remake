import { tags } from "../../../../Data/data";
import styles from "./PopularTags.module.scss";

const PopularTags = () => {
  return (
    <div className={styles.popular_tags__container}>
      <h3 className={styles.tags__header}>Popular Tags</h3>
      <div className={styles.tags__list}>
        <ul>
          {tags.map((el, i) => (
            <li key={el + i}>{`#${el}`}</li>
          ))}
          {/* <li>#javascript</li> */}
        </ul>
      </div>
    </div>
  );
};

export default PopularTags;
