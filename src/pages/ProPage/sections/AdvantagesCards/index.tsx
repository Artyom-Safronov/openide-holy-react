import styles from './styles.module.scss';

export default function AdvantagesCards() {
  return (
    <div className={styles.advantagesCards}>
      <div className={styles.inner}>
        <div className={`${styles.card} ${styles.cardPurple}`}>
          <div className={styles.icon}>
            <img
              src="/images/pro/advantages/purple.svg"
              alt=""
              aria-hidden="true"
              width={48}
              height={48}
            />
          </div>
          <h3 className={styles.cardTitle}>
            Выбор команд, которые строят и поддерживают сложные IT-решения
          </h3>
          <p className={styles.cardText}>
            OpenIDE развивается при участии индустриальных партнёров и используется разработчиками и
            организациями, которым важны стабильность, прозрачность и контроль инструментов
            разработки.
          </p>
        </div>

        <div className={`${styles.card} ${styles.cardGray}`}>
          <div className={styles.icon}>
            <img
              src="/images/pro/advantages/gray.svg"
              alt=""
              aria-hidden="true"
              width={48}
              height={48}
            />
          </div>
          <h3 className={styles.cardTitle}>Полный контроль над кодом и данными</h3>
          <p className={styles.cardText}>
            OpenIDE Pro работает полностью локально и не передаёт исходный код во внешние сервисы.
            IDE не использует стороннюю телеметрию и не зависит от зарубежной облачной
            инфраструктуры.
          </p>
        </div>
      </div>
    </div>
  );
}
