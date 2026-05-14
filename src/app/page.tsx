import Link from "next/link";
import {
  Building2, Users, MapPin, MessageSquare, ClipboardList,
  ArrowRight, Shield, Award, Clock, Star, Phone
} from "lucide-react";

const services = [
  { icon: Building2, title: "아파트 · 빌라", desc: "매매, 전세, 월세 전 과정을 전문적으로 도와드립니다." },
  { icon: Users, title: "상가 · 오피스", desc: "상업용 부동산 임대차 계약의 전문 파트너입니다." },
  { icon: MapPin, title: "토지 · 재개발", desc: "토지 매매와 재개발·재건축 전문 컨설팅을 제공합니다." },
];

const stats = [
  { value: "20년+", label: "업력" },
  { value: "3,000+", label: "중개 완료" },
  { value: "98%", label: "고객 만족도" },
  { value: "1위", label: "지역 신뢰도" },
];

const reasons = [
  { icon: Shield, title: "안전한 거래 보장", desc: "철저한 서류 검토와 법적 검증으로 안전한 거래를 보장합니다." },
  { icon: Award, title: "20년 전문 경력", desc: "풍부한 경험과 전문 지식으로 최적의 솔루션을 제시합니다." },
  { icon: Clock, title: "신속한 처리", desc: "고객의 시간을 소중히 여겨 빠르고 정확하게 처리합니다." },
  { icon: Star, title: "투명한 수수료", desc: "법정 수수료 기준을 준수하며 숨겨진 비용이 없습니다." },
];

export default function Home() {
  return (
    <div className="bg-white">
      {/* ─── 히어로 ─── */}
      <section className="relative min-h-screen bg-slate-950 flex flex-col justify-center hero-pattern overflow-hidden">
        {/* 배경 그라디언트 오버레이 */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 opacity-90" />
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-slate-950 to-transparent" />

        <div className="relative z-10 max-w-6xl mx-auto px-5 pt-24 pb-32">
          {/* 배지 */}
          <div className="animate-fade-in inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold px-4 py-2 rounded-full mb-8 tracking-wide">
            <Star className="w-3.5 h-3.5" />
            20년 전통의 신뢰받는 부동산
          </div>

          {/* 헤딩 */}
          <h1 className="animate-fade-in-delay-1 text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
            내 집 마련의<br />
            <span className="text-gold">가장 믿음직한</span> 파트너
          </h1>

          <p className="animate-fade-in-delay-2 text-slate-400 text-lg md:text-xl leading-relaxed mb-10 max-w-xl">
            20년 경력의 공인중개사가 매매부터 전세·월세까지<br className="hidden md:block" />
            고객의 소중한 자산을 안전하게 지켜드립니다.
          </p>

          {/* CTA 버튼 */}
          <div className="animate-fade-in-delay-3 flex flex-wrap gap-4">
            <Link
              href="/consult"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-7 py-3.5 rounded-xl transition-all shadow-lg shadow-amber-900/30 hover:shadow-amber-900/50"
            >
              무료 상담 신청
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold px-7 py-3.5 rounded-xl transition-all backdrop-blur-sm"
            >
              부동산 소개 보기
            </Link>
          </div>
        </div>

        {/* 스탯 바 */}
        <div className="relative z-10 max-w-6xl mx-auto px-5 w-full">
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 grid grid-cols-2 md:grid-cols-4 gap-6 mb-0">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-amber-400 mb-1">{s.value}</div>
                <div className="text-slate-400 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="h-8" />
      </section>

      {/* ─── 서비스 ─── */}
      <section className="py-24 px-5 section-pattern bg-stone-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-amber-600 text-sm font-semibold tracking-widest uppercase">Services</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">전문 서비스 분야</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s) => (
              <div key={s.title} className="card-hover bg-white rounded-2xl border border-slate-100 p-8 shadow-sm">
                <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mb-5">
                  <s.icon className="w-6 h-6 text-amber-500" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 왜 삼성부동산인가 ─── */}
      <section className="py-24 px-5 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-amber-600 text-sm font-semibold tracking-widest uppercase">Why Us</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">삼성부동산을 선택하는 이유</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((r) => (
              <div key={r.title} className="card-hover p-6 rounded-2xl border border-slate-100 bg-white shadow-sm text-center">
                <div className="w-12 h-12 bg-slate-950 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <r.icon className="w-5 h-5 text-amber-400" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{r.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 빠른 네비게이션 ─── */}
      <section className="py-16 px-5 bg-stone-50 section-pattern">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: Building2, label: '부동산소개', href: '/about', color: 'from-blue-500 to-blue-600' },
              { icon: Users, label: '공인중개사소개', href: '/agent', color: 'from-violet-500 to-violet-600' },
              { icon: MapPin, label: '오시는 길', href: '/location', color: 'from-emerald-500 to-emerald-600' },
              { icon: MessageSquare, label: '자주묻는질문', href: '/faq', color: 'from-orange-500 to-orange-600' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group flex items-center gap-4 bg-white rounded-2xl border border-slate-100 p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-200"
              >
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0`}>
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <span className="font-semibold text-slate-800 group-hover:text-slate-900">{item.label}</span>
                <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-amber-500 ml-auto transition-colors" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 하단 CTA ─── */}
      <section className="py-24 px-5 bg-slate-950 relative overflow-hidden hero-pattern">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/20 to-transparent" />
        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            지금 바로 상담받으세요
          </h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            매매, 전세, 월세 모두 전문가가 직접 답변드립니다.<br />
            첫 상담은 무료입니다.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/consult"
              className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-4 rounded-xl transition-all shadow-lg shadow-amber-900/40"
            >
              <ClipboardList className="w-4 h-4" />
              온라인 상담신청
            </Link>
            <a
              href="tel:02-000-0000"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all"
            >
              <Phone className="w-4 h-4" />
              02-000-0000
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}