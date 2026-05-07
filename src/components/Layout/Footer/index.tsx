import styles from './styles.module.scss';

const navLinks = [
  { label: 'Главная', href: '/' },
  { label: 'Маркетплейс', href: '/marketplace/' },
  { label: 'О нас', href: '/about/' },
  { label: 'Связаться', href: '/contact/' },
  { label: 'Бизнесу', href: '/pro/' },
  { label: 'Блог', href: '/blog/' },
  { label: 'Скачать', href: '/download/' },
];

const legalLinks = [
  { label: 'Политика конфиденциальности', href: '/privacy-policy/' },
  { label: 'Условия использования', href: '/terms/' },
  { label: 'Оферта для разработчиков плагинов', href: '/plugin-offer/' },
  { label: 'Соглашение о правах участника', href: '/contributor-agreement/' },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.left}>
            <a href="/public" className={styles.logo}>
              <img src="/images/logo.svg" alt="OpenIDE" width={120} height={32} />
            </a>
            <nav className={styles.nav}>
              {navLinks.map((link) => (
                <a key={link.label} href={link.href} className={styles.navLink}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className={styles.right}>
            <div className={styles.rightLogo}>
              <img src="/images/logo.svg" alt="" aria-hidden="true" width={120} height={32} />
            </div>
            <nav className={styles.legal}>
              {legalLinks.map((link) => (
                <a key={link.label} href={link.href} className={styles.legalLink}>
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className={styles.bottom}>© OpenIDE, 2026. Все права защищены.</div>
      </div>
    </footer>
  );
}
