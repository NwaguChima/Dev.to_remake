import React from "react";
import forumshopLogo from "../../../../assets/foremLogo.png";
import styles from "./ForemShop.module.scss";

const ForemShop = () => {
  return (
    <div className={styles.forum_shop__card}>
      <a href="https://shop.forem.com/">
        <img src={forumshopLogo} alt="Forum shop logo" />
      </a>
      <div className={styles.newbie__body}>
        <h3>The Forem Shop is Here!</h3>
        <a href="https://shop.forem.com/">{`${`>> Get in on the fun!`}`}</a>
      </div>
    </div>
  );
};

export default ForemShop;
