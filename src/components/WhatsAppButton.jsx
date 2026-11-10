import { useEffect, useState } from 'react'
import styles from './WhatsAppButton.module.css'

export default function WhatsAppButton() {
  const phoneNumber = '919931219038'
  const defaultMessage = encodeURIComponent('Hello Dr. Khan, I would like to consult or schedule an appointment at Smile Dental Care Bagaha.')
  const waUrl = `https://wa.me/${phoneNumber}?text=${defaultMessage}`

  // On mobile (< 768px): hide while hero buttons are in viewport, show after scrolling past them
  const [heroButtonsVisible, setHeroButtonsVisible] = useState(true)

  useEffect(() => {
    const target = document.getElementById('hero-cta-row')
    if (!target) {
      setHeroButtonsVisible(false)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHeroButtonsVisible(entry.isIntersecting)
      },
      { threshold: 0.05 }
    )

    observer.observe(target)
    return () => observer.disconnect()
  }, [])

  return (
    <aside
      className={`${styles.waContainer} ${heroButtonsVisible ? styles.hideOnMobile : ''}`}
      aria-label="Direct WhatsApp Consultation"
    >
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.waFloatingBtn}
        aria-label="Chat directly on WhatsApp with Smile Dental Care doctor"
      >
        <span className={styles.pulseRadar} aria-hidden="true"></span>
        <div className={styles.iconWrapper} aria-hidden="true">
          <svg width="28" height="28" viewBox="0 0 256 256" fill="currentColor">
            <path d="M128,24A104,104,0,0,0,36.18,176.88L24.83,218.35a8,8,0,0,0,9.82,9.82l41.47-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L49.49,209.6l6.08-27.91a8,8,0,0,0-.67-6.54A88,88,0,1,1,128,216Zm40-64a24,24,0,0,1-24,24,56.06,56.06,0,0,1-56-56,24,24,0,0,1,24-24,8,8,0,0,1,8,8v12a8,8,0,0,1-3.64,6.71l-8.62,5.75a39.81,39.81,0,0,0,23.8,23.8l5.75-8.62A8,8,0,0,1,148,136h12a8,8,0,0,1,8,8Z"/>
          </svg>
        </div>
        <div className={styles.pillLabel}>
          <span className={styles.statusLiveDot} aria-hidden="true"></span>
          <span className={styles.labelText}>Chat on WhatsApp</span>
        </div>
      </a>
    </aside>
  )
}
