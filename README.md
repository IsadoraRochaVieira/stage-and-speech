# Stage and Speech

Site oficial do Clube de Leitura Dramática em Inglês da Rebeca Alvim.

**Stack:** Next.js 16 · Tailwind v4 · Prisma 5 + SQLite · NextAuth v4 · TypeScript

---

## Setup local

### Pré-requisitos
- Node.js 20.19+ (ou use o workaround abaixo para Node 20.14)
- npm

### 1. Instalar dependências

```bash
cd stage-and-speech
npm install
```

### 2. Variáveis de ambiente

Crie (ou verifique) o arquivo `.env` na raiz do projeto:

```env
DATABASE_URL="file:C:/caminho/absoluto/para/stage-and-speech/prisma/dev.db"
NEXTAUTH_SECRET="stage-and-speech-secret-key-2026"
NEXTAUTH_URL="http://localhost:3000"
```

> **Importante:** use o caminho absoluto no `DATABASE_URL`. O caminho relativo `file:./prisma/dev.db` pode falhar se o diretório pai contiver caracteres especiais (como `&&`).

### 3. Criar o banco de dados

Como `npm run` usa CMD no Windows e pode falhar com caminhos especiais, use Node diretamente:

```powershell
# No PowerShell, dentro da pasta do projeto:
$proj = (Get-Location).Path
$prismaIndex = "$proj\node_modules\prisma\build\index.js"
$env:DATABASE_URL = "file:$proj/prisma/dev.db"

# Criar as tabelas
node $prismaIndex db push

# Popular com dados iniciais
node prisma/seed.js
```

### 4. Rodar o servidor de desenvolvimento

```powershell
$proj = (Get-Location).Path
$nextBin = "$proj\node_modules\next\dist\bin\next"
$env:DATABASE_URL = "file:$proj/prisma/dev.db"
node $nextBin dev
```

Acesse `http://localhost:3000`.

### Conta de teste para a Área do Aluno

- **E-mail:** `teste@stageandspeech.com`
- **Senha:** `teste123`

---

## Estrutura do projeto

```
stage-and-speech/
├── app/
│   ├── page.tsx              ← Landing page (/)
│   ├── confirmar/            ← Formulário de inscrição (/confirmar)
│   ├── aluno/                ← Área do aluno (/aluno — autenticada)
│   │   ├── login/            ← Tela de login
│   │   └── biblioteca/       ← Sessões anteriores com materiais
│   └── api/
│       ├── auth/[...nextauth] ← NextAuth
│       └── confirmar/         ← POST para salvar inscrição
├── components/
│   ├── layout/               ← Navbar, Footer
│   ├── home/                 ← Seções da landing page
│   ├── ui/                   ← GoldenDivider, TheatreMasks
│   └── aluno/                ← Countdown, SessionCard
├── lib/
│   ├── prisma.ts             ← Cliente Prisma singleton
│   └── auth.ts               ← Config NextAuth
├── prisma/
│   ├── schema.prisma         ← Modelos do banco
│   ├── seed.js               ← Dados iniciais
│   └── dev.db                ← Banco SQLite (gerado)
└── public/
    ├── images/               ← Logos, cartazes, fotos
    └── videos/               ← Reels MP4
```

---

## Como adicionar uma nova sessão

Edite `prisma/seed.js` e adicione um novo `upsert`:

```js
await prisma.clubSession.upsert({
  where: { number: 3 },
  update: {
    title: 'Novo título',
    date: new Date('2026-07-15T19:30:00-03:00'),
    posterImage: '/images/cartaz-sessao-3.jpg',
    zoomLink: 'https://zoom.us/j/XXXXXXXX',
  },
  create: {
    number: 3,
    title: 'Novo título',
    date: new Date('2026-07-15T19:30:00-03:00'),
    posterImage: '/images/cartaz-sessao-3.jpg',
  },
})
```

Depois rode novamente `node prisma/seed.js`.

Para atualizar o cartaz exibido na landing page, edite a constante `session` em `components/home/ProximoEncontro.tsx`.

---

## Identidade visual

| Token          | Valor     | Uso                          |
|----------------|-----------|------------------------------|
| `--color-wine` | `#5C1A2E` | Fundo de seções, botões wine |
| `--color-gold` | `#C9A84C` | Títulos, bordas, botões gold |
| `--color-cream`| `#F5EDD8` | Fundo geral, texto em escuro |
| `--color-bark` | `#2C1A0E` | Texto corrido                |

Fontes: **Playfair Display** (títulos) · **Dancing Script** (script/subtítulos) · **Inter** (corpo)

---

## Deploy na Vercel

### 1. Banco de dados

Para produção, substitua SQLite por PostgreSQL (ex: [Neon](https://neon.tech) — free tier):

```env
DATABASE_URL="postgresql://user:password@host/database?sslmode=require"
```

Atualize `prisma/schema.prisma`:
```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

Rode `npx prisma migrate deploy` no deploy.

### 2. Variáveis de ambiente na Vercel

No painel da Vercel → Settings → Environment Variables, adicione:

```
DATABASE_URL      = (sua URL PostgreSQL)
NEXTAUTH_SECRET   = (uma string longa e aleatória)
NEXTAUTH_URL      = https://seudominio.vercel.app
```

### 3. Deploy

```bash
git init
git add .
git commit -m "feat: stage and speech site"

# Conecte o repo ao GitHub e importe na Vercel
# OU use o Vercel CLI:
npx vercel --prod
```

### 4. Seed em produção

Após o primeiro deploy, rode o seed via Vercel CLI ou via script de build:

```bash
npx vercel env pull .env.local
node prisma/seed.js
```

---

## Contato

- WhatsApp: +55 61 8149-4556
- Instagram: [@stageandspeech](https://www.instagram.com/stageandspeech)
- Pix: +55 61 8149-4556 · Nome: Rebeca Alvim
