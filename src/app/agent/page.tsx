import { Users, BadgeCheck, Briefcase, GraduationCap, Phone, Mail } from "lucide-react";

const credentials = [
  "공인중개사 자격증",
  "부동산 컨설팅 전문가",
  "주택관리사",
  "부동산투자 분석사",
];

const careers = [
  { year: "2005", event: "삼성부동산 설립" },
  { year: "2010", event: "우수중개사 대상 수상" },
  { year: "2015", event: "누적 중개 1,000건 달성" },
  { year: "2020", event: "지역 부동산협회 이사 취임" },
  { year: "2025", event: "누적 중개 3,000건 달성" },
];

const specialties = [
  { icon: Briefcase, title: "아파트 전문", desc: "지역 아파트 시세와 단지별 특성을 누구보다 잘 알고 있습니다." },
  { icon: GraduationCap, title: "투자 자문", desc: "시장 흐름을 분석해 최적의 투자 타이밍을 제안합니다." },
  { icon: BadgeCheck, title: "계약 검토", desc: "계약서 전 항목을 꼼꼼히 검토해 법적 분쟁을 예방합니다." },
];

export default function AgentPage() {
  return (
    <div className="bg-white pt-16">
      {/* 페이지 헤더 */}
      <section className="bg-slate-950 hero-pattern py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 text-amber-400 text-sm font-semibold mb-4 tracking-widest uppercase">
            <Users className="w-4 h-4" />
            Our Agent
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">공인중개사소개</h1>
          <p className="text-slate-400 text-lg max-w-xl">
            신뢰와 성실을 바탕으로 책임감 있는 중개와 정직한 <br/>상담으로 고객님의 소중한 선택에 함께하겠습니다
          </p>
        </div>
      </section>

      {/* 프로필 카드 */}
      <section className="pt-20 pb-6 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-5">
              {/* 프로필 이미지 영역 */}
              <div className="md:col-span-2 bg-gradient-to-br from-amber-500/20 to-amber-600/10 flex items-center justify-center p-12">
                <div className="relative">
                  <div className="w-40 h-40 rounded-full bg-slate-700 border-4 border-amber-500/30 flex items-center justify-center shadow-xl">
                    <Users className="w-16 h-16 text-slate-400" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                    대표 중개사
                  </div>
                </div>
              </div>

              {/* 프로필 정보 */}
              <div className="md:col-span-3 p-10 flex flex-col justify-center">
                <div className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-2">
                  Licensed Real Estate Agent
                </div>
                <h2 className="text-3xl font-bold text-white mb-1">김홍서</h2>
                <p className="text-slate-400 mb-6">공인중개사 자격증 보유 , 마성의 매력 소유자</p>

                <p className="text-slate-300 leading-relaxed mb-8 text-sm">
                  친절하게 해드립니다. 마성의 매력 소유자 기가 막히게 설명해드립니다. < br />

                  고객과의 신뢰를 최우선으로, 성실하고 책임감 있는 중개로 최선의 결과를 만들어가겠습니다.
                </p>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="tel:010-4431-8205"
                    className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    전화 상담
                  </a>
                  <a
                    href="mailto:kus00342@naver.com"
                    className="flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    이메일 문의
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-6 pb-20 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-5">
              {/* 프로필 이미지 영역 */}
              <div className="md:col-span-2 bg-gradient-to-br from-amber-500/20 to-amber-600/10 flex items-center justify-center p-12">
                <div className="relative">
                  <div className="w-40 h-40 rounded-full bg-slate-700 border-4 border-amber-500/30 flex items-center justify-center shadow-xl">
                    <Users className="w-16 h-16 text-slate-400" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                    공인중개사
                  </div>
                </div>
              </div>

              {/* 프로필 정보 */}
              <div className="md:col-span-3 p-10 flex flex-col justify-center">
                <div className="text-amber-400 text-sm font-semibold tracking-widest uppercase mb-2">
                  Licensed Real Estate Agent
                </div>
                <h2 className="text-3xl font-bold text-white mb-1">고혜림</h2>
                <p className="text-slate-400 mb-6">공인중개사 자격증 보유</p>

                <p className="text-slate-300 leading-relaxed mb-8 text-sm">
                  오랜 현장 경험과 축적된 노하우를 바탕으로 정확한 분석과 책임감 있는 중개로 고객 만족을 실현하겠습니다.
                </p>

                <div className="flex flex-wrap gap-3">
                  <a
                      href="tel:010-4431-8205"
                      className="flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    전화 상담
                  </a>
                  <a
                      href="mailto:kus00342@naver.com"
                      className="flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/20 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    이메일 문의
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 자격증 & 경력 타임라인 */}
      <section className="py-20 px-5 bg-stone-50 section-pattern">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* 자격증 */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <BadgeCheck className="w-5 h-5 text-amber-500" />
              <h3 className="font-bold text-slate-900 text-xl">자격증 · 면허</h3>
            </div>
            <div className="space-y-3">
              {credentials.map((c) => (
                <div key={c} className="flex items-center gap-3 bg-white rounded-xl border border-slate-100 px-5 py-4 shadow-sm">
                  <div className="w-8 h-8 bg-amber-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BadgeCheck className="w-4 h-4 text-amber-500" />
                  </div>
                  <span className="text-slate-700 font-medium text-sm">{c}</span>
                </div>
              ))}
            </div>
          </div>

          {/* 경력 타임라인 */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Briefcase className="w-5 h-5 text-amber-500" />
              <h3 className="font-bold text-slate-900 text-xl">주요 경력</h3>
            </div>
            <div className="relative">
              <div className="absolute left-5 top-0 bottom-0 w-px bg-slate-200" />
              <div className="space-y-6">
                {careers.map((c, i) => (
                  <div key={i} className="flex gap-5 items-start">
                    <div className="relative z-10 w-10 h-10 rounded-full bg-white border-2 border-amber-400 flex items-center justify-center flex-shrink-0 shadow-sm">
                      <div className="w-2 h-2 rounded-full bg-amber-500" />
                    </div>
                    <div className="pt-2">
                      <div className="text-amber-600 text-xs font-bold mb-0.5">{c.year}</div>
                      <div className="text-slate-700 text-sm font-medium">{c.event}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 전문 분야 */}
      <section className="py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-amber-600 text-sm font-semibold tracking-widest uppercase">Specialty</span>
            <h2 className="text-3xl font-bold text-slate-900 mt-2">전문 분야</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {specialties.map((s) => (
              <div key={s.title} className="card-hover bg-white rounded-2xl border border-slate-100 p-8 shadow-sm text-center">
                <div className="w-14 h-14 bg-slate-950 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <s.icon className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="font-bold text-slate-900 mb-3">{s.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}