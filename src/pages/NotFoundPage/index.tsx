import styles from './styles.module.scss';
import heroImage from '/images/about-hero-screen.png';

export default function NotFoundPage() {
  return (
    <div className={styles.container}>
      <div className={styles.code}>
        <span className={styles.digit}>41</span>
        <img src={heroImage} alt="" className={styles.image} />
        <span className={styles.digit}>4</span>
      </div>
    </div>
  );
}
