import React from "react";
import { BsTwitter, BsFacebook, BsGithub, BsTwitch } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import styles from "./SocialIcons.module.scss";
import NavStyle from "../SideNav/SideNav.module.scss";

const SocialIcons = () => {
  return (
    <div className={styles.social__container}>
      <ul className={NavStyle.nav__list}>
        <li className={NavStyle.list_item}>
          <a
            href="https://twitter.com/thepracticaldev"
            className={NavStyle.item_link}
          >
            <i className={`${NavStyle.item_i} ${styles.yellowI}`}>
              <BsTwitter />
            </i>
          </a>
        </li>
        <li className={NavStyle.list_item}>
          <a
            href="https://www.facebook.com/thepracticaldev"
            className={NavStyle.item_link}
          >
            <i className={`${NavStyle.item_i} ${styles.yellowI}`}>
              <BsFacebook />
            </i>
          </a>
        </li>
        <li className={NavStyle.list_item}>
          <a
            href="https://github.com/thepracticaldev"
            className={NavStyle.item_link}
          >
            <i className={NavStyle.item_i}>
              <BsGithub />
            </i>
          </a>
        </li>
        <li className={NavStyle.list_item}>
          <a
            href="instagram.com/thepracticaldev/"
            className={NavStyle.item_link}
          >
            <i className={NavStyle.item_i}>
              <AiFillInstagram />
            </i>
          </a>
        </li>
        <li className={NavStyle.list_item}>
          <a
            href="https://www.twitch.tv/thepracticaldev"
            className={NavStyle.item_link}
          >
            <i className={NavStyle.item_i}>
              <BsTwitch />
            </i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialIcons;
