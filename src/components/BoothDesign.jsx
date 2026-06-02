import Page from './Page.jsx'

const cards = [
  {
    tag: '色调',
    title: '暖白 + 浅蓝色',
    desc: '医疗场景天然让人联想到洁净与温暖。DeepRare 品牌蓝作为克制的点缀。整体氛围：可信赖，有温度。',
  },
  {
    tag: '焦点',
    title: '患者故事墙',
    desc: '展位正面不是数据大屏，而是大画幅的案例故事。一句话标题 + 一个关键数字（“50 年”、“5 分钟”）。系统演示退到内部。',
  },
  {
    tag: '体验',
    title: '“会诊台”交互',
    desc: '系统演示区做成诊室风格台面，来访者坐下来操作。体验的是“我在用 AI 做诊断”，而不是“我在看 demo”。',
  },
]

const mutedSub = { fontWeight: 400, color: 'var(--text-3)', fontSize: 11 }

export default function BoothDesign() {
  return (
    <Page
      num="04"
      title="展厅设计与布展细则"
      lead='我们不打算做又一个“深色背景+科技蓝光”的技术展位。DeepRare 的产品用在诊室里，展位风格也应该是温暖的、有人文关怀的——让它成为整个 WAIC 里最让人“想走进去”的空间。'
    >
      <div className="cards">
        {cards.map((c) => (
          <div className="card" key={c.tag}>
            <div className="card-tag">{c.tag}</div>
            <h4>{c.title}</h4>
            <p>{c.desc}</p>
          </div>
        ))}
      </div>

      <h3 style={{ fontSize: 16, margin: '32px 0 16px' }}>设备与内容部署方案</h3>

      <div className="booth">
        <div className="booth-grid">
          <div className="booth-zone full primary">
            <strong>🧡 展位正面 · 患者故事墙</strong>
            <span>
              “50 年未确诊” / “5 分钟改变命运” / “1 个基因解释 8 个诊断”
              <br />
              大画幅案例卡片，可交互屏幕
            </span>
          </div>
          <div className="booth-zone">
            <strong>🌐 数据地图大屏</strong>
            <span>
              全球 65 国覆盖 · 动态可视化
              <br />
              LED 或投影 · 不可交互
            </span>
          </div>
          <div className="booth-zone secondary">
            <strong>💻 “会诊台” · 可交互屏幕</strong>
            <span>
              屏幕 A：线上平台 Demo
              <br />
              屏幕 B：院内系统 Demo
              <br />
            </span>
          </div>
          <div className="booth-zone full">
            <strong>📋 背景展板 × 3 + 洽谈区</strong>
            <span>展板 1：罕见病现状 · 展板 2：DeepRare 技术与成果 · 展板 3：全球推广路径</span>
          </div>
        </div>
      </div>

      <h3 style={{ fontSize: 16, margin: '32px 0 12px' }}>各区域详细配置</h3>

      <table className="detail-table">
        <thead>
          <tr>
            <th>区域</th>
            <th>设备</th>
            <th>展示内容</th>
            <th>交互方式</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ fontWeight: 600 }}>
              患者故事墙
              <br />
              <span style={mutedSub}>展位正面 · 第一视觉焦点</span>
            </td>
            <td>静态展板（喷绘/KT板）+可触控屏幕 × 1</td>
            <td>
              5 个真实确诊案例的大画幅卡片，每张含一句话标题 + 关键数字 + 疾病名称 +
              一行核心描述。<strong>案例专区：</strong>系统首页案例专区集中展示 5 个案例详情 +
              医生视频证言，故事墙引流至此深度体验
            </td>
            <td>来访者走过即可获取信息；想深入了解时，讲解员引导至旁边会诊台屏幕播放对应医生视频</td>
          </tr>
          <tr>
            <td style={{ fontWeight: 600 }}>
              全球数据地图
              <br />
              <span style={mutedSub}>侧面</span>
            </td>
            <td>大尺寸 LED 大屏 × 1</td>
            <td>
              全球地图动态可视化：光点标注 65 国用户分布，滚动显示机构名称。旁侧大字展示核心数据（Nature
              正刊、70.6% Recall@1、95.4% 满意度）
            </td>
            <td>纯展示，循环播放，无需操作</td>
          </tr>
          <tr>
            <td style={{ fontWeight: 600 }}>
              “会诊台”
              <br />
              <span style={mutedSub}>内侧核心体验区</span>
            </td>
            <td>
              可触控屏幕 / 笔记本 × 2
              <br />+ 诊室风格台面 + 座椅
            </td>
            <td>
              <strong>屏幕 A：</strong>DeepRare 线上平台实机演示（HPO 表型诊断 + VCF
              基因变异解读），预设 Demo 账号含已完成/运行中/可从零开始三种案例状态
              <br />
              <strong>屏幕 B：</strong>新华医院院内质控系统，展示百万级筛查列表、单患者诊断详情页
              <br />
            </td>
            <td>
              来访者可亲手操作：点击案例查看详情、触发新诊断流程、亲自体会每个案例的诊断过程。讲解员在旁引导
            </td>
          </tr>
          <tr>
            <td style={{ fontWeight: 600 }}>
              背景展板 × 3
              <br />
              <span style={mutedSub}>后方内侧</span>
            </td>
            <td>易拉宝或 KT 板 × 3</td>
            <td>
              <strong>展板 1</strong>：关于罕见病（3 亿+患者、7,000+病种、5-7 年确诊）
              <br />
              <strong>展板 2</strong>：关于 DeepRare（多智能体架构简图、Nature 论文、核心指标）
              <br />
              <strong>展板 3</strong>：全球推广路径（新华→上海→全国→一带一路）
            </td>
            <td>静态展板，辅助阅读；旁设纸质宣传资料供取阅</td>
          </tr>
        </tbody>
      </table>

      <div className="highlight green">
        <strong>差异化定位：</strong>不证明 AI 有多强，而是展现 AI
        真实帮助了多少人。一张有温度的名片比一张有算力的名片传得更远。
      </div>
    </Page>
  )
}
