import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import SectionHeader from '../components/SectionHeader'
import CtaBanner from '../components/CtaBanner'
import { ArrowRightIcon, CheckIcon, ClockIcon } from '../components/Icons'
import { FEES, FEE_NOTES, SCHEDULE_GROUPS, TEACHER } from '../data/siteData'

export default function SchedulePage() {
  return (
    <>
      <PageHeader
        eyebrow="Schedule & Fees"
        title="Batch timings that fit your child's routine"
        lead={`Classes run ${TEACHER.hours}. Pick a batch below, or call us to plan a custom slot for your child.`}
      />

      {/* -------------------------------------------- Schedule */}
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Weekly Batches"
            title="Class timings"
            lead="Small batches in the evening, with weekend sessions for doubts and tests."
          />
          <div className="schedule__grid">
            {SCHEDULE_GROUPS.map((group) => (
              <article className="schedule-card" key={group.days}>
                <div className="schedule-card__head">
                  <span className="schedule-card__icon" aria-hidden="true">
                    <ClockIcon width={20} height={20} />
                  </span>
                  <h3 className="schedule-card__title">{group.days}</h3>
                </div>
                <ul className="schedule-card__slots">
                  {group.slots.map((slot) => (
                    <li key={slot.time}>
                      <span className="slot__time">{slot.time}</span>
                      <span className="slot__label">{slot.label}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------------------------------- Fees */}
      <section className="section section--alt">
        <div className="container">
          <SectionHeader
            eyebrow="Fee Structure"
            title="Honest, affordable fees"
            lead="Monthly fees, no hidden charges. Cash or UPI accepted."
          />
          <div className="fees__grid">
            {FEES.map((fee) => (
              <article className={`fee-card fee-card--${fee.accent}`} key={fee.group}>
                <h3 className="fee-card__group">{fee.group}</h3>
                <p className="fee-card__note">{fee.note}</p>
                <p className="fee-card__amount">{fee.amount}</p>
              </article>
            ))}
          </div>

          <ul className="fee-notes">
            {FEE_NOTES.map((note) => (
              <li key={note}>
                <CheckIcon width={16} height={16} />
                {note}
              </li>
            ))}
          </ul>

          <p className="section__more">
            <Link to="/contact" className="btn btn--primary">
              Book a Free Demo Class <ArrowRightIcon width={18} height={18} />
            </Link>
          </p>
        </div>
      </section>

      {/* -------------------------------------------- Steps */}
      <section className="section">
        <div className="container">
          <SectionHeader
            eyebrow="Enrolment"
            title="How to enrol"
            lead="Simple and transparent — no admission fees, no long forms."
          />
          <div className="steps__grid">
            {[
              ['📞', 'Call or WhatsApp', `Reach us at ${TEACHER.phoneDisplay} for batch availability and any questions.`],
              ['🎓', 'Free Demo Class', 'Your child attends a free demo class before you make any decision.'],
              ['✅', 'Join & Grow', 'Choose a batch, begin classes, and watch progress in weekly tests.'],
            ].map(([icon, title, text], index) => (
              <article className="step" key={title}>
                <span className="step__num" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="step__icon" aria-hidden="true">{icon}</span>
                <h3 className="step__title">{title}</h3>
                <p className="step__text">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}