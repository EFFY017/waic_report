const stats = [
  { num: '65', label: '覆盖国家' },
  { num: '100万+', label: '院内筛查' },
  { num: '14,000+', label: '线上诊断' },
  { num: '1,800+', label: '链接机构' },
]

export default function Cover() {
  return (
    <section className="cover">
      <div className="cover-tag">WAIC 2026 · 国家展方案汇报</div>
      <h1>
        DeepRare<br />
        全球首个 <em>Nature 正刊</em>发表的<br />
        AI 罕见病诊断系统
      </h1>
      <p className="cover-sub">
        由上海交通大学 AI 学院与上海交通大学医学院附属新华医院联合研发。已覆盖全球 65
        个国家和地区，代表中国 AI+医疗领域的国际影响力名片。
      </p>
      <div className="cover-meta">
        <div className="cover-meta-item">
          <strong>汇报单位</strong>　上海交通大学 × 新华医院 × 观壹智能
        </div>
        <div className="cover-meta-item">
          <strong>汇报日期</strong>　2026 年 6 月 3 日
        </div>
      </div>
      <div className="cover-stats">
        {stats.map((s) => (
          <div className="cover-stat" key={s.label}>
            <div className="num">{s.num}</div>
            <div className="label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
