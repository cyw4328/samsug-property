'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Building2, Menu, X, ExternalLink } from 'lucide-react'

const navItems = [
  { label: '부동산소개', href: '/about' },
  { label: '공인중개사소개', href: '/agent' },
  { label: '위치', href: '/location' },
  { label: '자주묻는질문', href: '/faq' },
  { label: '상담신청', href: '/consult' },
]

const PROPERTY_URL = 'https://www.naver.com' // 실제 매물 URL로 교체

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const isHome = pathname === '/'

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    handler()
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // 홈에서는 상단 투명, 스크롤 시 불투명
  const transparent = isHome && !scrolled

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        transparent
          ? 'bg-transparent'
          : 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between h-16">
        {/* 로고 */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className={`p-1.5 rounded-lg transition-colors ${transparent ? 'bg-white/10' : 'bg-amber-50'}`}>
            <Building2 className={`w-5 h-5 ${transparent ? 'text-amber-400' : 'text-amber-500'}`} />
          </div>
          <span className={`text-lg font-bold tracking-tight transition-colors ${transparent ? 'text-white' : 'text-slate-900'}`}>
            삼성부동산
          </span>
        </Link>

        {/* 데스크탑 네비게이션 */}
        <nav className="hidden md:flex items-center gap-0.5">
          {navItems.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  active
                    ? transparent
                      ? 'text-amber-400'
                      : 'text-amber-600'
                    : transparent
                    ? 'text-white/80 hover:text-white hover:bg-white/10'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                {item.label}
                {active && (
                  <span className={`absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${transparent ? 'bg-amber-400' : 'bg-amber-500'}`} />
                )}
              </Link>
            )
          })}

          {/* 매물보기 */}
          <a
            href={PROPERTY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold bg-amber-500 text-white hover:bg-amber-600 transition-colors shadow-sm shadow-amber-200"
          >
            매물보기
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </nav>

        {/* 모바일 메뉴 버튼 */}
        <button
          className={`md:hidden p-2 rounded-lg transition-colors ${transparent ? 'text-white hover:bg-white/10' : 'text-slate-700 hover:bg-slate-100'}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="메뉴"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* 모바일 드롭다운 */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 shadow-lg">
          <nav className="max-w-6xl mx-auto px-5 py-3 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  pathname === item.href
                    ? 'bg-amber-50 text-amber-600'
                    : 'text-slate-700 hover:bg-slate-50'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={PROPERTY_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold text-amber-600 hover:bg-amber-50 transition-colors"
            >
              매물보기 <ExternalLink className="w-4 h-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}