import confetti from 'canvas-confetti'

export function triggerConfetti() {
  try {
    const end = Date.now() + 1500
    const colors = ['#f59e0b', '#10b981', '#3b82f6', '#ec4899', '#8b5cf6']

    ;(function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      })
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      })

      if (Date.now() < end) {
        requestAnimationFrame(frame)
      }
    })()
  } catch {
    // Canvas confetti failed silently
  }
}

export function triggerStarBurst() {
  try {
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#fbbf24', '#f59e0b', '#d97706']
    })
  } catch {
    // Star burst failed silently
  }
}
