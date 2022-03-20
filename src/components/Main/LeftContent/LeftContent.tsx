import React from "react";
import DevCommunity from "./DevCommunity/DevCommunity";
import styles from "./LeftContent.module.scss";

const LeftContent = () => {
  return (
    <aside className={styles.left__container}>
      <DevCommunity />
    </aside>
  );
};

export default LeftContent;
