import { useState } from 'react'
import useReveal from '../hooks/useReveal'
import styles from './FAQ.module.css'

const faqItems = [
  {
    question: 'Where is Smile Dental Care located in Bagaha?',
    answer: 'The clinic is situated on Bagha-1 Thana Road, near Bagaha-1 Post Office, Bihar 845101. Google Plus code is 33RV+XP, Bagaha-1.'
  },
  {
    question: 'Do I need an appointment or are walk-ins welcome?',
    answer: 'Walk-ins are welcomed throughout the day. If you want to check queue times or schedule a specific Root Canal Treatment (RCT), you can call +91 99312 19038.'
  },
  {
    question: 'What are the daily clinic operational timings?',
    answer: 'Smile Dental Care operates 6 days a week until 5:00 PM. Emergency and scheduled appointments can also be arranged by phone.'
  },
  {
    question: 'Is dental X-ray available inside the clinic?',
    answer: 'Yes. We have in-house dental X-ray diagnostic facilities. You do not need to visit an external diagnostic lab.'
  },
  {
    question: 'Is root canal treatment (RCT) painful?',
    answer: 'Not at all. With local anaesthesia and modern endodontic equipment, the procedure is smooth, relieving severe tooth pain rather than causing it.'
  },
  {
    question: 'Do you offer dental solutions for children?',
    answer: 'Yes. We treat children for cavity prevention, milk tooth extractions, and pediatric orthodontics with a friendly, patient approach.'
  },
  {
    question: 'How much do tooth caps and dental crowns cost?',
    answer: 'Cost depends on the material selected (metal-ceramic, full ceramic, or zirconia). The doctor will discuss exact options and clear pricing before starting.'
  },
  {
    question: 'What hygiene measures are followed during treatments?',
    answer: 'All dental instruments undergo autoclave medical sterilization before each patient. Our team wears protective gear and disposable barriers.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)
  const ref = useReveal()

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <section className={styles.faqSection} id="faq" aria-labelledby="faq-title" ref={ref}>
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <span className={styles.eyebrow}>Patient questions</span>
          <h2 className={styles.sectionTitle} id="faq-title">
            Frequently asked questions
          </h2>
          <p className={styles.sectionDescription}>
            Everything you need to know about treatments, clinic timings, and visiting our Bagaha clinic.
          </p>
        </div>

        <div className={`${styles.accordionWrapper} reveal`}>
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className={`${styles.faqCard} ${isOpen ? styles.faqCardOpen : ''}`}
              >
                <button
                  className={styles.questionButton}
                  onClick={() => handleToggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className={styles.questionText}>{item.question}</span>
                  <span className={`${styles.iconWrap} ${isOpen ? styles.iconRotated : ''}`} aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 256 256" fill="currentColor">
                      <path d="M228,128a12,12,0,0,1-12,12H140v76a12,12,0,0,1-24,0V140H40a12,12,0,0,1,0-24h76V40a12,12,0,0,1,24,0v76h76A12,12,0,0,1,228,128Z"/>
                    </svg>
                  </span>
                </button>

                <div
                  id={`faq-answer-${index}`}
                  className={`${styles.answerPanel} ${isOpen ? styles.answerPanelVisible : ''}`}
                  hidden={!isOpen}
                >
                  <p className={styles.answerText}>{item.answer}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
