import { BsChatDots } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import Extra from "../Extra/Extra";
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
        key={1}
      >
        #tutorial
      </a>,
      <a href="https://dev.to/t/cloud" className={styles.card__tags} key={2}>
        #cloud
      </a>,
      <a
        href="wwwhttps://dev.to/t/security"
        className={styles.card__tags}
        key={3}
      >
        #security
      </a>,
      <a href="https://dev.to/t/devops" className={styles.card__tags} key={4}>
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
        key={5}
      >
        #csharp
      </a>,
      <a
        href="https://dev.to/#:~:text=csharp-,%23,api,-3%C2%A0reactions"
        className={styles.card__tags}
        key={6}
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
    // tags: [],
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
        key={7}
      >
        #javascript
      </a>,
      <a
        href="https://dev.to/t/programming"
        className={styles.card__tags}
        key={8}
      >
        #programming
      </a>,
      <a
        href="https://dev.to/t/beginners"
        className={styles.card__tags}
        key={9}
      >
        #beginners
      </a>,
      <a
        href="https://dev.to/t/computerscience"
        className={styles.card__tags}
        key={10}
      >
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
        key={11}
      >
        #flutter
      </a>,
      <a href="https://dev.to/t/dart" className={styles.card__tags} key={12}>
        #dart
      </a>,
      <a
        href="https://dev.to/t/copywith"
        className={styles.card__tags}
        key={13}
      >
        #copywith
      </a>,
      <a href="https://dev.to/t/freezed" className={styles.card__tags} key={14}>
        #freezed
      </a>,
    ],
    reactions: 8,
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
        key={11}
      >
        #flutter
      </a>,
      <a href="https://dev.to/t/dart" className={styles.card__tags} key={12}>
        #dart
      </a>,
      <a
        href="https://dev.to/t/copywith"
        className={styles.card__tags}
        key={13}
      >
        #copywith
      </a>,
      <a href="https://dev.to/t/freezed" className={styles.card__tags} key={14}>
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
        key={15}
      >
        #javascript
      </a>,
      <a href="https://dev.to/t/react" className={styles.card__tags} key={16}>
        #react
      </a>,
      <a
        href="https://dev.to/t/performance"
        className={styles.card__tags}
        key={17}
      >
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
      <a href="https://dev.to/t/css" className={styles.card__tags} key={18}>
        #css
      </a>,
      <a href="https://dev.to/t/itcss" className={styles.card__tags} key={19}>
        #itcss
      </a>,
      <a
        href="https://dev.to/t/frontend"
        className={styles.card__tags}
        key={20}
      >
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
        key={21}
      >
        #github
      </a>,
      <a href="https://dev.to/t/webdev" className={styles.card__tags} key={22}>
        #webdev
      </a>,
      <a
        href="https://dev.to/t/beginners"
        className={styles.card__tags}
        key={23}
      >
        #beginners
      </a>,
      <a
        href="https://dev.to/t/programming"
        className={styles.card__tags}
        key={24}
      >
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
        key={81}
      >
        #showdev
      </a>,
      <a href="https://dev.to/t/webdev" className={styles.card__tags} key={25}>
        #webdev
      </a>,
      <a
        href="https://dev.to/t/javascript"
        className={styles.card__tags}
        key={26}
      >
        #javascript
      </a>,
      <a
        href="https://dev.to/t/typescript"
        className={styles.card__tags}
        key={27}
      >
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
        key={28}
      >
        #react
      </a>,
      <a href="https://dev.to/t/webdev" className={styles.card__tags} key={29}>
        #webdev
      </a>,
      <a
        href="https://dev.to/t/javascript"
        className={styles.card__tags}
        key={30}
      >
        #javascript
      </a>,
      <a href="https://dev.to/t/node" className={styles.card__tags} key={31}>
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
      <a href="https://dev.to/t/discuss" className={styles.card__tags} key={82}>
        #discuss
      </a>,
      <a
        href="https://dev.to/t/watercooler"
        className={styles.card__tags}
        key={32}
      >
        #watercooler
      </a>,
      <a
        href="https://dev.to/t/productivity"
        className={styles.card__tags}
        key={33}
      >
        #productivity
      </a>,
      <a href="https://dev.to/t/startup" className={styles.card__tags} key={34}>
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
      <a href="https://dev.to/t/webdev" className={styles.card__tags} key={35}>
        #webdev
      </a>,
      <a
        href="https://dev.to/t/javascript"
        className={styles.card__tags}
        key={36}
      >
        #javascript
      </a>,
      <a href="https://dev.to/t/node" className={styles.card__tags} key={37}>
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
      <a href="https://dev.to/t/webdev" className={styles.card__tags} key={38}>
        #webdev
      </a>,
      <a
        href="https://dev.to/t/javascript"
        className={styles.card__tags}
        key={39}
      >
        #javascript
      </a>,
      <a href="https://dev.to/t/node" className={styles.card__tags} key={40}>
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
      <a href="https://dev.to/t/rust" className={styles.card__tags} key={41}>
        #rust
      </a>,
      <a
        href="https://dev.to/t/programming"
        className={styles.card__tags}
        key={42}
      >
        #programming
      </a>,
      <a
        href="https://dev.to/t/tutorials"
        className={styles.card__tags}
        key={43}
      >
        #tutorials
      </a>,
      <a
        href="https://dev.to/t/beginner"
        className={styles.card__tags}
        key={44}
      >
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
      <a href="https://dev.to/t/python" className={styles.card__tags} key={45}>
        #python
      </a>,
    ],
    reactions: 4,
    readTime: 1,
  },

  {
    image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--sTQ-u_yB--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/188108/dbd37627-9845-47c6-8f5a-5cf8993d050d.png",
    name: "Mohamed Dahir",
    date: "Mar 20",
    title: "My adventures in ML Land",
    articleLink:
      "https://dev.to/#:~:text=Mar%2020-,How%20I%20read%20Files%20in%20Python,-%23",
    tags: [
      <a
        href="https://dev.to/t/functional"
        className={styles.card__tags}
        key={46}
      >
        #functional
      </a>,
    ],
    reactions: 2,
    readTime: 3,
  },

  {
    image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--sTQ-u_yB--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/188108/dbd37627-9845-47c6-8f5a-5cf8993d050d.png",
    name: "Mohamed Dahir",
    date: "Mar 20",
    title: "Everything as an expression",
    articleLink:
      "https://dev.to/#:~:text=Mar%2020-,Everything%20as%20an%20expression,-%23",
    tags: [
      <a
        href="https://dev.to/t/functional"
        className={styles.card__tags}
        key={47}
      >
        #functional
      </a>,
    ],
    reactions: 2,
    readTime: 2,
  },

  {
    image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--sTQ-u_yB--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/188108/dbd37627-9845-47c6-8f5a-5cf8993d050d.png",
    name: "Catherine Maldonado",
    date: "Mar 20",
    title: "Format, Copy, and Paste from a Webpage in the Console",
    articleLink:
      "https://dev.to/#:~:text=Mar%2020-,Format%2C%20Copy%2C%20and%20Paste%20from%20a%20Webpage%20in%20the%20Console,-%23",
    tags: [
      <a href="https://dev.to/t/oscars" className={styles.card__tags} key={48}>
        #oscars
      </a>,
      <a
        href="https://dev.to/t/googleform"
        className={styles.card__tags}
        key={49}
      >
        #googleform
      </a>,
      <a href="https://dev.to/t/codepen" className={styles.card__tags} key={50}>
        #codepen
      </a>,
      <a
        href="https://dev.to/t/javascript"
        className={styles.card__tags}
        key={51}
      >
        #javascript
      </a>,
    ],
    reactions: 2,
    readTime: 6,
  },

  {
    image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--85KH1yLn--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/832393/d2a4f1b4-c7ee-4176-8746-fa3bd02e58f1.jpeg",
    name: "Rodrigo Viera",
    date: "Mar 20",
    title: "Um conselho para quem está começando na área de TI",
    articleLink:
      "https://dev.to/rodrigovp/um-conselho-para-quem-esta-comecando-na-area-de-ti-4l9n",
    tags: [
      <a
        href="https://dev.to/t/beginners"
        className={styles.card__tags}
        key={52}
      >
        #beginners
      </a>,
      <a
        href="https://dev.to/t/programming"
        className={styles.card__tags}
        key={53}
      >
        #programming
      </a>,
      <a href="https://dev.to/t/career" className={styles.card__tags} key={54}>
        #career
      </a>,
    ],
    reactions: 3,
    readTime: 3,
  },

  {
    image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--sTQ-u_yB--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/188108/dbd37627-9845-47c6-8f5a-5cf8993d050d.png",
    name: "Catherine Maldonado",
    date: "Mar 20",
    title: "Format, Copy, and Paste from a Webpage in the Console",
    articleLink:
      "https://dev.to/#:~:text=Mar%2020-,Format%2C%20Copy%2C%20and%20Paste%20from%20a%20Webpage%20in%20the%20Console,-%23",
    tags: [
      <a href="https://dev.to/t/oscars" className={styles.card__tags} key={55}>
        #oscars
      </a>,
      <a
        href="https://dev.to/t/googleform"
        className={styles.card__tags}
        key={56}
      >
        #googleform
      </a>,
      <a href="https://dev.to/t/codepen" className={styles.card__tags} key={57}>
        #codepen
      </a>,
      <a
        href="https://dev.to/t/javascript"
        className={styles.card__tags}
        key={58}
      >
        #javascript
      </a>,
    ],
    reactions: 2,
    readTime: 6,
  },

  {
    image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--Qa4U8Zij--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/780579/d459c79e-aaf9-4b38-b679-08cfd15d7130.jpg",
    name: "Gülsen",
    date: "Mar 20",
    title: "Flutter copyWith Method 💫 🌌 ✨",
    articleLink:
      "https://dev.to/#:~:text=Mar%2020-,Flutter%20copyWith%20Method%20%F0%9F%92%AB%20%F0%9F%8C%8C%20%E2%9C%A8,-%23",
    tags: [
      <a
        href="https://dev.to/#:~:text=Flutter%20copyWith%20Method%20%F0%9F%92%AB%20%F0%9F%8C%8C%20%E2%9C%A8-,%23,flutter,-%23"
        className={styles.card__tags}
        key={83}
      >
        #flutter
      </a>,
      <a href="https://dev.to/t/dart" className={styles.card__tags} key={59}>
        #dart
      </a>,
      <a
        href="https://dev.to/t/copywith"
        className={styles.card__tags}
        key={60}
      >
        #copywith
      </a>,
      <a href="https://dev.to/t/freezed" className={styles.card__tags} key={61}>
        #freezed
      </a>,
    ],
    reactions: 7,
    readTime: 3,
  },

  {
    image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--8-omr9rA--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/524325/0ea245ab-7958-4a82-85a0-a5d83b91eaed.png",
    name: "Lissa Ferriera ",
    date: "Mar 20",
    title: "Como produzir seu primeiro conteúdo",
    articleLink:
      "https://dev.to/#:~:text=Mar%2020-,Como%20produzir%20seu%20primeiro%20conte%C3%BAdo,-%23",
    tags: [
      <a
        href="https://dev.to/#:~:text=seu%20primeiro%20conte%C3%BAdo-,%23,braziliandevs,-%23"
        className={styles.card__tags}
        key={62}
      >
        #braziliandevs
      </a>,
      <a
        href="https://dev.to/#:~:text=braziliandevs-,%23,womenintech,-7%C2%A0reactions"
        className={styles.card__tags}
        key={63}
      >
        #wowenintech
      </a>,
    ],
    reactions: 3,
    readTime: 1,
  },

  {
    image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--Hz1_dK5l--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/829156/06e68bf3-5289-41f3-bf41-2d8fd8efd552.jpeg",
    name: "Sergii ",
    date: "Mar 20",
    title: "Python Flask, ElasticSearch and Docker environment",
    articleLink:
      "https://dev.to/#:~:text=Mar%2020-,Python%20Flask%2C%20ElasticSearch%20and%20Docker%20environment,-3%C2%A0reactions",
    tags: [],
    reactions: 3,
    readTime: 1,
  },

  {
    image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--ZDja6kMT--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/757525/445bca7c-da99-474b-8f53-e2319a223d68.png",
    name: "Vectorly",
    date: "Mar 20",
    title:
      "How to Improve Your Emotional Intelligence (EQ) as an Engineering Manager (+ Test)",
    articleLink:
      "https://dev.to/#:~:text=Mar%2020-,How%20to%20Improve%20Your%20Emotional%20Intelligence%20(EQ)%20as%20an%20Engineering%20Manager%20(%2B%20Test),-%23",
    tags: [
      <a
        href="https://dev.to/t/programming"
        className={styles.card__tags}
        key={64}
      >
        #programming
      </a>,
      <a
        href="https://dev.to/t/beginners"
        className={styles.card__tags}
        key={65}
      >
        #beginners
      </a>,
      <a
        href="https://dev.to/t/productivity"
        className={styles.card__tags}
        key={66}
      >
        #productivity
      </a>,
      <a href="https://dev.to/t/career" className={styles.card__tags} key={67}>
        #career
      </a>,
    ],
    reactions: 7,
    readTime: 3,
  },

  {
    image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--6Wwox3uv--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/830474/5add7f96-fcca-407e-af89-51a167769010.jpeg",
    name: "Rahul Sharma",
    date: "Mar 20",
    title: "React best practices and patterns to reduce code - Part 3",
    articleLink:
      "https://dev.to/#:~:text=Mar%2020-,React%20best%20practices%20and%20patterns%20to%20reduce%20code%20%2D%20Part%203,-%23",
    tags: [
      <a
        href="https://dev.to/#:~:text=Patterns%20In%20Use-,%23,react,-%23"
        className={styles.card__tags}
        key={68}
      >
        #react
      </a>,
      <a
        href="https://dev.to/t/reactnative"
        className={styles.card__tags}
        key={69}
      >
        #reactnative
      </a>,
      <a
        href="https://dev.to/t/javascript"
        className={styles.card__tags}
        key={70}
      >
        #javascript
      </a>,
      <a href="https://dev.to/t/redux" className={styles.card__tags} key={71}>
        #redux
      </a>,
    ],
    reactions: 33,
    readTime: 5,
  },
];

const MainCard = () => {
  return (
    <div className={styles.card__container_main}>
      {cards.map((el, i) => {
        if (i === 4) {
          return <Extra key={i} />;
        } else {
          return (
            <div className={styles.main__card} key={i}>
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
                    <a href="#link" className={styles.comment}>
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
        }
      })}
    </div>
  );
};

export default MainCard;
