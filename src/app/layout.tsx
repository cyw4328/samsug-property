import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Building2, Phone, MapPin, Clock } from "lucide-react";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "삼성부동산 | 믿음직한 부동산 전문가",
  description: "20년 경력의 공인중개사와 함께하는 삼성부동산. 아파트, 빌라, 상가 매매·전세·월세 전문.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${geist.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col text-slate-800">
        <Navbar />
        <main className="flex-1">{children}</main>

        {/* 푸터 */}
        <footer className="bg-slate-950 text-slate-400">
          <div className="max-w-6xl mx-auto px-5 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
              {/* 브랜드 */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Building2 className="w-5 h-5 text-amber-500" />
                  <span className="text-white font-bold text-lg">삼성부동산</span>
                </div>
                <p className="text-sm leading-relaxed text-slate-500">
                  고객의 신뢰에 성실함과 책임감으로 <br />
                  보답하겠습니다
                </p>
              </div>

              {/* 연락처 */}
              <div>
                <h4 className="text-white font-semibold mb-4 text-sm">연락처</h4>
                <ul className="space-y-2.5 text-sm">
                  <li className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-amber-500 flex-shrink-0" />
                    <span>010-4431-8205</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-amber-500 flex-shrink-0" />
                    <span>충남 계룡시 엄사면 엄사리 281</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-amber-500 flex-shrink-0" />
                    <span>평일 09:00 ~ 18:00 | 토 09:00 ~ 15:00</span>
                  </li>
                </ul>
              </div>

              {/* 빠른 링크 */}
              <div>
                <h4 className="text-white font-semibold mb-4 text-sm">바로가기</h4>
                <ul className="space-y-2 text-sm">
                  {[
                    { label: '부동산소개', href: '/about' },
                    { label: '공인중개사소개', href: '/agent' },
                    { label: '위치', href: '/location' },
                    { label: '상담신청', href: '/consult' },
                  ].map((link) => (
                    <li key={link.href}>
                      <a href={link.href} className="hover:text-amber-400 transition-colors">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-slate-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-slate-600">
              <span>© 2025 삼성부동산. All rights reserved.</span>
              <span>공인중개사 등록번호 : 제00000호</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}