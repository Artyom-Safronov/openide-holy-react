import styles from './styles.module.scss';

const cards = [
  'Полностью локальная IDE без зависимости от внешних и зарубежных сервисов (работа в закрытом контуре)',
  'Юридически оформленная поставка и поддержка по SLA',
  'Расширенные инструменты для Java/Spring, Go, JS/TS и Python',
];

export default function PurposesCards() {
  return (
    <div className={styles.purposesCards}>
      <div className={styles.inner}>
        {cards.map((text, idx) => (
          <div className={styles.card} key={idx}>
            <div className={styles.icon}>
              <img src="/images/pro/check.svg" alt="" aria-hidden="true" width={24} height={24} />
            </div>
            <p className={styles.text}>{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
