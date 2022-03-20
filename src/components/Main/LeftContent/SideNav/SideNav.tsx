import React from "react";
import { FcHome } from "react-icons/fc";
import { RiFileList3Fill } from "react-icons/ri";
import { FaMicrophoneAlt, FaShopify } from "react-icons/fa";
import {
  BsFillCameraReelsFill,
  BsFillSuitHeartFill,
  BsFillTagsFill,
} from "react-icons/bs";
import { FcIdea, FcAbout, FcContacts } from "react-icons/fc";
import styles from "./SideNav.module.scss";

const SideNav = () => {
  return (
    <nav className={styles.side__nav}>
      <ul className={styles.nav__list}>
        <li className={styles.list_item}>
          <a href="https://dev.to/" className={styles.item_link}>
            <i className={styles.item_i}>
              <FcHome />
            </i>
            <p className={styles.item_T}>Home</p>
          </a>
        </li>
        <li className={styles.list_item}>
          <a href="https://dev.to/listings" className={styles.item_link}>
            <i className={`${styles.item_i} ${styles.tags}`}>
              <RiFileList3Fill />
            </i>
            <p className={styles.item_T}>Listings</p>
          </a>
        </li>
        <li className={styles.list_item}>
          <a href="https://dev.to/pod" className={styles.item_link}>
            <i className={styles.item_i}>
              <FaMicrophoneAlt />
            </i>
            <p className={styles.item_T}>Podcasts</p>
          </a>
        </li>
        <li className={styles.list_item}>
          <a href="https://dev.to/videos" className={styles.item_link}>
            <i className={styles.item_i}>
              <BsFillCameraReelsFill />
            </i>
            <p className={styles.item_T}>Videos</p>
          </a>
        </li>
        <li className={styles.list_item}>
          <a href="https://dev.to/tags" className={styles.item_link}>
            <i className={`${styles.item_i} ${styles.tags}`}>
              <BsFillTagsFill />
            </i>
            <p className={styles.item_T}>Tags</p>
          </a>
        </li>
        <li className={styles.list_item}>
          <a href="https://dev.to/faq" className={styles.item_link}>
            <i className={styles.item_i}>
              <FcIdea />
            </i>
            <p className={styles.item_T}>FAQ</p>
          </a>
        </li>
        <li className={styles.list_item}>
          <a href="https://shop.forem.com/" className={styles.item_link}>
            <i className={`${styles.item_i} ${styles.shopify}`}>
              <FaShopify />
            </i>
            <p className={styles.item_T}>Forem Shop</p>
          </a>
        </li>
        <li className={styles.list_item}>
          <a href="https://dev.to/sponsorships" className={styles.item_link}>
            <i className={`${styles.item_i} ${styles.sponsors}`}>
              <BsFillSuitHeartFill />
            </i>
            <p className={styles.item_T}>Sponsors</p>
          </a>
        </li>
        <li className={styles.list_item}>
          <a href="https://dev.to/about" className={styles.item_link}>
            <i className={styles.item_i}>
              <FcAbout />
            </i>
            <p className={styles.item_T}>About</p>
          </a>
        </li>
        <li className={styles.list_item}>
          <a href="https://dev.to/contact" className={styles.item_link}>
            <i className={styles.item_i}>
              <FcContacts />
            </i>
            <p className={styles.item_T}>Contact</p>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SideNav;
