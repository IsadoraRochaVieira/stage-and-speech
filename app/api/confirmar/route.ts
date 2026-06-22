import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { name, email, whatsapp, type, sessionId } = body

    if (!name || !email || !whatsapp || !type || !sessionId) {
      return NextResponse.json({ error: 'Campos obrigatórios faltando' }, { status: 400 })
    }

    const price = type === 'pre' ? 1500 : 2500

    const enrollment = await prisma.enrollment.create({
      data: { name, email, whatsapp, type, price, sessionId },
    })

    return NextResponse.json({ success: true, id: enrollment.id })
  } catch {
    return NextResponse.json({ error: 'Erro interno' }, { status: 500 })
  }
}
