export default function GoldenDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center my-8 ${className}`}>
      <div className="gold-divider w-full" />
      <span
        className="absolute text-gold px-4"
        style={{ background: 'var(--color-cream)', fontFamily: 'serif', fontSize: '1.2rem' }}
      >
        ✦
      </span>
    </div>
  )
}
