import Page from './Page.jsx'
import CaseCard, { Section, EvidenceChain, Tags } from './CaseCard.jsx'
// 截图按「诊断结果内容」对应到卡片，而非文件名顺序：
import shotNmosd from 'src/assets/case5.png' // 视神经脊髓炎谱系疾病 (NMOSD) → 案例 01
import shotNlrp3 from 'src/assets/case1.png' // NLRP3 相关自身炎症性疾病 → 案例 02
import shotParkinson from 'src/assets/case2.png' // 自身免疫性帕金森综合征 → 案例 04
import shotPierpont from 'src/assets/case3.png' // Pierpont 综合征 (TBL1XR1) → 案例 05
import shotCannabinoid from 'src/assets/case4.png' // 合成大麻素中毒性白质脑病 → 案例 03

export default function Cases() {
  return (
    <Page
      id="cases"
      num="02"
      title="真实改变命运的案例"
      lead="以下均为 DeepRare 系统的真实诊断结果，经临床医生确认一致。每个案例展示了 AI 在不同场景下的独特诊断能力。"
    >
      <div className="case-cards">
        <CaseCard
          num="01"
          title="时序推理与多模态证据整合 — 视神经脊髓炎谱系疾病（NMOSD）"
          subtitle="症状 59 天内进行性上升 · 影像 + 脑脊液 + 抗体多模态整合 · 95% 置信度"
          shot={shotNmosd}
          confirmer="新华医院长兴分院神经内科岳副主任"
        >
          <Section label="患者时间线">
            <p>
              第 1 天双侧胸肋部疼痛 → 第 54 天肩颈背部疼痛扩散 → 第 58 天双下肢发麻、左重右轻 →
              第 59 天左脚不能活动、小便潴留。<strong>症状随时间呈进行性“上升性”进展。</strong>
            </p>
          </Section>
          <Section label="多模态证据">
            <p>
              MRI：脊髓长节段异常信号 · 头颅 MRI：侧脑室旁垂直分布的斑点影 · 脑脊液：蛋白 0.76g/L
              ↑、淋巴 85% · 抗体：<strong>AQP4-IgG (+) 1:100</strong>。
            </p>
          </Section>
          <Section label="核心洞察">
            <p>
              <strong>不是关键词匹配，而是真正的医学推理。</strong>DeepRare 捕捉到症状随时间的“上升性”进展模式，结合影像与脑脊液证据，在
              MS / NMOSD / 脊髓炎等复杂鉴别中精准定位——证明 AI 具备对疾病时间线逻辑的深层理解。
            </p>
          </Section>
          <EvidenceChain
            steps={[
              { label: '临床特征提取', text: '脊髓长节段病变 + AQP4-IgG(+) + 脑脊液炎症 + 双抗体阳性' },
              { label: 'NMOSD 诊断标准', text: '≥1 个核心临床特征 + AQP4-IgG 血清阳性 → AQP4-IgG 阳性 NMOSD' },
              { label: '文献验证', text: 'Orphanet NMOSD:71211 · OMIM 614250 · Case Rep 2026 双抗体阳性首例' },
              { label: '诊断结论', text: 'NMOSD · 95% 置信度 · 鉴别 MOGAD 6/14 | 结节病 7/14' },
            ]}
          />
          <Tags items={['⏱ 时序推理', '🧩 多模态证据整合', '🧠 复杂鉴别诊断']} />
        </CaseCard>

        <CaseCard
          num="02"
          title="跨越 50 年的诊断旅程 — NLRP3 相关自身炎症性疾病"
          subtitle="57 岁患者 · 7 岁起反复发作 · 辗转多家医院均按常见病处理"
          shot={shotNlrp3}
          confirmer="清华大学医学院洪医生"
        >
          <Section label="50 年患者旅程">
            <p>
              7 岁起遇冷后反复皮疹、发热、关节痛 → 23 岁住院，误诊为荨麻疹性血管炎 → 30
              岁感音神经性听力下降 → 40 岁眼睑水肿、肾脏受累 → 57 岁冠心病 PCI 后症状再发。
              <strong>50 年间始终未获确诊。</strong>
            </p>
          </Section>
          <Section label="DeepRare 如何破局">
            <p>
              DeepRare
              整合了跨越数十年的多系统线索——遇冷诱发的皮疹与关节痛、进行性听力下降、肾脏受累——识别出这些看似无关的症状均指向同一条自身炎症通路（NLRP3）。
            </p>
          </Section>
          <EvidenceChain
            steps={[
              { label: '临床特征提取', text: '寒冷诱发荨麻疹样皮疹 + 发热 + 关节痛 + 听力下降' },
              { label: '诊断标准匹配', text: '复发性系统性炎症发作 + 寒冷诱发皮疹 + 关节炎' },
              { label: '文献验证', text: 'Orphanet NLRP3-AID · OMIM #120100 · NEJM Beck 2020' },
              { label: '诊断结论', text: 'NLRP3-AID · 78% 置信度 · Gene: NLRP3' },
            ]}
          />
          <Tags items={['⏱ 50 年诊断旅程', '🔗 多系统线索整合', '📖 NEJM 文献验证']} />
        </CaseCard>

        <CaseCard
          num="03"
          title="穿透噪音的语义理解 — 合成大麻素中毒性白质脑病"
          subtitle="患者使用口语化描述 · 零医学术语 · AI 穿透语义噪音精准定位"
          shot={shotCannabinoid}
        >
          <Section label="患者原始主诉（原文）">
            <p
              style={{
                background: 'var(--bg-tint)',
                padding: '14px 18px',
                borderRadius: 10,
                fontStyle: 'italic',
                borderLeft: '3px solid var(--gold)',
              }}
            >
              “吸食上头电子烟……不知道里面的成分是什么，但是吸的时候感觉像发烧的感觉……然后感觉什么都不知道，像个真的傻子一样就是与人沟通不了……通宵一点困意都没有…”
            </p>
          </Section>
          <Section label="DeepRare 语义解析">
            <p>
              “上头电子烟” → 合成大麻素接触史 · “像发烧的感觉” → 全身性中毒反应 · “像个傻子” →
              认知功能障碍 · “通宵没困意” → 睡眠-觉醒周期紊乱
            </p>
          </Section>
          <Section label="核心洞察">
            <p>
              <strong>真实世界的输入没有标准格式。</strong>
              患者不会使用“认知功能障碍”这样的医学术语。面对充满俚语、情绪化和零医学背景的主诉，DeepRare
              依然能穿透语义噪音，识别出毒物接触史与神经精神受损的关联。
            </p>
          </Section>
          <Tags items={['🗣 口语化输入', '🧠 语义理解', '⚗️ 毒物接触识别']} />
        </CaseCard>

        <CaseCard
          num="04"
          title="打破“帕金森”思维定式 — 自身免疫性帕金森综合征"
          subtitle="标准帕金森治疗失败 · DeepRare 发现隐藏的自身免疫线索 · 95% 置信度"
          shot={shotParkinson}
          confirmer="平湖市第一人民医院柯副主任"
        >
          <Section label="人类诊断路径（陷入僵局）">
            <p>
              2019 年起左下肢姿势性震颤，DAT 示壳核多巴胺转运体减少 → 临床诊断帕金森病 →
              雷沙吉兰+普拉克索治疗 → <strong>震颤无改善</strong>，2025
              年站立剧抖。标准治疗失败，诊断陷入僵局。
            </p>
          </Section>
          <Section label="DeepRare 发现的隐藏线索">
            <p>
              甲状腺自身抗体 TRAB 持续升高（1.68→4.11→5.71）· 脑脊液蛋白 551↑、TNF 升高 4 倍 ·
              泼尼松第 14 天震颤消失 · FDG-PET 壳核代谢升高。
              <strong>这些分散在不同检查中的线索共同指向自身免疫病因。</strong>
            </p>
          </Section>
          <Section label="诊疗路径说明">
            <p>
              患者并非从一开始就按免疫病治疗，而是在帕金森病治疗效果不佳、自身免疫抗体持续升高、临床表现有不典型特征的背景下，后期才转向免疫方向的探查与试验性治疗（糖皮质激素）。
            </p>
            {/* <p style={{ marginTop: 8, color: 'var(--text-3)', fontSize: 12 }}>
              注：本案例尚未提及确诊为自身免疫性 / 副肿瘤性帕金森综合征之后的预后信息。
            </p> */}
          </Section>
          <EvidenceChain
            steps={[
              { label: '特征提取', text: '波动性帕金森综合征 + 激素反应性 + CSF 炎症标志物' },
              { label: '标准匹配', text: '波动性运动障碍 + 激素显著反应 + 自身抗体升高' },
              { label: '文献验证', text: 'Autoimmune Parkinsonism (Clinical and Research Aspects)' },
              { label: '诊断结论', text: '自身免疫性帕金森 · 95% 置信度' },
            ]}
          />
          <Tags items={['🔄 纠正误诊', '🔬 隐藏线索整合', '💊 改变治疗方案']} />
        </CaseCard>

        <CaseCard
          num="05"
          title="8 个诊断背后的 1 个基因 — Pierpont 综合征（TBL1XR1）"
          subtitle="外院多科室各给诊断标签 · 无人追问统一病因 · DeepRare 一个基因解释一切"
          shot={shotPierpont}
          confirmer="中山大学附属第一医院儿科徐主任"
        >
          <Section label="外院诊断（多科室、多标签）">
            <p>
              自闭症谱系障碍（重度）· 精神运动发育迟缓 · 言语和语言发育障碍 · 智力障碍（重度）·
              注意缺陷多动障碍 · 右侧极重度耳聋 · Chiari 畸形 I 型 ·
              双眼内斜视。利培酮治疗效果欠佳。
              <strong>各科室各给一个诊断标签，无人追问是否有统一病因。</strong>
            </p>
          </Section>
          <Section label="DeepRare：一个基因解释一切">
            <p>
              DeepRare 识别出 8 个 HPO 表型横跨神经、发育行为、感官、结构 4
              个维度，将所有看似独立的症状统一归因到 <strong>TBL1XR1 基因突变</strong>，给出
              Pierpont 综合征诊断。
            </p>
          </Section>
          <EvidenceChain
            steps={[
              { label: '表型提取', text: '8 个 HPO 表型跨越 4 个维度：神经、发育行为、感官、结构' },
              { label: '候选匹配', text: 'Pierpont (TBL1XR1) · White-Sutton (POGZ) · ADNP 综合征' },
              {
                label: '文献验证',
                text: 'J. Med. Genet. 2016 · Biol. Psychiatry 2019 · Am J Hum Genet 2016',
              },
              { label: '最终诊断', text: 'Pierpont 综合征 · Gene: TBL1XR1 · Orphanet:487825' },
            ]}
          />
          <Tags items={['🧩 多表型统一归因', '🧬 单基因解释', '🏥 纠正多科室分散诊断']} />
        </CaseCard>
      </div>
    </Page>
  )
}
