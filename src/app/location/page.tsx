import { MapPin, Train, Bus, ParkingCircle, Clock } from "lucide-react";

const address = "서울특별시 강남구 테헤란로 123"; // 실제 주소로 교체
const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;

const transports = [
  { icon: Train, label: "지하철", desc: "2호선 강남역 3번 출구 도보 5분" },
  { icon: Bus, label: "버스", desc: "140, 360, 740번 정류장 하차" },
  { icon: ParkingCircle, label: "주차", desc: "건물 지하 2층 (2시간 무료)" },
];

const hours = [
  { day: "평일 (월~금)", time: "09:00 ~ 18:00" },
  { day: "토요일", time: "09:00 ~ 15:00" },
  { day: "일요일 · 공휴일", time: "휴무" },
];

export default function LocationPage() {
  return (
    <div className="bg-white pt-16">
      {/* 페이지 헤더 */}
      <section className="bg-slate-950 hero-pattern py-20 px-5">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-2 text-amber-400 text-sm font-semibold mb-4 tracking-widest uppercase">
            <MapPin className="w-4 h-4" />
            Location
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">위치</h1>
          <p className="text-slate-400 text-lg">{address}</p>
        </div>
      </section>

      {/* 지도 + 정보 */}
      <section className="py-16 px-5">
        <div className="max-w-6xl mx-auto">
          {/* 지도 */}
          <div className="rounded-3xl overflow-hidden shadow-xl border border-slate-100 mb-12 h-96">
            <iframe
              src={mapSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="삼성부동산 위치"
            />
          </div>

          {/* 정보 카드들 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            {transports.map((t) => (
              <div key={t.label} className="card-hover bg-white rounded-2xl border border-slate-100 shadow-sm p-6 flex gap-4 items-start">
                <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <t.icon className="w-5 h-5 text-amber-500" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900 mb-1">{t.label}</div>
                  <div className="text-slate-500 text-sm leading-relaxed">{t.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* 주소 + 영업시간 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* 주소 */}
            <div className="bg-slate-950 rounded-2xl p-8 hero-pattern">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-amber-500/20 rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-amber-400" />
                </div>
                <h3 className="font-bold text-white">주소</h3>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed mb-2">{address}</p>
              <p className="text-slate-400 text-sm">삼성부동산 빌딩 2층</p>
              <p className="text-slate-600 text-xs mt-4">※ 실제 주소로 변경해 주세요</p>
            </div>

            {/* 영업시간 */}
            <div className="bg-stone-50 rounded-2xl border border-slate-100 p-8 section-pattern">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-amber-50 rounded-xl flex items-center justify-center">
                  <Clock className="w-5 h-5 text-amber-500" />
                </div>
                <h3 className="font-bold text-slate-900">영업시간</h3>
              </div>
              <div className="space-y-3">
                {hours.map((h) => (
                  <div key={h.day} className="flex justify-between items-center text-sm">
                    <span className="text-slate-500">{h.day}</span>
                    <span className={`font-semibold ${h.time === '휴무' ? 'text-slate-400' : 'text-slate-900'}`}>
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}