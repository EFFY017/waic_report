import { useEffect, useState } from 'react'
import logo from 'src/assets/DeepRare-logo.svg'

const links = [
  { id: 'why', num: '01', label: '为什么' },
  { id: 'cases', num: '02', label: '真实案例' },
  { id: 'systems', num: '03', label: '系统展示' },
  { id: 'booth', num: '04', label: '展厅设计' },
  { id: 'formats', num: '05', label: '案例展示' },
  { id: 'tour', num: '06', label: '巡展讲解' },
  { id: 'timeline', num: '07', label: '时间线' },
  { id: 'confirm', num: '08', label: '待确认' },
]

export default function Nav() {
  const [solid, setSolid] = useState(false)
  const [active, setActive] = useState('')

  // 滚过封面（约一屏高）后切换为实心白底导航
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > window.innerHeight - 70)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // 滚动高亮当前所在章节
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    )
    links.forEach((l) => {
      const el = document.getElementById(l.id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  return (
    <nav className={`nav${solid ? ' solid' : ''}`}>
      <div className="nav-inner">
        <a href="#top" className="nav-brand" aria-label="DeepRare · WAIC 2026 首页">
          <img className="nav-logo" src={logo} alt="DeepRare" />
          <span>· WAIC 2026</span>
        </a>
        <div className="nav-links">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`nav-link${active === l.id ? ' active' : ''}`}
            >
              <span className="nav-num">{l.num}</span>
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
