import { FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import styles from './SocialLinks.module.css';

function SocialLinks() {
  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FaGithub />,
      url: 'https://github.com/ruchivora',
    },
    {
      name: 'LinkedIn',
      icon: <FaLinkedin />,
      url: 'https://www.linkedin.com/in/ruchivora16/',
    },
    {
      name: 'Medium',
      icon: <FaMedium />,
      url: 'https://medium.com/@ruchivora16',
    },
    {
      name: 'Email',
      icon: <MdEmail />,
      url: 'mailto:ruchivora16l@gmail.com',
    },
  ];

  return (
    <div className={styles.socialLinks}>
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          className={styles.socialLink}
          aria-label={link.name}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}

export default SocialLinks;