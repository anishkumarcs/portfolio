import { Link } from 'react-router-dom'
import { NAV_LINKS, SOCIAL_LINKS, SUBJECTS, TEACHER } from '../data/siteData'
import { MailIcon, MapPinIcon, PhoneIcon } from './Icons'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__grid">
          <div className="footer__col footer__brand">
            <Link to="/" className="navbar__brand">
              <span className="navbar__logo">
                {TEACHER.firstName.slice(0, 1)}
                {TEACHER.name.split(' ')[1]?.slice(0, 1) ?? ''}
              </span>
              <span className="navbar__brand-text">
                <strong>{TEACHER.name}</strong>
                <small>Tuition Classes</small>
              </span>
            </Link>
            <p className="footer__about">
              Trusted home tuition for school children in Bhilai. Small batches,
              personal attention and a genuine love for teaching — helping every
              child reach their potential.
            </p>
            <ul className="footer__social">
              {SOCIAL_LINKS.map((s) => (
                <li key={s.name}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                  >
                    {s.name.slice(0, 1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__title">Quick Links</h4>
            <ul className="footer__links">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link to={l.to}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__title">Subjects</h4>
            <ul className="footer__links">
              {SUBJECTS.slice(0, 6).map((s) => (
                <li key={s.name}>
                  <Link to="/subjects">{s.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4 className="footer__title">Contact</h4>
            <ul className="footer__contact">
              <li>
                <PhoneIcon width={18} height={18} />
                <a href={`tel:${TEACHER.phone}`}>{TEACHER.phoneDisplay}</a>
              </li>
              <li>
                <MailIcon width={18} height={18} />
                <a href={`mailto:${TEACHER.email}`}>{TEACHER.email}</a>
              </li>
              <li>
                <MapPinIcon width={18} height={18} />
                <span>{TEACHER.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© 2026 {TEACHER.name} Tuition Classes. All rights reserved.</p>
          <p>Making learning simple, one child at a time. ✦</p>
        </div>
      </div>
    </footer>
  )
}