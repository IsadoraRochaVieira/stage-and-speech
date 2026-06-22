import { NextRequest, NextResponse } from 'next/server'
import { getToken } from 'next-auth/jwt'

export default async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  const isLoginPage = pathname === '/aluno/login'
  const isProtected = pathname.startsWith('/aluno') && !isLoginPage

  if (isProtected) {
    const token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET,
    })
    if (!token) {
      return NextResponse.redirect(new URL('/aluno/login', request.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/aluno/:path*'],
}
