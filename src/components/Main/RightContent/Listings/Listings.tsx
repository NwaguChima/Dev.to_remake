import React from "react";
import styles from "./Listings.module.scss";

let listings = [
  {
    title:
      "High paying remote software developer jobs! Senior + Expirienced Devs Wanted! Top Jobs! Revolutionary platform",
    link: "https://dev.to/#:~:text=High%20paying%20remote,misc",
    type: "misc",
  },
  {
    title: "Senior React Native Developer - Remote",
    link: "https://dev.to/#:~:text=Senior%20React%20Native,jobs",
    type: "jobs",
  },
  {
    title: "Senior Go Developer - Remote",
    link: "https://dev.to/#:~:text=Senior%20Go%20Developer,jobs",
    type: "jobs",
  },
  {
    title: "Senior Blockchain Developer - Remote",
    link: "https://dev.to/listings/jobs/senior-blochkchain-developer-remote-15da",
    type: "jobs",
  },
  {
    title: "Senior Node.js Developer - Remote",
    link: "https://dev.to/#:~:text=Senior%20React%20Developer,jobs",
    type: "jobs",
  },
  {
    title: "Senior React + Typescript Developer - Remote",
    link: "https://dev.to/#:~:text=Senior%20React%20Developer,jobs",
    type: "jobs",
  },
];

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
        {listings.map((el) => (
          <a href={el.link}>
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
