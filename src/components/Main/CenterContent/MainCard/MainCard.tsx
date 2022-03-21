import { BsChatDots } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import styles from "./MainCard.module.scss";

const cards = [
  {
    image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--qvf1N_CA--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/637154/7d9934db-d79f-46e2-b156-a473c34506f7.jpg",
    name: "Anuvindh Sankaravilasam",
    date: "Mar 21",
    title: "Deploying IAC with your secrets in Terraform Vault",
    tags: [
      <a
        href="https://dev.to/#:~:text=in%20Terraform%20Vault-,%23,tutorial,-%23"
        className={styles.card__tags}
      >
        #tutorial
      </a>,
      <a href="https://dev.to/t/cloud" className={styles.card__tags}>
        #cloud
      </a>,
      <a href="wwwhttps://dev.to/t/security" className={styles.card__tags}>
        #security
      </a>,
      <a href="https://dev.to/t/devops" className={styles.card__tags}>
        #devops
      </a>,
    ],
    reactions: 4,
    readTime: 3,
  },
];

const MainCard = () => {
  return (
    <div className={styles.card__container_main}>
      {cards.map((el) => {
        return (
          <div className={styles.main__card}>
            <div className={styles.personal__info}>
              <img src={el.image} alt={`Profile of ${el.name}`} />
              <div className={styles.name_time}>
                <h4>{el.name}</h4>
                <p>{el.date}</p>
              </div>
            </div>
            <div className={styles.other__info}>
              <a href="wwwwww">
                <h2>{el.title}</h2>
              </a>
              <div className={styles.tags}>{el.tags}</div>
              <div className={styles.reaction__comments__save}>
                <div className={styles.reaction__comme}>
                  <a href="www" className={styles.reaction}>
                    <i>
                      <FaRegHeart />
                    </i>
                    <p>{el.reactions} reactions</p>
                  </a>
                  <a href="www" className={styles.comment}>
                    <i>
                      <BsChatDots />
                    </i>
                    <p>Add Comment</p>
                  </a>
                </div>
                <div className={styles.save__minread}>
                  <p>{el.readTime} min read</p>
                  <span>Save</span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
      {/* <div className={styles.main__card}>
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
      </div> */}
    </div>
  );
};

export default MainCard;
