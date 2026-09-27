import { Link } from 'react-router-dom'
import { ArrowRightIcon, CheckIcon } from '../components/Icons'
import SectionHeader from '../components/SectionHeader'
import CtaBanner from '../components/CtaBanner'
import Stars from '../components/Stars'
import {
  FEATURES,
  STATS,
  STEPS,
  SUBJECTS,
  TEACHER,
  TESTIMONIALS,
} from '../data/siteData'

const HERO_POINTS = ['Personal attention in small batches', 'Free demo class', 'Progress reports for parents']

export default function HomePage() {
  return (
    <>
      {/* ------------------------------------------------ Hero */}
      <section className="hero">
        <div className="hero__bg" aria-hidden="true" />
        <div className="hero__inner container">
          <div className="hero__content">
            <p className="hero__badge">
              <span className="hero__badge-dot" aria-hidden="true" />
              Trusted by 500+ families in Bhilai
            </p>
            <h1 className="hero__title">
              A teacher who makes your child
              <span className="hero__title-accent"> love learning again</span>
            </h1>
            <p className="hero__lead">{TEACHER.tagline}</p>

            <ul className="hero__points">
              {HERO_POINTS.map((point) => (
                <li key={point}>
                  <CheckIcon width={18} height={18} />
                  {point}
                </li>
              ))}
            </ul>

            <div className="hero__actions">
              <Link to="/contact" className="btn btn--light btn--lg">
                Book a Free Demo Class
              </Link>
              <Link to="/subjects" className="btn btn--ghost-light btn--lg">
                Explore Subjects <ArrowRightIcon width={18} height={18} />
              </Link>
            </div>

            <p className="hero__hint">
              {TEACHER.hours} · {TEACHER.location}
            </p>
          </div>

          <div className="hero__media">
            <div className="hero__photo-card">
              <img
                src={TEACHER.image}
                alt={`Portrait of ${TEACHER.name}`}
                width={420}
                height={470}
                className="hero__photo"
              />
              <div className="hero__float hero__float--top">
                <span className="hero__float-icon" aria-hidden="true">🎯</span>
                <div>
                  <strong>100% Personal</strong>
                  <small>Attention</small>
                </div>
              </div>
              <div className="hero__float hero__float--bottom">
                <span className="hero__float-icon" aria-hidden="true">📈</span>
                <div>
                  <strong>Results in sight</strong>
                  <small>Progress every month</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ Stats */}
      <section className="stats" aria-label="Highlights">
        <div className="container">
          <div className="stats__grid">
            {STATS.map((stat) => (
              <div className="stat" key={stat.label}>
                <p className="stat__value">
                  {stat.value}
                  <span>{stat.suffix}</span>
                </p>
                <p className="stat__label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ Subjects */}
      <section className="section" id="subjects">
        <div className="container">
          <SectionHeader
            eyebrow="Subjects We Cover"
            title="Every subject your child needs"
            lead="CBSE · ICSE · State Board — all handled. From basic numeracy to Class 12 Science and Computer Science."
          />
          <div className="subjects__grid">
            {SUBJECTS.map((subject) => (
              <Link to="/subjects" className="subject-card" key={subject.name}>
                <span className="subject-card__icon" aria-hidden="true">
                  {subject.icon}
                </span>
                <div>
                  <h3 className="subject-card__title">{subject.name}</h3>
                  <p className="subject-card__classes">{subject.classes}</p>
                </div>
              </Link>
            ))}
          </div>
          <p className="section__more">
            <Link to="/subjects" className="link-arrow">
              View full subject details <ArrowRightIcon width={18} height={18} />
            </Link>
          </p>
        </div>
      </section>

      {/* ------------------------------------------------ Why us */}
      <section className="section section--alt">
        <div className="container">
          <SectionHeader
            eyebrow="Why Parents Choose Us"
            title="Teaching that children understand"
            lead="It isn't just about marks — it's about confidence, discipline and a genuine love for the subject."
          />
          <div className="features__grid">
            {FEATURES.map((feature) => (
              <article className="feature-card" key={feature.title}>
                <span className="feature-card__icon" aria-hidden="true">
                  {feature.icon}
                </span>
                <h3 className="feature-card__title">{feature.title}</h3>
                <p className="feature-card__text">{feature.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ How it works */}
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Getting Started"
            title="Joining is simple"
            lead="Three easy steps from enquiry to your child's first class."
          />
          <div className="steps__grid">
            {STEPS.map((step, index) => (
              <article className="step" key={step.title}>
                <span className="step__num" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="step__icon" aria-hidden="true">
                  {step.icon}
                </span>
                <h3 className="step__title">{step.title}</h3>
                <p className="step__text">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------ Testimonials */}
      <section className="section section--alt" id="testimonials">
        <div className="container">
          <SectionHeader
            eyebrow="Parents' Words"
            title="Happy children, happier parents"
            lead="Real feedback from the families we teach.*"
          />
          <div className="testimonials__grid">
            {TESTIMONIALS.map((t) => (
              <article className="testimonial" key={t.name}>
                <Stars rating={t.rating} />
                <blockquote className="testimonial__quote">
                  “{t.quote}”
                </blockquote>
                <footer className="testimonial__person">
                  <span className="testimonial__avatar" aria-hidden="true">
                    {t.name.charAt(0)}
                  </span>
                  <span className="testimonial__meta">
                    <strong>{t.name}</strong>
                    <small>{t.role}</small>
                  </span>
                </footer>
              </article>
            ))}
          </div>
          <p className="section__footnote">
            * Sample testimonials — replace with real parent feedback from your
            classroom.
          </p>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}