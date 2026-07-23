import { useMouseGlow } from '@/hooks/useMouseGlow'

export function CursorGlow() {
  const { position, isVisible } = useMouseGlow()

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{ opacity: isVisible ? 1 : 0 }}
      aria-hidden="true"
    >
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          left: position.x,
          top: position.y,
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(91,91,214,0.06) 0%, transparent 70%)',
          transition: 'left 0.15s ease-out, top 0.15s ease-out',
        }}
      />
    </div>
  )
}
