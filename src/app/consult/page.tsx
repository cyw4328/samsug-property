'use client'

import { useState } from 'react'
import { ClipboardList, CheckCircle2, Phone, Clock, Shield } from 'lucide-react'
import { submitConsult } from './actions'

const consultTypes = [
  { value: 'buy', label: '매매' },
  { value: 'jeonse', label: '전세' },
  { value: 'monthly', label: '월세' },
  { value: 'invest', label: '투자 상담' },
  { value: 'other', label: '기타' },
]

const benefits = [
  { icon: Phone, title: "빠른 응답", desc: "영업일 기준 24시간 내 연락" },
  { icon: Shield, title: "무료 상담", desc: "상담은 완전 무료" },
  { icon: Clock, title: "유연한 일정", desc: "방문 · 전화 모두 가능" },
]

export default function ConsultPage() {
  const [form, setForm] = useState({ name: '', phone: '', type: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError(null)
    const formData = new FormData(e.currentTarget)
    formData.set('type', form.type)
    const result = await submitConsult(formData)
    setLoading(false)
    if (result.success) {
      setSubmitted(true)
    } else {
      setError(result.error ?? '전송에 실패했습니다. 잠시 후 다시 시도해 주세요.')
    }
  }

  if (submitted) {
    return (
      <div className="bg-white pt-16 min-h-screen flex items-center justify-center px-5">
        <div className="text-center max-w-md">
          <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-amber-500" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-3">상담 신청 완료!</h2>
          <p className="text-slate-500 mb-8 leading-relaxed">
            신청해 주셔서 감사합니다.<br />
            영업일 기준 24시간 내에 담당 중개사가 연락드리겠습니다.
          </p>
          <button
            onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', type: '', message: '' }) }}
            className="bg-slate-950 text-white font-semibold px-6 py-3 rounded-xl hover:bg-slate-800 transition-colors text-sm"
          >
            다시 신청하기
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white pt-16">
      {/* 페이지 헤더 */}
      <section className="bg-slate-950 hero-pattern py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 text-amber-400 text-sm font-semibold mb-4 tracking-widest uppercase">
            <ClipboardList className="w-4 h-4" />
            Consultation
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">상담신청</h1>
          <p className="text-slate-400 text-lg">전문 중개사가 직접 연락드립니다. 상담은 무료입니다.</p>
        </div>
      </section>

      <section className="py-16 px-5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* 사이드바 */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-2">상담 안내</h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                간단한 정보를 입력해 주시면 담당 공인중개사가 직접 연락드립니다.
              </p>
            </div>

            <div className="space-y-4">
              {benefits.map((b) => (
                <div key={b.title} className="flex gap-4 items-start">
                  <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center flex-shrink-0">
                    <b.icon className="w-4 h-4 text-amber-500" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-900 text-sm mb-0.5">{b.title}</div>
                    <div className="text-slate-500 text-xs">{b.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* 전화 상담 */}
            <div className="bg-stone-50 rounded-2xl border border-slate-100 p-6 section-pattern">
              <div className="text-xs text-slate-500 mb-1 font-medium uppercase tracking-wide">전화 상담</div>
              <div className="text-2xl font-bold text-slate-900 mb-1">010-4431-8205</div>
              <div className="text-xs text-slate-400">평일 09:00 ~ 18:00 | 토 09:00 ~ 15:00</div>
            </div>
          </div>

          {/* 폼 */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-slate-100 shadow-sm p-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    이름 <span className="text-amber-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="홍길동"
                    className="w-full bg-stone-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all placeholder:text-slate-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                    연락처 <span className="text-amber-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    placeholder="010-0000-0000"
                    className="w-full bg-stone-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all placeholder:text-slate-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  상담 유형 <span className="text-amber-500">*</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {consultTypes.map((t) => (
                    <button
                      key={t.value}
                      type="button"
                      onClick={() => setForm({ ...form, type: t.value })}
                      className={`px-4 py-2 rounded-xl text-sm font-medium border transition-all ${
                        form.type === t.value
                          ? 'bg-slate-950 text-white border-slate-950 shadow-sm'
                          : 'bg-stone-50 text-slate-600 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
                <input type="hidden" name="type" value={form.type} required />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">문의 내용</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="원하시는 조건(지역, 예산, 평수 등)을 자유롭게 작성해 주세요."
                  className="w-full bg-stone-50 border border-slate-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all resize-none placeholder:text-slate-400"
                />
              </div>

              {error && (
                <p className="text-sm text-red-500 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={!form.type || loading}
                className="w-full bg-amber-500 hover:bg-amber-600 disabled:bg-slate-200 disabled:text-slate-400 text-white font-semibold py-3.5 rounded-xl transition-all shadow-sm shadow-amber-200 text-sm"
              >
                {loading ? '전송 중...' : '상담 신청하기'}
              </button>

              <p className="text-center text-xs text-slate-400">
                제출하신 정보는 상담 목적으로만 사용됩니다.
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}