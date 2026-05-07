import { useState } from 'react';
import styles from './styles.module.scss';

interface FAQItem {
  question: string;
  answer: string;
}

const categories: Record<string, FAQItem[]> = {
  OpenIDE: [
    {
      question: 'Что такое OpenIDE?',
      answer:
        'OpenIDE — открытая среда разработки на базе IntelliJ Platform. Она предоставляет полноценные возможности профессиональной IDE с маркетплейсом плагинов, поддержкой множества языков программирования и интеграцией с AI-ассистентами. Базовая версия полностью бесплатна и распространяется с открытым исходным кодом.',
    },
    {
      question: 'Сколько стоит OpenIDE?',
      answer:
        'Базовая версия OpenIDE полностью бесплатна. OpenIDE Pro — платное решение для корпоративных пользователей, которое включает корпоративную поддержку по SLA, расширенные инструменты и юридически оформленную поставку. Подробнее — на странице «Бизнесу».',
    },
    {
      question: 'Какие языки программирования поддерживает OpenIDE?',
      answer:
        'OpenIDE поддерживает Kotlin, Java, TypeScript, JavaScript, Python, Go, C#, Rust и многие другие языки. Поддержка конкретных языков и фреймворков расширяется через плагины из маркетплейса.',
    },
    {
      question: 'Как скачать OpenIDE?',
      answer:
        'Перейдите на страницу загрузки и скачайте дистрибутив для своей операционной системы (macOS, Linux, Windows). Установка стандартная для вашей платформы.',
    },
    {
      question: 'Как работает поддержка AI-ассистентов?',
      answer:
        'OpenIDE интегрируется с AI-ассистентами через маркетплейс плагинов. Поддерживаются GigaCode, Yandex Code Assistant, Continue, KiloCode, Veai и другие. Все интеграции работают локально — исходный код не передаётся во внешние облачные сервисы.',
    },
  ],
  Маркетплейс: [
    {
      question: 'Как установить плагин из маркетплейса?',
      answer:
        'Откройте Settings → Plugins в IDE, перейдите на вкладку Marketplace, найдите нужный плагин через строку поиска и нажмите Install. После установки IDE предложит перезапуститься.',
    },
    {
      question: 'Как опубликовать свой плагин?',
      answer:
        'Зарегистрируйтесь в маркетплейсе, подготовьте плагин в соответствии с документацией для разработчиков, заполните карточку плагина и отправьте на модерацию. Обычно проверка занимает 1–3 рабочих дня.',
    },
    {
      question: 'Все ли плагины из маркетплейса бесплатны?',
      answer:
        'Большинство плагинов бесплатны. Некоторые авторы предлагают платные версии с расширенной функциональностью или поддержкой. Стоимость всегда указана на карточке плагина.',
    },
    {
      question: 'Совместимы ли плагины из JetBrains Marketplace с OpenIDE?',
      answer:
        'OpenIDE построена на IntelliJ Platform, поэтому многие плагины из JetBrains Marketplace технически совместимы. Однако мы рекомендуем использовать плагины из официального маркетплейса OpenIDE, прошедшие проверку на совместимость и безопасность.',
    },
  ],
};

function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}>
      <button className={styles.question} onClick={onToggle} aria-expanded={isOpen}>
        <span>{item.question}</span>
        <span className={styles.chevron} aria-hidden="true">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      {isOpen && (
        <div className={styles.answer}>
          <p>{item.answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQSection() {
  const [activeTab, setActiveTab] = useState<string>('OpenIDE');
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = categories[activeTab] ?? [];

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    setOpenIndex(0);
  };

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <h2 className={styles.title}>Часто задаваемые вопросы</h2>
          <nav className={styles.tabs} aria-label="FAQ категории">
            {Object.keys(categories).map((tab) => (
              <button
                key={tab}
                className={`${styles.tab} ${activeTab === tab ? styles.tabActive : ''}`}
                onClick={() => handleTabChange(tab)}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        <div className={styles.right}>
          {items.map((item, idx) => (
            <AccordionItem
              key={item.question}
              item={item}
              isOpen={openIndex === idx}
              onToggle={() => setOpenIndex(openIndex === idx ? null : idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
