import useReveal from '../hooks/useReveal'
import styles from './Services.module.css'

const treatments = [
  {
    image: '/Site%20Image/Tooth%20Extraction%20(Gentle%20Care).png',
    badge: 'Gentle Care',
    title: 'Tooth Extraction',
    benefit: 'Safe removal of decayed or painful teeth with local anaesthesia and gentle post-care guidance.',
    points: ['Painless extraction technique', 'Preserves natural jaw structure', 'Clear recovery instructions']
  },
  {
    image: '/Site%20Image/Root%20Canal%20Treatment%20(Tooth%20Saver).png',
    badge: 'Tooth Saver',
    title: 'Root Canal Treatment (RCT)',
    benefit: 'Save deep cavity teeth from extraction through precision root cleaning and biocompatible sealing.',
    points: ['Stops throbbing toothaches', 'Restores natural chewing power', 'Single or multi-visit protocol']
  },
  {
    image: '/Site%20Image/Dental%20Capping%20&%20Crowns%20(Long-lasting).png',
    badge: 'Restoration',
    title: 'Dental Capping & Crowns',
    benefit: 'Custom manufactured caps that protect weak or fractured teeth with durable tooth-colored materials.',
    points: ['Ceramic and zirconia crowns', 'Exact anatomical bite fit', 'Long term fracture protection']
  },
  {
    image: '/Site%20Image/Braces%20&%20Orthodontics%20(Teeth%20Alignment).png',
    badge: 'Alignment',
    title: 'Braces & Orthodontics',
    benefit: 'Correct overlapping, crooked, or spaced teeth for balanced aesthetics and optimal chewing alignment.',
    points: ['Adult and pediatric braces', 'Bite correction therapy', 'Periodic progress monitoring']
  },
  {
    image: '/Site%20Image/Dental%20X-Ray%20Diagnosis%20(In-house%20Lab).png',
    badge: 'In-house Lab',
    title: 'Dental X-Ray Diagnosis',
    benefit: 'On-site dental radiography taken during your visit so treatment decisions happen without external travel.',
    points: ['Instant digital results', 'Pinpoint bone & root view', 'Zero external lab delays']
  },
  {
    image: '/Site%20Image/Pulser%20&%20Gum%20Treatment%20(Tissue%20Therapy).png',
    badge: 'Therapy',
    title: 'Pulser & Gum Treatment',
    benefit: 'Specialized therapy to treat bleeding gums, sensitivity, and tissue swelling for complete oral health.',
    points: ['Deep periodontal cleaning', 'Soothes persistent soreness', 'Promotes gum tissue healing']
  }
]

export default function Services({ onBookClick }) {
  const ref = useReveal()

  return (
    <section className={styles.servicesSection} id="services" aria-labelledby="services-title" ref={ref}>
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <span className={styles.eyebrow}>Clinical procedures</span>
          <h2 className={styles.sectionTitle} id="services-title">
            Comprehensive oral care under one roof
          </h2>
          <p className={styles.sectionDescription}>
            Every treatment is performed using sterilised equipment and modern clinical tools at Bagaha-1.
          </p>
        </div>

        <div className={styles.cardsGrid}>
          {treatments.map((t) => (
            <article key={t.title} className={`${styles.serviceCard} reveal`}>
              
              {/* Specialized High-Resolution Site Image Header (Part B3 Nested Radius) */}
              <div className={styles.cardImageWrapper}>
                <img
                  src={t.image}
                  alt={t.title + ' at Smile Dental Care Bagaha'}
                  className={styles.cardImg}
                  loading="lazy"
                  width="500"
                  height="300"
                />
                <span className={styles.serviceBadge}>{t.badge}</span>
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.cardHeading}>{t.title}</h3>
                <p className={styles.cardBenefit}>{t.benefit}</p>

                <ul className={styles.pointList} role="list">
                  {t.points.map((pt, i) => (
                    <li key={i} className={styles.pointItem}>
                      <svg width="14" height="14" viewBox="0 0 256 256" fill="currentColor" className={styles.bulletCheck} aria-hidden="true">
                        <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"/>
                      </svg>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                {onBookClick && (
                  <button
                    type="button"
                    className={styles.consultLink}
                    onClick={onBookClick}
                    aria-label={`Consult about ${t.title}`}
                  >
                    <span>Consult on this</span>
                    <svg width="14" height="14" viewBox="0 0 256 256" fill="currentColor">
                      <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"/>
                    </svg>
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
