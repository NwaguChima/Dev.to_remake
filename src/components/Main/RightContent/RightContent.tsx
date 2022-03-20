import React from "react";
import Deepgram from "./Deepgram/Deepgram";
import styles from "./RightContent.module.scss";

const RightContent = () => {
  return (
    <aside className={styles.right__container}>
      <Deepgram />
    </aside>
  );
};

export default RightContent;
