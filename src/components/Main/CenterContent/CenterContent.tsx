import React from "react";
import styles from "./CenterContent.module.scss";
import MainCard from "./MainCard/MainCard";
import Maintags from "./MainTags/Maintags";

const CenterContent = () => {
  return (
    <section className={styles.center__container}>
      <Maintags />
      <MainCard />
    </section>
  );
};

export default CenterContent;
