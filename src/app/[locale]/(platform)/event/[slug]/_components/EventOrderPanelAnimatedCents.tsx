'use client'

import { AnimatedCounter } from 'react-animated-counter'

export default function EventOrderPanelAnimatedCents({
  value,
  fontSize = '16px',
}: {
  value: number
  fontSize?: string
}) {
  return (
    <span className="inline-flex items-baseline">
      <AnimatedCounter
        value={value}
        color="currentColor"
        fontSize={fontSize}
        includeCommas={false}
        includeDecimals={!Number.isInteger(value)}
        decimalPrecision={1}
        incrementColor="currentColor"
        decrementColor="currentColor"
        digitStyles={{ fontWeight: 700, lineHeight: '1' }}
        containerStyles={{
          display: 'inline-flex',
          alignItems: 'baseline',
          flexDirection: 'row-reverse',
          lineHeight: '1',
        }}
      />
      <span>¢</span>
    </span>
  )
}
