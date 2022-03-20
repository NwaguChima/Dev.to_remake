import React from "react";
import Deepgram from "./Deepgram/Deepgram";
import Help from "./Help/Help";
import Listings from "./Listings/Listings";
import RecentQuery from "./RecentQuery/RecentQuery";
import styles from "./RightContent.module.scss";

const RightContent = () => {
  return (
    <aside className={styles.right__container}>
      <Deepgram />
      <Listings />
      <Help />
      <RecentQuery />
    </aside>
  );
};

export default RightContent;
