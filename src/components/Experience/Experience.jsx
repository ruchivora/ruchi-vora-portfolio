import styles from './Experience.module.css';

export function Experience() {
  const experiences = [
    {
      title: 'Software Developer 2',
      company: 'Uniqode',
      period: 'June 2023 - Sept 2024',
      achievements: [
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
      ]
    },
    {
      title: 'Software Developer',
      company: 'Mirraw',
      period: 'March 2021 - March 2022',
      achievements: [
        'Improved supplier onboarding flow and developed order details and history features on the inventory management app, enabling cost savings and better decision-making.',
        'Developed the View Cart feature, enabling users to modify cart items and display total cart value, improving the shopping experience, while building and integrating backend APIs for seamless data flow.'
      ]
    },
    {
      title: 'Software Developer Intern',
      company: 'Mirraw',
      period: 'Jan 2021 - March 2022',
      achievements: [
        'Enhanced user purchase experience by integrating product videos from AWS S3, used by over 1 million active users daily, resulting in a 15% increase in user engagement rate, as measured on Amplitude.'
      ]
    },
    {
      title: 'Software Developer Intern',
      company: 'Unbox Social',
      period: 'June 2019 - Sept 2019',
      achievements: [
        'Integrated APIs to build an analytics dashboard used by 2,000+ top brands worldwide to track engagement and performance metrics, enabling data-driven business decisions.'
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