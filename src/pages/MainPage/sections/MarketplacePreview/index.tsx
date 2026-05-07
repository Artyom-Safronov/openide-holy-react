import Button from '../../../../components/Button';
import styles from './styles.module.scss';

const languageIcons = [
  { src: '/icons/languages/jdk.svg', label: 'Java / Kotlin' },
  { src: '/icons/languages/go.svg', label: 'Go' },
  { src: '/icons/languages/docker.svg', label: 'Docker' },
  { src: '/icons/languages/git.svg', label: 'Git' },
  { src: '/icons/languages/csharp.svg', label: 'C#' },
  { src: '/icons/languages/database.svg', label: 'Database' },
  { src: '/icons/languages/gitflic.svg', label: 'GitFlic' },
  { src: '/icons/languages/setting.svg', label: 'Plugins' },
];

export default function MarketplacePreview() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <h2 className={styles.title}>
            Маркетплейс
            <br />с 200+ плагинами
          </h2>
          <p className={styles.description}>
            Расширяйте IDE под свой стек технологий — языки, фреймворки, DevOps-инструменты, темы и
            AI-ассистенты
          </p>
          <Button href="/marketplace/" size="md">
            Перейти в маркетплейс
          </Button>
        </div>

        <div className={styles.right}>
          <div className={styles.iconsGrid}>
            {languageIcons.map((icon) => (
              <div key={icon.label} className={styles.iconItem}>
                <img
                  src={icon.src}
                  alt={icon.label}
                  width={32}
                  height={32}
                  className={styles.iconImg}
                />
              </div>
            ))}
          </div>
          <p className={styles.iconsNote}>и многое другое в маркетплейсе</p>
        </div>
      </div>
    </section>
  );
}
