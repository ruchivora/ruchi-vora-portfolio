import styles from './Experience.module.css';

export function Experience() {
  const experiences = [
    {
      title: 'Software Developer 2',
      company: 'Uniqode',
      period: 'June 2023 - Sept 2024',
      achievements: [
        'Managed a team of three developers to deliver a subsidiary product for Uniqode, utilizing React to ensure on-time delivery and contribute to revenue.',
        'Implemented features using Angular and React, while monitoring application performance through DataDog and tracking user behavior with Amplitude.',
        'Collaborated with cross-functional teams (Product, Design, QA) to deliver high-quality features on time, ensuring alignment with business goals.',
        'Mentored junior developers through code reviews and pair programming sessions',
        'Managed customer support, addressed pain points, and incorporated feedback to drive continuous improvement and enhance user experience.'
      ]
    },
    {
      title: 'Software Developer 1',
      company: 'Uniqode',
      period: 'March 2022 - June 2023',
      achievements: [
        'Improved user engagement by refactoring the existing design and developing responsive components, transforming the web application into a mobile-friendly platform.',
        'Built and optimized features like grid/list views, label management, reusable design system components, and more, enhancing both usability and performance.',
        'Developed a scalable rate-limiting service with Node.js, AWS Lambda, and SQS, optimizing API traffic management, reducing operational costs, and ensuring system stability under high loads.',
      ]
    },
    {
      title: 'Software Developer',
      company: 'Mirraw',
      period: 'March 2021 - March 2022',
      achievements: [
        'Built features for an internal order tracking and inventory management system using React, leading to increased productivity and reduced order dispatch time.',
        'Developed and optimize API for mobile apps, improving performance through database schema optimizations and logic updates. Monitored performance using Airbrake.'
      ]
    },
    {
      title: 'Software Developer Intern',
      company: 'Mirraw',
      period: 'Jan 2021 - March 2022',
      achievements: [
        'Improved the user purchase experience by integrating product videos stored on AWS S3 using HTML, CSS, and JavaScript. This integration led to a 15% increase in user engagement, as measured by Amplitude.'
      ]
    },
    {
      title: 'Software Developer Intern',
      company: 'Unbox Social',
      period: 'June 2019 - Sept 2019',
      achievements: [
        'Developed a customer analytics dashboard, used by over 200 customers, to track key metrics such as customer reach, user engagement, and performance. Built using HTML, CSS, and JavaScript.'
      ]
    }
  ];

  return (
    <section id="experience" className={styles.experience}>
      <h2>Work Experience</h2>
      <div className={styles.experienceList}>
        {experiences.map((exp, index) => (
          <div key={index} className={styles.experienceItem}>
            <h3>{exp.title}</h3>
            <h4>{exp.company}</h4>
            <p className={styles.period}>{exp.period}</p>
            <ul className={styles.achievementsList}>
              {exp.achievements.map((achievement, index) => (
                <li key={index} className={styles.achievementItem}>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;