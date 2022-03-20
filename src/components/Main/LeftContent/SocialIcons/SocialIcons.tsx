import { BsTwitter, BsFacebook, BsGithub, BsTwitch } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import styles from "./SocialIcons.module.scss";
import NavStyle from "../SideNav/SideNav.module.scss";

const SocialIcons = () => {
  return (
    <div className={styles.social__container}>
      <ul className={styles.nav__list}>
        <li className={NavStyle.list_item}>
          <a
            href="https://twitter.com/thepracticaldev"
            target="_blank"
            rel="noreferrer"
            className={NavStyle.item_link}
          >
            <i className={`${NavStyle.item_i} ${styles.colorIcon}`}>
              <BsTwitter />
            </i>
          </a>
        </li>
        <li className={NavStyle.list_item}>
          <a
            href="https://www.facebook.com/thepracticaldev"
            target="_blank"
            rel="noreferrer"
            className={NavStyle.item_link}
          >
            <i className={`${NavStyle.item_i} ${styles.colorIcon}`}>
              <BsFacebook />
            </i>
          </a>
        </li>
        <li className={NavStyle.list_item}>
          <a
            href="https://github.com/thepracticaldev"
            target="_blank"
            rel="noreferrer"
            className={NavStyle.item_link}
          >
            <i className={`${NavStyle.item_i} ${styles.colorIcon}`}>
              <BsGithub />
            </i>
          </a>
        </li>
        <li className={NavStyle.list_item}>
          <a
            href="instagram.com/thepracticaldev/"
            target="_blank"
            rel="noreferrer"
            className={NavStyle.item_link}
          >
            <i className={`${NavStyle.item_i} ${styles.colorIcon}`}>
              <AiFillInstagram />
            </i>
          </a>
        </li>
        <li className={NavStyle.list_item}>
          <a
            href="https://www.twitch.tv/thepracticaldev"
            target="_blank"
            rel="noreferrer"
            className={NavStyle.item_link}
          >
            <i className={`${NavStyle.item_i} ${styles.colorIcon}`}>
              <BsTwitch />
            </i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialIcons;
