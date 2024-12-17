import SocialLinks from '../SocialLinks/SocialLinks';
import styles from './About.module.css';
import profileImage from '../../assets/Ruchi_Vora.jpeg';

export function About() {
  return (
    <section id="about" className={styles.about}>
      <h2>About Me</h2>
      <div className={styles.aboutContent}>
        <div className={styles.aboutText}>
          <p>Hello! I'm a passionate <strong>Software Developer</strong> with a keen eye for creating beautiful and functional web experiences. I specialize in building responsive websites and web applications using modern technologies.</p>
          <p>With a strong foundation in <strong>React, JavaScript, HTML, and CSS,</strong> I strive to write clean, maintainable code that delivers exceptional user experiences. </p>
          <p>In addition to frontend development, I have also contributed to back-end tasks with technologies like Node.js, enabling me to collaborate effectively across the <strong>full stack</strong>, which allows me to take a full-stack approach to problem-solving and deliver end-to-end solutions.</p>
          <p>I'm always <strong>open to exploring new technologies</strong> and continuously improving my skills to stay ahead in the ever-evolving tech landscape.</p>
          <p>Beyond coding, I love sharing my knowledge through writing. With  <strong>over 400 subscribers on Mediu</strong>m, I write about tech, helping others in their learning journey.</p>
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