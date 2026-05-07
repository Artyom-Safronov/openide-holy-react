import { expect, test, describe } from 'vitest';
import { render } from 'vitest-browser-react';
import { page } from '@vitest/browser/context';
import { HeaderNavLink } from './HeaderNavLink.tsx';

describe('HeaderNavLink', () => {
  test('renders label and href', async () => {
    await render(<HeaderNavLink href="/about/" label="О нас" />);

    const link = page.getByRole('link', { name: 'О нас' });
    await expect.element(link).toBeInTheDocument();
    await expect.element(link).toHaveAttribute('href', '/about/');
  });

  test('does not render external icon by default', async () => {
    await render(<HeaderNavLink href="/about/" label="О нас" />);

    await expect.element(page.getByTestId('external-icon')).not.toBeInTheDocument();
  });

  test('renders external icon when external=true', async () => {
    await render(<HeaderNavLink href="/source/" label="Исходный код" external />);

    const icon = page.getByTestId('external-icon');
    await expect.element(icon).toBeInTheDocument();
    await expect.element(icon).toHaveAttribute('src', '/icons/external-link.svg');
  });

  test('applies active class when active=true', async () => {
    await render(<HeaderNavLink href="/pro/" label="Бизнесу" active />);

    await expect.element(page.getByRole('link', { name: 'Бизнесу' })).toHaveClass('navLinkActive');
  });

  test('does not apply active class when active=false', async () => {
    await render(<HeaderNavLink href="/pro/" label="Бизнесу" />);

    await expect
      .element(page.getByRole('link', { name: 'Бизнесу' }))
      .not.toHaveClass('navLinkActive');
  });
});
