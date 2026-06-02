import Page from './Page.jsx'

const cards = [
  {
    tag: '唯一',
    title: 'Nature 正刊验证',
    desc: '全球唯一发表于 Nature 正刊的可溯源智能体式罕见病诊断系统。Recall@1 达 70.6%，95.4% 临床医生满意度。',
  },
  {
    tag: '最广',
    title: '全球 65 国覆盖',
    desc: '已在 65 个国家、1,800+ 家医疗及科研机构、2,500+ 名专业用户中真实运行。不是实验室产品，是已经在临床中使用的系统。',
  },
  {
    tag: '最大',
    title: '全球最大规模应用',
    desc: '新华医院院内已完成超 100 万例门诊病历的罕见病筛查，线上平台累计 14,000+ 例诊断。数据量级在国内同类系统中居首。',
  },
]

export default function WhyDeepRare() {
  return (
    <Page
      id="why"
      num="01"
      title="项目概览"
      lead="DeepRare 由上海交通大学与新华医院联合研发，是一套可溯源的罕见病辅助诊断系统。已发表于 Nature 正刊，覆盖全球 65 个国家、1,800+ 家医疗及科研机构，新华医院院内累计筛查超 100 万例。"
    >
      <div className="highlight">
        全球有超过 <strong>3 亿</strong>罕见病患者，已知罕见病超过 <strong>7,000 种</strong>
        ，患者平均需要 <strong>5-7 年</strong>才能获得确诊——不是没有治疗方案，是诊断太晚。DeepRare
        将这个过程缩短到<strong>分钟级</strong>，并且每一步推理均可追溯至文献和证据。
      </div>

      <div className="cards">
        {cards.map((c) => (
          <div className="card" key={c.tag}>
            <div className="card-tag">{c.tag}</div>
            <h4>{c.title}</h4>
            <p>{c.desc}</p>
          </div>
        ))}
      </div>
    </Page>
  )
}
