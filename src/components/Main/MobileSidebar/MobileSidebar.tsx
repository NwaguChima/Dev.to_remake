import { useContext } from "react";
import { IoClose } from "react-icons/io5";
import ViewContext from "../../../context/ViewContext";
import DevCommunity from "../LeftContent/DevCommunity/DevCommunity";
import Other from "../LeftContent/Other/Other";
import SideNav from "../LeftContent/SideNav/SideNav";
import SocialIcons from "../LeftContent/SocialIcons/SocialIcons";
import styles from "./MobileSidebar.module.scss";

const MobileSidebar = () => {
  const mobileContext = useContext(ViewContext);

  return (
    <div
      className={`${styles.mobile__side} ${
        mobileContext?.mobileView ? styles.moveIn : styles.moveOut
      }`}
    >
      <div className={styles.mobile__header}>
        <h3>DEV Community</h3>
        <i onClick={() => mobileContext?.setMobileView(false)}>
          <IoClose />
        </i>
      </div>
      <DevCommunity />
      <SideNav />
      <Other />
      <SocialIcons />
    </div>
  );
};

export default MobileSidebar;
