// Synthesized Audio System using Web Audio API
// 100% offline, zero external audio asset dependencies, works across all browsers

let audioCtx = null

function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext
    if (AudioContextClass) {
      audioCtx = new AudioContextClass()
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume()
  }
  return audioCtx
}

export const soundManager = {
  isEnabled: true,

  init() {
    const saved = localStorage.getItem('violympic_sound_enabled')
    if (saved !== null) {
      this.isEnabled = saved === 'true'
    }
  },

  toggleSound() {
    this.isEnabled = !this.isEnabled
    localStorage.setItem('violympic_sound_enabled', String(this.isEnabled))
    if (this.isEnabled) {
      this.playClick()
    }
    return this.isEnabled
  },

  playTone(freq, duration = 0.15, type = 'sine', gainVal = 0.1, delay = 0) {
    if (!this.isEnabled) return
    try {
      const ctx = getAudioContext()
      if (!ctx) return
      const now = ctx.currentTime + delay
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()

      osc.type = type
      osc.frequency.setValueAtTime(freq, now)

      gain.gain.setValueAtTime(gainVal, now)
      gain.gain.exponentialRampToValueAtTime(0.0001, now + duration)

      osc.connect(gain)
      gain.connect(ctx.destination)

      osc.start(now)
      osc.stop(now + duration)
    } catch {
      // Audio playback failed silently
    }
  },

  playSuccess() {
    if (!this.isEnabled) return
    // Cheerful major chord arpeggio (C5 - E5 - G5 - C6)
    this.playTone(523.25, 0.15, 'triangle', 0.15, 0)
    this.playTone(659.25, 0.15, 'triangle', 0.15, 0.08)
    this.playTone(783.99, 0.18, 'triangle', 0.15, 0.16)
    this.playTone(1046.50, 0.35, 'sine', 0.2, 0.24)
  },

  playWrong() {
    if (!this.isEnabled) return
    // Gentle soft boing
    this.playTone(260, 0.2, 'sine', 0.15, 0)
    this.playTone(200, 0.25, 'sine', 0.12, 0.1)
  },

  playClick() {
    if (!this.isEnabled) return
    this.playTone(800, 0.04, 'sine', 0.05, 0)
  },

  playFanfare() {
    if (!this.isEnabled) return
    // Victory fanfare
    const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51]
    notes.forEach((freq, i) => {
      this.playTone(freq, 0.25, 'triangle', 0.18, i * 0.1)
    })
    this.playTone(1046.50, 0.6, 'sine', 0.22, 0.55)
  },

  playStar() {
    if (!this.isEnabled) return
    this.playTone(880, 0.12, 'sine', 0.12, 0)
    this.playTone(1174.66, 0.2, 'sine', 0.15, 0.1)
  }
}

soundManager.init()
