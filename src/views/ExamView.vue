<template>
  <div v-if="exam" class="space-y-6 pb-20">
    
    <!-- Top Sticky Exam Bar -->
    <div class="sticky top-20 z-30 bg-white/95 backdrop-blur-md rounded-3xl p-4 sm:p-5 border-3 border-amber-300 shadow-md flex flex-wrap items-center justify-between gap-4">
      
      <!-- Exam Info & Progress -->
      <div class="flex-1 min-w-[200px]">
        <div class="flex items-center gap-2 mb-1.5">
          <span class="text-xs font-black px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
            {{ exam.roundId === 'custom' ? 'Đề Tự Luyện' : exam.title.split(':')[0] }}
          </span>
          <span class="text-xs font-bold text-slate-500">
            Câu {{ currentQuestionIndex + 1 }} / {{ totalQuestions }}
          </span>
        </div>

        <!-- Progress Bar -->
        <div class="w-full bg-slate-100 h-3 rounded-full overflow-hidden border border-slate-200">
          <div
            class="bg-gradient-to-r from-amber-400 to-emerald-500 h-full rounded-full transition-all duration-300"
            :style="{ width: `${progressPercentage}%` }"
          ></div>
        </div>
      </div>

      <!-- Timer & Actions -->
      <div class="flex items-center gap-3">
        <!-- Timer Badge -->
        <div 
          class="flex items-center gap-2 px-4 py-2 rounded-2xl border-2 font-black text-sm sm:text-base select-none"
          :class="isTimeWarning ? 'bg-rose-50 border-rose-300 text-rose-600 animate-pulse' : 'bg-amber-50 border-amber-300 text-amber-800'"
        >
          <span>⏱️</span>
          <span>{{ formattedTime }}</span>
        </div>

        <!-- Mobile Question Grid Trigger -->
        <button
          @click="showMobilePalette = !showMobilePalette"
          class="lg:hidden p-2.5 rounded-2xl border-2 border-amber-200 bg-amber-50 text-amber-800 font-bold text-xs"
        >
          📋
        </button>

        <!-- Submit Button -->
        <button
          @click="openSubmitConfirm"
          class="px-5 py-2.5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 active:scale-95 text-white font-black text-sm sm:text-base shadow-md shadow-emerald-200 transition-all cursor-pointer flex items-center gap-1.5"
        >
          <span>🏁</span> Nộp Bài
        </button>
      </div>

    </div>

    <!-- Main Exam Body -->
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
      
      <!-- Left: Active Question Card (3 columns on large screen) -->
      <div class="lg:col-span-3 space-y-6">
        <div class="bg-white rounded-3xl p-6 sm:p-8 border-3 border-amber-200 shadow-md">
          
          <!-- Question Meta Header -->
          <div class="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-slate-100">
            <div class="flex items-center gap-2">
              <span class="w-9 h-9 rounded-2xl bg-amber-500 text-white font-black text-base flex items-center justify-center shadow-xs">
                {{ currentQuestionIndex + 1 }}
              </span>
              <div>
                <h2 class="text-sm sm:text-base font-black text-slate-800">
                  {{ currentQuestion.section || 'Phần thi Violympic' }}
                </h2>
                <span class="text-xs font-bold text-amber-700">
                  {{ getTopicName(currentQuestion.topic) }}
                </span>
              </div>
            </div>

            <!-- Hint Toggle Button -->
            <button
              v-if="currentQuestion.hint"
              @click="showHint = !showHint"
              class="px-3 py-1 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-300 text-amber-800 text-xs font-black transition-all cursor-pointer flex items-center gap-1"
            >
              <span>💡</span> {{ showHint ? 'Ẩn gợi ý' : 'Xem gợi ý' }}
            </button>
          </div>

          <!-- Hint Box -->
          <div v-if="showHint && currentQuestion.hint" class="mb-5 p-3.5 bg-yellow-50 border-2 border-yellow-300 rounded-2xl flex items-start gap-2.5 text-xs sm:text-sm font-bold text-yellow-900 animate-fadeIn">
            <span class="text-base">💡</span>
            <div>
              <span class="font-black">Gợi ý cho bé:</span> {{ currentQuestion.hint }}
            </div>
          </div>

          <!-- Question Content Prompt -->
          <div class="mb-4">
            <p class="text-lg sm:text-2xl font-black text-slate-800 leading-relaxed">
              {{ currentQuestion.content }}
            </p>
          </div>

          <!-- Question Geometry Diagram if available -->
          <GeometryDiagram
            v-if="currentQuestion.diagram"
            :diagram="currentQuestion.diagram"
          />

          <!-- Question Interactive Renderer -->
          <div class="min-h-[140px] py-2">
            
            <!-- Type 1: Matrix Order (Bài 1 Bảng số tăng dần) -->
            <MatrixOrderQuestion
              v-if="currentQuestion.type === 'matrix_order'"
              :question="currentQuestion"
              v-model="currentAnswer"
            />

            <!-- Type 2: Match Pairs (Bài 2 Cặp bằng nhau) -->
            <MatchPairsQuestion
              v-else-if="currentQuestion.type === 'match_pairs'"
              :question="currentQuestion"
              v-model="currentAnswer"
            />

            <!-- Type 3: Vertical Arithmetic (Đặt tính hàng dọc) -->
            <VerticalMathQuestion
              v-else-if="currentQuestion.type === 'vertical_math'"
              :question="currentQuestion"
              v-model="currentAnswer"
            />

            <!-- Type 4: Multiple Choice (Cóc vàng tài ba) -->
            <MultipleChoiceQuestion
              v-else-if="currentQuestion.type === 'multiple_choice'"
              :question="currentQuestion"
              v-model="currentAnswer"
            />

            <!-- Type 5: Fill in the blank (Điền số / biểu thức) -->
            <FillBlankQuestion
              v-else
              :question="currentQuestion"
              v-model="currentAnswer"
            />

          </div>

          <!-- Question Footer Navigation Buttons -->
          <div class="mt-8 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
            <!-- Previous Button -->
            <button
              @click="prevQuestion"
              :disabled="currentQuestionIndex === 0"
              class="px-5 py-3 rounded-2xl font-black text-sm border-2 transition-all cursor-pointer flex items-center gap-1.5 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed"
              :class="currentQuestionIndex === 0 ? 'bg-slate-50 border-slate-200 text-slate-400' : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-100'"
            >
              <span>←</span> Câu trước
            </button>

            <!-- Middle Actions: Skip / Save notification -->
            <div class="flex items-center gap-2">
              <span class="text-xs font-bold text-emerald-600 flex items-center gap-1">
                <span>✓</span> Đã tự động lưu
              </span>
              <button
                @click="skipQuestion"
                class="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-bold transition-all cursor-pointer"
              >
                Bỏ qua câu này ⏩
              </button>
            </div>

            <!-- Next Button -->
            <button
              v-if="currentQuestionIndex < totalQuestions - 1"
              @click="nextQuestion"
              class="px-6 py-3 rounded-2xl bg-amber-500 hover:bg-amber-600 active:scale-95 text-white font-black text-sm shadow-md shadow-amber-300/50 transition-all cursor-pointer flex items-center gap-1.5"
            >
              Câu tiếp theo <span>→</span>
            </button>
            <button
              v-else
              @click="openSubmitConfirm"
              class="px-6 py-3 rounded-2xl bg-emerald-500 hover:bg-emerald-600 active:scale-95 text-white font-black text-sm shadow-md shadow-emerald-300/50 transition-all cursor-pointer flex items-center gap-1.5"
            >
              Hoàn Thành Bài <span>🏁</span>
            </button>
          </div>

        </div>

        <!-- Cheerful Mascot Assistant -->
        <MascotGuide mascot="bee" badge="Nhắc nhở">
          Bé có thể tự do bấm vào các câu hỏi trên bảng danh sách bên phải để làm trước những câu dễ, câu nào khó thì để lại làm sau nhé! 🌟
        </MascotGuide>
      </div>

      <!-- Right: Question Palette Sidebar (1 column on large screen) -->
      <div 
        :class="[
          'lg:block lg:sticky lg:top-40 space-y-4',
          showMobilePalette ? 'block fixed inset-x-4 top-24 z-40 bg-white p-4 rounded-3xl shadow-2xl border-4 border-amber-300 max-h-[80vh] overflow-y-auto' : 'hidden'
        ]"
      >
        <div v-if="showMobilePalette" class="flex justify-end mb-2 lg:hidden">
          <button @click="showMobilePalette = false" class="text-xs font-black text-rose-600 bg-rose-50 px-3 py-1 rounded-full">
            Đóng bảng câu hỏi ✕
          </button>
        </div>

        <QuestionPalette
          :questions="exam.questions"
          :currentIndex="currentQuestionIndex"
          :userAnswers="examStore.userAnswers"
          @select-question="goToQuestion"
        />
      </div>

    </div>

    <!-- Confirm Submit Modal -->
    <ConfirmSubmitModal
      v-if="showConfirmModal"
      :totalCount="totalQuestions"
      :answeredCount="answeredCount"
      :unansweredCount="unansweredCount"
      @cancel="showConfirmModal = false"
      @confirm="handleSubmitExam"
    />

  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { examStore } from '../store/examStore'
