export default function Page({ num, title, lead, children }) {
  return (
    <div className="page">
      <div className="page-num">{num}</div>
      <h2>{title}</h2>
      {lead && <p className="page-lead">{lead}</p>}
      {children}
    </div>
  )
}
