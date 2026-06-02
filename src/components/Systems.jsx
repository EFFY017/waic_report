import Page from './Page.jsx'
import system1 from 'src/assets/frontpage.png'
import system2 from 'src/assets/hpo.png'
import system3 from 'src/assets/vcf.png'
import system4 from 'src/assets/xinhua.png'
import system5 from 'src/assets/patient.png'

function Screenshot({ src, alt, caption }) {
  return (
    <div className="screenshot">
      <img src={src} alt={alt} />
      <div className="screenshot-cap">{caption}</div>
    </div>
  )
}

export default function Systems() {
  return (
    <Page
      id="systems"
      num="03"
      title="两套系统 · 均可现场交互演示"
      lead="展位核心体验：来访者可亲手操作系统，而非观看视频。两套系统覆盖线上开放平台与院内质控两条落地路径。"
    >
      <h3 style={{ fontSize: 16, marginBottom: 16 }}>
        系统 A · DeepRare 线上开放平台（deeprare.cn）
      </h3>
      <p style={{ fontSize: 14, color: 'var(--text-2)', marginBottom: 16 }}>
        面向全球医生的开放平台，包括 HPO 表型诊断和 VCF
        基因变异解读两大功能。支持从零发起一次完整诊断流程，全程可追溯。
      </p>

      <div className="ss-grid">
        <Screenshot
          src={system1}
          alt="平台首页"
          caption="DeepRare 线上平台首页 · 10,000+ 已识别病种 · 95% 结论可文献溯源"
        />
        <Screenshot
          src={system2}
          alt="HPO 诊断结果"
          caption="HPO 表型诊断结果 · 候选疾病排序 + 完整证据链 + 文献溯源"
        />
      </div>

      <div className="ss-grid">
        <Screenshot
          src={system3}
          alt="VCF 基因诊断"
          caption="VCF 基因变异解读 · ACMG 致病性评级 · 变异-疾病关联分析"
        />
        <Screenshot
          src={system5}
          alt="患者工作台"
          caption="患者工作台 · 病例列表与诊断档案 · 支持 HPO / VCF 多任务管理"
        />
      </div>

      <h3 style={{ fontSize: 16, margin: '32px 0 16px' }}>系统 B · 新华医院院内质控系统</h3>
      <p style={{ fontSize: 14, color: 'var(--text-2)', marginBottom: 16 }}>
        DeepRare 作为“数字质控员”在新华医院全院部署，已筛查超过 <strong>100 万例</strong>
        门诊病历，筛出数千例疑似罕见病。上海市级质控体系已有明确采纳意愿。
      </p>

      <Screenshot
        src={system4}
        alt="新华院内系统"
        caption="新华医院院内质控系统 · 当日新增 57 例疑似 · 历史累计筛查 1,020,009 例"
      />
    </Page>
  )
}
