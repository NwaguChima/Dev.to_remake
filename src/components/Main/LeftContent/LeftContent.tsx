import React from "react";
import DevCommunity from "./DevCommunity/DevCommunity";
import SideNav from "./SideNav/SideNav";
import styles from "./LeftContent.module.scss";
import Other from "./Other/Other";

const LeftContent = () => {
  return (
    <aside className={styles.left__container}>
      <DevCommunity />
      <SideNav />
      <Other />
    </aside>
  );
};

export default LeftContent;
