import ProForm from './sections/ProForm';
import Hero from './sections/Hero';
import CommercialProduct from './sections/CommercialProduct';
import AdvantagesCards from './sections/AdvantagesCards';
import PurposesCards from './sections/PurposesCards';
import styles from './styles.module.scss';

export default function ProPage() {
  return (
    <>
      <Hero />
      <div className={styles.rainbowSection}>
        <div className={styles.blobs} aria-hidden="true">
          <span className={`${styles.blob} ${styles.blobWhite}`} />
          <span className={`${styles.blob} ${styles.blobRed}`} />
          <span className={`${styles.blob} ${styles.blobBlue1}`} />
          <span className={`${styles.blob} ${styles.blobBlue2}`} />
        </div>
        <div className={styles.sectionContent}>
          <PurposesCards />
          <AdvantagesCards />
          <CommercialProduct />
          <ProForm />
        </div>
      </div>
    </>
  );
}
