import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  // Sessões do clube
  await prisma.clubSession.upsert({
    where: { number: 1 },
    update: {},
    create: {
      number: 1,
      title: 'Comédia de David Ives',
      date: new Date('2026-06-01T19:30:00-03:00'),
      posterImage: '/images/cartaz-sessao-1.jpg',
    },
  })

  await prisma.clubSession.upsert({
    where: { number: 2 },
    update: {},
    create: {
      number: 2,
      title: 'Liar Liar (Jim Carrey)',
      date: new Date('2026-06-20T13:00:00-03:00'),
      posterImage: '/images/cartaz-sessao-2.jpg',
    },
  })

  // Usuário de teste
  const hashed = await bcrypt.hash('teste123', 12)
  await prisma.user.upsert({
    where: { email: 'teste@stageandspeech.com' },
    update: {},
    create: {
      email: 'teste@stageandspeech.com',
      password: hashed,
      name: 'Aluno Teste',
    },
  })

  console.log('Seed concluído.')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
