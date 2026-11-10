import styles from './Footer.module.css'

const servicesMenu = [
  'Tooth extraction',
  'Root canal therapy (RCT)',
  'Crown capping',
  'Braces & Orthodontics',
  'Digital dental X-ray',
  'Pulser tissue therapy'
]

const clinicMenu = [
  { label: 'Patient Procedure', href: '#how-it-works' },
  { label: 'Inside the Clinic', href: '#gallery' },
  { label: 'Patient Testimonials', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Location & Map', href: '#contact' },
  { label: 'Google Business Profile', href: 'https://maps.app.goo.gl/So9dtQ5WSZC9t9fM6', external: true }
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>

          {/* Col 1: Brand & identity */}
          <div className={styles.brandCol}>
            <div className={styles.brandTitleWrap}>
              <div className={styles.logoBadge} aria-hidden="true">🦷</div>
              <div>
                <span className={styles.footerBrandName}>Smile Dental Care</span>
                <span className={styles.footerBrandHindi}>स्माइल डेंटल केयर</span>
              </div>
            </div>
            <p className={styles.footerDescription}>
              Providing high-standard oral healthcare, orthodontic solutions, and emergency tooth relief for patients across Bagaha-1 and West Champaran.
            </p>
            <div className={styles.emergencyTag}>
              <span className={styles.emergencyLabel}>Appointment & Queries:</span>
              <a href="tel:+919931219038" className={styles.emergencyNumber}>+91 99312 19038</a>
            </div>
          </div>

          {/* Col 2: Treatments */}
          <div className={styles.linksCol}>
            <span className={styles.colHeading}>Treatments</span>
            <ul className={styles.linksList} role="list">
              {servicesMenu.map((item) => (
                <li key={item}>
                  <a href="#services" className={styles.footerLink}>{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Navigation */}
          <div className={styles.linksCol}>
            <span className={styles.colHeading}>Clinic Guide</span>
            <ul className={styles.linksList} role="list">
              {clinicMenu.map((nav) => (
                <li key={nav.label}>
                  <a
                    href={nav.href}
                    className={styles.footerLink}
                    {...(nav.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  >
                    {nav.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyrightText}>
            © 2026 Smile Dental Care. Bagha 1 Thana Road, Near Bagaha-1 Post Office, Bihar 845101.
          </p>
          <div className={styles.bottomLinks}>
            <a href="#services" className={styles.legalLink}>Services</a>
            <a href="#contact" className={styles.legalLink}>Location</a>
            <a href="tel:+919931219038" className={styles.legalLink}>Emergency</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
