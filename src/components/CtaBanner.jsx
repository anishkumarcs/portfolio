import { Link } from 'react-router-dom'
import { ArrowRightIcon } from './Icons'

export default function CtaBanner() {
  return (
    <section className="cta-banner">
      <div className="cta-banner__inner container">
        <div className="cta-banner__content">
          <h2 className="cta-banner__title">Give your child the confidence to excel</h2>
          <p className="cta-banner__text">
            Book a free demo class today — no fees, no obligation. See how our
            teaching style fits your child.
          </p>
        </div>
        <div className="cta-banner__actions">
          <Link to="/contact" className="btn btn--light btn--lg">
            Book a Free Demo Class
          </Link>
          <Link to="/schedule" className="btn btn--ghost-light btn--lg">
            See Schedule & Fees <ArrowRightIcon width={18} height={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}