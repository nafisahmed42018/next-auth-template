import { VerificationToken } from './../node_modules/.prisma/client/index.d'
import { getVerificationTokenByEmail } from '@/data/verification-token'
import { v4 as uuid } from 'uuid'
import { db } from '@/lib/db'
import { getPasswordResetTokenByEmail } from '@/data/password-reset-token'

export const generateVerificationToken = async (email: string) => {
  const token = uuid()
  const expires = new Date(new Date().getTime() + 1000 * 1800)

  const existingToken = await getVerificationTokenByEmail(email)

  if (existingToken) {
    await db.verificationToken.delete({
      where: {
        id: existingToken.id,
      },
    })
  }

  const verificationToken = await db.verificationToken.create({
    data: {
      email,
      token,
      expires,
    },
  })
  return verificationToken
}

export const generatePasswordResetToken = async (email: string) => {
  const token = uuid()
  const expires = new Date(new Date().getTime() + 1000 * 1200)

  const existingToken = await getPasswordResetTokenByEmail(email)

  if (existingToken) {
    await db.passwordResetToken.delete({
      where: {
        id: existingToken.id,
      },
    })
  }

  const passwordResetToken = await db.passwordResetToken.create({
    data: {
      email,
      token,
      expires,
    },
  })

  return passwordResetToken
}