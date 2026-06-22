export default function TheatreMasks({ size = 80, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size * 0.6}
      viewBox="0 0 160 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Comedy mask */}
      <ellipse cx="52" cy="44" rx="36" ry="40" fill="#C9A84C" stroke="#9C7A2A" strokeWidth="2" />
      <circle cx="40" cy="36" r="5" fill="#9C7A2A" />
      <circle cx="64" cy="36" r="5" fill="#9C7A2A" />
      <path d="M38 55 Q52 68 66 55" stroke="#9C7A2A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <ellipse cx="36" cy="22" rx="8" ry="5" fill="#C9A84C" stroke="#9C7A2A" strokeWidth="1.5" />
      <ellipse cx="68" cy="22" rx="8" ry="5" fill="#C9A84C" stroke="#9C7A2A" strokeWidth="1.5" />
      {/* Ribbon */}
      <path d="M16 70 Q34 84 52 78 Q70 84 88 70" stroke="#9C7A2A" strokeWidth="1.5" fill="none" strokeDasharray="3,3" />

      {/* Tragedy mask */}
      <ellipse cx="108" cy="44" rx="36" ry="40" fill="#5C1A2E" stroke="#3D1020" strokeWidth="2" />
      <circle cx="96" cy="36" r="5" fill="#3D1020" />
      <circle cx="120" cy="36" r="5" fill="#3D1020" />
      <path d="M94 62 Q108 50 122 62" stroke="#E8D9B5" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      <ellipse cx="92" cy="22" rx="8" ry="5" fill="#5C1A2E" stroke="#3D1020" strokeWidth="1.5" />
      <ellipse cx="124" cy="22" rx="8" ry="5" fill="#5C1A2E" stroke="#3D1020" strokeWidth="1.5" />
      {/* Teardrop */}
      <ellipse cx="104" cy="52" rx="3" ry="5" fill="#C9A84C" />
    </svg>
  )
}
