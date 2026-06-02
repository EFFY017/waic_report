import Page from './Page.jsx'

const steps = [
  {
    n: '10 秒',
    title: '破题',
    desc: '“全球 3 亿罕见病患者平均等 5-7 年才确诊。这个系统，10 分钟给出可溯源的诊断。Nature 正刊发表，交大×新华×观壹联合研发。”',
  },
  {
    n: '20 秒',
    title: '数据地图',
    desc: '“已覆盖 65 国、1,800+ 机构，新华院内筛查超 100 万例。”',
  },
  {
    n: '60 秒',
    title: '案例故事',
    desc: '从故事墙引入：“这位患者 50 年辗转多家医院未确诊，DeepRare 整合跨越数十年的线索识别出正确诊断。”随后在屏幕上打开案例详情，播放医生视频证言。',
  },
  {
    n: '60 秒',
    title: '系统演示',
    desc: '在“会诊台”实操演示两套系统：线上平台输入表型 → AI 实时推理 → 候选疾病排序；院内系统展示百万级筛查列表。',
  },
  {
    n: '10 秒',
    title: '收尾',
    desc: '“从筛查到诊断到治疗路径，全链条正在打通。中国原创，服务全球。”',
  },
]

export default function TourPlan() {
  return (
    <Page
      num="05"
      title="领导巡展讲解方案（3 分钟）"
      lead="考虑到高层巡展停留时间短，设计 3 分钟快速版讲解动线。如有兴趣可随时展开至 10-15 分钟完整版。"
    >
      <div className="flow">
        {steps.map((s, i) => (
          <div className="flow-step" key={i}>
            <div className="step-n">{s.n}</div>
            <h4>{s.title}</h4>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </Page>
  )
}
