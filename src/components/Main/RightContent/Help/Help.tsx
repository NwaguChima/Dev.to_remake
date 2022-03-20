import React from "react";
import { help } from "../../../../Data/data";
import styles from "./Help.module.scss";

const Help = () => {
  return (
    <div className={styles.help__container}>
      <a href="https://dev.to/#:~:text=Create%20a%20Listing-,%23help,-AlmaLinux%20Mailing%20Lists">
        <h3 className={styles.listings__header}>#Help</h3>
      </a>
      <ul className={styles.listings__list}>
        {help.map((el) => (
          <a href={el.link}>
            <li className={styles.job__list}>
              <p>{el.title}</p>
              <span className={el.new ? styles.new : ""}>
                {el.new ? "new" : "5 comments"}
              </span>
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default Help;
