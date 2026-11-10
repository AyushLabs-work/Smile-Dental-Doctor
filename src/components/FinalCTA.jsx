import useReveal from '../hooks/useReveal'
import styles from './FinalCTA.module.css'

export default function FinalCTA({ onBookClick }) {
  const ref = useReveal()
  const waUrl = 'https://wa.me/919931219038?text=' + encodeURIComponent('Hello Dr. Khan, I would like to consult or schedule an appointment at Smile Dental Care Bagaha.')

  return (
    <section className={styles.ctaSection} aria-labelledby="final-cta-title" ref={ref}>
      <div className="container">
        <div className={`${styles.ctaBox} reveal`}>
          <div className={styles.contentWrap}>
            <span className={styles.topLabel}>Direct appointments available</span>
            <h2 className={styles.title} id="final-cta-title">
              Receive qualified dental care in Bagaha today
            </h2>
            <p className={styles.description}>
              Walk into Smile Dental Care on Bagha-1 Thana Road or connect directly with our clinic team for consultation times, emergency relief, and root canal diagnosis.
            </p>

            <div className={styles.actionButtons}>
              <a
                href="tel:+919931219038"
                className={styles.primaryAction}
                aria-label="Call clinic directly"
              >
                <svg width="20" height="20" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true">
                  <path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46Z"/>
                </svg>
                <span>Call +91 99312 19038</span>
              </a>

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappAction}
                aria-label="Chat on WhatsApp"
              >
                <svg width="20" height="20" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true">
                  <path d="M128,24A104,104,0,0,0,36.18,176.88L24.83,218.35a8,8,0,0,0,9.82,9.82l41.47-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L49.49,209.6l6.08-27.91a8,8,0,0,0-.67-6.54A88,88,0,1,1,128,216Zm40-64a24,24,0,0,1-24,24,56.06,56.06,0,0,1-56-56,24,24,0,0,1,24-24,8,8,0,0,1,8,8v12a8,8,0,0,1-3.64,6.71l-8.62,5.75a39.81,39.81,0,0,0,23.8,23.8l5.75-8.62A8,8,0,0,1,148,136h12a8,8,0,0,1,8,8Z"/>
                </svg>
                <span>WhatsApp Message</span>
              </a>

              {onBookClick && (
                <button
                  type="button"
                  className={styles.secondaryAction}
                  onClick={onBookClick}
                  aria-label="Book appointment slot"
                >
                  <svg width="20" height="20" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true">
                    <path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Z"/>
                  </svg>
                  <span>Schedule Consultation</span>
                </button>
              )}
            </div>

            <div className={styles.subTextRow}>
              <span>✓ No mandatory booking fee</span>
              <span>✓ Digital X-ray facility on premises</span>
              <span>✓ Open 6 days weekly</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
