import Page from './Page.jsx'

const mutedSub = { fontWeight: 400, color: 'var(--text-3)', fontSize: 11 }
const caseCell = { fontWeight: 600, whiteSpace: 'nowrap' }

const rows = [
  {
    name: '案例 1',
    tag: '50 年诊断旅程',
    wall: '大画幅卡片，标题“跨越 50 年的诊断旅程”，核心数字“50 年”，下方一行简述',
    detail: (
      <>
        案例专区展开完整故事：患者时间线（7岁→23岁→57岁）+ DeepRare 证据链路径 + 最终诊断
        NLRP3-AID。<strong>嵌入医生视频</strong>（1-2 分钟），讲解员可现场为来访者播放
      </>
    ),
  },
  {
    name: '案例 2',
    tag: '打破帕金森定式',
    wall: '标题“5 分钟打破帕金森思维定式”，标注“95% 置信度”',
    detail: (
      <>
        案例专区展开：人类诊断路径（标准治疗失败）vs DeepRare
        路径（发现隐藏的自身免疫线索），对比呈现。<strong>嵌入医生视频</strong>
        ，讲述“标准治疗为何失败、AI 如何发现线索”
      </>
    ),
  },
  {
    name: '案例 3',
    tag: '1 基因 = 8 诊断',
    wall: '标题“8 个诊断背后的 1 个基因”，视觉上以 8→1 的收束图形呈现',
    detail: (
      <>
        案例专区展开：外院 8 个分散诊断标签 → DeepRare 统一归因到 TBL1XR1 → Pierpont
        综合征。含 HPO 表型匹配表。<strong>嵌入医生视频</strong>，讲“为什么各科室都没想到查单基因”
      </>
    ),
  },
  {
    name: '案例 4',
    tag: '口语穿透',
    wall: '标题“穿透口语噪音的 AI”，引用患者原话片段（“上头电子烟…像个傻子”）',
    detail: (
      <>
        案例专区展开：患者原始口语主诉 → DeepRare 语义解析映射 →
        合成大麻素中毒性白质脑病。此案例以<strong>文字详情</strong>
        为主（患者原话本身已有足够冲击力）
      </>
    ),
  },
  {
    name: '案例 5',
    tag: '非典型 PWS',
    wall: '标题“非典型表现下的精准定位”，标注“甲基化检测确诊”',
    detail: (
      <>
        案例专区展开：缺乏典型特征的干扰 → DeepRare 将 PWS 排入 Top 2 → 推荐特异性检测 →
        确诊。<strong>嵌入医生视频</strong>，讲“非典型病例为何容易漏诊”
      </>
    ),
  },
]

export default function CasePresentation() {
  return (
    <Page
      id="formats"
      num="05"
      title="五个案例的展示形式"
      lead="每个案例有两层展示：故事墙浏览概述（5 秒）→ 故事墙案例旁边屏幕点开案例专区查看详情 + 医生视频（1-2 分钟）。故事墙旁提供一块屏幕，用于展示案例讲解视频。"
    >
      <table className="detail-table">
        <thead>
          <tr>
            <th>案例</th>
            <th>故事墙（静态卡片）</th>
            <th>可触控屏幕 · 案例专区详情</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.name}>
              <td style={caseCell}>
                {r.name}
                <br />
                <span style={mutedSub}>{r.tag}</span>
              </td>
              <td>{r.wall}</td>
              <td>{r.detail}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="highlight">
        <strong>轻量化策略：</strong>所有医生视频统一嵌入官网案例专区页面，展会现场通过故事墙旁的屏幕直接打开播放。若医生来不及录视频，会提供案例演示视频，结合案例专区的文字详情，也能够很好传递价值。
      </div>
    </Page>
  )
}
