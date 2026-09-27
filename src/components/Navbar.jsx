import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { NAV_LINKS, TEACHER } from '../data/siteData'
import { CloseIcon, MenuIcon } from './Icons'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <Link to="/" className="navbar__brand" onClick={close}>
          <span className="navbar__logo">{TEACHER.firstName.slice(0, 1)}{TEACHER.name.split(' ')[1]?.slice(0, 1) ?? ''}</span>
          <span className="navbar__brand-text">
            <strong>{TEACHER.name}</strong>
            <small>Tuition Classes</small>
          </span>
        </Link>

        <nav className={`navbar__menu ${open ? 'navbar__menu--open' : ''}`} aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'nav-link--active' : ''}`
              }
              onClick={close}
            >
              {link.label}
            </NavLink>
          ))}
          <Link to="/contact" className="btn btn--primary navbar__cta" onClick={close}>
            Book a Demo Class
          </Link>
        </nav>

        <button
          type="button"
          className="navbar__toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>
    </header>
  )
}