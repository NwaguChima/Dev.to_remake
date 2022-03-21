import React from "react";
import { listings } from "../../../../Data/data";
import styles from "./Listings.module.scss";

const Listings = () => {
  return (
    <div className={styles.listings__container}>
      <div className={styles.listings__head}>
        <h3 className={styles.listings__header}>Listings</h3>
        <a className={styles.listing_see__all} href="https://dev.to/listings">
          See all
        </a>
      </div>
      <ul className={styles.listings__list}>
        {listings.map((el, i) => (
          <a href={el.link} key={el.link + i}>
            <li className={styles.job__list}>
              <p>{el.title}</p>
              <span>{el.type}</span>
            </li>
          </a>
        ))}
      </ul>
      <a
        className={styles.create_new}
        href="https://dev.to/#:~:text=jobs-,Create%20a%20Listing,-%23help"
      >
        Create a Listing
      </a>
    </div>
  );
};

export default Listings;
