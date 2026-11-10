import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#how-it-works', label: 'Procedure' },
  { href: '#gallery', label: 'Clinic Tour' },
  { href: '#reviews', label: 'Testimonials' },
  { href: '#faq', label: 'Questions' },
  { href: '#contact', label: 'Visit Us' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.35 }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className={styles.navWrapper}>
        <nav className={styles.navBar} aria-label="Main navigation">
          <a href="#" className={styles.brand} aria-label="Smile Dental Care home">
            <div className={styles.brandBadge} aria-hidden="true">
              <svg width="20" height="20" viewBox="0 0 256 256" fill="currentColor">
                <path d="M213.09,36.91a48.09,48.09,0,0,0-67.88,0L128,54.12,110.79,36.91a48,48,0,0,0-67.88,67.88l16,16C60.59,133.79,56,163.3,56,192a16,16,0,0,0,16,16c14.29,0,24-9.47,31.37-17.49C109.44,183.25,116.62,176,128,176s18.56,7.25,24.63,14.51C160,198.53,169.71,208,184,208a16,16,0,0,0,16-16c0-28.7-4.59-58.21-2.9-71.21l16-16a48.09,48.09,0,0,0,0-67.88Z"/>
              </svg>
            </div>
            <div className={styles.brandMeta}>
              <span className={styles.brandTitle}>Smile Dental Care</span>
              <span className={styles.brandHindi}>स्माइल डेंटल केयर</span>
            </div>
          </a>

          <ul className={styles.navMenu} role="list">
            {navLinks.map(({ href, label }) => {
              const isActive = activeSection === href.replace('#', '')
              return (
                <li key={href}>
                  <a
                    href={href}
                    className={`${styles.navItem} ${isActive ? styles.navItemActive : ''}`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {label}
                  </a>
                </li>
              )
            })}
          </ul>

          <div className={styles.actions}>
            <a
              href="tel:+919931219038"
              className={styles.phoneLink}
              aria-label="Call clinic at +91 99312 19038"
            >
              <svg width="16" height="16" viewBox="0 0 256 256" fill="currentColor" aria-hidden="true">
                <path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46Z"/>
              </svg>
              <span>+91 99312 19038</span>
            </a>

            <a
              href="tel:+919931219038"
              className={styles.appointmentButton}
            >
              Consult Dentist
            </a>

            <button
              className={styles.menuToggle}
              aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span className={`${styles.hamburgerIcon} ${menuOpen ? styles.hamburgerOpen : ''}`} aria-hidden="true">
                <span className={styles.bar1}></span>
                <span className={styles.bar2}></span>
              </span>
            </button>
          </div>
        </nav>
      </header>

      {/* Full-height Mobile Panel (Part B7) */}
      <div
        id="mobile-navigation"
        className={`${styles.mobilePanel} ${menuOpen ? styles.mobilePanelOpen : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation"
      >
        <button
          className={styles.mobileCloseButton}
          onClick={closeMenu}
          aria-label="Close navigation"
        >
          <svg width="28" height="28" viewBox="0 0 256 256" fill="currentColor">
            <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"/>
          </svg>
        </button>

        <div className={styles.mobileContent}>
          <div className={styles.mobileHeader}>
            <span className={styles.mobileBrand}>Smile Dental Care</span>
            <span className={styles.mobileSub}>Bagaha-1, Bihar</span>
          </div>

          <nav className={styles.mobileLinks}>
            {navLinks.map(({ href, label }, idx) => (
              <a
                key={href}
                href={href}
                className={styles.mobileLink}
                style={{ animationDelay: `${idx * 60}ms` }}
                onClick={closeMenu}
              >
                {label}
              </a>
            ))}
          </nav>

          <div className={styles.mobileCta}>
            <a
              href="tel:+919931219038"
              className={styles.mobileCallBtn}
              onClick={closeMenu}
            >
              Direct Call (+91 99312 19038)
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
