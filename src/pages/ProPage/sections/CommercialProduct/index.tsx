import styles from './styles.module.scss';

const listItems = [
  'Базовая версия OpenIDE остаётся бесплатной и с открытым исходным кодом',
  'Маркетплейс и плагины продолжают развиваться открыто',
  'Бесплатный доступ к Pro-версии предусмотрен для образовательных программ, open source-контрибьюторов и авторам контента на медиа-площадках',
];

export default function CommercialProduct() {
  return (
    <section className={styles.commercialProduct}>
      <div className={styles.inner}>
        <div className={styles.productImage}>
          <img
            src="/images/pro/com-product.png"
            alt="OpenIDE Pro коммерческий продукт"
            width={580}
            height={400}
          />
        </div>

        <div className={styles.content}>
          <h2 className={styles.title}>Коммерческий продукт с открытой основой</h2>
          <p className={styles.description}>
            OpenIDE Pro — платное решение, потому что корпоративная поддержка, SLA и развитие
            профессиональных инструментов требуют устойчивых ресурсов и ответственности за
            результат.
          </p>
          <p className={styles.subtitle}>При этом:</p>
          <ul className={styles.list}>
            {listItems.map((item, idx) => (
              <li key={idx} className={styles.listItem}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
