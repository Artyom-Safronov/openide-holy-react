import styles from './styles.module.scss';

const facts = [
  {
    title: 'Лицензия Apache 2.0',
    text: 'Исходный код OpenIDE распространяется по лицензии Apache 2.0. Вы можете свободно использовать, изучать, модифицировать и распространять проект.',
  },
  {
    title: 'Открытая разработка',
    text: 'Все задачи, обсуждения и PR находятся в открытом доступе. Решения принимаются прозрачно, с учётом мнения сообщества.',
  },
  {
    title: 'Нет телеметрии',
    text: 'OpenIDE не собирает данные об использовании, не отправляет статистику и не регистрирует ваши действия в IDE.',
  },
];

export default function OpenSourceSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <div className={styles.label}>Открытый исходный код</div>
          <h2 className={styles.title}>Свобода — не маркетинг, а основа проекта</h2>
          <p className={styles.description}>
            OpenIDE изначально проектировался как открытый проект. Это не добавленная функция, а
            фундаментальный принцип: никаких закрытых компонентов, никаких скрытых зависимостей.
          </p>
          <div className={styles.links}>
            <a
              href="https://gitflic.ru/project/openide/openide"
              className={styles.linkBtn}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/icons/languages/gitflic.svg"
                alt=""
                aria-hidden="true"
                width={20}
                height={20}
              />
              GitFlic
            </a>
            <a
              href="https://github.com/openide-ru/openide"
              className={styles.linkBtn}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/icons/languages/git.svg"
                alt=""
                aria-hidden="true"
                width={20}
                height={20}
              />
              GitHub
            </a>
          </div>
        </div>

        <div className={styles.right}>
          {facts.map((fact) => (
            <div key={fact.title} className={styles.factCard}>
              <div className={styles.factIcon} aria-hidden="true">
                ✓
              </div>
              <div>
                <h3 className={styles.factTitle}>{fact.title}</h3>
                <p className={styles.factText}>{fact.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
