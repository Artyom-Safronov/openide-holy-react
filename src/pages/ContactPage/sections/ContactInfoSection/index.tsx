import styles from './styles.module.scss';

const channels = [
  {
    icon: '/icons/languages/envelope.svg',
    label: 'Email',
    value: 'info@openide.ru',
    href: 'mailto:info@openide.ru',
    description: 'Для общих вопросов и предложений',
  },
  {
    icon: '/icons/languages/gitflic.svg',
    label: 'GitFlic',
    value: 'openide / openide',
    href: 'https://gitflic.ru/project/openide/openide',
    description: 'Сообщения об ошибках и задачи',
  },
  {
    icon: '/icons/languages/git.svg',
    label: 'GitHub',
    value: 'github.com/openide',
    href: 'https://github.com/openide-ru/openide',
    description: 'Зеркало репозитория',
  },
];

const responseTimes = [
  { label: 'Общие вопросы', time: '1–2 рабочих дня' },
  { label: 'Сообщения об ошибках', time: 'до 3 рабочих дней' },
  { label: 'Партнёрство', time: '3–5 рабочих дней' },
];

export default function ContactInfoSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.channels}>
          <h2 className={styles.title}>Другие способы связи</h2>

          <div className={styles.channelList}>
            {channels.map((ch) => (
              <a
                key={ch.label}
                href={ch.href}
                className={styles.channelCard}
                target={ch.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
              >
                <div className={styles.channelIcon}>
                  <img src={ch.icon} alt="" aria-hidden="true" width={24} height={24} />
                </div>
                <div className={styles.channelBody}>
                  <span className={styles.channelLabel}>{ch.label}</span>
                  <span className={styles.channelValue}>{ch.value}</span>
                  <span className={styles.channelDesc}>{ch.description}</span>
                </div>
                <span className={styles.channelArrow} aria-hidden="true">
                  →
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className={styles.times}>
          <h2 className={styles.title}>Время ответа</h2>

          <div className={styles.timeList}>
            {responseTimes.map((rt) => (
              <div key={rt.label} className={styles.timeRow}>
                <span className={styles.timeLabel}>{rt.label}</span>
                <span className={styles.timeDot} aria-hidden="true" />
                <span className={styles.timeValue}>{rt.time}</span>
              </div>
            ))}
          </div>

          <p className={styles.note}>
            Мы стараемся отвечать как можно быстрее. Если вопрос срочный — укажите это в теме
            обращения.
          </p>
        </div>
      </div>
    </section>
  );
}
