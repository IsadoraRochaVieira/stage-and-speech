'use client'
import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'

type FormData = { email: string; password: string }

export default function LoginForm() {
  const router = useRouter()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>()

  async function onSubmit(data: FormData) {
    setLoading(true)
    setError('')
    const res = await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: false,
    })
    setLoading(false)
    if (res?.ok) {
      router.push('/aluno')
    } else {
      setError('E-mail ou senha incorretos.')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <div>
        <label
          className="block text-sm font-bold mb-1"
          style={{ color: 'var(--color-wine)', fontFamily: "'Playfair Display', serif" }}
        >
          E-mail
        </label>
        <input
          {...register('email', { required: true })}
          type="email"
          className="w-full px-3 py-2 text-sm rounded-sm outline-none"
          style={{
            background: 'var(--color-cream-light)',
            border: '1px solid var(--color-gold-dark)',
            color: 'var(--color-bark)',
          }}
          placeholder="seuemail@exemplo.com"
        />
      </div>

      <div>
        <label
          className="block text-sm font-bold mb-1"
          style={{ color: 'var(--color-wine)', fontFamily: "'Playfair Display', serif" }}
        >
          Senha
        </label>
        <input
          {...register('password', { required: true })}
          type="password"
          className="w-full px-3 py-2 text-sm rounded-sm outline-none"
          style={{
            background: 'var(--color-cream-light)',
            border: '1px solid var(--color-gold-dark)',
            color: 'var(--color-bark)',
          }}
          placeholder="••••••••"
        />
      </div>

      {error && (
        <p className="text-sm text-center p-2 rounded-sm" style={{ background: 'rgba(92,26,46,0.1)', color: 'var(--color-wine)' }}>
          {error}
        </p>
      )}

      <button type="submit" className="btn-wine w-full" disabled={loading}>
        {loading ? 'Entrando...' : 'Entrar →'}
      </button>
    </form>
  )
}
