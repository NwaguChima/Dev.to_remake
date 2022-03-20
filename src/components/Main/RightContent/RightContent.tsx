import React from "react";
import Deepgram from "./Deepgram/Deepgram";
import Listings from "./Listings/Listings";
import styles from "./RightContent.module.scss";

const RightContent = () => {
  return (
    <aside className={styles.right__container}>
      <Deepgram />
      <Listings />
    </aside>
  );
};

export default RightContent;
