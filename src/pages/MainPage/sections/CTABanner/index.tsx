import { useState } from 'react';
import styles from './styles.module.scss';

export default function CTABanner() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSent(true);
    }
  };

  return (
    <section className={styles.banner}>
      <div className={styles.inner}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            Если вы хотите поделиться идеями для развития OpenIDE или готовы присоединиться к
            сообществу — напишите нам
          </h2>
          <p className={styles.subtitle}>
            Мы читаем каждое обращение и учитываем пожелания при планировании новых возможностей
          </p>
        </div>

        <div className={styles.formWrap}>
          {!sent ? (
            <form className={styles.form} onSubmit={handleSubmit}>
              <input
                type="email"
                className={styles.input}
                placeholder="Ваш email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className={styles.submitBtn}>
                Написать нам
              </button>
            </form>
          ) : (
            <p className={styles.successMsg}>Спасибо! Мы свяжемся с вами.</p>
          )}
        </div>
      </div>
    </section>
  );
}
