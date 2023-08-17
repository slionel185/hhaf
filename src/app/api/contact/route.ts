import { Resend } from 'resend'
import { NextApiRequest } from 'next'
import { NextResponse } from 'next/server'

import { InquiryTemplate } from '@/components/emails/InquiryTemplate'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
    try {
        const { name, email, phone, inquiry, message } = await req.json()

        const subjectLine = inquiry

        const data = await resend.emails.send({
            from: 'storrence@titansoftware.dev',
            to: ['slionel1850@gmail.com'],
            subject: `New Inquiry: ${subjectLine}`,
            react: InquiryTemplate({ name, email, inquiry, phone, message })
        })

        return NextResponse.json(data)
    } catch(error) {
        return NextResponse.json({ error })
    }
}