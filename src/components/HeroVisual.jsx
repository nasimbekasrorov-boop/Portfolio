import { profile } from '../data/profile.js'

// A minimal animated "atom" visual — used in the hero slot when no real
// photo has been set yet (see profile.js -> photo). Three tilted orbits
// with electrons circling a pulsing nucleus made of your initials.
// Swap it for a real <img> any time by setting profile.photo to an image path.
export default function HeroVisual() {
  const initials = profile.name
    .trim()
    .split(/\s+/)
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()

  return (
    <div className="relative w-full h-full flex items-center justify-center bg-surface">
      <svg viewBox="0 0 200 200" className="w-[82%] h-[82%]">
        <g transform="translate(100,100) rotate(0)">
          <ellipse cx="0" cy="0" rx="82" ry="30" fill="none" stroke="var(--border)" strokeWidth="1" />
          <circle r="3" fill="var(--accent)">
            <animateMotion dur="3.2s" repeatCount="indefinite" path="M -82,0 A82,30 0 1 1 82,0 A82,30 0 1 1 -82,0" />
          </circle>
        </g>
        <g transform="translate(100,100) rotate(60)">
          <ellipse cx="0" cy="0" rx="82" ry="30" fill="none" stroke="var(--border)" strokeWidth="1" />
          <circle r="3" fill="var(--accent)">
            <animateMotion dur="4.1s" repeatCount="indefinite" path="M -82,0 A82,30 0 1 1 82,0 A82,30 0 1 1 -82,0" />
          </circle>
        </g>
        <g transform="translate(100,100) rotate(120)">
          <ellipse cx="0" cy="0" rx="82" ry="30" fill="none" stroke="var(--border)" strokeWidth="1" />
          <circle r="3" fill="var(--accent)">
            <animateMotion dur="5s" repeatCount="indefinite" path="M -82,0 A82,30 0 1 1 82,0 A82,30 0 1 1 -82,0" />
          </circle>
        </g>
        <circle cx="100" cy="100" r="4" fill="var(--text)" className="animate-pulseSlow" />
        <text
          x="100"
          y="122"
          textAnchor="middle"
          className="font-mono uppercase"
          style={{ fontSize: '10px', letterSpacing: '0.15em', fill: 'var(--muted)' }}
        >
          {initials}
        </text>
      </svg>
    </div>
  )
}
