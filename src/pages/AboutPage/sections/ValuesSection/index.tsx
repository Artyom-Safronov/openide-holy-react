import styles from './styles.module.scss';

const values = [
  {
    icon: '/icons/features/icon-openide.svg',
    title: 'Открытость',
    description:
      'Весь исходный код открыт. Любой разработчик может изучить, как устроена IDE, предложить улучшение или сообщить об ошибке. Никакого скрытого поведения.',
  },
  {
    icon: '/icons/features/icon-8.svg',
    title: 'Независимость',
    description:
      'OpenIDE работает полностью локально. Никакой телеметрии, никаких обращений к иностранным серверам. Ваш код остаётся только у вас.',
  },
  {
    icon: '/icons/features/icon-6.svg',
    title: 'Профессионализм',
    description:
      'Мы не жертвуем качеством ради скорости. Каждая функция проходит проверку, каждый плагин в маркетплейсе — модерацию.',
  },
  {
    icon: '/icons/features/icon-3.svg',
    title: 'Сообщество',
    description:
      'OpenIDE создаётся вместе с сообществом разработчиков. Мы учитываем обратную связь и совместно определяем приоритеты развития.',
  },
];

export default function ValuesSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.label}>Принципы</div>
          <h2 className={styles.title}>Ценности, которые нас объединяют</h2>
        </div>

        <div className={styles.grid}>
          {values.map((v) => (
            <div key={v.title} className={styles.card}>
              <div className={styles.iconWrap}>
                <img src={v.icon} alt="" aria-hidden="true" width={48} height={48} />
              </div>
              <h3 className={styles.cardTitle}>{v.title}</h3>
              <p className={styles.cardText}>{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
