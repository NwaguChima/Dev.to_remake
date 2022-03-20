import React from "react";
import styles from "./Help.module.scss";

let help = [
  {
    title: "AlmaLinux Mailing Lists Now Availavle",
    link: "https://dev.to/jaboutboul/almalinux-mailing-lists-now-available-2a8d",
    new: true,
  },
  {
    title: "How to add Vue to a Laravel app",
    link: "https://dev.to/cguttweb/how-to-add-vue-to-a-laravel-app-46j1",
    new: true,
  },
  {
    title: "How do you stop a persistent process listening on port 53?",
    link: "https://dev.to/highcenburg/how-do-you-stop-a-persistent-process-listening-on-port-53-473e",
    new: true,
  },
  {
    title:
      "Feedback on idea needed: web3 startups apply to hire you at your desired salary",
    link: "https://dev.to/#:~:text=Feedback%20on%20idea,1%20comment",
    new: false,
  },
  {
    title:
      "bbPress: How to find mappings of attachments to their respective posts",
    link: "https://dev.to/#:~:text=bbPress%3A%20How%20to,New",
    new: true,
  },
  {
    title:
      "Mapping user Id to a socket Id: Node js video calling using socket.io",
    link: "https://dev.to/jaboutboul/almalinux-mailing-lists-now-available-2a8d",
    new: true,
  },
];

const Help = () => {
  return (
    <div className={styles.help__container}>
      <a href="https://dev.to/#:~:text=Create%20a%20Listing-,%23help,-AlmaLinux%20Mailing%20Lists">
        <h3 className={styles.listings__header}>#Help</h3>
      </a>
      <ul className={styles.listings__list}>
        {help.map((el) => (
          <a href={el.link}>
            <li className={styles.job__list}>
              <p>{el.title}</p>
              <span className={el.new ? styles.new : ""}>
                {el.new ? "new" : "5 comments"}
              </span>
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
};

export default Help;
