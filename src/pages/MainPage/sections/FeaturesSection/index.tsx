import styles from './styles.module.scss';

interface Feature {
  icon: string;
  title: string;
  description: string;
  href: string;
}

const features: Feature[] = [
  {
    icon: '/icons/features/icon-1.svg',
    title: 'Kotlin и JVM',
    description:
      'Полная поддержка Kotlin, Java и JVM-экосистемы с умными подсказками, рефакторингом и дебаггером',
    href: '/marketplace/?tag=kotlin',
  },
  {
    icon: '/icons/features/icon-2.svg',
    title: 'Angular и фреймворки',
    description:
      'Встроенная поддержка Angular, React, Vue и Next.js — автодополнение, переходы по коду, рефакторинг',
    href: '/marketplace/?tag=frontend',
  },
  {
    icon: '/icons/features/icon-3.svg',
    title: 'Python и ML',
    description:
      'Разработка на Python с поддержкой виртуальных окружений, Jupyter, Django и инструментов машинного обучения',
    href: '/marketplace/?tag=python',
  },
  {
    icon: '/icons/features/icon-4.svg',
    title: 'TypeScript и JavaScript',
    description:
      'Нативная поддержка TypeScript и JavaScript с мощным LSP-сервером и интеграцией с ESLint',
    href: '/marketplace/?tag=typescript',
  },
  {
    icon: '/icons/features/icon-6.svg',
    title: 'DevOps и контейнеры',
    description:
      'Интеграция с Docker, Kubernetes, GitLab CI и другими DevOps-инструментами прямо из IDE',
    href: '/marketplace/?tag=devops',
  },
  {
    icon: '/icons/features/icon-8.svg',
    title: 'Плагины и расширения',
    description:
      'Маркетплейс с 200+ плагинами: темы, инструменты, языковые серверы и интеграции с корпоративными системами',
    href: '/marketplace/',
  },
];

export default function FeaturesSection() {
  return (
    <section className={styles.features}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <h2 className={styles.title}>Возможности OpenIDE</h2>
          </div>
          <p className={styles.subtitle}>
            OpenIDE предоставляет полноценную среду разработки с поддержкой множества языков,
            фреймворков и инструментов
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((feature) => (
            <a key={feature.title} href={feature.href} className={styles.card}>
              <div className={styles.iconWrap}>
                <img src={feature.icon} alt="" aria-hidden="true" width={48} height={48} />
              </div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDesc}>{feature.description}</p>
              <span className={styles.cardLink}>Подробнее →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
