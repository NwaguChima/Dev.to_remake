import React, { useContext } from "react";
import CenterContent from "./CenterContent/CenterContent";
import LeftContent from "./LeftContent/LeftContent";
import RightContent from "./RightContent/RightContent";
import styles from "./Main.module.scss";
import MobileSidebar from "./MobileSidebar/MobileSidebar";
import ViewContext from "../../context/ViewContext";
import Overlay from "./CenterContent/Overlay/Overlay";

const Main = () => {
  const scroll = useContext(ViewContext);
  return (
    <main
      className={`${styles.main__container} ${
        scroll?.mobileView ? styles.stopScroll : ""
      }`}
    >
      <MobileSidebar />
      <LeftContent />
      {scroll?.mobileView && <Overlay />}
      <CenterContent />
      <RightContent />
    </main>
  );
};

export default Main;
