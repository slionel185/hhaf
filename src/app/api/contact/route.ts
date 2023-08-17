import { Resend } from 'resend'
import { NextResponse } from 'next/server'

import { TestTemplate } from '@/components/emails/TestTemplate'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST() {
    try {
        const data = await resend.emails.send({
            from: 'storrence@titansoftware.dev',
            to: ['slionel1850@gmail.com'],
            subject: 'Testing',
            react: TestTemplate({ firstName: 'Seth' })
        })

        return NextResponse.json(data)
    } catch(error) {
        return NextResponse.json({ error })
    }
}