import styles from './styles.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  type?: 'button' | 'submit' | 'reset';
  size?: 'sm' | 'md';
  fullWidth?: boolean;
  variant?: 'default' | 'success';
  disabled?: boolean;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
  target?: string;
  rel?: string;
  'aria-label'?: string;
}

export default function Button({
  children,
  href,
  type = 'button',
  size = 'md',
  fullWidth = false,
  variant = 'default',
  disabled = false,
  className,
  onClick,
  target,
  rel,
  'aria-label': ariaLabel,
}: ButtonProps) {
  const cls = [
    styles.button,
    styles[size],
    variant === 'success' && styles.success,
    fullWidth && styles.fullWidth,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  if (href !== undefined) {
    return (
      <a
        href={disabled ? undefined : href}
        className={cls}
        onClick={onClick as React.MouseEventHandler<HTMLAnchorElement>}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        aria-disabled={disabled || undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      className={cls}
      onClick={onClick as React.MouseEventHandler<HTMLButtonElement>}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  );
}
