import React from "react";
import {
  BsHandThumbsUpFill,
  BsEmojiSmileFill,
  BsEyeglasses,
} from "react-icons/bs";
import styles from "./Other.module.scss";
import NavStyle from "../SideNav/SideNav.module.scss";

const Other = () => {
  return (
    <div className={styles.other__container}>
      <h3 className={styles.other_header}>Other</h3>
      <ul className={NavStyle.nav__list}>
        <li className={NavStyle.list_item}>
          <a
            href="https://dev.to/code-of-conduct"
            className={NavStyle.item_link}
          >
            <i className={`${NavStyle.item_i} ${styles.yellowI}`}>
              <BsHandThumbsUpFill />
            </i>
            <p className={NavStyle.item_T}>Code of Conduct</p>
          </a>
        </li>
        <li className={NavStyle.list_item}>
          <a href="https://dev.to/privacy" className={NavStyle.item_link}>
            <i className={`${NavStyle.item_i} ${styles.yellowI}`}>
              <BsEmojiSmileFill />
            </i>
            <p className={NavStyle.item_T}>Privacy Policy</p>
          </a>
        </li>
        <li className={NavStyle.list_item}>
          <a href="https://dev.to/terms" className={NavStyle.item_link}>
            <i className={NavStyle.item_i}>
              <BsEyeglasses />
            </i>
            <p className={NavStyle.item_T}>Terms of use</p>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Other;
