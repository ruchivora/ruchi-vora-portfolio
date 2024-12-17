import styles from './Blog.module.css';
import { PiHandsClappingThin } from "react-icons/pi";

export function Blog() {
  const blogs = [
    {
      title: 'How React Works Under The Hood',
      date: 'Nov 26,2023',
      description: 'Demystify React by exploring core concepts like the DOM, virtual DOM, reconciliation, and diffing algorithms, enabling developers to build efficient and responsive user interfaces.',
      claps: '500',
      link: 'https://medium.com/@ruchivora16/react-how-react-works-under-the-hood-9b621ee69fb5'
    },
    {
      title: 'Promises Simplified: How They Work',
      date: 'Aug 30,2022',
      description: 'This blog explores the fundamentals of JavaScript promises. It provides clear examples to help readers master asynchronous programming and write cleaner, more efficient code.',
      claps: '355',
      link: 'https://medium.com/@ruchivora16/javascript-promises-a20c2ea76e81'
    },
    {
      title: 'JavaScript: Callback Queue Vs Microtask Queue',
      date: 'Oct 15, 2022',
      description: 'This blog provides a clear explanation with examples, helping you understand how tasks are prioritized and executed in asynchronous programming.',
      claps: '75',
      link: 'https://medium.com/@ruchivora16/javascript-callback-and-microtask-queue-982c2fedd315'
    }
  ];

  return (
    <section id="blog" className={styles.blog}>
      <h2>Most Liked Blogs</h2>
      <div className={styles.blogList}>
        {blogs.map((blog, index) => (
          <article key={index} className={styles.blogItem}>
            <h3>{blog.title}</h3>
            <div className={styles.stats}>
              <div className={styles.date}>{blog.date}</div>
              <div className={styles.iconWrapper}><PiHandsClappingThin size={14}/>&nbsp;</div>  
              <div className={styles.clapCount}>{blog.claps}</div>
            </div>
            <p className={styles.description}>{blog.description}</p>
            <a href={blog.link} className={styles.readMore}>Read More</a>
          </article>
        ))}
      </div>
    </section>
  );
}
