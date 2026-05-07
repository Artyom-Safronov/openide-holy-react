import styles from './styles.module.scss';

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  active?: boolean;
}

export function HeaderNavLink({ href, label, active, external }: NavItem) {
  return (
    <a href={href} className={`${styles.navLink}${active ? ` ${styles.navLinkActive}` : ''}`}>
      {label}
      {external && (
        <img src="/icons/external-link.svg" alt="" aria-hidden="true" data-testid="external-icon" />
      )}
    </a>
  );
}
