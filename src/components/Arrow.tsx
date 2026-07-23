interface ArrowProps { direction?: 'right' | 'down' }

export function Arrow({ direction = 'right' }: ArrowProps) {
  return <span aria-hidden="true">{direction === 'down' ? '↓' : '↗'}</span>
}
