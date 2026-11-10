import useReveal from '../hooks/useReveal'
import styles from './ProofStrip.module.css'

const metrics = [
  {
    val: '4.7★',
    label: 'Google rating',
    sub: 'Verified dental satisfaction'
  },
  {
    val: '32+',
    label: 'Real reviews',
    sub: 'Patients from Bagaha region'
  },
  {
    val: 'X-Ray',
    label: 'Immediate diagnosis',
    sub: 'No external lab travel required'
  },
  {
    val: '6 Days',
    label: 'Weekly schedule',
    sub: 'Walk-ins open until 5:00 PM'
  }
]

export default function ProofStrip() {
  const ref = useReveal()

  return (
    <section className={styles.proofSection} aria-label="Key Clinic Metrics" ref={ref}>
      <div className="container">
        <div className={`${styles.metricsGrid} reveal`}>
          {metrics.map((item, idx) => (
            <div key={item.label} className={styles.metricCard}>
              <div className={styles.cardHeader}>
                <span className={styles.number}>{item.val}</span>
              </div>
              <span className={styles.label}>{item.label}</span>
              <span className={styles.description}>{item.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
