import React from "react";
import DevCommunity from "./DevCommunity/DevCommunity";
import SideNav from "./SideNav/SideNav";
import styles from "./LeftContent.module.scss";
import Other from "./Other/Other";
import SocialIcons from "./SocialIcons/SocialIcons";
import PopularTags from "./PopularTags/PopularTags";
import NewbieComm from "./NewbieComm/NewbieComm";
import ForemShop from "./ForemShop/ForemShop";

const LeftContent = () => {
  return (
    <aside className={styles.left__container}>
      <DevCommunity />
      <SideNav />
      <Other />
      <SocialIcons />
      <PopularTags />
      <NewbieComm />
      <ForemShop />
    </aside>
  );
};

export default LeftContent;
