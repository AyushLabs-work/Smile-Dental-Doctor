import useReveal from '../hooks/useReveal'
import styles from './Contact.module.css'

export default function Contact() {
  const ref = useReveal()

  return (
    <section className={styles.contactSection} id="contact" aria-labelledby="contact-title" ref={ref}>
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <span className={styles.eyebrow}>Clinic location</span>
          <h2 className={styles.sectionTitle} id="contact-title">
            Visit Smile Dental Care in Bagaha
          </h2>
          <p className={styles.sectionDescription}>
            Easily accessible near the Bagaha-1 Post Office with parking space outside.
          </p>
        </div>

        <div className={styles.contactGrid}>

          {/* Left card: Structured details */}
          <div className={`${styles.infoCard} reveal`}>
            <div className={styles.infoBlock}>
              <div className={styles.iconSquare} aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 256 256" fill="currentColor">
                  <path d="M128,16a96,96,0,1,0,96,96A96.11,96.11,0,0,0,128,16Zm0,168a72,72,0,1,1,72-72A72.08,72.08,0,0,1,128,184Zm0-120a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,64Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,144Z"/>
                </svg>
              </div>
              <div className={styles.blockBody}>
                <span className={styles.label}>Full Address</span>
                <p className={styles.value}>
                  Smile Dental Care, Bagha 1 Thana Road,<br />
                  Near Bagaha-1 Post Office, Bagaha-1,<br />
                  Bihar – 845101
                </p>
              </div>
            </div>

            <div className={styles.infoBlock}>
              <div className={styles.iconSquare} aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 256 256" fill="currentColor">
                  <path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46Z"/>
                </svg>
              </div>
              <div className={styles.blockBody}>
                <span className={styles.label}>Direct Telephone</span>
                <p className={styles.value}>
                  <a href="tel:+919931219038" className={styles.linkUnderline}>
                    +91 99312 19038
                  </a>
                </p>
              </div>
            </div>

            <div className={styles.infoBlock}>
              <div className={styles.iconSquare} aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 256 256" fill="currentColor">
                  <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"/>
                </svg>
              </div>
              <div className={styles.blockBody}>
                <span className={styles.label}>Consultation Hours</span>
                <p className={styles.value}>
                  Open 6 days a week · Closing at 5:00 PM
                </p>
              </div>
            </div>

            <div className={styles.infoBlock}>
              <div className={styles.iconSquare} aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 256 256" fill="currentColor">
                  <path d="M224,96a8,8,0,0,1-8,8H176l-13.33,56H208a8,8,0,0,1,0,16H159.33L145.78,234a8,8,0,0,1-15.56-3.72L143.33,176H103.33L89.78,234a8,8,0,0,1-15.56-3.72L87.33,176H40a8,8,0,0,1,0-16H90.67L104,104H56a8,8,0,0,1,0-16H107.33L120.22,30a8,8,0,0,1,15.56,3.72L123.33,88h40l12.89-54.26a8,8,0,1,1,15.56,3.72L179.33,88H216A8,8,0,0,1,224,96ZM159.33,104h-40L106,160h40Z"/>
                </svg>
              </div>
              <div className={styles.blockBody}>
                <span className={styles.label}>Google Plus Code</span>
                <p className={styles.value}>33RV+XP, Bagaha-1, Bihar</p>
              </div>
            </div>

            <div className={styles.cardActions}>
              <a
                href="https://maps.app.goo.gl/So9dtQ5WSZC9t9fM6"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.openMapBtn}
              >
                <span>Navigate via Google Maps</span>
                <svg width="18" height="18" viewBox="0 0 256 256" fill="currentColor">
                  <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right card: Map interactive frame */}
          <div className={`${styles.mapContainer} reveal`}>
            <div className={styles.mapInner}>
              <iframe
                title="Google Maps Location for Smile Dental Care"
                src="https://maps.google.com/maps?q=Bagaha+1+Thana+Road+Bihar+845101&output=embed"
                className={styles.mapIframe}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
