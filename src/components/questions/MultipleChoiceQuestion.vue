<template>
  <div class="space-y-4 max-w-xl mx-auto">
    <div class="text-sm font-bold text-slate-500 mb-2 text-center">
      Nhấn chọn 1 trong 4 đáp án đúng bên dưới:
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
      <button
        v-for="(option, idx) in question.options"
        :key="idx"
        @click="selectOption(option)"
        :class="[
          'p-4 rounded-3xl border-3 flex items-center gap-3.5 text-left transition-all duration-200 cursor-pointer shadow-sm group active:scale-98',
          isSelected(option)
            ? 'bg-amber-100 border-amber-500 text-amber-950 scale-102 shadow-md ring-4 ring-amber-300'
            : 'bg-white border-slate-200 hover:border-amber-300 hover:bg-amber-50/60 hover:shadow-md'
        ]"
      >
        <!-- Letter Tag (A, B, C, D) -->
        <span
          :class="[
            'w-10 h-10 rounded-2xl flex items-center justify-center font-black text-base transition-all flex-shrink-0',
            isSelected(option)
              ? 'bg-amber-500 text-white shadow-xs'
              : 'bg-slate-100 text-slate-600 group-hover:bg-amber-200 group-hover:text-amber-900'
          ]"
        >
          {{ getLetter(idx) }}
        </span>

        <!-- Option Text -->
        <span class="font-black text-base sm:text-lg text-slate-800 leading-snug">
          {{ option }}
        </span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { soundManager } from '../../utils/soundEffects'

const props = defineProps({
  question: {
    type: Object,
    required: true
  },
  modelValue: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])

function getLetter(idx) {
  return ['A', 'B', 'C', 'D'][idx] || ''
}

function isSelected(opt) {
  return props.modelValue === opt
}

function selectOption(opt) {
  soundManager.playClick()
  emit('update:modelValue', opt)
}
</script>
