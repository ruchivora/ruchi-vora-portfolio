import { FaReact, FaGit, FaNodeJs } from 'react-icons/fa';
import { SiRedux, SiJavascript, SiHtml5, SiCss3, SiJest } from 'react-icons/si';
import { MdDevices } from 'react-icons/md';
import { TbApi } from 'react-icons/tb';
import styles from './Skills.module.css';

export function Skills() {
  const skills = [
    { name: 'React', icon: <FaReact className="skill-icon" /> },
    { name: 'Redux', icon: <SiRedux className="skill-icon" /> },
    { name: 'JavaScript', icon: <SiJavascript className="skill-icon" /> },
    { name: 'HTML5', icon: <SiHtml5 className="skill-icon" /> },
    { name: 'CSS3', icon: <SiCss3 className="skill-icon" /> },
    { name: 'RESTful APIs', icon: <TbApi className="skill-icon" /> },
    { name: 'Node.js', icon: <FaNodeJs className="skill-icon" /> },
    { name: 'Git', icon: <FaGit className="skill-icon" /> },
    { name: 'Jest', icon: <SiJest className='skill-icon'/> },
    { name: 'Responsive Design', icon: <MdDevices className="skill-icon" /> },
  ];

  return (
    <section id="skills" className={styles.skills}>
      <h2>Skills</h2>
      <div className={styles.skillsList}>
        {skills.map((skill, index) => (
          <div key={index} className={styles.skillItem}>
            {skill.icon}
            <span className={styles.skillName}>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

