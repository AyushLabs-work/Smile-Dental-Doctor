import useReveal from '../hooks/useReveal'
import styles from './Testimonials.module.css'

const reviewsData = [
  {
    quote: 'Good service and Good behaviour for customer.',
    author: 'Verified Google Patient',
    verifiedLoc: 'Bagaha-1',
    initial: 'G'
  },
  {
    quote: 'Best experience and best work. The doctor was attentive throughout the extraction.',
    author: 'Local Clinic Visitor',
    verifiedLoc: 'Bagaha-1 Thana Road',
    initial: 'B'
  },
  {
    quote: 'Treatment was excellent. Clean facility and fast relief from severe tooth pain.',
    author: 'Satisfied Patient',
    verifiedLoc: 'Bagaha',
    initial: 'E'
  }
]

export default function Testimonials() {
  const ref = useReveal()

  return (
    <section className={styles.testimonialsSection} id="reviews" aria-labelledby="reviews-title" ref={ref}>
      <div className="container">
        <div className={`${styles.header} reveal`}>
          <span className={styles.eyebrow}>Real feedback</span>
          <h2 className={styles.sectionTitle} id="reviews-title">
            Trusted by the local community
          </h2>
          <p className={styles.sectionDescription}>
            Every review is from real patients who visited Smile Dental Care in Bagaha-1.
          </p>
        </div>

        <div className={styles.cardsGrid}>
          {reviewsData.map((item, i) => (
            <div key={i} className={`${styles.reviewCard} reveal`}>
              <div className={styles.starsRow} aria-label="5 stars rating">
                {'★★★★★'}
              </div>
              <blockquote className={styles.quoteText}>
                "{item.quote}"
              </blockquote>
              <div className={styles.authorMeta}>
                <div className={styles.authorAvatar} aria-hidden="true">
                  {item.initial}
                </div>
                <div className={styles.authorDetails}>
                  <span className={styles.authorName}>{item.author}</span>
                  <span className={styles.authorLocation}>{item.verifiedLoc} · Google Review</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`${styles.ratingBanner} reveal`}>
          <div className={styles.ratingScore}>
            <span className={styles.scoreNumber}>4.7</span>
            <div className={styles.ratingInfo}>
              <div className={styles.bannerStars}>★★★★★</div>
              <span className={styles.reviewCount}>Based on 32 public reviews</span>
            </div>
          </div>
          <a
            href="https://maps.app.goo.gl/So9dtQ5WSZC9t9fM6"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.mapsReviewLink}
          >
            <span>Verify reviews on Google Maps</span>
            <svg width="16" height="16" viewBox="0 0 256 256" fill="currentColor">
              <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
