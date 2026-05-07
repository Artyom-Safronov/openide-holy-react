import styles from './styles.module.scss';

export default function MissionSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.label}>Наша миссия</div>

        <blockquote className={styles.quote}>
          Создать открытую профессиональную среду разработки, которой доверяют разработчики и
          компании — без зависимости от иностранной инфраструктуры и с полным контролем над
          инструментами.
        </blockquote>

        <div className={styles.body}>
          <div className={styles.col}>
            <h2 className={styles.colTitle}>Почему мы создали OpenIDE</h2>
            <p className={styles.colText}>
              Современные IDE всё сильнее завязаны на облачные сервисы, телеметрию и иностранные
              серверы. Разработчики теряют контроль над своими данными, а компании сталкиваются с
              рисками при работе в закрытых контурах.
            </p>
            <p className={styles.colText}>
              OpenIDE решает эту проблему: полнофункциональная IDE на базе IntelliJ Platform,
              которая работает полностью локально, не отправляет код во внешние сервисы и
              поддерживает отечественные инструменты разработки.
            </p>
          </div>

          <div className={styles.col}>
            <h2 className={styles.colTitle}>Для кого OpenIDE</h2>
            <ul className={styles.list}>
              {[
                'Разработчики, которым важна свобода и прозрачность инструментов',
                'Команды, работающие в закрытых корпоративных контурах',
                'Компании с требованиями к импортозамещению',
                'Open source-контрибьюторы и энтузиасты',
                'Образовательные организации и исследователи',
              ].map((item) => (
                <li key={item} className={styles.listItem}>
                  <span className={styles.dot} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
