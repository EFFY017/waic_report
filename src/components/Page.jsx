export default function Page({ id, num, title, lead, children }) {
  return (
    <div className="page" id={id}>
      <div className="page-num">{num}</div>
      <h2>{title}</h2>
      {lead && <p className="page-lead">{lead}</p>}
      {children}
    </div>
  )
}
