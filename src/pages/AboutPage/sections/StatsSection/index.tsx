import styles from './styles.module.scss';

const stats = [
  { value: '200+', label: 'плагинов в маркетплейсе' },
  { value: '15+', label: 'поддерживаемых языков' },
  { value: '10 000+', label: 'активных пользователей' },
  { value: '100%', label: 'открытый исходный код' },
];

export default function StatsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          {stats.map((stat) => (
            <div key={stat.label} className={styles.item}>
              <span className={styles.value}>{stat.value}</span>
              <span className={styles.label}>{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
