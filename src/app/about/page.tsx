import { Building2, CheckCircle2, TrendingUp, Users, Award } from "lucide-react";

const stats = [
  { value: "2005", label: "설립연도" },
  { value: "3,000+", label: "중개 완료 건수" },
  { value: "98%", label: "고객 만족도" },
  { value: "20년+", label: "전문 경력" },
];

const services = [
  "아파트 매매 · 전세 · 월세",
  "빌라 · 단독주택 거래",
  "상가 · 오피스 임대",
  "토지 매매 및 개발",
  "재개발 · 재건축 컨설팅",
  "부동산 투자 자문",
];

const values = [
  { icon: CheckCircle2, title: "정직과 신뢰", desc: "고객에게 항상 정직한 정보를 제공하고, 20년간 쌓아온 신뢰를 최우선으로 합니다." },
  { icon: TrendingUp, title: "전문성", desc: "끊임없는 학습과 시장 분석으로 항상 최신 정보를 바탕으로 서비스를 제공합니다." },
  { icon: Users, title: "고객 중심", desc: "고객 한 분 한 분의 상황에 맞는 맞춤형 솔루션을 제공합니다." },
];

export default function AboutPage() {
  return (
    <div className="bg-white pt-16">
      {/* 페이지 헤더 */}
      <section className="bg-slate-950 hero-pattern py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 text-amber-400 text-sm font-semibold mb-4 tracking-widest uppercase">
            <Building2 className="w-4 h-4" />
            About Us
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">부동산소개</h1>
          <p className="text-slate-400 text-lg max-w-xl">
            2005년 설립 이래 지역 주민과 함께 성장해온 삼성부동산을 소개합니다.
          </p>
        </div>
      </section>

      {/* 스탯 */}
      <section className="border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100">
            {stats.map((s) => (
              <div key={s.label} className="py-10 px-8 text-center">
                <div className="text-3xl md:text-4xl font-bold text-amber-500 mb-2">{s.value}</div>
                <div className="text-slate-500 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 회사 소개 */}
      <section className="py-20 px-5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-amber-600 text-sm font-semibold tracking-widest uppercase">Our Story</span>
            <h2 className="text-3xl font-bold text-slate-900 mt-2 mb-6">믿음으로 시작된<br />20년의 여정</h2>
            <p className="text-slate-600 leading-relaxed mb-4">
              삼성부동산은 2005년 단 하나의 원칙으로 문을 열었습니다.
              바로 '고객이 후회 없는 거래를 할 수 있도록 돕는 것'입니다.
            </p>
            <p className="text-slate-600 leading-relaxed">
              20년이 지난 지금도 그 원칙은 변하지 않았습니다. 아파트, 빌라,
              상가, 토지 등 다양한 부동산 거래를 전문적으로 중개하며 3,000건 이상의
              성공적인 거래를 완료했습니다.
            </p>
          </div>

          {/* 서비스 리스트 */}
          <div className="bg-stone-50 rounded-2xl p-8 section-pattern">
            <div className="flex items-center gap-2 mb-6">
              <Award className="w-5 h-5 text-amber-500" />
              <h3 className="font-bold text-slate-900">서비스 분야</h3>
            </div>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s} className="flex items-center gap-3 text-slate-700 text-sm">
                  <span className="w-5 h-5 rounded-full bg-amber-500 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-3 h-3 text-white" />
                  </span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 핵심 가치 */}
      <section className="py-20 px-5 bg-slate-950 hero-pattern">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-amber-400 text-sm font-semibold tracking-widest uppercase">Our Values</span>
            <h2 className="text-3xl font-bold text-white mt-2">우리가 지키는 가치</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <div className="w-12 h-12 bg-amber-500/10 rounded-xl flex items-center justify-center mb-5">
                  <v.icon className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="font-bold text-white mb-3">{v.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}