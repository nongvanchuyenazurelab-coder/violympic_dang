<template>
  <div class="bg-white rounded-3xl p-5 border-3 border-amber-200 shadow-md">
    <div class="flex items-center justify-between mb-3">
      <h3 class="font-black text-slate-800 text-sm flex items-center gap-2">
        <span>📋</span> Danh Sách Câu Hỏi
      </h3>
      <span class="text-xs font-black px-2.5 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
        {{ answeredCount }}/{{ totalCount }} Đã làm
      </span>
    </div>

    <!-- Question Numbers Grid -->
    <div class="grid grid-cols-5 sm:grid-cols-6 lg:grid-cols-5 gap-2">
      <button
        v-for="(q, idx) in questions"
        :key="q.id"
        @click="$emit('select-question', idx)"
        :class="[
          'h-11 rounded-2xl font-black text-sm flex items-center justify-center transition-all cursor-pointer relative',
          currentIndex === idx
            ? 'ring-4 ring-amber-400 ring-offset-2 scale-105 shadow-md z-10'
            : '',
          hasAnswer(q.id)
            ? 'bg-emerald-500 text-white hover:bg-emerald-600 shadow-xs'
            : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
        ]"
      >
        <span>{{ idx + 1 }}</span>
        <!-- Green checkmark badge if answered -->
        <span 
          v-if="hasAnswer(q.id)" 
          class="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-600 text-white rounded-full flex items-center justify-center text-[9px] border border-white font-black"
        >
          ✓
        </span>
      </button>
    </div>

    <!-- Legend -->
    <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-500">
      <div class="flex items-center gap-1.5">
        <span class="w-3.5 h-3.5 rounded-lg bg-emerald-500 inline-block"></span>
        <span>Đã làm</span>
      </div>
      <div class="flex items-center gap-1.5">
        <span class="w-3.5 h-3.5 rounded-lg bg-slate-200 inline-block"></span>
        <span>Chưa làm</span>
      </div>
      <div class="flex items-center gap-1.5">
        <span class="w-3.5 h-3.5 rounded-lg border-2 border-amber-400 bg-white inline-block"></span>
        <span>Đang chọn</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  questions: {
    type: Array,
    required: true
  },
  currentIndex: {
    type: Number,
    required: true
  },
  userAnswers: {
    type: Object,
    required: true
  }
})

defineEmits(['select-question'])

const totalCount = computed(() => props.questions.length)

function hasAnswer(questionId) {
  const ans = props.userAnswers[questionId]
  if (ans === undefined || ans === null || ans === '') return false
  if (typeof ans === 'object') {
    // If it's an object (like matrix orders or vertical math), check if non-empty
    return Object.keys(ans).length > 0
  }
  return true
}

const answeredCount = computed(() => {
  return props.questions.filter(q => hasAnswer(q.id)).length
})
</script>
