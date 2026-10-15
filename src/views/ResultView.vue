<template>
  <div v-if="result" class="space-y-8 pb-20">
    
    <!-- Top Result Banner -->
    <div class="rounded-3xl bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 p-6 sm:p-10 text-white shadow-xl text-center relative overflow-hidden">
      <!-- Confetti burst decor -->
      <div class="relative z-10 max-w-2xl mx-auto space-y-4">
        
        <!-- Stars Rating -->
        <div class="flex items-center justify-center gap-2 text-4xl sm:text-5xl drop-shadow-md">
          <span :class="starCount >= 1 ? 'animate-bounce' : 'opacity-40'">⭐</span>
          <span :class="starCount >= 2 ? 'animate-bounce delay-100' : 'opacity-40'">⭐</span>
          <span :class="starCount >= 3 ? 'animate-bounce delay-200' : 'opacity-40'">⭐</span>
        </div>

        <h1 class="text-3xl sm:text-4xl font-black tracking-tight">
          {{ congratulationTitle }}
        </h1>
        <p class="text-white/90 text-sm sm:text-base font-bold">
          {{ congratulationMessage }}
        </p>

        <!-- Score Pill -->
        <div class="inline-flex items-center gap-4 px-6 py-3 rounded-2xl bg-white/20 backdrop-blur-md border border-white/40 shadow-inner">
          <div>
            <div class="text-xs uppercase font-black text-amber-100">Điểm số đạt được</div>
            <div class="text-3xl sm:text-4xl font-black text-white">
              {{ result.score }} <span class="text-lg font-bold text-amber-200">/ {{ result.maxScore }}</span>
            </div>
          </div>
          <div class="h-10 w-0.5 bg-white/30"></div>
          <div>
            <div class="text-xs uppercase font-black text-amber-100">Độ chính xác</div>
            <div class="text-3xl sm:text-4xl font-black text-white">
              {{ result.accuracy }}%
            </div>
          </div>
        </div>

      </div>
    </div>

    <!-- Metrics Breakdown Cards -->
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
      <div class="p-4 rounded-3xl bg-white border-2 border-slate-200 shadow-sm flex items-center gap-3">
        <span class="text-3xl p-2.5 rounded-2xl bg-blue-50 border border-blue-200">📝</span>
        <div>
          <div class="text-xl font-black text-slate-800">{{ result.totalCount }}</div>
          <div class="text-xs font-bold text-slate-400">Tổng số câu</div>
        </div>
      </div>

      <div class="p-4 rounded-3xl bg-white border-2 border-emerald-200 shadow-sm flex items-center gap-3">
        <span class="text-3xl p-2.5 rounded-2xl bg-emerald-50 border border-emerald-200">✅</span>
        <div>
          <div class="text-xl font-black text-emerald-700">{{ result.correctCount }}</div>
          <div class="text-xs font-bold text-slate-400">Số câu đúng</div>
        </div>
      </div>

      <div class="p-4 rounded-3xl bg-white border-2 border-rose-200 shadow-sm flex items-center gap-3">
        <span class="text-3xl p-2.5 rounded-2xl bg-rose-50 border border-rose-200">❌</span>
        <div>
          <div class="text-xl font-black text-rose-600">{{ result.wrongCount }}</div>
          <div class="text-xs font-bold text-slate-400">Số câu sai</div>
        </div>
      </div>

      <div class="p-4 rounded-3xl bg-white border-2 border-amber-200 shadow-sm flex items-center gap-3">
        <span class="text-3xl p-2.5 rounded-2xl bg-amber-50 border border-amber-200">⏱️</span>
        <div>
          <div class="text-xl font-black text-amber-700">{{ formattedTimeSpent }}</div>
          <div class="text-xs font-bold text-slate-400">Thời gian làm</div>
        </div>
      </div>
    </div>

    <!-- Mascot Encouragement -->
    <MascotGuide mascot="bee" badge="Nhận xét từ giáo viên">
      {{ mascotFeedback }}
    </MascotGuide>

    <!-- Detailed Questions Review Section -->
    <div class="space-y-4">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 class="text-2xl font-black text-slate-800 flex items-center gap-2">
            <span>🔍</span> Chi Tiết Lời Giải Từng Câu
          </h2>
          <p class="text-xs font-bold text-slate-500">Xem lại đáp án của bé và học cách giải từng bước</p>
        </div>

        <!-- Filter Question Tabs -->
        <div class="flex items-center gap-2">
          <button
            @click="activeReviewFilter = 'all'"
            :class="[
              'px-3.5 py-1.5 rounded-2xl text-xs font-black transition-all cursor-pointer',
              activeReviewFilter === 'all'
                ? 'bg-amber-500 text-white shadow-xs'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
            ]"
          >
            Tất cả ({{ result.gradedQuestions.length }})
          </button>
          <button
            @click="activeReviewFilter = 'wrong'"
            :class="[
              'px-3.5 py-1.5 rounded-2xl text-xs font-black transition-all cursor-pointer',
              activeReviewFilter === 'wrong'
                ? 'bg-rose-500 text-white shadow-xs'
                : 'bg-white text-rose-700 border border-rose-200 hover:bg-rose-50'
            ]"
          >
            Câu sai ({{ result.wrongCount }})
          </button>
          <button
            @click="activeReviewFilter = 'correct'"
            :class="[
              'px-3.5 py-1.5 rounded-2xl text-xs font-black transition-all cursor-pointer',
              activeReviewFilter === 'correct'
                ? 'bg-emerald-500 text-white shadow-xs'
                : 'bg-white text-emerald-700 border border-emerald-200 hover:bg-emerald-50'
            ]"
          >
            Câu đúng ({{ result.correctCount }})
          </button>
        </div>
      </div>

      <!-- Question Cards List -->
      <div class="space-y-4">
        <div
          v-for="q in filteredQuestions"
          :key="q.id"
          class="bg-white rounded-3xl p-5 sm:p-6 border-3 transition-all"
          :class="q.evaluation.isCorrect ? 'border-emerald-200 bg-emerald-50/20' : 'border-rose-200 bg-rose-50/20'"
        >
          <!-- Question Header Status -->
          <div class="flex flex-wrap items-center justify-between gap-2 mb-3">
            <div class="flex items-center gap-2">
              <span
                :class="[
                  'w-8 h-8 rounded-xl font-black text-sm flex items-center justify-center text-white',
                  q.evaluation.isCorrect ? 'bg-emerald-500' : 'bg-rose-500'
                ]"
              >
                {{ q.index }}
              </span>
              <span class="text-xs font-bold text-slate-500">
                {{ q.section || 'Phần thi Violympic' }}
              </span>
            </div>

            <div class="flex items-center gap-2">
              <span
                :class="[
                  'px-3 py-1 rounded-full text-xs font-black flex items-center gap-1',
                  q.evaluation.isCorrect ? 'bg-emerald-100 text-emerald-800' : 'bg-rose-100 text-rose-800'
                ]"
              >
                <span>{{ q.evaluation.isCorrect ? '✓ Bé trả lời Đúng' : '✕ Bé trả lời Chưa đúng' }}</span>
                <span>(+{{ q.evaluation.score }} điểm)</span>
              </span>
            </div>
          </div>

          <!-- Question Content -->
          <p class="font-black text-slate-800 text-base sm:text-lg mb-4">
            {{ q.content }}
          </p>

          <!-- Compare Student Answer vs Correct Answer -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4 text-sm font-bold">
            <!-- Student's answer -->
            <div class="p-3.5 rounded-2xl bg-white border-2" :class="q.evaluation.isCorrect ? 'border-emerald-300' : 'border-rose-300'">
              <span class="text-xs text-slate-400 block mb-1">Đáp án bé đã chọn:</span>
              <span class="font-black text-base" :class="q.evaluation.isCorrect ? 'text-emerald-700' : 'text-rose-600'">
                {{ formatUserAnswer(q) }}
              </span>
            </div>

            <!-- Correct answer -->
            <div class="p-3.5 rounded-2xl bg-white border-2 border-emerald-300">
              <span class="text-xs text-slate-400 block mb-1">Đáp án chính xác:</span>
              <span class="font-black text-base text-emerald-700">
                {{ formatCorrectAnswer(q) }}
              </span>
            </div>
          </div>

          <!-- Step-by-Step Pedagogical Explanation -->
          <div class="p-4 rounded-2xl bg-amber-50/80 border-2 border-amber-200 text-slate-800 text-sm font-medium leading-relaxed">
            <div class="flex items-center gap-1.5 font-black text-amber-900 mb-1.5 text-xs uppercase tracking-wide">
              <span>📖</span> Lời giải chi tiết dành cho học sinh lớp 2:
            </div>
            <div class="whitespace-pre-line text-slate-700 text-sm">
              {{ q.explanation }}
            </div>
          </div>

          <!-- Question Actions: Retry / Practice Similar -->
          <div class="mt-4 pt-3 border-t border-slate-100 flex flex-wrap items-center justify-end gap-2">
            <button
              @click="openRetryModal(q)"
              class="px-4 py-2 rounded-xl bg-amber-100 hover:bg-amber-200 text-amber-900 font-bold text-xs transition-all cursor-pointer flex items-center gap-1 active:scale-95"
            >
              <span>🔄</span> Làm lại câu này
            </button>
            <button
              @click="practiceSimilarQuestion(q)"
              class="px-4 py-2 rounded-xl bg-sky-100 hover:bg-sky-200 text-sky-900 font-bold text-xs transition-all cursor-pointer flex items-center gap-1 active:scale-95"
            >
              <span>✨</span> Luyện câu tương tự
            </button>
          </div>

        </div>
      </div>
    </div>

    <!-- Bottom Actions Toolbar -->
    <div class="flex flex-wrap items-center justify-center gap-4 pt-6">
      <button
        @click="examStore.navigate('home')"
        class="px-6 py-3.5 rounded-2xl border-2 border-slate-300 bg-white hover:bg-slate-50 font-black text-slate-700 text-sm transition-all cursor-pointer shadow-xs active:scale-95"
      >
        <span>🏠</span> Quay Về Trang Chủ
      </button>

      <button
        v-if="result.wrongCount > 0"
        @click="examStore.startReviewWrongExam()"
        class="px-6 py-3.5 rounded-2xl bg-rose-500 hover:bg-rose-600 text-white font-black text-sm shadow-md shadow-rose-200 transition-all cursor-pointer active:scale-95 flex items-center gap-2"
      >
        <span>🔁</span> Luyện Ngay Các Câu Chưa Đúng ({{ result.wrongCount }})
      </button>

      <button
        @click="retakeExam"
        class="px-6 py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-600 text-white font-black text-sm shadow-md shadow-amber-300 transition-all cursor-pointer active:scale-95 flex items-center gap-2"
      >
        <span>🚀</span> Làm Lại Cả Đề Thi
      </button>
    </div>

    <!-- Retry Modal -->
    <RetryQuestionModal
      v-if="activeRetryQuestion"
      :question="activeRetryQuestion"
      @close="activeRetryQuestion = null"
    />

  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { examStore } from '../store/examStore'
