import React from "react";
import Deepgram from "./Deepgram/Deepgram";
import Help from "./Help/Help";
import Listings from "./Listings/Listings";
import styles from "./RightContent.module.scss";

const RightContent = () => {
  return (
    <aside className={styles.right__container}>
      <Deepgram />
      <Listings />
      <Help />
    </aside>
  );
};

export default RightContent;
