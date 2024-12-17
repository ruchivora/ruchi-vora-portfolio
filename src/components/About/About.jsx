import SocialLinks from '../SocialLinks/SocialLinks';
import styles from './About.module.css';
import profileImage from '../../assets/Ruchi_Vora.jpeg';

export function About() {
  return (
    <section id="about" className={styles.about}>
      <h2>About Me</h2>
      <div className={styles.aboutContent}>
        <div className={styles.aboutText}>
          <p>Hello! I'm a passionate <strong>Software Developer</strong> with <strong>3.7 years of experience</strong> crafting responsive, user-centric web applications.</p>
          <p>I specialize in building scalable and functional web experiences using modern technologies like <strong>React, Redux, JavaScript, HTML, and CSS.</strong> </p>
          <p>In addition to frontend development, I have also contributed to back-end tasks with technologies like Node.js, enabling me to collaborate effectively across the <strong>full stack</strong>, and deliver end-to-end solutions.</p>
          <p>Beyond coding, I love sharing my knowledge through writing. With  <strong>over 400 subscribers on Medium</strong>, I write about tech to help others in their learning journey, fostering a community of <strong>curious developers.</strong></p>
          <p>I'm always <strong>open to exploring new technologies</strong> and continuously improving my skills to stay ahead in the ever-evolving tech landscape.</p>
          <SocialLinks />
        </div>
        <div className={styles.aboutImage}>
          <div className={styles.imagePlaceholder}>
            <img src={profileImage}></img>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;