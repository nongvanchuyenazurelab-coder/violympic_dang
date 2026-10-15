<template>
  <div class="space-y-4">
    <!-- Instruction Banner -->
    <div class="p-4 bg-amber-50 rounded-2xl border-2 border-amber-200 flex flex-wrap items-center justify-between gap-3">
      <div class="flex items-center gap-2 text-amber-900 font-bold text-sm">
        <span class="text-xl">💡</span>
        <span>Mẹo nhỏ: Bé có thể <b>nhấn chuột trực tiếp vào từng ô</b> theo thứ tự từ bé đến lớn để điền nhanh, hoặc gõ số thứ tự vào ô tròn!</span>
      </div>
      <div class="flex items-center gap-2">
        <span class="text-xs font-black px-3 py-1 bg-amber-200 text-amber-900 rounded-full">
          Đã điền {{ filledCount }}/{{ items.length }} ô
        </span>
        <button
          @click="resetAllRanks"
          class="px-3 py-1 bg-white hover:bg-rose-50 text-rose-600 border border-rose-200 rounded-xl text-xs font-bold transition-all cursor-pointer hover:shadow-xs active:scale-95"
        >
          🔄 Xóa làm lại bảng
        </button>
      </div>
    </div>

    <!-- Matrix Grid of Numbers & Expressions -->
    <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-4 select-none">
      <div
        v-for="(item, idx) in items"
        :key="item.id"
        @click="handleCardClick(idx)"
        :class="[
          'relative p-4 rounded-3xl border-3 transition-all duration-200 flex flex-col items-center justify-center min-h-[90px] sm:min-h-[105px] cursor-pointer shadow-sm group',
          currentRanks[idx]
            ? 'bg-gradient-to-b from-amber-50 to-amber-100/90 border-amber-400 shadow-amber-200/50 shadow-md scale-102'
            : 'bg-white border-slate-200 hover:border-amber-300 hover:bg-amber-50/50 hover:shadow-md'
        ]"
      >
        <!-- The Math Expression or Number -->
        <div class="text-xl sm:text-2xl font-black text-slate-800 tracking-wide text-center">
          {{ item.text }}
        </div>

        <!-- The Circular Rank Badge / Input -->
        <div class="mt-2 flex items-center justify-center">
          <div
            :class="[
              'w-10 h-10 sm:w-11 sm:h-11 rounded-full border-3 flex items-center justify-center font-black text-base sm:text-lg transition-all',
              currentRanks[idx]
                ? 'bg-amber-500 border-amber-600 text-white shadow-md transform scale-110'
                : 'bg-slate-50 border-slate-300 text-slate-400 group-hover:border-amber-400 group-hover:text-amber-500'
            ]"
          >
            <input
              type="text"
              inputmode="numeric"
              maxlength="2"
              :value="currentRanks[idx] || ''"
              @click.stop
              @input="handleInput(idx, $event)"
              placeholder="○"
              class="w-full h-full text-center bg-transparent font-black focus:outline-hidden cursor-text"
              :class="currentRanks[idx] ? 'text-white' : 'text-slate-700'"
            />
          </div>
        </div>

        <!-- Order Pin Indicator -->
        <div 
          v-if="currentRanks[idx]" 
          class="absolute -top-2 -left-2 bg-amber-600 text-white font-black text-[10px] px-2 py-0.5 rounded-full shadow-xs"
        >
          Số {{ currentRanks[idx] }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { soundManager } from '../../utils/soundEffects'

const props = defineProps({
  question: {
    type: Object,
    required: true
  },
  modelValue: {
    type: Object,
    default: () => ({})
  }
})

const emit = defineEmits(['update:modelValue'])

const items = computed(() => props.question.items || [])
const currentRanks = ref({ ...props.modelValue })

watch(
  () => props.modelValue,
  (newVal) => {
    currentRanks.value = { ...(newVal || {}) }
  },
  { deep: true }
)

const filledCount = computed(() => {
  return Object.values(currentRanks.value).filter(v => v !== null && v !== undefined && v !== '').length
})

// Calculate the next available rank for auto-assignment when clicking cards
function getNextAvailableRank() {
  const existingRanks = new Set(
    Object.values(currentRanks.value)
      .map(v => parseInt(v, 10))
      .filter(n => !isNaN(n) && n > 0)
  )
  for (let r = 1; r <= items.value.length; r++) {
    if (!existingRanks.has(r)) {
      return r
    }
  }
  return null
}

function handleCardClick(idx) {
  // If card already has a rank, clicking removes it
  if (currentRanks.value[idx]) {
    delete currentRanks.value[idx]
    emit('update:modelValue', { ...currentRanks.value })
    soundManager.playClick()
    return
  }

  // Otherwise assign the next available rank
  const nextRank = getNextAvailableRank()
  if (nextRank !== null) {
    currentRanks.value[idx] = nextRank
    emit('update:modelValue', { ...currentRanks.value })
    soundManager.playClick()
  }
}

function handleInput(idx, event) {
  const val = event.target.value.replace(/\D/g, '')
  if (val) {
    const num = parseInt(val, 10)
    if (num >= 1 && num <= items.value.length) {
      currentRanks.value[idx] = num
    } else {
      currentRanks.value[idx] = num
    }
  } else {
    delete currentRanks.value[idx]
  }
  emit('update:modelValue', { ...currentRanks.value })
}

function resetAllRanks() {
  currentRanks.value = {}
  emit('update:modelValue', {})
  soundManager.playClick()
}
</script>