import MascotGuide from '../components/MascotGuide.vue'
import RetryQuestionModal from '../components/RetryQuestionModal.vue'

const result = computed(() => examStore.lastResult)
const activeReviewFilter = ref('all')
const activeRetryQuestion = ref(null)

const starCount = computed(() => {
  if (!result.value) return 0
  const acc = result.value.accuracy
  if (acc >= 90) return 3
  if (acc >= 60) return 2
  return 1
})

const congratulationTitle = computed(() => {
  const acc = result.value?.accuracy || 0
  if (acc === 100) return 'Xuất Sắc Tuyệt Đối! 🏆'
  if (acc >= 80) return 'Bé Làm Rất Giỏi! ⭐'
  if (acc >= 50) return 'Cố Gắng Rất Tốt! 🌸'
  return 'Cùng Cố Gắng Hơn Nữa Nhé! 💪'
})

const congratulationMessage = computed(() => {
  const acc = result.value?.accuracy || 0
  if (acc === 100) return 'Bé đạt điểm tối đa! Một thành tích tuyệt vời đáng tự hào.'
  if (acc >= 80) return 'Bé chỉ cần xem lại vài câu chưa chính xác là hoàn hảo rồi!'
  if (acc >= 50) return 'Bé đã rất nỗ lực, hãy xem kỹ lời giải từng câu để làm tốt hơn ở lần sau nhé.'
  return 'Đừng lo lắng bé nhé! Làm Toán cần rèn luyện mỗi ngày, cùng làm lại nào!'
})