import { TOPICS } from '../data/questionsData'
import { soundManager } from '../utils/soundEffects'
import QuestionPalette from '../components/QuestionPalette.vue'
import MascotGuide from '../components/MascotGuide.vue'
import ConfirmSubmitModal from '../components/ConfirmSubmitModal.vue'
import MatrixOrderQuestion from '../components/questions/MatrixOrderQuestion.vue'
import MatchPairsQuestion from '../components/questions/MatchPairsQuestion.vue'
import VerticalMathQuestion from '../components/questions/VerticalMathQuestion.vue'
import MultipleChoiceQuestion from '../components/questions/MultipleChoiceQuestion.vue'
import FillBlankQuestion from '../components/questions/FillBlankQuestion.vue'
import GeometryDiagram from '../components/GeometryDiagram.vue'

const exam = computed(() => examStore.exam)
const currentQuestionIndex = ref(0)
const showHint = ref(false)
const showMobilePalette = ref(false)
const showConfirmModal = ref(false)

const totalQuestions = computed(() => exam.value?.questions?.length || 0)
const currentQuestion = computed(() => exam.value?.questions?.[currentQuestionIndex.value] || {})

const currentAnswer = computed({
  get: () => {
    const qid = currentQuestion.value.id
    return examStore.userAnswers[qid] ?? (currentQuestion.value.type === 'matrix_order' || currentQuestion.value.type === 'vertical_math' ? {} : '')
  },
  set: (val) => {
    const qid = currentQuestion.value.id
    examStore.setAnswer(qid, val)
  }
})

