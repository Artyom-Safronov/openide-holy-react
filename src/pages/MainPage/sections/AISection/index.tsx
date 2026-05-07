import styles from './styles.module.scss';

export default function AISection() {
  return (
    <section className={styles.aiSection}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <span className={styles.label}>Искусственный интеллект</span>
          <h2 className={styles.title}>OpenIDE как среда для работы с AI</h2>
          <p className={styles.description}>
            OpenIDE интегрируется с ведущими AI-ассистентами для разработчиков. Используйте
            GigaCode, Yandex Code Assistant, Continue, KiloCode и другие прямо из IDE — без
            переключения контекста.
          </p>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <span className={styles.dot} />
              Поддержка GigaCode и Yandex Code Assistant
            </li>
            <li className={styles.listItem}>
              <span className={styles.dot} />
              Интеграция с Continue, KiloCode и Veai
            </li>
            <li className={styles.listItem}>
              <span className={styles.dot} />
              Работа без передачи кода во внешние сервисы
            </li>
            <li className={styles.listItem}>
              <span className={styles.dot} />
              Локальные модели через совместимые плагины
            </li>
          </ul>
          <a href="/marketplace/?tag=ai" className={styles.link}>
            Смотреть AI-плагины →
          </a>
        </div>

        <div className={styles.imageWrap}>
          <img
            src="/images/home/ai-assistants.png"
            alt="AI-ассистенты в OpenIDE — GigaCode, KiloCode, Yandex Code Assistant"
            width={560}
            height={420}
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
}
