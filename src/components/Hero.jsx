import useReveal from '../hooks/useReveal'
import styles from './Hero.module.css'

export default function Hero() {
  const heroRef = useReveal()
  const waUrl = 'https://wa.me/919931219038?text=' + encodeURIComponent('Hello Dr. Khan, I would like to consult or schedule an appointment at Smile Dental Care Bagaha.')

  return (
    <section className={styles.heroSection} aria-labelledby="hero-title">
      <div className="container">
        <div className={styles.heroGrid}>

          {/* Left Column: Outcome Copy */}
          <div className={styles.heroContent}>

            {/* Subtle Eyebrow Tag */}
            <div className={styles.eyebrowTag}>
              <span className={styles.eyebrowBeacon} aria-hidden="true" />
              <span>Dental Clinic & Orthodontics · Bagaha-1</span>
            </div>

            {/* Main Headline */}
            <h1 className={styles.heroTitle} id="hero-title">
              Complete dental care <br />
              for you and your family <br />
              in Bagaha
            </h1>

            {/* Subheadline with clear value prop */}
            <p className={styles.heroLead}>
              Modern clinical dentistry with on-site X-ray diagnosis, root canal therapy, and gentle extractions. Walk into our clinic on Bagaha Thana Road or chat directly on WhatsApp.
            </p>

            {/* CTAs: Primary phone call + Direct WhatsApp consultation */}
            <div className={styles.ctaRow} id="hero-cta-row">
              <a
                href="tel:+919931219038"
                className={styles.primaryCta}
                aria-label="Call clinic directly to consult"
              >
                <span className={styles.ctaIconPulse}>
                  <svg width="18" height="18" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true">
                    <path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46Z"/>
                  </svg>
                </span>
                <span>Call to consult</span>
              </a>

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappCta}
                aria-label="Direct WhatsApp message to doctor"
              >
                <svg width="18" height="18" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true">
                  <path d="M128,24A104,104,0,0,0,36.18,176.88L24.83,218.35a8,8,0,0,0,9.82,9.82l41.47-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L49.49,209.6l6.08-27.91a8,8,0,0,0-.67-6.54A88,88,0,1,1,128,216Zm40-64a24,24,0,0,1-24,24,56.06,56.06,0,0,1-56-56,24,24,0,0,1,24-24,8,8,0,0,1,8,8v12a8,8,0,0,1-3.64,6.71l-8.62,5.75a39.81,39.81,0,0,0,23.8,23.8l5.75-8.62A8,8,0,0,1,148,136h12a8,8,0,0,1,8,8Z"/>
                </svg>
                <span>WhatsApp chat</span>
              </a>
            </div>

            {/* Structured Proof Row with dividers */}
            <div className={styles.proofStrip}>
              <div className={styles.proofItem}>
                <span className={styles.statusPulseDot} aria-hidden="true">
                  <span className={styles.pulseRing}></span>
                  <span className={styles.coreDot}></span>
                </span>
                <span className={styles.proofText}>Open today until 5:00 PM</span>
              </div>

              <div className={styles.proofDivider} aria-hidden="true" />

              <div className={styles.proofItem}>
                <svg width="16" height="16" viewBox="0 0 256 256" fill="currentColor" className={styles.checkIcon} aria-hidden="true">
                  <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"/>
                </svg>
                <span className={styles.proofText}>In-house digital X-ray</span>
              </div>

              <div className={styles.proofDivider} aria-hidden="true" />

              <div className={styles.proofItem}>
                <svg width="16" height="16" viewBox="0 0 256 256" fill="currentColor" className={styles.pinIcon} aria-hidden="true">
                  <path d="M128,16a96,96,0,1,0,96,96A96.11,96.11,0,0,0,128,16Zm0,168a72,72,0,1,1,72-72A72.08,72.08,0,0,1,128,184Zm0-120a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,64Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,144Z"/>
                </svg>
                <span className={styles.proofText}>Bagaha-1 Thana Road</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Stage with anchored badges */}
          <div className={styles.visualStage}>
            
            {/* Outer Card with exact nested radius: outer 24px, gap 12px -> inner 12px */}
            <div className={styles.showcaseCard}>

              {/* Main Photo Showcase */}
              <div className={styles.mainPhotoWrapper}>
                <img
                  src="/img/Screenshot 2026-11-10 081838.png"
                  alt="Smile Dental Care clinic waiting lounge with active patients"
                  className={styles.mainHeroImg}
                  width="720"
                  height="450"
                  loading="eager"
                />

                {/* Overlaid Verified Clinic Status Badge */}
                <div className={styles.liveFacilityPill}>
                  <span className={styles.liveGreenBeacon}></span>
                  <span>Active Clinic Facility · Bagaha-1</span>
                </div>

                {/* Anchored Clean Google Rating Tag */}
                <div className={styles.anchoredRatingTag}>
                  <div className={styles.ratingStarIcon}>★</div>
                  <div className={styles.ratingTextCol}>
                    <span className={styles.ratingValue}>4.7 / 5.0</span>
                    <span className={styles.ratingSource}>32 Google reviews</span>
                  </div>
                </div>
              </div>

              {/* Dual Secondary Images with Treatment Context */}
              <div className={styles.subGrid}>
                
                <div className={styles.subPhotoWrapper}>
                  <img
                    src="/img/Screenshot 2026-11-10 081451.png"
                    alt="Dentist performing dental examination"
                    className={styles.subImg}
                    width="320"
                    height="220"
                    loading="eager"
                  />
                  <div className={styles.subCaption}>
                    <span className={styles.captionDot}></span>
                    <span>Sterile operatory suite</span>
                  </div>
                </div>

                <div className={styles.subPhotoWrapper}>
                  <img
                    src="/img/Screenshot 2026-11-10 081541.png"
                    alt="Dental operatory chair and medical equipment"
                    className={styles.subImg}
                    width="320"
                    height="220"
                    loading="eager"
                  />
                  <div className={styles.subCaption}>
                    <span className={styles.captionDot}></span>
                    <span>Modern clinical chair</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