// Reset hint when switching questions
watch(currentQuestionIndex, () => {
  showHint.value = false
})

const answeredCount = computed(() => {
  if (!exam.value) return 0
  return exam.value.questions.filter(q => {
    const ans = examStore.userAnswers[q.id]
    if (ans === undefined || ans === null || ans === '') return false
    if (typeof ans === 'object') return Object.keys(ans).length > 0
    return true
  }).length
})

const unansweredCount = computed(() => totalQuestions.value - answeredCount.value)

const progressPercentage = computed(() => {
  if (totalQuestions.value === 0) return 0
  return Math.round((answeredCount.value / totalQuestions.value) * 100)
})

const formattedTime = computed(() => {
  if (examStore.timeLimit > 0) {
    // Countdown
    const remaining = Math.max(0, examStore.timeLimit - examStore.timeElapsed)
    const m = Math.floor(remaining / 60)
    const s = remaining % 60
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
  } else {
    // Stopwatch
    const m = Math.floor(examStore.timeElapsed / 60)
    const s = examStore.timeElapsed % 60
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
  }
})

const isTimeWarning = computed(() => {
  if (examStore.timeLimit > 0) {
    const remaining = examStore.timeLimit - examStore.timeElapsed
    return remaining > 0 && remaining <= 180 // less than 3 minutes
  }
  return false
})

function getTopicName(topicId) {
  const t = TOPICS.find(item => item.id === topicId)
  return t ? t.name : 'Kiến thức tổng hợp'
}

function nextQuestion() {
  if (currentQuestionIndex.value < totalQuestions.value - 1) {
    currentQuestionIndex.value++
    soundManager.playClick()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

function prevQuestion() {
  if (currentQuestionIndex.value > 0) {
    currentQuestionIndex.value--
    soundManager.playClick()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

function skipQuestion() {
  soundManager.playClick()
  if (currentQuestionIndex.value < totalQuestions.value - 1) {
    currentQuestionIndex.value++
  } else {
    // Wrap to first unanswered question if any
    const firstUnanswered = exam.value.questions.findIndex(q => !examStore.userAnswers[q.id])
    if (firstUnanswered !== -1) {
      currentQuestionIndex.value = firstUnanswered
    }
  }
}

function goToQuestion(idx) {
  currentQuestionIndex.value = idx
  showMobilePalette.value = false
  soundManager.playClick()
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

function openSubmitConfirm() {
  soundManager.playClick()
  showConfirmModal.value = true
}

function handleSubmitExam() {
  showConfirmModal.value = false
  examStore.submitExam()
}
</script>
