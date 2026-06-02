import Page from './Page.jsx'

const milestones = [
  {
    color: 'var(--red)',
    when: '本周 · 6/2-6/6',
    title: '方案对齐与启动',
    desc: '与新华团队对齐案例和系统迭代方向 · 录制现版系统演示视频 · 联系案例对应医生启动视频证言 · 院内系统迭代排期确认',
  },
  {
    color: 'var(--gold)',
    when: '1-2 周',
    title: '系统与内容准备',
    desc: '新华院内系统界面迭代 · 全球数据地图大屏升级 · 医生视频证言录制',
  },
  {
    color: 'var(--blue)',
    when: '2-3 周',
    title: '内容上线',
    desc: '官网案例专区搭建（5 个案例 + 视频）· Demo 账号预设（已完成/运行中/待启动三种状态）',
  },
  {
    color: 'var(--green)',
    when: '3-4 周',
    title: '展台搭建与走场',
    desc: '展台视觉设计与搭建（配合展位规格）· 讲解词打磨 · 团队走场演练',
  },
]

export default function Timeline() {
  return (
    <Page
      num="06"
      title="筹备时间线"
      lead="以下为关键里程碑，具体排期需根据 WAIC 确切日期和布展截止时间倒排。"
    >
      <div className="cards" style={{ gridTemplateColumns: '1fr 1fr' }}>
        {milestones.map((m) => (
          <div className="card" key={m.title} style={{ borderLeft: `3px solid ${m.color}` }}>
            <div className="card-tag" style={{ color: m.color }}>
              {m.when}
            </div>
            <h4>{m.title}</h4>
            <p>{m.desc}</p>
          </div>
        ))}
      </div>
    </Page>
  )
}
