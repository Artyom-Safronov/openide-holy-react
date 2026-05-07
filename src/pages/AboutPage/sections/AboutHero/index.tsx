import styles from './styles.module.scss';

export default function AboutHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <nav className={styles.breadcrumbs} aria-label="Хлебные крошки">
          <a href="/">Главная</a>
          <span aria-hidden="true">/</span>
          <span className={styles.current}>О нас</span>
        </nav>

        <div className={styles.content}>
          <h1 className={styles.title}>О проекте OpenIDE</h1>
          <p className={styles.description}>
            OpenIDE — открытая среда разработки на основе IntelliJ Platform, созданная российским
            сообществом для разработчиков, которым важны свобода, независимость и прозрачность
            инструментов.
          </p>
        </div>
      </div>
    </section>
  );
}
