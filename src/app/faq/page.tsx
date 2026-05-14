'use client'

import { useState } from 'react'
import { MessageSquare, ChevronDown, Phone } from 'lucide-react'
import Link from 'next/link'

const faqs = [
  {
    category: "수수료",
    q: "부동산 중개 수수료는 어떻게 되나요?",
    a: "중개 수수료는 거래 금액 및 거래 종류(매매/전세/월세)에 따라 법정 요율이 정해져 있습니다. 매매의 경우 거래금액의 0.4~0.9%, 전세는 0.3~0.8%, 월세는 0.3~0.8% 범위 내에서 협의하며, 정확한 금액은 상담 시 안내해 드립니다.",
  },
  {
    category: "서류",
    q: "계약 전 어떤 서류를 준비해야 하나요?",
    a: "매수인/임차인의 경우 신분증과 도장(또는 서명)이 필요합니다. 매도인/임대인의 경우 등기권리증, 신분증, 도장이 필요합니다. 법인 거래 시 법인등기부등본, 사용인감증명서 등 추가 서류가 필요할 수 있습니다.",
  },
  {
    category: "전세",
    q: "전세금 보호는 어떻게 받을 수 있나요?",
    a: "전입신고와 확정일자를 받으시면 전세금 우선변제권이 발생합니다. 추가로 전세보증보험(HUG, HF, SGI) 가입을 통해 임대인이 전세금을 돌려주지 못하는 상황에서도 보증기관으로부터 보호받을 수 있습니다. 자세한 절차는 상담 시 안내해 드립니다.",
  },
  {
    category: "상담",
    q: "상담은 어떻게 신청하나요?",
    a: "홈페이지의 [상담신청] 메뉴를 통해 온라인으로 신청하시거나, 전화(02-000-0000)로 직접 연락 주시면 됩니다. 영업시간 내 최대한 빠르게 연락드리겠습니다. 첫 상담은 무료입니다.",
  },
  {
    category: "매물",
    q: "매물 정보는 어디서 확인할 수 있나요?",
    a: "상단 메뉴의 [매물보기]를 클릭하시면 최신 매물 정보를 확인하실 수 있습니다. 또한 직접 방문하시거나 전화 문의 시 맞춤형 매물을 추천해 드립니다.",
  },
  {
    category: "계약",
    q: "계약서 작성 시 주의사항이 있나요?",
    a: "특약사항 기재 내용, 잔금 지급 일정, 인테리어·옵션 항목 포함 여부, 관리비 포함 여부 등을 꼼꼼히 확인하셔야 합니다. 저희 공인중개사가 계약 전 전 항목을 함께 검토해 드립니다.",
  },
]

const categories = ["전체", ...Array.from(new Set(faqs.map((f) => f.category)))]

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState("전체")

  const filtered = activeCategory === "전체" ? faqs : faqs.filter((f) => f.category === activeCategory)

  return (
    <div className="bg-white pt-16">
      {/* 페이지 헤더 */}
      <section className="bg-slate-950 hero-pattern py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 text-amber-400 text-sm font-semibold mb-4 tracking-widest uppercase">
            <MessageSquare className="w-4 h-4" />
            FAQ
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">자주묻는질문</h1>
          <p className="text-slate-400 text-lg">궁금한 점을 빠르게 해결해 드립니다.</p>
        </div>
      </section>

      <section className="py-16 px-5">
        <div className="max-w-3xl mx-auto">
          {/* 카테고리 필터 */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setOpenIndex(null) }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-slate-950 text-white shadow-sm'
                    : 'bg-stone-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* FAQ 리스트 */}
          <div className="space-y-3">
            {filtered.map((faq, i) => {
              const isOpen = openIndex === i
              return (
                <div
                  key={i}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen ? 'border-amber-200 shadow-md' : 'border-slate-100 shadow-sm bg-white'
                  }`}
                >
                  <button
                    className="w-full text-left px-6 py-5 flex items-start justify-between gap-4 hover:bg-stone-50 transition-colors"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-amber-500 font-bold text-sm mt-0.5 flex-shrink-0">Q.</span>
                      <span className="font-semibold text-slate-800 text-sm leading-relaxed">{faq.q}</span>
                    </div>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-amber-500' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 border-t border-amber-100 bg-amber-50/30">
                      <div className="flex gap-3 pt-5">
                        <span className="text-slate-400 font-bold text-sm flex-shrink-0">A.</span>
                        <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* 추가 문의 */}
          <div className="mt-12 bg-slate-950 rounded-2xl p-8 hero-pattern text-center">
            <h3 className="text-white font-bold text-lg mb-2">원하는 답변을 찾지 못하셨나요?</h3>
            <p className="text-slate-400 text-sm mb-6">직접 상담을 통해 빠르게 해결해 드립니다.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link
                href="/consult"
                className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-6 py-2.5 rounded-xl text-sm transition-colors"
              >
                온라인 상담신청
              </Link>
              <a
                href="tel:02-000-0000"
                className="flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold px-6 py-2.5 rounded-xl text-sm transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                전화 문의
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}