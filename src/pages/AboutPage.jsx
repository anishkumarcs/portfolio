import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import SectionHeader from '../components/SectionHeader'
import CtaBanner from '../components/CtaBanner'
import { ArrowRightIcon, CheckIcon } from '../components/Icons'
import {
  CERTIFICATIONS,
  EDUCATION,
  TEACHER,
  VALUES,
} from '../data/siteData'

const QUALITIES = [
  '15+ years teaching school children',
  'Patient, warm and approachable',
  'Concepts taught before formulas',
  'Close coordination with parents',
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Your Teacher"
        title="Meet Anish Kumar"
        lead={`A dedicated tuition teacher in ${TEACHER.location.split(',')[0]}, helping school children build strong academic foundations with personal attention.`}
      />

      {/* -------------------------------------------- Teacher intro */}
      <section className="section">
        <div className="container">
          <div className="about-layout">
            <div className="about__media">
              <img
                src={TEACHER.image}
                alt={`Portrait of ${TEACHER.name}`}
                width={420}
                height={470}
                className="about__photo"
              />
              <div className="about__photo-card">
                <strong>{TEACHER.name}</strong>
                <span>{TEACHER.role} · Bhilai</span>
              </div>
            </div>

            <div className="about__content">
              <p className="eyebrow">Why I teach</p>
              <h2 className="about__title">
                Every child can learn — the right way
              </h2>
              <p>
                I'm {TEACHER.name}, and I've been teaching school children in
                Bhilai for more than 15 years. I started with a strong technical
                education, but the classroom is where I found my true calling.
              </p>
              <p>
                Over the years I've taught thousands of lessons across Maths,
                Science, English and Computer Science — and the most important
                lesson I've learned is simple: children flourish when they feel
                safe, understood and challenged at their own pace.
              </p>
              <p>
                My classes are small on purpose, my tests are regular on
                purpose, and my doors are always open to parents — because great
                results come from real partnerships.
              </p>

              <ul className="about__list">
                {QUALITIES.map((q) => (
                  <li key={q}>
                    <CheckIcon width={18} height={18} />
                    {q}
                  </li>
                ))}
              </ul>

              <div className="about__actions">
                <Link to="/contact" className="btn btn--primary">
                  Enquire Now <ArrowRightIcon width={18} height={18} />
                </Link>
                <Link to="/subjects" className="btn btn--ghost">
                  Subjects I Teach
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------- Credentials */}
      <section className="section section--alt">
        <div className="container">
          <SectionHeader
            eyebrow="Qualifications"
            title="A strong academic foundation"
            lead="Continuous learning has always been part of my teaching."
          />
          <div className="credentials__grid">
            {EDUCATION.map((e) => (
              <article className="credential" key={e.title}>
                <span className="credential__icon" aria-hidden="true">🎓</span>
                <h3 className="credential__title">{e.title}</h3>
                <p className="credential__org">{e.org}</p>
                <p className="credential__detail">{e.detail}</p>
              </article>
            ))}
            <article className="credential">
              <span className="credential__icon" aria-hidden="true">📜</span>
              <h3 className="credential__title">Certifications</h3>
              <ul className="credential__list">
                {CERTIFICATIONS.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* -------------------------------------------- Values */}
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Teaching Values"
            title="What I stand for in every class"
            lead="Four principles shape every lesson I plan and every student I mentor."
          />
          <div className="features__grid">
            {VALUES.map((v) => (
              <article className="feature-card" key={v.title}>
                <span className="feature-card__icon" aria-hidden="true">
                  {v.icon}
                </span>
                <h3 className="feature-card__title">{v.title}</h3>
                <p className="feature-card__text">{v.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}