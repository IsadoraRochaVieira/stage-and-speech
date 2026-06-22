'use client'
import { useEffect, useState } from 'react'

export default function Countdown({ target }: { target: Date }) {
  const [diff, setDiff] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0, past: false })

  useEffect(() => {
    function calc() {
      const ms = target.getTime() - Date.now()
      if (ms <= 0) {
        setDiff({ days: 0, hours: 0, minutes: 0, seconds: 0, past: true })
        return
      }
      const s = Math.floor(ms / 1000)
      setDiff({
        days: Math.floor(s / 86400),
        hours: Math.floor((s % 86400) / 3600),
        minutes: Math.floor((s % 3600) / 60),
        seconds: s % 60,
        past: false,
      })
    }
    calc()
    const id = setInterval(calc, 1000)
    return () => clearInterval(id)
  }, [target])

  if (diff.past) {
    return <p className="text-sm" style={{ color: 'var(--color-gold-dark)' }}>Esta sessão já aconteceu.</p>
  }

  const units = [
    { label: 'dias', value: diff.days },
    { label: 'horas', value: diff.hours },
    { label: 'min', value: diff.minutes },
    { label: 'seg', value: diff.seconds },
  ]

  return (
    <div className="flex gap-3 flex-wrap">
      {units.map(u => (
        <div key={u.label} className="countdown-unit">
          <span
            className="text-3xl font-bold"
            style={{ color: 'var(--color-gold)', fontFamily: "'Playfair Display', serif" }}
          >
            {String(u.value).padStart(2, '0')}
          </span>
          <span className="text-xs mt-1" style={{ color: 'var(--color-bark)', opacity: 0.7 }}>{u.label}</span>
        </div>
      ))}
    </div>
  )
}
