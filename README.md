# DeepRare · WAIC 2026 国家展方案汇报

由原始单文件 HTML 汇报页改写而成的 **React + Vite** 前端项目。

## 开发

```bash
npm install      # 安装依赖
npm run dev      # 本地开发服务器（默认 http://localhost:5173）
npm run build    # 生产构建，输出到 dist/
npm run preview  # 预览构建产物
```

## 技术栈

- **React 18** + **Vite 5**（JSX，未使用 TypeScript）
- 全局样式：`src/styles/index.css`（从原 HTML 的 `<style>` 提取，并补全了案例卡片用到的若干 CSS 变量）

## 目录结构

```
index.html              # Vite 入口，挂载 #root
vite.config.js          # 含 `src` 路径别名，支持 `import x from 'src/assets/...'`
src/
  main.jsx              # React 入口
  App.jsx               # 按顺序组合各 section 组件
  styles/index.css      # 全局样式
  assets/               # 系统截图（高清 PNG）
  components/
    Cover.jsx           # 封面
    Page.jsx            # 通用页面壳（page-num + 标题 + 引言）
    WhyDeepRare.jsx     # 01 为什么适合代表国家展
    Cases.jsx           # 02 真实案例（可点击展开的折叠卡片）
    CaseCard.jsx        #    案例卡片 + 子组件（useState 控制展开）
    Systems.jsx         # 03 两套系统 · 截图展示
    BoothDesign.jsx     # 04 展厅设计与布展细则
    CasePresentation.jsx# 04.5 五个案例的展示形式
    TourPlan.jsx        # 05 领导巡展讲解方案
    Timeline.jsx        # 06 筹备时间线
    Confirmations.jsx   # 07 需要确认的事项
    Footer.jsx          # 页脚
```

## 说明

- 原始单文件 `DeepRare_WAIC2026_经信委汇报版 (1).html` 已加入 `.gitignore`（保留作参考）。
  其中内嵌的 base64 图片已提取为独立文件，并替换为更高清的截图。
- 案例折叠交互由原来的内联 `onclick` 改写为 React `useState`。
