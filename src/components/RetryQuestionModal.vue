<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4 overflow-y-auto">
    <div class="bg-white rounded-3xl p-6 sm:p-8 max-w-xl w-full border-4 border-amber-300 shadow-2xl space-y-6 my-8">
      
      <!-- Header -->
      <div class="flex items-center justify-between pb-3 border-b border-slate-100">
        <div class="flex items-center gap-2">
          <span class="text-2xl">🎯</span>
          <div>
            <h3 class="font-black text-slate-800 text-lg">Làm Lại Câu Hỏi #{{ question.index }}</h3>
            <span class="text-xs font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">
              {{ question.topicName || 'Luyện tập' }}
            </span>
          </div>
        </div>
        <button
          @click="$emit('close')"
          class="w-9 h-9 rounded-full bg-slate-100 text-slate-500 font-bold flex items-center justify-center hover:bg-slate-200 transition-all cursor-pointer"
        >
          ✕
        </button>
      </div>

      <!-- Question Text -->
      <div class="p-4 bg-amber-50/80 rounded-2xl border-2 border-amber-200">
        <p class="font-black text-slate-800 text-base sm:text-lg leading-relaxed">
          {{ question.content }}
        </p>
      </div>

      <!-- Geometry Diagram if available -->
      <GeometryDiagram
        v-if="question.diagram"
        :diagram="question.diagram"
      />

      <!-- Question Component based on Type -->
      <div>
        <MatrixOrderQuestion
          v-if="question.type === 'matrix_order'"
          :question="question"
          v-model="retryAnswer"
        />

        <VerticalMathQuestion
          v-else-if="question.type === 'vertical_math'"
          :question="question"
          v-model="retryAnswer"
        />

        <MultipleChoiceQuestion
          v-else-if="question.type === 'multiple_choice'"
          :question="question"
          v-model="retryAnswer"
        />

        <FillBlankQuestion
          v-else
          :question="question"
          v-model="retryAnswer"
        />
      </div>

      <!-- Instant Feedback Result -->
      <div v-if="feedback" class="p-4 rounded-2xl border-2 transition-all" :class="feedback.isCorrect ? 'bg-emerald-50 border-emerald-300 text-emerald-800' : 'bg-rose-50 border-rose-300 text-rose-800'">
        <div class="flex items-center gap-2 font-black text-base mb-1">
          <span>{{ feedback.isCorrect ? '🎉' : '💡' }}</span>
          <span>{{ feedback.isCorrect ? 'Bé làm chính xác rồi! Rất xuất sắc!' : 'Chưa đúng rồi bé ơi, cùng thử lại nào!' }}</span>
        </div>
        <p v-if="!feedback.isCorrect && question.hint" class="text-sm font-bold text-slate-600 mt-1">
          Gợi ý: {{ question.hint }}
        </p>
      </div>

      <!-- Action Buttons -->
      <div class="flex gap-3 pt-2">
        <button
          @click="$emit('close')"
          class="flex-1 py-3 rounded-2xl border-2 border-slate-300 font-black text-slate-600 hover:bg-slate-100 transition-all cursor-pointer"
        >
          Đóng
        </button>
        <button
          @click="checkAnswer"
          class="flex-1 py-3 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-black shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
        >
          <span>🔍</span> Kiểm Tra Đáp Án
        </button>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import MatrixOrderQuestion from './questions/MatrixOrderQuestion.vue'
import VerticalMathQuestion from './questions/VerticalMathQuestion.vue'
import MultipleChoiceQuestion from './questions/MultipleChoiceQuestion.vue'
import FillBlankQuestion from './questions/FillBlankQuestion.vue'
import GeometryDiagram from './GeometryDiagram.vue'
import { evaluateAnswer, gradeMatrixOrder, gradeVerticalMath } from '../utils/mathEvaluator'
import { soundManager } from '../utils/soundEffects'
import { triggerStarBurst } from '../utils/confetti'

const props = defineProps({
  question: {
    type: Object,
    required: true
  }
})

defineEmits(['close'])

const retryAnswer = ref(props.question.type === 'matrix_order' || props.question.type === 'vertical_math' ? {} : '')
const feedback = ref(null)

function checkAnswer() {
  const q = props.question
  let isCorrect = false

  if (q.type === 'matrix_order') {
    const res = gradeMatrixOrder(retryAnswer.value || {}, q.items || [])
    isCorrect = res.isFullyCorrect
  } else if (q.type === 'vertical_math') {
    const boxes = []
    q.topDigits.forEach(d => { if (typeof d === 'object') boxes.push({ id: d.id, correctDigit: d.correct }) })
    q.bottomDigits.forEach(d => { if (typeof d === 'object') boxes.push({ id: d.id, correctDigit: d.correct }) })
    const res = gradeVerticalMath(retryAnswer.value || {}, boxes)
    isCorrect = res.isFullyCorrect
  } else {
    const res = evaluateAnswer(retryAnswer.value, q.correctAnswer, q)
    isCorrect = res.isCorrect
  }

  feedback.value = { isCorrect }

  if (isCorrect) {
    soundManager.playSuccess()
    triggerStarBurst()
  } else {
    soundManager.playWrong()
  }
}
</script>
