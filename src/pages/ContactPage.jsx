import { useState } from 'react'
import PageHeader from '../components/PageHeader'
import SectionHeader from '../components/SectionHeader'
import {
  ClockIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
} from '../components/Icons'
import { TEACHER } from '../data/siteData'

const CONTACT_CARDS = [
  {
    icon: PhoneIcon,
    title: 'Call or WhatsApp',
    line1: TEACHER.phoneDisplay,
    line2: 'Mon – Sat, 9 AM – 8 PM',
    href: `tel:${TEACHER.phone}`,
  },
  {
    icon: MailIcon,
    title: 'Email',
    line1: TEACHER.email,
    line2: 'We reply within 24 hours',
    href: `mailto:${TEACHER.email}`,
  },
  {
    icon: MapPinIcon,
    title: 'Location',
    line1: 'Bhilai, Chhattisgarh',
    line2: TEACHER.hours,
  },
]

const INITIAL_FORM = { name: '', email: '', phone: '', subject: '', message: '' }

export default function ContactPage() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)

  const setField = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Please enter your name.'
    if (!form.email.trim()) next.email = 'Please enter your email address.'
    if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) next.email = 'Please enter a valid email address.'
    if (!form.message.trim()) next.message = 'Please write a short message.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return

    const subject = `Enquiry from ${form.name} — ${form.subject || 'General enquiry'}`
    const body = `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${
      form.phone || '—'
    }\n\n${form.message}`
    window.location.href = `mailto:${TEACHER.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`
    setSent(true)
  }

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about your child's learning"
        lead="Call, WhatsApp or send a message — we'll answer every question and arrange a free demo class."
      />

      <section className="section">
        <div className="container">
          {/* Cards */}
          <div className="contact-cards__grid">
            {CONTACT_CARDS.map((card) => {
              const Icon = card.icon
              const inner = (
                <>
                  <span className="contact-card__icon" aria-hidden="true">
                    <Icon width={22} height={22} />
                  </span>
                  <h3 className="contact-card__title">{card.title}</h3>
                  <p className="contact-card__line">{card.line1}</p>
                  <p className="contact-card__sub">{card.line2}</p>
                </>
              )
              return card.href ? (
                <a className="contact-card" href={card.href} key={card.title}>
                  {inner}
                </a>
              ) : (
                <div className="contact-card" key={card.title}>
                  {inner}
                </div>
              )
            })}
          </div>

          {/* Form + info */}
          <div className="contact-layout">
            <div className="form-card">
              <SectionHeader
                align="left"
                eyebrow="Send a Message"
                title="Request a free demo class"
              />
              {sent ? (
                <div className="form-success" role="status">
                  <span className="form-success__icon" aria-hidden="true">🎉</span>
                  <h3>Thank you, {form.name.split(' ')[0] || 'friend'}!</h3>
                  <p>
                    Your message has been opened in your email app. Alternatively,
                    call us directly on{' '}
                    <a href={`tel:${TEACHER.phone}`}>{TEACHER.phoneDisplay}</a> for
                    an instant reply.
                  </p>
                  <button
                    type="button"
                    className="btn btn--ghost"
                    onClick={() => {
                      setForm(INITIAL_FORM)
                      setSent(false)
                    }}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="form-row">
                    <div className="form-field">
                      <label htmlFor="name">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={setField}
                        placeholder="Parent or guardian name"
                        aria-invalid={!!errors.name}
                      />
                      {errors.name && <span className="form-error">{errors.name}</span>}
                    </div>
                    <div className="form-field">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={form.phone}
                        onChange={setField}
                        placeholder="e.g. +91 98765 43210"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-field">
                      <label htmlFor="email">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={form.email}
                        onChange={setField}
                        placeholder="you@example.com"
                        aria-invalid={!!errors.email}
                      />
                      {errors.email && <span className="form-error">{errors.email}</span>}
                    </div>
                    <div className="form-field">
                      <label htmlFor="subject">Class / Subject</label>
                      <select
                        id="subject"
                        name="subject"
                        value={form.subject}
                        onChange={setField}
                      >
                        <option value="">Select one (optional)</option>
                        <option>Classes 1 – 5 (All subjects)</option>
                        <option>Classes 6 – 8 (All subjects)</option>
                        <option>Classes 9 – 10 (Maths / Science / English)</option>
                        <option>Classes 11 – 12 (PCM / CS)</option>
                        <option>Computer classes</option>
                        <option>Home tuition enquiry</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-field">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={setField}
                      placeholder="Tell us about your child's class and what you're looking for…"
                      aria-invalid={!!errors.message}
                    />
                    {errors.message && <span className="form-error">{errors.message}</span>}
                  </div>

                  <button type="submit" className="btn btn--primary btn--block">
                    Send Message
                  </button>
                  <p className="form-note">
                    We'll never share your details. This opens your email app —
                    you can review everything before sending.
                  </p>
                </form>
              )}
            </div>

            <aside className="form-aside">
              <div className="form-aside__card">
                <span className="form-aside__icon" aria-hidden="true">⏰</span>
                <h3 className="form-aside__title">When to reach us</h3>
                <p>{TEACHER.hours}</p>
                <p>Sunday — by appointment for home tuition & parent meetings.</p>
              </div>
              <div className="form-aside__card">
                <span className="form-aside__icon" aria-hidden="true">💡</span>
                <h3 className="form-aside__title">What happens next?</h3>
                <ul className="form-aside__list">
                  <li>We call you back within a day</li>
                  <li>We suggest the right batch</li>
                  <li>Your child attends a free demo class</li>
                  <li>You decide — no pressure, no fee</li>
                </ul>
              </div>
              <div className="form-aside__card">
                <span className="form-aside__icon" aria-hidden="true">📍</span>
                <h3 className="form-aside__title">{TEACHER.name}</h3>
                <p className="form-aside__hours">
                  <ClockIcon width={16} height={16} /> {TEACHER.hours}
                </p>
                <p>{TEACHER.address}</p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}