const mascotFeedback = computed(() => {
  const acc = result.value?.accuracy || 0
  if (acc >= 80) {
    return 'Thầy cô và Ong Vàng rất tự hào về bé! Bé hãy tiếp tục giữ vững phong độ này ở các vòng thi tiếp theo nhé.'
  } else {
    return 'Không sao cả bé yêu ơi! Học tập là để tiến bộ. Bé hãy bấm vào nút "Làm lại câu này" ở các câu màu đỏ để thử sức lại nha!'
  }
})

const formattedTimeSpent = computed(() => {
  if (!result.value) return '00:00'
  const sec = result.value.timeElapsed || 0
  const m = Math.floor(sec / 60)
  const s = sec % 60
  return `${m} phút ${s} giây`
})

const filteredQuestions = computed(() => {
  if (!result.value) return []
  const list = result.value.gradedQuestions || []
  if (activeReviewFilter.value === 'wrong') {
    return list.filter(q => !q.evaluation.isCorrect)
  }
  if (activeReviewFilter.value === 'correct') {
    return list.filter(q => q.evaluation.isCorrect)
  }
  return list
})

function formatUserAnswer(q) {
  const ans = q.userAnswer
  if (ans === undefined || ans === null || ans === '') return '(Bé chưa điền câu trả lời)'
  if (typeof ans === 'object') {
    if (q.type === 'matrix_order') {
      const count = Object.keys(ans).length
      return `Đã điền thứ tự cho ${count}/${q.items?.length || 0} ô`
    }
    return JSON.stringify(ans)
  }
  return String(ans)
}

function formatCorrectAnswer(q) {
  if (q.type === 'matrix_order') {
    return 'Xem thứ tự đúng trong phần lời giải bên dưới'
  }
  if (q.type === 'vertical_math') {
    return 'Điền đủ các chữ số thích hợp'
  }
  if (Array.isArray(q.correctAnswer)) {
    return q.correctAnswer.join(' hoặc ')
  }
  return String(q.correctAnswer || 'Xem lời giải')
}

function openRetryModal(q) {
  activeRetryQuestion.value = q
}

function practiceSimilarQuestion(q) {
  examStore.startCustomExam({
    type: 'topic',
    topic: q.topic,
    count: 5,
    title: `Luyện Câu Tương Tự: ${q.topic || 'Toán Lớp 2'}`
  })
}

function retakeExam() {
  if (result.value?.roundId && result.value.roundId !== 'custom') {
    examStore.startRoundExam(result.value.roundId)
  } else {
    examStore.startCustomExam({
      type: 'mixed',
      count: 15,
      title: 'Luyện Lại Đề Thi'
    })
  }
}
</script>
