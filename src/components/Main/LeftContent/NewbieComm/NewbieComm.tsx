import newbieLogo from "../../../../assets/communityLogo.png";
import styles from "./NewbieComm.module.scss";

const NewbieComm = () => {
  return (
    <div className={styles.newbie__card}>
      <a href="https://community.codenewbie.org/enter">
        <img src={newbieLogo} alt="Newbie community logo" />
      </a>
      <div className={styles.newbie__body}>
        <h3>Calling all early-career developers & coding mentors!</h3>
        <p>
          Join CodeNewbie Community: a supportive space for coding newbies to
          connect & express themeselves.{" "}
          <a href="https://community.codenewbie.org/enter">
            Get in on the fun!
          </a>
        </p>
      </div>
    </div>
  );
};

export default NewbieComm;
