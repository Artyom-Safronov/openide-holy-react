import styles from './styles.module.scss';

export default function ContactHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <nav className={styles.breadcrumbs} aria-label="Хлебные крошки">
          <a href="/">Главная</a>
          <span aria-hidden="true">→</span>
          <span className={styles.current}>Контакты</span>
        </nav>
        <h1 className={styles.title}>Возник вопрос или есть предложение?</h1>
        <p className={styles.description}>
          Задавайте вопросы, отправив сообщение на наш email, или вступайте в наш{' '}
          <a
            href="https://t.me/openide"
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            telegram-чат
          </a>{' '}
          и спрашивайте там. Мы всегда рады любой обратной связи и готовы ответить на все ваши
          вопросы.
        </p>
      </div>
    </section>
  );
}
