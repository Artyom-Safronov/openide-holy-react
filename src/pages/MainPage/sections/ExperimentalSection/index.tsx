import styles from './styles.module.scss';

interface ExpCard {
  icon: string;
  badge: string;
  title: string;
  description: string;
}

const experimental: ExpCard[] = [
  {
    icon: '/icons/features/icon-5.svg',
    badge: 'Бета',
    title: 'TypeScript Go (native)',
    description:
      'Нативный TypeScript Language Server на Go с ускоренной индексацией и поддержкой больших монорепозиториев',
  },
  {
    icon: '/icons/features/icon-7.svg',
    badge: 'Эксперимент',
    title: 'Go Language Support',
    description:
      'Расширенная поддержка Go с автодополнением, навигацией по коду и интеграцией с go tools',
  },
  {
    icon: '/icons/features/icon-9.svg',
    badge: 'Бета',
    title: 'C# и .NET',
    description:
      'Поддержка C# и .NET через Language Server Protocol с базовыми возможностями автодополнения и диагностики',
  },
];

const inDevelopment: ExpCard[] = [
  {
    icon: '/icons/features/icon-10.svg',
    badge: 'В разработке',
    title: 'Интеграция с базами данных',
    description:
      'Встроенный просмотр схем, выполнение SQL-запросов и работа с популярными СУБД прямо из IDE',
  },
  {
    icon: '/icons/features/icon-4.svg',
    badge: 'В разработке',
    title: 'Remote Development',
    description: 'Разработка на удалённых серверах и в облачных средах без потери привычного DevEx',
  },
];

function CardGroup({
  title,
  subtitle,
  cards,
}: {
  title: string;
  subtitle: string;
  cards: ExpCard[];
}) {
  return (
    <div className={styles.group}>
      <div className={styles.groupHeader}>
        <h2 className={styles.groupTitle}>{title}</h2>
        <p className={styles.groupSubtitle}>{subtitle}</p>
      </div>
      <div className={styles.grid}>
        {cards.map((card) => (
          <div key={card.title} className={styles.card}>
            <div className={styles.cardTop}>
              <img src={card.icon} alt="" aria-hidden="true" width={48} height={48} />
              <span
                className={`${styles.badge} ${card.badge === 'В разработке' ? styles.badgeDev : ''}`}
              >
                {card.badge}
              </span>
            </div>
            <h3 className={styles.cardTitle}>{card.title}</h3>
            <p className={styles.cardDesc}>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ExperimentalSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <CardGroup
          title="Экспериментальные возможности"
          subtitle="Функции на стадии бета-тестирования — доступны для опробования, но могут иметь ограничения"
          cards={experimental}
        />
        <CardGroup
          title="В разработке"
          subtitle="Возможности, которые появятся в ближайших обновлениях OpenIDE"
          cards={inDevelopment}
        />
      </div>
    </section>
  );
}
