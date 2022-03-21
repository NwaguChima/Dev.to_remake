import { BsChatDots } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import styles from "./MainCard.module.scss";

const MainCard = () => {
  return (
    <div className={styles.main__card}>
      <div className={styles.personal__info}>
        <img
          src="https://img.freepik.com/free-photo/pleasant-looking-serious-man-stands-profile-has-confident-expression-wears-casual-white-t-shirt_273609-16959.jpg?size=626&ext=jpg"
          alt="profile of persons name"
        />
        <div className={styles.name_time}>
          <h4>Florian Wirtz</h4>
          <p>Mar 20</p>
        </div>
      </div>
      <div className={styles.other__info}>
        <a href="wwwwww">
          <h2>tsParticles 1.42.4 Released</h2>
        </a>
        <div className={styles.tags}>
          <a href="www" className={styles.card__tags}>
            #javascript
          </a>
          <a href="www" className={styles.card__tags}>
            #oop
          </a>
          <a href="www" className={styles.card__tags}>
            #functional
          </a>
        </div>
        <div className={styles.reaction__comments__save}>
          <div className={styles.reaction__comme}>
            <a href="www" className={styles.reaction}>
              <i>
                <FaRegHeart />
              </i>
              <p>2 reactions</p>
            </a>
            <a href="www" className={styles.comment}>
              <i>
                <BsChatDots />
              </i>
              <p>Add Comment</p>
            </a>
          </div>
          <div className={styles.save__minread}>
            <p>2 min read</p>
            <span>Save</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
