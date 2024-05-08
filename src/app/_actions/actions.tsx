'use server'

import EmailTemplate from '@/email/emailTemplate'
import { redirect } from 'next/navigation'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(prevState: unknown, formData: FormData) {
  const { to, subject, body } = Object.fromEntries(formData.entries()) as Record<'to' | 'subject' | 'body', string>

  const response = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to,
    subject,
    react: <EmailTemplate body={body} />
  })

  if (response.error) return response.error

  redirect('/sent')
}
