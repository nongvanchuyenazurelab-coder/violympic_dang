<template>
  <div class="space-y-4">
    <!-- Top status bar -->
    <div class="p-4 bg-sky-50 rounded-2xl border-2 border-sky-200 flex flex-wrap items-center justify-between gap-3">
      <div class="flex items-center gap-2 text-sky-900 font-bold text-sm">
        <span class="text-xl">🐵</span>
        <span>Nhấn chọn lần lượt <b>2 ô có kết quả bằng nhau</b> để ghép đôi chúng!</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="text-xs font-black px-3 py-1 bg-sky-200 text-sky-900 rounded-full">
          Đã ghép đúng: {{ matchedCount }}/{{ totalPairs }} cặp
        </span>
        <button
          @click="resetGame"
          class="px-3 py-1 bg-white hover:bg-rose-50 text-rose-600 border border-rose-200 rounded-xl text-xs font-bold transition-all cursor-pointer"
        >
          🔄 Chơi lại
        </button>
      </div>
    </div>

    <!-- Cards Grid -->
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 select-none">
      <div
        v-for="card in cards"
        :key="card.uid"
        @click="selectCard(card)"
        :class="[
          'p-4 rounded-3xl border-3 flex items-center justify-center min-h-[85px] sm:min-h-[100px] text-center font-black text-lg sm:text-xl transition-all duration-200 cursor-pointer shadow-sm relative',
          isMatched(card)
            ? 'bg-emerald-100 border-emerald-400 text-emerald-800 scale-98 opacity-90 cursor-default'
            : isSelected(card)
            ? 'bg-sky-100 border-sky-500 text-sky-900 scale-105 shadow-md ring-4 ring-sky-300'
            : isWrong(card)
            ? 'bg-rose-100 border-rose-500 text-rose-800 animate-pulse'
            : 'bg-white border-slate-200 hover:border-sky-300 hover:bg-sky-50/50 hover:shadow-md'
        ]"
      >
        <span>{{ card.text }}</span>

        <!-- Matched checkmark -->
        <span 
          v-if="isMatched(card)"
          class="absolute top-2 right-2 w-5 h-5 bg-emerald-500 text-white rounded-full flex items-center justify-center text-xs font-black shadow-xs"
        >
          ✓
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { soundManager } from '../../utils/soundEffects'

const props = defineProps({
  question: {
    type: Object,
    required: true
  },
  modelValue: {
    type: Object,
    default: () => ({ matchedPairsCount: 0 })
  }
})

const emit = defineEmits(['update:modelValue'])

const cards = ref([])
const selectedCard = ref(null)
const matchedUids = ref(new Set())
const wrongUids = ref(new Set())

const totalPairs = computed(() => props.question.pairs?.length || 0)
const matchedCount = computed(() => Math.floor(matchedUids.value.size / 2))

function initCards() {
  const list = []
  const pairs = props.question.pairs || []
  pairs.forEach((pair, idx) => {
    list.push({ uid: `p_${idx}_a`, text: pair.a, pairId: idx, val: pair.val })
    list.push({ uid: `p_${idx}_b`, text: pair.b, pairId: idx, val: pair.val })
  })

  // Fisher-Yates Shuffle
  for (let i = list.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[list[i], list[j]] = [list[j], list[i]]
  }

  cards.value = list
  selectedCard.value = null
  matchedUids.value = new Set()
  wrongUids.value = new Set()
}

onMounted(() => {
  initCards()
})

function isMatched(card) {
  return matchedUids.value.has(card.uid)
}

function isSelected(card) {
  return selectedCard.value?.uid === card.uid
}

function isWrong(card) {
  return wrongUids.value.has(card.uid)
}

function selectCard(card) {
  if (isMatched(card)) return
  if (wrongUids.value.size > 0) return // currently showing mismatch animation

  if (!selectedCard.value) {
    selectedCard.value = card
    soundManager.playClick()
    return
  }

  // Clicked the same card again
  if (selectedCard.value.uid === card.uid) {
    selectedCard.value = null
    soundManager.playClick()
    return
  }

  // Second card selected -> compare!
  const first = selectedCard.value
  const second = card

  if (first.pairId === second.pairId || first.val === second.val) {
    // Match!
    matchedUids.value.add(first.uid)
    matchedUids.value.add(second.uid)
    selectedCard.value = null
    soundManager.playSuccess()

    emit('update:modelValue', {
      matchedPairsCount: Math.floor(matchedUids.value.size / 2),
      isCompleted: matchedUids.value.size === cards.value.length
    })
  } else {
    // Mismatch!
    wrongUids.value.add(first.uid)
    wrongUids.value.add(second.uid)
    soundManager.playWrong()

    setTimeout(() => {
      wrongUids.value.clear()
      selectedCard.value = null
    }, 800)
  }
}

function resetGame() {
  initCards()
  emit('update:modelValue', { matchedPairsCount: 0, isCompleted: false })
  soundManager.playClick()
}
</script>
