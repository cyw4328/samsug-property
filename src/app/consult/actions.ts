'use server'

import { Resend } from 'resend'

const consultTypeLabels: Record<string, string> = {
  buy: '매매',
  jeonse: '전세',
  monthly: '월세',
  invest: '투자 상담',
  other: '기타',
}

export async function submitConsult(formData: FormData) {
  const name = formData.get('name') as string
  const phone = formData.get('phone') as string
  const type = formData.get('type') as string
  const message = formData.get('message') as string

  const resend = new Resend(process.env.RESEND_API_KEY)

  await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: process.env.CONSULT_TO_EMAIL!,
    subject: `[상담 신청] ${name} - ${consultTypeLabels[type] ?? type}`,
    html: `
      <h2>새 상담 신청이 접수되었습니다</h2>
      <table style="border-collapse:collapse;width:100%;max-width:500px">
        <tr><td style="padding:8px;border:1px solid #e2e8f0;background:#f8fafc;font-weight:600">이름</td><td style="padding:8px;border:1px solid #e2e8f0">${name}</td></tr>
        <tr><td style="padding:8px;border:1px solid #e2e8f0;background:#f8fafc;font-weight:600">연락처</td><td style="padding:8px;border:1px solid #e2e8f0">${phone}</td></tr>
        <tr><td style="padding:8px;border:1px solid #e2e8f0;background:#f8fafc;font-weight:600">상담 유형</td><td style="padding:8px;border:1px solid #e2e8f0">${consultTypeLabels[type] ?? type}</td></tr>
        <tr><td style="padding:8px;border:1px solid #e2e8f0;background:#f8fafc;font-weight:600">문의 내용</td><td style="padding:8px;border:1px solid #e2e8f0">${message || '(없음)'}</td></tr>
      </table>
    `,
  })
}
