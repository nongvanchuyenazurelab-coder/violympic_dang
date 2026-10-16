<template>
  <div class="space-y-6 pb-16">
    <!-- Header Banner -->
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div>
        <div class="inline-flex items-center gap-1.5 px-3 py-1 bg-purple-100 text-purple-900 rounded-full text-xs font-black mb-2 border border-purple-300">
          <span>📝</span> Bộ 10 Đề Luyện Thi Chuẩn Quốc Gia
        </div>
        <h1 class="text-3xl sm:text-4xl font-black text-slate-800">
          10 Đề Luyện Tập & In Đề Violympic Toán 2
        </h1>
        <p class="text-slate-500 font-bold text-sm mt-1 max-w-2xl">
          Đầy đủ 3 bài thi chuẩn: Bảng số tăng dần, Đặt tính ô vuông, Điền kết quả, Hình học có hình vẽ SVG và Toán có lời văn. Có thể làm trực tiếp trên máy hoặc in đề ra giấy cho bé luyện viết.
        </p>
      </div>

      <!-- Filter Tabs -->
      <div class="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
        <button
          v-for="filter in filters"
          :key="filter.id"
          @click="activeFilter = filter.id"
          :class="[
            'px-3.5 py-2 rounded-2xl font-black text-xs whitespace-nowrap transition-all cursor-pointer shadow-xs',
            activeFilter === filter.id
              ? 'bg-purple-600 text-white shadow-purple-300 shadow-md scale-105'
              : 'bg-white text-slate-700 hover:bg-purple-50 border border-slate-200'
          ]"
        >
          {{ filter.name }}
        </button>
      </div>
    </div>

    <!-- Quick Stats Summary Banner -->
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-gradient-to-r from-purple-500 via-indigo-500 to-amber-500 rounded-3xl p-5 text-white shadow-lg">
      <div class="flex items-center gap-3">
        <div class="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-2xl">📚</div>
        <div>
          <div class="text-xl sm:text-2xl font-black">10 Đề</div>
          <div class="text-xs font-bold text-white/80">Bộ đề chuẩn hóa</div>
        </div>
      </div>
      <div class="flex items-center gap-3">
        <div class="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-2xl">📐</div>
        <div>
          <div class="text-xl sm:text-2xl font-black">150 Câu</div>
          <div class="text-xs font-bold text-white/80">Có hình vẽ SVG</div>
        </div>
      </div>
      <div class="flex items-center gap-3">
        <div class="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-2xl">🖨️</div>
        <div>
          <div class="text-xl sm:text-2xl font-black">In Đề A4</div>
          <div class="text-xs font-bold text-white/80">Tự động ngắt trang</div>
        </div>
      </div>
      <div class="flex items-center gap-3">
        <div class="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-2xl">💡</div>
        <div>
          <div class="text-xl sm:text-2xl font-black">100%</div>
          <div class="text-xs font-bold text-white/80">Lời giải chi tiết</div>
        </div>
      </div>
    </div>

    <!-- 10 Practice Exams Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div
        v-for="exam in filteredExams"
        :key="exam.id"
        class="bg-white rounded-3xl p-6 border-3 border-purple-200 hover:border-purple-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
      >
        <div>
          <!-- Top Badges -->
          <div class="flex items-center justify-between mb-3">
            <div class="flex items-center gap-2">
              <span class="px-3 py-1 rounded-full text-xs font-black bg-purple-100 text-purple-900 border border-purple-300">
                ĐỀ SỐ {{ exam.number < 10 ? '0' + exam.number : exam.number }}
              </span>
              <span :class="['px-2.5 py-0.5 rounded-full text-xs font-bold border', exam.levelColor]">
                {{ exam.level }}
              </span>
            </div>

            <!-- Score Badge if taken -->
            <span v-if="getExamStats(exam.id)" class="px-2.5 py-1 rounded-full text-xs font-black bg-emerald-100 text-emerald-800 border border-emerald-300 flex items-center gap-1">
              <span>⭐</span> {{ getExamStats(exam.id).score }}/{{ getExamStats(exam.id).maxScore }} đ
            </span>
            <span v-else class="text-xs font-bold text-slate-400">
              Chưa làm online
            </span>
          </div>

          <!-- Title & Subtitle -->
          <h3 class="text-xl font-black text-slate-800 group-hover:text-purple-600 transition-colors mb-2">
            {{ exam.title }}
          </h3>
          <p class="text-slate-500 font-medium text-xs sm:text-sm leading-relaxed mb-4">
            {{ exam.subtitle }}
          </p>

          <!-- Exam Structure Features -->
          <div class="space-y-1.5 p-3 rounded-2xl bg-purple-50/60 border border-purple-200/60 text-xs font-bold text-slate-700">
            <div class="flex items-center justify-between">
              <span>⏱️ Thời gian làm bài:</span>
              <span class="text-purple-700 font-black">20 phút</span>
            </div>
            <div class="flex items-center justify-between">
              <span>🔢 Số lượng câu hỏi:</span>
              <span class="text-purple-700 font-black">15 câu (Đủ 3 bài)</span>
            </div>
            <div class="flex items-center justify-between">
              <span>📐 Hình vẽ & Đặt tính:</span>
              <span class="text-emerald-700 font-black">Đồ họa SVG sắc nét</span>
            </div>
          </div>
        </div>

        <!-- Action Buttons: Làm Online & In Đề -->
        <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
          <!-- Print Button -->
          <button
            @click="openPrintModal(exam)"
            class="flex-1 py-2.5 px-3 rounded-2xl bg-slate-100 hover:bg-purple-100 text-slate-700 hover:text-purple-800 font-black text-xs sm:text-sm border-2 border-slate-200 hover:border-purple-300 transition-all cursor-pointer flex items-center justify-center gap-1.5 active:scale-95"
            title="Xem và in đề thi ra giấy A4"
          >
            <span>🖨️</span> In Đề Ra Giấy
          </button>

          <!-- Online Test Button -->
          <button
            @click="startOnlineExam(exam.id)"
            class="flex-1 py-2.5 px-3 rounded-2xl bg-purple-600 hover:bg-purple-700 active:scale-95 text-white font-black text-xs sm:text-sm shadow-md shadow-purple-300/50 transition-all cursor-pointer flex items-center justify-center gap-1.5"
            title="Làm bài trực tiếp trên máy tính"
          >
            <span>🚀</span> Làm Online
          </button>
        </div>
      </div>
    </div>

    <!-- Print Modal Component -->
    <PrintExamModal
      :exam="selectedPrintExam"
      :isOpen="showPrintModal"
      @close="showPrintModal = false"
    />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { examStore } from '../store/examStore'
