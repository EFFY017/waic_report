// 案例详情直接平铺展示（无需点击展开）。
// 每个案例预留 `shot` 截图位：产品实际诊断界面截图就绪后，
// 传入 import 的图片即可自动填充，无需改动布局。
export default function CaseCard({ num, title, subtitle, shot, children }) {
  return (
    <div className="case-card static">
      <div className="case-card-header">
        <div className="case-num">{num}</div>
        <div>
          <div className="case-title">{title}</div>
          <div className="case-subtitle">{subtitle}</div>
        </div>
        <span className="case-badge confirmed">✓ 临床确认</span>
      </div>
      <div className="case-expand">
        <div className="case-body">
          <div className="case-text">{children}</div>
          <CaseShot src={shot} title={title} />
        </div>
      </div>
    </div>
  )
}

function CaseShot({ src, title }) {
  return (
    <div className="case-shot">
      {src ? (
        <img src={src} alt={`${title} · DeepRare 诊断界面`} />
      ) : (
        <>
          <div className="case-shot-icon">🖼️</div>
          <div className="case-shot-hint">
            <strong>DeepRare 诊断界面截图</strong>
            预留位 · 待替换为产品实际截图
          </div>
        </>
      )}
    </div>
  )
}

export function Section({ label, children }) {
  return (
    <div className="case-section">
      <div className="case-section-label">{label}</div>
      {children}
    </div>
  )
}

export function EvidenceChain({ steps }) {
  return (
    <div className="evidence-chain" style={{ marginTop: 12 }}>
      {steps.map((s) => (
        <div className="evidence-step" key={s.label}>
          <strong>{s.label}</strong>
          {s.text}
        </div>
      ))}
    </div>
  )
}

export function Tags({ items }) {
  return (
    <div className="case-tags" style={{ marginTop: 12 }}>
      {items.map((t) => (
        <span className="case-tag" key={t}>
          {t}
        </span>
      ))}
    </div>
  )
}
