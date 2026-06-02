import Page from './Page.jsx'

const items = [
  'WAIC 2026 确切举办日期与布展时间窗口',
  '国家展分配给 DeepRare 的展位面积与位置',
  '展位供电规格、网络接口及带宽保障',
  '主视觉/展板的尺寸规格与材料提交截止日期',
  '是否有统一的展位搭建服务商，或可自行设计施工',
  '领导巡展的预计时间段与动线安排（如已确定）',
]

export default function Confirmations() {
  return (
    <Page
      id="confirm"
      num="08"
      title="需要确认的事项"
      lead="恳请经信委协助确认以下信息，以便我们精确推进筹备工作。"
    >
      <div className="checklist">
        {items.map((t) => (
          <div className="check-item" key={t}>
            {t}
          </div>
        ))}
      </div>

      <div className="highlight">
        我们已完成展示方案终稿、5 个真实确诊案例的内容梳理、两套系统的现版演示准备。
        <strong>各项筹备工作具备立即启动的条件</strong>，确认上述信息后即可按里程碑推进。
      </div>
    </Page>
  )
}
