import styles from './TaglineReveal.module.css'

export default function TaglineReveal() {
  return (
    <section className={styles.taglineSection} aria-label="Our Clinical Philosophy">
      <div className="container">
        <div className={styles.taglineGrid}>
          
          {/* Left Column: Eyebrow + Crisp Full-Color Headline + Value Pillars */}
          <div className={styles.textColumn}>
            <div className={styles.eyebrowTag}>
              <span className={styles.eyebrowBeacon} aria-hidden="true" />
              <span>Our Clinical Philosophy</span>
            </div>

            {/* Crisp, solid, high-contrast dark slate text */}
            <h2 className={styles.taglineHeading}>
              Relieving dental pain with care and bringing genuine confidence back to your smile.
            </h2>

            <div className={styles.philosophyList} role="list">
              <div className={styles.pointItem}>
                <div className={styles.checkIconWrap} aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 256 256" fill="currentColor">
                    <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"/>
                  </svg>
                </div>
                <div className={styles.pointTextCol}>
                  <strong className={styles.pointTitle}>Tooth Preservation First</strong>
                  <span className={styles.pointDesc}>Prioritizing biological root retention over unnecessary extractions</span>
                </div>
              </div>

              <div className={styles.pointItem}>
                <div className={styles.checkIconWrap} aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 256 256" fill="currentColor">
                    <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"/>
                  </svg>
                </div>
                <div className={styles.pointTextCol}>
                  <strong className={styles.pointTitle}>Sterile Clinic Standards</strong>
                  <span className={styles.pointDesc}>Hospital grade autoclave sterilization and disposable barriers</span>
                </div>
              </div>

              <div className={styles.pointItem}>
                <div className={styles.checkIconWrap} aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 256 256" fill="currentColor">
                    <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"/>
                  </svg>
                </div>
                <div className={styles.pointTextCol}>
                  <strong className={styles.pointTitle}>Transparent Consultation</strong>
                  <span className={styles.pointDesc}>Clear explanation of costs and options before any work begins</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Stage with Nested Radius (SKILL.md Part B3) */}
          <div className={styles.imageColumn}>
            <div className={styles.outerFrame}>
              <div className={styles.imageInner}>
                <img
                  src="/Site%20Image/Our%20Philosophy%20(main%20image).png"
                  alt="Smile Dental Care clinical consultation and patient smile confidence"
                  className={styles.philosophyImg}
                  loading="lazy"
                  width="680"
                  height="500"
                />

                {/* Overlaid Medical Badge */}
                <div className={styles.imageBadge}>
                  <span className={styles.badgeBeacon} aria-hidden="true" />
                  <span>Patient-First Philosophy · Bagaha-1</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
