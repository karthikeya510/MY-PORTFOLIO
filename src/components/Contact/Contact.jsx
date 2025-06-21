import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.heading}>Let’s Connect</h2>
        <p className={styles.subtext}>I’d love to hear from you!</p>
        <ul className={styles.links}>
          <li className={styles.link}>
            <FaEnvelope className={styles.icon} />
            <a href="mailto:karthireddy510@gmail.com">karthireddy510@gmail.com</a>
          </li>
          <li className={styles.link}>
            <FaLinkedin className={styles.icon} />
            <a href="https://www.linkedin.com/in/karthik-reddy-1b9495295/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </li>
          <li className={styles.link}>
            <FaGithub className={styles.icon} />
            <a href="https://github.com/karthikeya510" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </li>
        </ul>
        <p className={styles.copyright}>
          © 2024 Karthikeya Reddy MU. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
