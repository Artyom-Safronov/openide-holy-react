import { useState } from 'react';
import Button from '../../Button';
import styles from './styles.module.scss';
import { HeaderNavLink, type NavItem } from './HeaderNavLink.tsx';

const navItems: NavItem[] = [
  { label: 'Главная', href: '/' },
  { label: 'Маркетплейс', href: '/marketplace/' },
  { label: 'О нас', href: '/about/' },
  { label: 'Связаться', href: '/contact/' },
  { label: 'Бизнесу', href: '/pro/' },
  { label: 'Блог', href: '/blog/' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="/public" className={styles.logo}>
          <img src="/images/logo.svg" alt="OpenIDE" width={120} height={32} />
        </a>

        <nav className={styles.nav}>
          {navItems.map((item) => (
            <HeaderNavLink key={item.label} {...item} />
          ))}
        </nav>

        <div className={styles.actions}>
          <Button href="/download/" size="sm">
            Скачать
          </Button>
          <button
            className={`${styles.burger}${mobileOpen ? ` ${styles.burgerOpen}` : ''}`}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Меню"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div className={`${styles.mobileMenu}${!mobileOpen ? ` ${styles.mobileMenuHidden}` : ''}`}>
        <nav className={styles.mobileNav}>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`${styles.mobileLink}${item.active ? ` ${styles.mobileLinkActive}` : ''}`}
              onClick={() => setMobileOpen(false)}
            >
              {item.label}
              {item.external && <img src="/icons/external-link.svg" alt="" aria-hidden="true" />}
            </a>
          ))}
        </nav>
        <Button href="/download/" size="sm" fullWidth>
          Скачать
        </Button>
      </div>
    </header>
  );
}
