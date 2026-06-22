import LoginForm from './LoginForm'

export const metadata = { title: 'Área do Aluno | Stage and Speech' }

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-16" style={{ background: 'var(--color-cream)' }}>
      <div className="w-full max-w-md">
        <p
          className="text-center text-sm tracking-widest uppercase mb-2"
          style={{ color: 'var(--color-gold-dark)', fontFamily: "'Playfair Display', serif" }}
        >
          Acesso exclusivo
        </p>
        <h1
          className="text-center text-4xl mb-6"
          style={{ color: 'var(--color-wine)', fontFamily: "'Playfair Display', serif", fontWeight: 900 }}
        >
          Área do Aluno
        </h1>
        <div className="flex justify-center mb-8">
          <div className="gold-divider w-48" />
        </div>
        <div className="vintage-card ornament-corners">
          <LoginForm />
        </div>
      </div>
    </div>
  )
}
