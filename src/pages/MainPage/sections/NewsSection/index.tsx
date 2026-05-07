import styles from './styles.module.scss';

interface NewsCard {
  tag: string;
  date: string;
  title: string;
  excerpt: string;
  href: string;
}

const news: NewsCard[] = [
  {
    tag: 'Обновление',
    date: '25 апреля 2026',
    title: 'OpenIDE 1.4: поддержка TypeScript Go и улучшения LSP',
    excerpt:
      'В новой версии добавлен экспериментальный нативный TypeScript Language Server на Go, ускоряющий индексацию в больших проектах в 3–5 раз.',
    href: '/blog/openide-1-4/',
  },
  {
    tag: 'Маркетплейс',
    date: '14 апреля 2026',
    title: 'Маркетплейс OpenIDE перешагнул отметку 200 плагинов',
    excerpt:
      'Количество опубликованных плагинов превысило 200. Разбираем самые популярные новинки: AI-ассистенты, темы и DevOps-интеграции.',
    href: '/blog/marketplace-200/',
  },
  {
    tag: 'AI',
    date: '2 апреля 2026',
    title: 'Как использовать GigaCode и Yandex Code Assistant в OpenIDE',
    excerpt:
      'Пошаговая инструкция по подключению отечественных AI-ассистентов в OpenIDE с советами по настройке для корпоративных проектов.',
    href: '/blog/ai-assistants-guide/',
  },
];

export default function NewsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.title}>Новости OpenIDE</h2>
          <a href="/blog/" className={styles.allLink}>
            Все новости →
          </a>
        </div>

        <div className={styles.grid}>
          {news.map((item) => (
            <a key={item.href} href={item.href} className={styles.card}>
              <div className={styles.cardImg} aria-hidden="true">
                <div className={styles.cardImgPlaceholder} />
              </div>
              <div className={styles.cardBody}>
                <div className={styles.cardMeta}>
                  <span className={styles.cardTag}>{item.tag}</span>
                  <span className={styles.cardDate}>{item.date}</span>
                </div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardExcerpt}>{item.excerpt}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
