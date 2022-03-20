import deepgramLogo from "../../../../assets/deepgramLogo.webp";
import styles from "./Deepgram.module.scss";

const Deepgram = () => {
  return (
    <div className={styles.deepgram__container}>
      <a href="https://dev.to/devteam/join-us-for-a-new-kind-of-hackathon-on-dev-brought-to-you-by-deepgram-2bjd">
        <img src={deepgramLogo} alt="Deepgram Logo" />
      </a>
      <div className={styles.deepgram__content}>
        <a href="https://dev.to/devteam/join-us-for-a-new-kind-of-hackathon-on-dev-brought-to-you-by-deepgram-2bjd">
          <h3 className={styles.deepgram__header}>
            Deepgram x DEV Hackathon (15)
          </h3>
        </a>
        <ul className={styles.deepgram__list}>
          <a href="https://dev.to/arturonomas7172/deepgram-x-dev-hackathon-submission-post-placeholder-title-3cdd">
            <li className="right__list">
              [Deepgram x DEV Hackathon Submission Post Placeholder Title]
            </li>
          </a>
          <a href="https://dev.to/bekzodkomilov/deepgram-x-dev-hackathon-submission-post-placeholder-title-2eb8">
            <li className="right__list">
              [Deepgram x DEV Hackathon Submission Post Placeholder Title]
            </li>
          </a>
          <a href="https://dev.to/yongchanghe/tutorial-play-with-a-speech-to-text-api-using-nodejs-2527">
            <li className="right__list">
              Tutorial: Play with a speech-to-Text API using Node.js
            </li>
          </a>
          <a href="https://dev.to/devteam/join-us-for-a-new-kind-of-hackathon-on-dev-brought-to-you-by-deepgram-2bjd">
            <li className="right__list">
              Join us for a new king of hackathon on DEV -- brougth to you by
              Deepgram!
            </li>
          </a>
          <a href="https://dev.to/deepgram/lets-get-hacking-17k6">
            <li className="right__list">Let's get Hacking</li>
          </a>
        </ul>
        <div className={styles.deepgram__btn}>
          <a
            className={styles.submit__project}
            href="https://dev.to/new/hackwithdg"
          >
            Submit Your Project!
          </a>
          <a className={styles.see__all} href="https://dev.to/t/hackwithdg">
            See all posts
          </a>
        </div>
      </div>
    </div>
  );
};

export default Deepgram;
