import { useState } from 'react'
import useReveal from '../hooks/useReveal'
import styles from './Gallery.module.css'

const allPhotos = [
  {
    src: '/img/Screenshot 2026-11-10 081427.png',
    alt: 'Exterior facade of Smile Dental Care Bagaha-1 clinic with signage',
    tag: 'Clinic Facade',
    category: 'exterior',
    sizeClass: 'featured'
  },
  {
    src: '/img/Screenshot 2026-11-10 081838.png',
    alt: 'Patients and parents seated in reception waiting lounge',
    tag: 'Waiting Lounge',
    category: 'patient',
    sizeClass: 'wide'
  },
  {
    src: '/img/Screenshot 2026-11-10 081615.png',
    alt: 'Dentist conducting oral examination with face shield and PPE',
    tag: 'Doctor Operatory',
    category: 'operatory',
    sizeClass: 'standard'
  },
  {
    src: '/img/Screenshot 2026-11-10 081707.png',
    alt: 'Female patient receiving root canal treatment in dental chair',
    tag: 'Active Treatment',
    category: 'patient',
    sizeClass: 'standard'
  },
  {
    src: '/img/Screenshot 2026-11-10 081520.png',
    alt: 'Modern computerized dental chair with overhead lighting',
    tag: 'Treatment Suite',
    category: 'operatory',
    sizeClass: 'tall'
  },
  {
    src: '/img/Screenshot 2026-11-10 081508.png',
    alt: 'Doctor consultation desk with dental certificates and anatomy charts',
    tag: 'Consultation Desk',
    category: 'exterior',
    sizeClass: 'standard'
  },
  {
    src: '/img/Screenshot 2026-11-10 081849.png',
    alt: 'Clinic waiting hall with community patients waiting for turns',
    tag: 'Patient Care Area',
    category: 'patient',
    sizeClass: 'standard'
  },
  {
    src: '/img/Screenshot 2026-11-10 081828.png',
    alt: 'Patient queue outside Smile Dental Care clinic entrance',
    tag: 'Patient Community',
    category: 'patient',
    sizeClass: 'standard'
  },
  {
    src: '/img/Screenshot 2026-11-10 081806.png',
    alt: 'Dentist explaining prescription and treatment plan at desk',
    tag: 'Doctor Consultation',
    category: 'operatory',
    sizeClass: 'standard'
  },
  {
    src: '/img/Screenshot 2026-11-10 081652.png',
    alt: 'Patients being attended in multi-chair operatory',
    tag: 'Dental Clinic Area',
    category: 'operatory',
    sizeClass: 'wide'
  },
  {
    src: '/img/Screenshot 2026-11-10 081719.png',
    alt: 'Reception counter and in-house dental pharmacy section',
    tag: 'Clinic Interior',
    category: 'exterior',
    sizeClass: 'standard'
  },
  {
    src: '/img/Screenshot 2026-11-10 081740.png',
    alt: 'Smile Dental Care Bagaha-1 main entrance and shutter signage',
    tag: 'Main Entrance',
    category: 'exterior',
    sizeClass: 'standard'
  }
]

export default function Gallery() {
  const [filter, setFilter] = useState('all')
  const ref = useReveal()

  const filteredPhotos = filter === 'all'
    ? allPhotos
    : allPhotos.filter((p) => p.category === filter)

  return (
    <section className={styles.gallerySection} id="gallery" aria-labelledby="gallery-title" ref={ref}>
      <div className="container">
        
        <div className={`${styles.header} reveal`}>
          <span className={styles.eyebrow}>Real clinic photos</span>
          <h2 className={styles.sectionTitle} id="gallery-title">
            Take a tour of Smile Dental Care
          </h2>
          <p className={styles.sectionDescription}>
            Explore authentic photos of our clinic facility, treatment operatories, and patient queues in Bagaha-1.
          </p>

          {/* Filter Pills (B7 smooth transition, no layout shift) */}
          <div className={styles.filterBar} role="tablist" aria-label="Photo categories">
            <button
              className={`${styles.filterBtn} ${filter === 'all' ? styles.filterBtnActive : ''}`}
              onClick={() => setFilter('all')}
              role="tab"
              aria-selected={filter === 'all'}
            >
              All Photos ({allPhotos.length})
            </button>
            <button
              className={`${styles.filterBtn} ${filter === 'operatory' ? styles.filterBtnActive : ''}`}
              onClick={() => setFilter('operatory')}
              role="tab"
              aria-selected={filter === 'operatory'}
            >
              Treatment Suites
            </button>
            <button
              className={`${styles.filterBtn} ${filter === 'patient' ? styles.filterBtnActive : ''}`}
              onClick={() => setFilter('patient')}
              role="tab"
              aria-selected={filter === 'patient'}
            >
              Patient Care & Lounge
            </button>
            <button
              className={`${styles.filterBtn} ${filter === 'exterior' ? styles.filterBtnActive : ''}`}
              onClick={() => setFilter('exterior')}
              role="tab"
              aria-selected={filter === 'exterior'}
            >
              Clinic Facade & Office
            </button>
          </div>
        </div>

        {/* Gallery Grid (Part B3 Nested Radius formula) */}
        <div className={`${styles.galleryGrid} reveal`}>
          {filteredPhotos.map((photo) => (
            <div
              key={photo.src}
              className={`${styles.photoCard} ${styles[photo.sizeClass]}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className={styles.image}
                loading="lazy"
                width="640"
                height="480"
              />
              <div className={styles.photoOverlay}>
                <span className={styles.tagBadge}>{photo.tag}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
