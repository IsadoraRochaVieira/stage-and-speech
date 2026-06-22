const { PrismaClient } = require('@prisma/client')
const bcrypt = require('bcryptjs')

const prisma = new PrismaClient()

async function main() {
  await prisma.clubSession.upsert({
    where: { number: 1 },
    update: {},
    create: {
      number: 1,
      title: 'Comédia de David Ives',
      date: new Date('2026-06-01T22:30:00.000Z'),
      posterImage: '/images/cartaz-sessao-1.jpg',
    },
  })

  await prisma.clubSession.upsert({
    where: { number: 2 },
    update: {},
    create: {
      number: 2,
      title: 'Liar Liar (Jim Carrey)',
      date: new Date('2026-06-20T16:00:00.000Z'),
      posterImage: '/images/cartaz-sessao-2.jpg',
    },
  })

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
