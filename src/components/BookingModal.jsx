import { useState, useEffect } from 'react'
import styles from './BookingModal.module.css'

const treatmentOptions = [
  'General Dental Checkup & Consultation',
  'Root Canal Treatment (RCT)',
  'Tooth Extraction / Pain Relief',
  'Dental Capping / Crowns',
  'Braces & Orthodontics Alignment',
  'Dental X-Ray & Diagnosis',
  'Pulser / Gum Treatment'
]

export default function BookingModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    treatment: treatmentOptions[0],
    preferredDate: '',
    notes: ''
  })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      setSubmitted(false)
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Prepare direct WhatsApp message with all appointment parameters
    const message = `*New Appointment Request - Smile Dental Care Bagaha*
---------------------------------------
*Patient Name:* ${formData.name}
*Phone Number:* ${formData.phone}
*Treatment:* ${formData.treatment}
*Preferred Date/Time:* ${formData.preferredDate || 'Earliest available slot'}
*Notes / Symptoms:* ${formData.notes || 'None provided'}
---------------------------------------
Please confirm my clinic slot.`

    const waUrl = `https://wa.me/919931219038?text=${encodeURIComponent(message)}`
    
    setSubmitted(true)
    setTimeout(() => {
      window.open(waUrl, '_blank')
    }, 400)
  }

  return (
    <div className={styles.modalOverlay} role="dialog" aria-modal="true" aria-labelledby="modal-title">
      <div className={styles.backdrop} onClick={onClose} aria-hidden="true" />
      
      <div className={styles.modalCard}>
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close appointment modal"
        >
          <svg width="22" height="22" viewBox="0 0 256 256" fill="currentColor">
            <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"/>
          </svg>
        </button>

        {!submitted ? (
          <>
            <div className={styles.modalHeader}>
              <div className={styles.badgePill}>
                <span className={styles.liveGreenDot} />
                <span>Instant confirmation via WhatsApp & Call</span>
              </div>
              <h2 className={styles.title} id="modal-title">
                Book a Clinic Consultation
              </h2>
              <p className={styles.subtitle}>
                Smile Dental Care · Bagha-1 Thana Road, Near Post Office
              </p>
            </div>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className={styles.fieldGroup}>
                <label htmlFor="patient-name" className={styles.label}>
                  Full Name <span className={styles.requiredMark}>*</span>
                </label>
                <input
                  id="patient-name"
                  type="text"
                  name="name"
                  required
                  placeholder="e.g. Ramesh Kumar"
                  value={formData.name}
                  onChange={handleChange}
                  className={styles.input}
                />
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor="patient-phone" className={styles.label}>
                  Phone Number <span className={styles.requiredMark}>*</span>
                </label>
                <input
                  id="patient-phone"
                  type="tel"
                  name="phone"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={handleChange}
                  className={styles.input}
                />
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor="treatment-select" className={styles.label}>
                  Procedure or Symptom <span className={styles.requiredMark}>*</span>
                </label>
                <select
                  id="treatment-select"
                  name="treatment"
                  value={formData.treatment}
                  onChange={handleChange}
                  className={styles.select}
                >
                  {treatmentOptions.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor="preferred-date" className={styles.label}>
                  Preferred Date / Day Time
                </label>
                <input
                  id="preferred-date"
                  type="text"
                  name="preferredDate"
                  placeholder="e.g. Tomorrow morning, or Friday 3:00 PM"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className={styles.input}
                />
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor="patient-notes" className={styles.label}>
                  Tooth Problem Details (Optional)
                </label>
                <textarea
                  id="patient-notes"
                  name="notes"
                  rows="2"
                  placeholder="Briefly describe pain duration, swelling, or sensitivity..."
                  value={formData.notes}
                  onChange={handleChange}
                  className={styles.textarea}
                />
              </div>

              <button type="submit" className={styles.submitBtn}>
                <svg width="18" height="18" viewBox="0 0 256 256" fill="currentColor">
                  <path d="M128,24A104,104,0,0,0,36.18,176.88L24.83,218.35a8,8,0,0,0,9.82,9.82l41.47-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L49.49,209.6l6.08-27.91a8,8,0,0,0-.67-6.54A88,88,0,1,1,128,216Zm40-64a24,24,0,0,1-24,24,56.06,56.06,0,0,1-56-56,24,24,0,0,1,24-24,8,8,0,0,1,8,8v12a8,8,0,0,1-3.64,6.71l-8.62,5.75a39.81,39.81,0,0,0,23.8,23.8l5.75-8.62A8,8,0,0,1,148,136h12a8,8,0,0,1,8,8Z"/>
                </svg>
                <span>Confirm & Send via WhatsApp</span>
              </button>

              <p className={styles.guaranteeText}>
                ✓ Zero booking fee · Walk-ins also welcomed daily until 5:00 PM
              </p>
            </form>
          </>
        ) : (
          <div className={styles.successState}>
            <div className={styles.successCircle}>
              <svg width="32" height="32" viewBox="0 0 256 256" fill="currentColor">
                <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"/>
              </svg>
            </div>
            <h3 className={styles.successTitle}>Request Generated</h3>
            <p className={styles.successMessage}>
              Connecting you directly to Dr. Khan on WhatsApp to finalize your consultation time.
            </p>
            <div className={styles.directCallBox}>
              <span className={styles.callPrompt}>Need urgent same-day relief?</span>
              <a href="tel:+919931219038" className={styles.urgentCallBtn}>
                Call Directly: +91 99312 19038
              </a>
            </div>
            <button className={styles.doneBtn} onClick={onClose}>
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
