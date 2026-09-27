export default function SectionHeader({ eyebrow, title, lead, align = 'center' }) {
  return (
    <div className={`section__header section__header--${align}`}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="section__title">{title}</h2>
      {lead && <p className="section__lead">{lead}</p>}
    </div>
  )
}