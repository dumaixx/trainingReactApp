import styles from "./about.module.css";
import {ReactComponent as CatImage } from "../../../images/cat.svg";
import { messages } from "./messages";

export const AboutPage = () => {
  return (
    <div className={styles.aboutContainer}>
      <div className={styles.description}>
        <h2>{messages.mainDescription}</h2>
        <p>{messages.additionalDescription}</p>
      </div>
      <CatImage />
    </div>
  );
};