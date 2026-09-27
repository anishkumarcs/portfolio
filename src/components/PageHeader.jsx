export default function PageHeader({ eyebrow, title, lead }) {
  return (
    <section className="page-header">
      <div className="page-header__inner container">
        {eyebrow && <p className="page-header__eyebrow">{eyebrow}</p>}
        <h1 className="page-header__title">{title}</h1>
        {lead && <p className="page-header__lead">{lead}</p>}
      </div>
    </section>
  )
}