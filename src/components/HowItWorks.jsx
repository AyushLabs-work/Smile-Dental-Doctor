import useReveal from '../hooks/useReveal'
import styles from './HowItWorks.module.css'

const steps = [
  {
    step: '01',
    image: '/img/Screenshot 2026-11-10 081806.png',
    tag: 'Step 1 · Consultation',
    title: 'Consultation & X-Ray Examination',
    benefit: 'Pinpoint diagnostic accuracy',
    text: 'Walk into our clinic on Bagaha Thana Road or call ahead. Dr. Khan examines your teeth and conducts an instant on-site digital X-ray to diagnose the exact issue.'
  },
  {
    step: '02',
    image: '/img/Screenshot 2026-11-10 081508.png',
    tag: 'Step 2 · Treatment Plan',
    title: 'Transparent Treatment Options',
    benefit: 'Clear pricing before work begins',
    text: 'You receive an honest explanation of options—whether saving your tooth with RCT or simple capping—along with transparent costs and recovery times.'
  },
  {
    step: '03',
    image: '/img/Screenshot 2026-11-10 081615.png',
    tag: 'Step 3 · Clinical Care',
    title: 'Painless Care & Post-visit Follow-up',
    benefit: 'Autoclave sterile safety',
    text: 'Treatment is carried out in our sterile operatory using local anaesthesia. You leave with prescribed medications and direct WhatsApp doctor access.'
  }
]

export default function HowItWorks({ onBookClick }) {
  const ref = useReveal()

  return (
    <section className={styles.processSection} id="how-it-works" aria-labelledby="process-title" ref={ref}>
      <div className="container">
        
        {/* Section Header */}
        <div className={`${styles.header} reveal`}>
          <div className={styles.eyebrowTag}>
            <span className={styles.eyebrowBeacon} aria-hidden="true" />
            <span>Patient Journey</span>
          </div>
          <h2 className={styles.sectionTitle} id="process-title">
            Simple, transparent dental care
          </h2>
          <p className={styles.sectionDescription}>
            Here is what to expect from your first phone call or walk-in to leaving with a pain-free, healthy smile.
          </p>
        </div>

        {/* Step Cards with Real Photos & Step Indicators */}
        <div className={styles.stepsGrid}>
          {steps.map((st) => (
            <article key={st.step} className={`${styles.stepCard} reveal`}>
              
              {/* Photo Header with Step Pill (Part B3 Nested Radius) */}
              <div className={styles.stepImageWrapper}>
                <img
                  src={st.image}
                  alt={st.title + ' at Smile Dental Care Bagaha'}
                  className={styles.stepImg}
                  loading="lazy"
                  width="400"
                  height="240"
                />
                <div className={styles.stepBadgePill}>
                  <span className={styles.badgeNum}>{st.step}</span>
                  <span className={styles.badgeDivider} aria-hidden="true" />
                  <span className={styles.badgeTag}>{st.tag}</span>
                </div>
              </div>

              {/* Step Content */}
              <div className={styles.stepBody}>
                <span className={styles.benefitHighlight}>{st.benefit}</span>
                <h3 className={styles.stepHeading}>{st.title}</h3>
                <p className={styles.stepParagraph}>{st.text}</p>
              </div>

            </article>
          ))}
        </div>

        {/* Mid-journey Conversion Anchor */}
        <div className={`${styles.journeyCtaRow} reveal`}>
          <span className={styles.journeyNote}>
            No mandatory advance booking required · Same-day walk-ins welcomed
          </span>
          {onBookClick && (
            <button
              type="button"
              className={styles.journeyBtn}
              onClick={onBookClick}
              aria-label="Book a consultation slot"
            >
              <span>Schedule your visit</span>
              <svg width="16" height="16" viewBox="0 0 256 256" fill="currentColor">
                <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"/>
              </svg>
            </button>
          )}
        </div>

      </div>
    </section>
  )
}
