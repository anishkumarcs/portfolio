import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import SectionHeader from '../components/SectionHeader'
import CtaBanner from '../components/CtaBanner'
import { ArrowRightIcon, CheckIcon } from '../components/Icons'
import { SUBJECTS, SUBJECT_GROUPS } from '../data/siteData'

const INCLUDED = [
  'Weekly tests & homework review',
  'Doubt-clearing sessions',
  'Concept notes & practice worksheets',
  'Monthly progress report for parents',
]

export default function SubjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Subjects We Cover"
        title="Complete school support, class by class"
        lead="From Class 1 fundamentals to Class 12 board preparation — CBSE, ICSE or State Board, all subjects are handled with care."
      />

      {/* -------------------------------------------- Subject cards */}
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="All Subjects"
            title="Pick a subject, any subject"
            lead="Each subject is taught concept-first, with simple explanations and regular practice."
          />
          <div className="subjects-detail__grid">
            {SUBJECTS.map((subject) => (
              <article className="subject-detail" key={subject.name}>
                <span className="subject-detail__icon" aria-hidden="true">
                  {subject.icon}
                </span>
                <h3 className="subject-detail__title">{subject.name}</h3>
                <p className="subject-detail__text">{subject.tagline}</p>
                <p className="subject-detail__classes">{subject.classes}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------- By class group */}
      <section className="section section--alt">
        <div className="container">
          <SectionHeader
            eyebrow="By Class Group"
            title="Right batch for every age"
            lead="Classes are grouped by standard so children always learn with peers at their level."
          />
          <div className="classgroups">
            {SUBJECT_GROUPS.map((group) => (
              <article className="classgroup" key={group.group}>
                <h3 className="classgroup__title">{group.group}</h3>
                <ul className="classgroup__list">
                  {group.subjects.map((s) => (
                    <li key={s}>
                      <CheckIcon width={16} height={16} />
                      {s}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------- Includes */}
      <section className="section">
        <div className="container">
          <div className="includes">
            <div>
              <p className="eyebrow">Every course includes</p>
              <h2 className="includes__title">
                More than just classes
              </h2>
              <ul className="about__list includes__list">
                {INCLUDED.map((item) => (
                  <li key={item}>
                    <CheckIcon width={18} height={18} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="includes__card">
              <span className="includes__emoji" aria-hidden="true">📖</span>
              <h3>Not sure which batch fits?</h3>
              <p>
                Tell us your child's class and subjects. We'll suggest the right
                batch and arrange a free demo class before you commit.
              </p>
              <Link to="/contact" className="btn btn--primary">
                Get a Free Demo <ArrowRightIcon width={18} height={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}