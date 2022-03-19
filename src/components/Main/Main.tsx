import React from "react";
import CenterContent from "./CenterContent/CenterContent";
import LeftContent from "./LeftContent/LeftContent";
import RightContent from "./RightContent/RightContent";
import styles from "./Main.module.scss";

const Main = () => {
  return (
    <main className={styles.main__container}>
      <LeftContent />
      <CenterContent />
      <RightContent />
    </main>
  );
};

export default Main;