import { PRACTICE_EXAMS } from '../data/practiceExamsData'
import PrintExamModal from '../components/PrintExamModal.vue'

const activeFilter = ref('all')
const showPrintModal = ref(false)
const selectedPrintExam = ref(null)

const filters = [
  { id: 'all', name: 'Tất cả (10 đề)' },
  { id: 'easy', name: 'Dễ' },
  { id: 'medium', name: 'Trung bình' },
  { id: 'hard', name: 'Khá' },
  { id: 'advanced', name: 'Nâng cao & Xuất sắc' }
]

const filteredExams = computed(() => {
  if (activeFilter.value === 'all') return PRACTICE_EXAMS
  if (activeFilter.value === 'easy') {
    return PRACTICE_EXAMS.filter(e => e.level.includes('Dễ'))
  }
  if (activeFilter.value === 'medium') {
    return PRACTICE_EXAMS.filter(e => e.level.includes('Trung bình'))
  }
  if (activeFilter.value === 'hard') {
    return PRACTICE_EXAMS.filter(e => e.level.includes('Khá'))
  }
  if (activeFilter.value === 'advanced') {
    return PRACTICE_EXAMS.filter(e => e.level.includes('Nâng cao') || e.level.includes('Xuất sắc'))
  }
  return PRACTICE_EXAMS
})

function getExamStats(examId) {
  return examStore.history.find(h => h.roundId === examId)
}

function startOnlineExam(examId) {
  examStore.startPracticeExam(examId)
}

function openPrintModal(exam) {
  selectedPrintExam.value = exam
  showPrintModal.value = true
}
</script>
