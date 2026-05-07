import Button from '../../../../components/Button';
import styles from './styles.module.scss';

export default function HomeHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <span className={styles.label}>Открытая среда разработки</span>
          <h1 className={styles.title}>OpenIDE — открытая среда разработки для профессионалов</h1>
          <p className={styles.description}>
            Свободная IDE на основе IntelliJ Platform с маркетплейсом плагинов, поддержкой
            современных языков и интеграцией с AI-ассистентами
          </p>
          <div className={styles.actions}>
            <Button href="/download/" size="md">
              Скачать
            </Button>
            <a href="/marketplace/" className={styles.secondaryBtn}>
              Маркетплейс плагинов
            </a>
          </div>
        </div>

        <div className={styles.visual}>
          <img src="/images/home/hero-screen.png" alt="" aria-hidden="true" />
        </div>
      </div>

      <a href="/pro/" className={styles.proBanner}>
        <span className={styles.proBannerText}>Получить доступ к OpenIDE Pro</span>
        <img
          src="/images/home/vector-curve.svg"
          alt=""
          aria-hidden="true"
          className={styles.proBannerVector}
        />
        <span className={styles.proBannerArrow}>→</span>
      </a>
    </section>
  );
}
