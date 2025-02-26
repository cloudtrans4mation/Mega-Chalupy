import { Resend } from 'resend'
// import { loadEmailTemplate } from '~/server/utils/email/emailTemplates'
import { loadEmailTemplates } from '~/server/utils/email/loadEmailTemplate'

const resend = new Resend(process.env.RESEND_API_KEY)

export default defineEventHandler(async event => {
  const body = await readBody<{ email: string; token: string }>(event)
  const headers = getHeader(event, 'Authorization')

  const apiRouteSecret = headers?.split(' ')[1]

  if (apiRouteSecret !== process.env.API_ROUTE_SECRET) {
    throw createError({ statusCode: 401, message: 'Unauthorized' })
  }

  const { email, token } = body
  const verificationLink = `${process.env.BASE_URL}/verify-email?token=${token}`

  try {
    const htmlContent = loadEmailTemplates(
      'verify-email',
      verificationLink,
      process.env.BASE_URL as string,
    )

    const data = await resend.emails.send({
      from: 'cloud@trans4mation-bs.cz',
      to: [email],
      subject: 'Verify email',
      html: htmlContent,
    })

    return data
  } catch (error) {
    return { error }
  }
})
