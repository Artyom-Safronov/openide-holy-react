import Button from '../../../../components/Button';
import styles from './styles.module.scss';

const ways = [
  {
    icon: '/icons/features/icon-2.svg',
    title: 'Разрабатывайте плагины',
    text: 'Создайте плагин для языка, фреймворка или инструмента — и опубликуйте его в маркетплейсе OpenIDE.',
    href: '/marketplace/',
    linkText: 'Начать разработку',
  },
  {
    icon: '/icons/features/icon-1.svg',
    title: 'Вносите изменения в ядро',
    text: 'Исправляйте ошибки, реализуйте новые функции, улучшайте производительность — PR приветствуются.',
    href: 'https://gitflic.ru/project/openide/openide',
    linkText: 'Открыть на GitFlic',
  },
  {
    icon: '/icons/features/icon-4.svg',
    title: 'Помогайте сообществу',
    text: 'Отвечайте на вопросы, пишите документацию, создавайте обучающие материалы и делитесь опытом.',
    href: '/contact/',
    linkText: 'Связаться с нами',
  },
];

export default function ContributeSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.label}>Участие в проекте</div>
          <h2 className={styles.title}>Присоединяйтесь к сообществу OpenIDE</h2>
          <p className={styles.subtitle}>
            OpenIDE — это совместный проект. Любой вклад, большой или маленький, помогает сделать
            IDE лучше для всех
          </p>
        </div>

        <div className={styles.grid}>
          {ways.map((way) => (
            <div key={way.title} className={styles.card}>
              <div className={styles.cardIcon}>
                <img src={way.icon} alt="" aria-hidden="true" width={48} height={48} />
              </div>
              <h3 className={styles.cardTitle}>{way.title}</h3>
              <p className={styles.cardText}>{way.text}</p>
              <a href={way.href} className={styles.cardLink}>
                {way.linkText} →
              </a>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <p className={styles.ctaText}>Нет времени на разработку, но хотите поддержать проект?</p>
          <Button href="/pro/" size="md">
            Поддержать через OpenIDE Pro
          </Button>
        </div>
      </div>
    </section>
  );
}
