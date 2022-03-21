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
    articleLink:
      "https://dev.to/#:~:text=Mar%2021-,Deploying%20IAC%20with%20your%20secrets%20in%20Terraform%20Vault,-%23",
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
  {
    image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--F2gqWxvD--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/826033/1964162f-2742-411a-a3b2-83910836362d.jpg",
    name: "William Olsen",
    date: "Mar 21",
    title: "Request Handler Design",
    articleLink:
      "https://dev.to/#:~:text=Mar%2021-,Request%20Handler%20Design,-%23",
    tags: [
      <a
        href="https://dev.to/#:~:text=Request%20Handler%20Design-,%23,csharp,-%23"
        className={styles.card__tags}
      >
        #csharp
      </a>,
      <a
        href="https://dev.to/#:~:text=csharp-,%23,api,-3%C2%A0reactions"
        className={styles.card__tags}
      >
        #api
      </a>,
    ],
    reactions: 3,
    readTime: 2,
  },
  {
    image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--3g_ARDPN--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/436206/a61fe71f-3578-400d-9ce3-f5ea22a74a07.jpg",
    name: "Abby",
    date: "Mar 21",
    title: "Embedded GUI Contest",
    articleLink:
      "https://dev.to/#:~:text=Mar%2021-,Embedded%20GUI%20Contest,-2%C2%A0reactions",
    tags: [],
    reactions: 2,
    readTime: 4,
  },
  {
    image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--MusjybkT--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/564649/c2302036-a38b-4b5f-9f85-acc3633904ea.jpg",
    name: "Aden Eilers",
    date: "Mar 21",
    title: "Linked List in JavaScript",
    articleLink:
      "https://dev.to/#:~:text=Mar%2021-,Linked%20List%20in%20JavaScript,-%23",
    tags: [
      <a
        href="https://dev.to/#:~:text=List%20in%20JavaScript-,%23,javascript,-%23"
        className={styles.card__tags}
      >
        #javascript
      </a>,
      <a href="https://dev.to/t/programming" className={styles.card__tags}>
        #programming
      </a>,
      <a href="https://dev.to/t/beginners" className={styles.card__tags}>
        #beginners
      </a>,
      <a href="https://dev.to/t/computerscience" className={styles.card__tags}>
        #computerscience
      </a>,
    ],
    reactions: 4,
    readTime: 2,
  },

  {
    image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--Qa4U8Zij--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/780579/d459c79e-aaf9-4b38-b679-08cfd15d7130.jpg",
    name: "Gülsen",
    date: "Mar 21",
    title: "Flutter copyWith Method 💫 🌌 ✨",
    articleLink:
      "https://dev.to/#:~:text=Mar%2020-,Flutter%20copyWith%20Method%20%F0%9F%92%AB%20%F0%9F%8C%8C%20%E2%9C%A8,-%23",
    tags: [
      <a
        href="https://dev.to/#:~:text=Flutter%20copyWith%20Method%20%F0%9F%92%AB%20%F0%9F%8C%8C%20%E2%9C%A8-,%23,flutter,-%23"
        className={styles.card__tags}
      >
        #flutter
      </a>,
      <a href="https://dev.to/t/dart" className={styles.card__tags}>
        #dart
      </a>,
      <a href="https://dev.to/t/copywith" className={styles.card__tags}>
        #copywith
      </a>,
      <a href="https://dev.to/t/freezed" className={styles.card__tags}>
        #freezed
      </a>,
    ],
    reactions: 8,
    readTime: 2,
  },

  {
    image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--1ITZqlzM--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/171957/911bed3a-ca30-4afc-b757-e8f85ee577b4.png",
    name: "Marko Rajević",
    date: "Mar 20",
    title: "Are you using useCallback properly 🤔",
    articleLink:
      "https://dev.to/#:~:text=Mar%2020-,Are%20you%20using%20useCallback%20properly%20%F0%9F%A4%94,-%23",
    tags: [
      <a
        href="https://dev.to/#:~:text=using%20useCallback%20properly%20%F0%9F%A4%94-,%23,javascript,-%23"
        className={styles.card__tags}
      >
        #javascript
      </a>,
      <a href="https://dev.to/t/react" className={styles.card__tags}>
        #react
      </a>,
      <a href="https://dev.to/t/performance" className={styles.card__tags}>
        #performance
      </a>,
    ],
    reactions: 3,
    readTime: 3,
  },

  {
    image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--OhZ4W5ZO--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/713616/c321b077-507c-4738-9271-387c6e55ae91.jpg",
    name: "Andrea Berardi",
    date: "Mar 20",
    title: "BEM, CSS Namespaces and ITCSS",
    articleLink:
      "https://dev.to/#:~:text=Mar%2021-,BEM%2C%20CSS%20Namespaces%20and%20ITCSS,-%23",
    tags: [
      <a href="https://dev.to/t/css" className={styles.card__tags}>
        #css
      </a>,
      <a href="https://dev.to/t/itcss" className={styles.card__tags}>
        #itcss
      </a>,
      <a href="https://dev.to/t/frontend" className={styles.card__tags}>
        #frontend
      </a>,
    ],
    reactions: 3,
    readTime: 3,
  },

  {
    image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--gUqXvHsm--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/788322/4e54a96c-c35b-46fa-a528-aea865f6fc29.png",
    name: "Dawson Codes",
    date: "Mar 20",
    title: "Take your GitHub profile to the next level with these easy steps",
    articleLink:
      "https://dev.to/#:~:text=Mar%2020-,Take%20your%20GitHub%20profile%20to%20the%20next%20level%20with%20these%20easy%20steps,-%23",
    tags: [
      <a
        href="https://dev.to/#:~:text=these%20easy%20steps-,%23,github,-%23"
        className={styles.card__tags}
      >
        #github
      </a>,
      <a href="https://dev.to/t/webdev" className={styles.card__tags}>
        #webdev
      </a>,
      <a href="https://dev.to/t/beginners" className={styles.card__tags}>
        #beginners
      </a>,
      <a href="https://dev.to/t/programming" className={styles.card__tags}>
        #programming
      </a>,
    ],
    reactions: 12,
    readTime: 1,
  },
  {
    image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--JRQz2v6s--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/349511/bb633a3a-649f-4897-9773-86a525c8fdc3.png",
    name: "Matteo Bruni",
    date: "Mar 20",
    title: "tsParticles 1.42.4 Released",
    articleLink:
      "https://dev.to/#:~:text=Mar%2020-,tsParticles%201.42.4%20Released,-%23",
    tags: [
      <a
        href="https://dev.to/#:~:text=tsParticles%201.42.4%20Released-,%23,showdev,-%23"
        className={styles.card__tags}
      >
        #showdev
      </a>,
      <a href="https://dev.to/t/webdev" className={styles.card__tags}>
        #webdev
      </a>,
      <a href="https://dev.to/t/javascript" className={styles.card__tags}>
        #javascript
      </a>,
      <a href="https://dev.to/t/typescript" className={styles.card__tags}>
        #typescript
      </a>,
    ],
    reactions: 10,
    readTime: 1,
  },

  {
    image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--9v4vlYSD--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/171901/df72b827-2b18-464c-a248-6a09503f8f21.jpg",
    name: "jsmanifest",
    date: "Mar 21",
    title:
      "11 JavaScript Examples to Source Code That Reveal Design Patterns In Use",
    articleLink:
      "https://dev.to/#:~:text=Mar%2021-,11%20JavaScript%20Examples%20to%20Source%20Code%20That%20Reveal%20Design%20Patterns%20In%20Use,-%23",
    tags: [
      <a
        href="https://dev.to/#:~:text=Patterns%20In%20Use-,%23,react,-%23"
        className={styles.card__tags}
      >
        #react
      </a>,
      <a href="https://dev.to/t/webdev" className={styles.card__tags}>
        #webdev
      </a>,
      <a href="https://dev.to/t/javascript" className={styles.card__tags}>
        #javascript
      </a>,
      <a href="https://dev.to/t/node" className={styles.card__tags}>
        #node
      </a>,
    ],
    reactions: 4,
    readTime: 7,
  },

  {
    image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--rDEO5iXc--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/704107/c5967cc2-b1a9-47e1-a052-6675877b5835.jpeg",
    name: "Bruno Norilla",
    date: "Mar 20",
    title: "Programmers need customer service skills",
    articleLink:
      "https://dev.to/#:~:text=Mar%2020-,Programmers%20need%20customer%20service%20skills,-%23",
    tags: [
      <a href="https://dev.to/t/discuss" className={styles.card__tags}>
        #discuss
      </a>,
      <a href="https://dev.to/t/watercooler" className={styles.card__tags}>
        #watercooler
      </a>,
      <a href="https://dev.to/t/productivity" className={styles.card__tags}>
        #productivity
      </a>,
      <a href="https://dev.to/t/startup" className={styles.card__tags}>
        #startup
      </a>,
    ],
    reactions: 7,
    readTime: 3,
  },

  {
    image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--VYFdpsQb--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/52085/fe8f6e29-a31d-4270-9c83-c0d460806337.jpg",
    name: "mighty_peach",
    date: "Mar 20",
    title: "Dependencies hell",
    articleLink: "https://dev.to/#:~:text=Mar%2020-,Dependencies%20hell,-%23",
    tags: [
      <a
        href="https://dev.to/#:~:text=Patterns%20In%20Use-,%23,react,-%23"
        className={styles.card__tags}
      >
        #react
      </a>,
      <a href="https://dev.to/t/webdev" className={styles.card__tags}>
        #webdev
      </a>,
      <a href="https://dev.to/t/javascript" className={styles.card__tags}>
        #javascript
      </a>,
      <a href="https://dev.to/t/node" className={styles.card__tags}>
        #node
      </a>,
    ],
    reactions: 4,
    readTime: 7,
  },
  {
    image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--4yToRGpG--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/595821/0a3ca102-8e65-498e-8f02-89820335dd7a.png",
    name: "Arnel Enero",
    date: "Mar 20",
    title: "Dependencies hell",
    articleLink: "https://dev.to/#:~:text=Mar%2020-,Dependencies%20hell,-%23",
    tags: [
      <a
        href="https://dev.to/#:~:text=Patterns%20In%20Use-,%23,react,-%23"
        className={styles.card__tags}
      >
        #react
      </a>,
      <a href="https://dev.to/t/webdev" className={styles.card__tags}>
        #webdev
      </a>,
      <a href="https://dev.to/t/javascript" className={styles.card__tags}>
        #javascript
      </a>,
      <a href="https://dev.to/t/node" className={styles.card__tags}>
        #node
      </a>,
    ],
    reactions: 2,
    readTime: 6,
  },

  {
    image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--rDEO5iXc--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/704107/c5967cc2-b1a9-47e1-a052-6675877b5835.jpeg",
    name: "Ahmed Gouda",
    date: "Mar 20",
    title: "The Rust Programming Language",
    articleLink:
      "https://dev.to/#:~:text=Mar%2020-,The%20Rust%20Programming%20Language,-%23",
    tags: [
      <a href="https://dev.to/t/rust" className={styles.card__tags}>
        #rust
      </a>,
      <a href="https://dev.to/t/programming" className={styles.card__tags}>
        #programming
      </a>,
      <a href="https://dev.to/t/tutorials" className={styles.card__tags}>
        #tutorials
      </a>,
      <a href="https://dev.to/t/beginner" className={styles.card__tags}>
        #beginner
      </a>,
    ],
    reactions: 3,
    readTime: 3,
  },

  {
    image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--BzqlynPa--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/271838/95e313ca-39fc-4ee6-bf57-ad52b4dcf0d2.png",
    name: "Waylon Walker",
    date: "Mar 20",
    title: "How I read Files in Python",
    articleLink:
      "https://dev.to/#:~:text=Mar%2020-,How%20I%20read%20Files%20in%20Python,-%23",
    tags: [
      <a href="https://dev.to/t/python" className={styles.card__tags}>
        #python
      </a>,
    ],
    reactions: 4,
    readTime: 1,
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
              <a href={el.articleLink}>
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
