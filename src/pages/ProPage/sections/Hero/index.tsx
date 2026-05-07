import Button from '../../../../components/Button';
import styles from './styles.module.scss';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <div className={styles.breadcrumbs}>
            <a href="/">Главная</a>
            <span>&gt;</span>
            <span className={styles.breadcrumbsCurrent}>OpenIDE Pro</span>
          </div>

          <h1 className={styles.title}>Профессиональная IDE для корпоративной разработки</h1>

          <p className={styles.description}>
            Для компаний, которым важны безопасность, предсказуемость, независимость и
            технологическое лидерство. Без смены привычного DevEx и без потери времени на
            переобучение.
          </p>

          <Button href="#pro-form" className={styles.ctaButton}>
            Запросить ранний доступ
          </Button>
        </div>

        <div className={styles.image}>
          <img src="/images/pro/hero.png" alt="OpenIDE Pro скриншот" width={659} height={450} />
        </div>
      </div>
    </section>
  );
}
