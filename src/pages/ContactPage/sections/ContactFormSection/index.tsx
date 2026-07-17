import { useState, useRef, type ChangeEvent, type FormEvent } from 'react';
import styles from './styles.module.scss';

function TelegramIcon() {
  return <img src="/icons/social/telegram.svg" width={20} height={20} alt="" aria-hidden="true" />;
}

function VKIcon() {
  return <img src="/icons/social/vk.svg" width={20} height={20} alt="" aria-hidden="true" />;
}

function YouTubeIcon() {
  return <img src="/icons/social/yt.svg" width={20} height={20} alt="" aria-hidden="true" />;
}

function RuTubeIcon() {
  return <img src="/icons/social/rt.svg" width={20} height={20} alt="" aria-hidden="true" />;
}

function GitFlicIcon() {
  return <img src="/icons/social/gitFlic.svg" width={20} height={20} alt="" aria-hidden="true" />;
}

function EnvelopeIcon() {
  return (
    <img src="/icons/languages/envelope.svg" width={20} height={20} alt="" aria-hidden="true" />
  );
}

const socialLinks = [
  { Icon: TelegramIcon, label: 'Telegram', href: 'https://t.me/openide' },
  { Icon: VKIcon, label: 'VK', href: 'https://vk.com/openide' },
  { Icon: YouTubeIcon, label: 'YouTube', href: 'https://youtube.com/@openide' },
  { Icon: RuTubeIcon, label: 'RuTube', href: 'https://rutube.ru' },
  { Icon: GitFlicIcon, label: 'GitFlic', href: 'https://gitflic.ru/project/openide' },
];

const contactLinks = [
  { Icon: TelegramIcon, label: 'Telegram-чат', href: 'https://t.me/openide_chat' },
  { Icon: EnvelopeIcon, label: 'info@openide.ru', href: 'mailto:info@openide.ru' },
];

interface FormState {
  name: string;
  email: string;
  message: string;
  consent: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  consent?: string;
}

export default function ContactFormSection() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '', consent: false });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [fileName, setFileName] = useState('');
  const fileRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
    setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const validate = (): FormErrors => {
    const e: FormErrors = {};
    if (!form.name.trim()) e.name = 'Введите имя';
    if (!form.email.trim()) e.email = 'Введите email';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Некорректный email';
    if (!form.message.trim()) e.message = 'Введите сообщение';
    if (!form.consent) e.consent = 'Необходимо согласие';
    return e;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setSubmitting(true);
    // await fetch('https://example-fetch.com/post');
    setSubmitting(false);
    setForm({ name: '', email: '', message: '', consent: false });
    setFileName('');
  };

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.formCard}>
          <h2 className={styles.formTitle}>Связаться с нами</h2>
          <form onSubmit={handleSubmit} noValidate>
            <div className={styles.field}>
              <label className={styles.srOnly} htmlFor="name">
                Имя
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Имя *"
                className={`${styles.input}${errors.name ? ` ${styles.inputError}` : ''}`}
                value={form.name}
                onChange={handleChange}
                disabled={submitting}
              />
              {errors.name && <span className={styles.errorText}>{errors.name}</span>}
            </div>
            <div className={styles.field}>
              <label className={styles.srOnly} htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email *"
                className={`${styles.input}${errors.email ? ` ${styles.inputError}` : ''}`}
                value={form.email}
                onChange={handleChange}
                disabled={submitting}
              />
              {errors.email && <span className={styles.errorText}>{errors.email}</span>}
            </div>
            <div className={styles.field}>
              <label className={styles.srOnly} htmlFor="message">
                Сообщение
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Сообщение"
                className={`${styles.textarea}${errors.message ? ` ${styles.inputError}` : ''}`}
                value={form.message}
                onChange={handleChange}
                disabled={submitting}
                rows={5}
              />
              {errors.message && <span className={styles.errorText}>{errors.message}</span>}
            </div>
            <div className={styles.consentRow}>
              <label className={styles.consentLabel}>
                <input
                  type="checkbox"
                  name="consent"
                  checked={form.consent}
                  onChange={handleChange}
                  className={styles.checkbox}
                  disabled={submitting}
                />
                <span>
                  Я соглашаюсь на{' '}
                  <a href="/privacy" className={styles.consentLink}>
                    обработку персональных данных
                  </a>
                </span>
              </label>
              {errors.consent && <span className={styles.errorText}>{errors.consent}</span>}
            </div>
            <div className={styles.actions}>
              <button
                type="button"
                className={styles.fileBtn}
                onClick={() => fileRef.current?.click()}
                disabled={submitting}
              >
                {fileName || 'Прикрепить файл'}
              </button>
              <input
                ref={fileRef}
                type="file"
                hidden
                onChange={(e) => setFileName(e.target.files?.[0]?.name ?? '')}
              />
              <button type="submit" className={styles.submitBtn} disabled={submitting}>
                {submitting ? <span className={styles.spinner} /> : 'Отправить'}
              </button>
            </div>
          </form>
        </div>

        <aside className={styles.sidebar}>
          <div className={styles.sideBlock}>
            <h3 className={styles.sideTitle}>Присоединяйтесь</h3>
            <ul className={styles.sideList}>
              {socialLinks.map(({ Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className={styles.sideLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon />
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <hr className={styles.divider} />
          <div className={styles.sideBlock}>
            <h3 className={styles.sideTitle}>Свяжитесь с нами</h3>
            <ul className={styles.sideList}>
              {contactLinks.map(({ Icon, label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className={styles.sideLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon />
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
