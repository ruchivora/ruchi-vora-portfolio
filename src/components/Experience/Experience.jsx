import styles from './Experience.module.css';

export function Experience() {
  const experiences = [
    {
      title: 'Software Developer 2',
      company: 'Uniqode',
      period: 'June 2023 - Sept 2024',
      achievements: [
        'Developed features using Angular and React, monitoring performance with DataDog and Amplitude.',
        'Managed a team of three developers to deliver a subsidiary product for Uniqode, utilizing React to ensure on-time delivery and contribute to revenue.',
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
        'Improved user engagement by refactoring the existing design and developing responsive components transforming the web application into a mobile-friendly platform.',
        'Built and optimized features like grid/list views, label management, reusable design system components and many more.',
        'Developed a scalable rate-limiting service with Node.js, AWS Lambda, and SQS, optimizing API traffic management, reducing operational costs, and ensuring system stability under high loads',
      ]
    },
    {
      title: 'Software Developer',
      company: 'Mirraw',
      period: 'March 2021 - March 2022',
      achievements: [
        'Built an internal order tracking and inventory management system using React , resulting in increased productivity and reduced order dispatch time.',
        'Developed and optimize API for mobile apps, improving performance through database schema optimizations and logic updates. Monitored performance using Airbrake.'
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