'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

type FormData = {
  name: string
  email: string
  whatsapp: string
  type: 'pre' | 'regular'
}

const SESSION_ID_PLACEHOLDER = 'proxima-sessao'

export default function ConfirmarForm() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>({
    defaultValues: { type: 'regular' },
  })

  const type = watch('type')
  const price = type === 'pre' ? 'R$15,00' : 'R$25,00'

  async function onSubmit(data: FormData) {
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/confirmar', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, sessionId: SESSION_ID_PLACEHOLDER }),
      })
      if (!res.ok) throw new Error('Erro ao enviar')
      setSubmitted(true)
    } catch {
      setError('Algo deu errado. Tente novamente ou entre em contato via WhatsApp.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-4">
        <div className="text-4xl mb-4">🎭</div>
        <h2
          className="text-2xl font-bold mb-2"
          style={{ color: 'var(--color-wine)', fontFamily: "'Playfair Display', serif" }}
        >
          Inscrição recebida!
        </h2>
        <p
          className="font-script text-lg mb-6"
          style={{ color: 'var(--color-gold-dark)', fontFamily: "'Dancing Script', cursive" }}
        >
          Falta só o Pix para confirmar sua vaga.
        </p>

        <div
          className="text-left p-4 rounded-sm mb-6"
          style={{ background: 'rgba(92,26,46,0.05)', border: '1px solid var(--color-gold-dark)' }}
        >
          <p className="font-bold mb-3" style={{ color: 'var(--color-wine)', fontFamily: "'Playfair Display', serif" }}>
            Instruções de pagamento
          </p>
          <div className="flex flex-col gap-2 text-sm" style={{ color: 'var(--color-bark)' }}>
            <p><span className="font-bold">Chave Pix:</span> +55 61 8149-4556</p>
            <p><span className="font-bold">Nome:</span> Rebeca Alvim</p>
            <p>
              <span className="font-bold">Valor:</span>{' '}
              <span className="text-lg font-bold" style={{ color: 'var(--color-wine)' }}>{price}</span>
            </p>
            <p>
              <span className="font-bold">Prazo:</span>{' '}
              Envie o comprovante até a <strong>quarta-feira</strong> antes do encontro
            </p>
          </div>
        </div>

        <p className="text-sm mb-4" style={{ color: 'var(--color-bark)' }}>
          Após o pagamento, envie o comprovante para a Rebeca no WhatsApp e receba o link do Zoom.
        </p>

        <a
          href="https://wa.me/5561981494556?text=Ol%C3%A1%20Rebeca!%20Acabei%20de%20me%20inscrever%20no%20Stage%20and%20Speech.%20Segue%20o%20comprovante%20do%20Pix."
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold block text-center text-sm"
        >
          📱 Enviar comprovante pelo WhatsApp
        </a>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
      <div>
        <label
          className="block text-sm font-bold mb-1"
          style={{ color: 'var(--color-wine)', fontFamily: "'Playfair Display', serif" }}
        >
          Nome completo *
        </label>
        <input
          {...register('name', { required: 'Nome obrigatório' })}
          className="w-full px-3 py-2 text-sm rounded-sm outline-none"
          style={{
            background: 'var(--color-cream-light)',
            border: errors.name ? '2px solid var(--color-wine)' : '1px solid var(--color-gold-dark)',
            color: 'var(--color-bark)',
          }}
          placeholder="Seu nome"
        />
        {errors.name && <p className="text-xs mt-1" style={{ color: 'var(--color-wine)' }}>{errors.name.message}</p>}
      </div>

      <div>
        <label
          className="block text-sm font-bold mb-1"
          style={{ color: 'var(--color-wine)', fontFamily: "'Playfair Display', serif" }}
        >
          E-mail *
        </label>
        <input
          {...register('email', { required: 'E-mail obrigatório', pattern: { value: /\S+@\S+\.\S+/, message: 'E-mail inválido' } })}
          type="email"
          className="w-full px-3 py-2 text-sm rounded-sm outline-none"
          style={{
            background: 'var(--color-cream-light)',
            border: errors.email ? '2px solid var(--color-wine)' : '1px solid var(--color-gold-dark)',
            color: 'var(--color-bark)',
          }}
          placeholder="seuemail@exemplo.com"
        />
        {errors.email && <p className="text-xs mt-1" style={{ color: 'var(--color-wine)' }}>{errors.email.message}</p>}
      </div>

      <div>
        <label
          className="block text-sm font-bold mb-1"
          style={{ color: 'var(--color-wine)', fontFamily: "'Playfair Display', serif" }}
        >
          WhatsApp *
        </label>
        <input
          {...register('whatsapp', { required: 'WhatsApp obrigatório' })}
          type="tel"
          className="w-full px-3 py-2 text-sm rounded-sm outline-none"
          style={{
            background: 'var(--color-cream-light)',
            border: errors.whatsapp ? '2px solid var(--color-wine)' : '1px solid var(--color-gold-dark)',
            color: 'var(--color-bark)',
          }}
          placeholder="+55 61 99999-9999"
        />
        {errors.whatsapp && <p className="text-xs mt-1" style={{ color: 'var(--color-wine)' }}>{errors.whatsapp.message}</p>}
      </div>

      <div>
        <label
          className="block text-sm font-bold mb-2"
          style={{ color: 'var(--color-wine)', fontFamily: "'Playfair Display', serif" }}
        >
          Tipo de inscrição *
        </label>
        <div className="flex flex-col gap-3">
          {[
            { value: 'pre', label: 'Pré-inscrito do mês de estreia', price: 'R$15,00', desc: 'Para quem participou dos primeiros encontros' },
            { value: 'regular', label: 'Participante regular', price: 'R$25,00', desc: 'Para novos participantes' },
          ].map(opt => (
            <label
              key={opt.value}
              className="flex items-start gap-3 cursor-pointer p-3 rounded-sm transition-colors"
              style={{
                background: type === opt.value ? 'rgba(92,26,46,0.08)' : 'transparent',
                border: `1px solid ${type === opt.value ? 'var(--color-wine)' : 'var(--color-cream-dark)'}`,
              }}
            >
              <input
                {...register('type')}
                type="radio"
                value={opt.value}
                className="mt-0.5 accent-wine"
              />
              <div className="flex-1">
                <p className="text-sm font-bold" style={{ color: 'var(--color-bark)' }}>{opt.label}</p>
                <p className="text-xs" style={{ color: 'var(--color-gold-dark)' }}>{opt.desc}</p>
              </div>
              <span
                className="text-lg font-bold"
                style={{ color: 'var(--color-wine)', fontFamily: "'Playfair Display', serif" }}
              >
                {opt.price}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div
        className="flex items-center justify-between p-3 rounded-sm"
        style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid var(--color-gold-dark)' }}
      >
        <span className="text-sm font-bold" style={{ color: 'var(--color-bark)' }}>Total a pagar:</span>
        <span
          className="text-2xl font-bold"
          style={{ color: 'var(--color-wine)', fontFamily: "'Playfair Display', serif" }}
        >
          {price}
        </span>
      </div>

      {error && (
        <p className="text-sm text-center p-3 rounded-sm" style={{ background: 'rgba(92,26,46,0.1)', color: 'var(--color-wine)' }}>
          {error}
        </p>
      )}

      <button type="submit" className="btn-gold w-full" disabled={loading}>
        {loading ? 'Enviando...' : 'Confirmar inscrição →'}
      </button>

      <p className="text-xs text-center" style={{ color: 'var(--color-bark)', opacity: 0.6 }}>
        Após enviar, você receberá as instruções de pagamento via Pix.
      </p>
    </form>
  )
}
