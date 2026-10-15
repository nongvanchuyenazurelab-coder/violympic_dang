<template>
  <div class="space-y-8 pb-20">
    <!-- Header -->
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div>
        <div class="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 text-amber-900 rounded-full text-xs font-black mb-2">
          <span>👨‍👩‍👧</span> Báo Cáo Tiến Độ & Thống Kê
        </div>
        <h1 class="text-3xl sm:text-4xl font-black text-slate-800">
          Góc Dành Cho Phụ Huynh
        </h1>
        <p class="text-slate-500 font-bold text-sm mt-1">
          Theo dõi sát sao hành trình rèn luyện Toán lớp 2 và phát hiện sớm các phần kiến thức bé cần củng cố
        </p>
      </div>

      <div class="flex items-center gap-2">
        <button
          @click="printReport"
          class="px-4 py-2.5 rounded-2xl bg-white hover:bg-slate-50 border-2 border-slate-300 font-black text-xs sm:text-sm text-slate-700 transition-all cursor-pointer shadow-xs active:scale-95 flex items-center gap-1.5"
        >
          <span>🖨️</span> In / Lưu Báo Cáo
        </button>
        <button
          v-if="examStore.history.length > 0"
          @click="confirmClearHistory"
          class="px-4 py-2.5 rounded-2xl bg-rose-50 hover:bg-rose-100 border-2 border-rose-200 font-bold text-xs sm:text-sm text-rose-700 transition-all cursor-pointer active:scale-95"
        >
          Xóa Lịch Sử
        </button>
      </div>
    </div>

    <!-- Overview Stats Grid -->
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
      <div class="p-5 rounded-3xl bg-white border-3 border-amber-200 shadow-sm flex items-center gap-4">
        <span class="text-4xl p-3 rounded-2xl bg-amber-100 border border-amber-300">📚</span>
        <div>
          <div class="text-2xl sm:text-3xl font-black text-slate-800">{{ examStore.history.length }}</div>
          <div class="text-xs font-bold text-slate-400">Đề thi đã hoàn thành</div>
        </div>
      </div>

      <div class="p-5 rounded-3xl bg-white border-3 border-emerald-200 shadow-sm flex items-center gap-4">
        <span class="text-4xl p-3 rounded-2xl bg-emerald-100 border border-emerald-300">🎯</span>
        <div>
          <div class="text-2xl sm:text-3xl font-black text-emerald-700">{{ avgAccuracy }}%</div>
          <div class="text-xs font-bold text-slate-400">Độ chính xác trung bình</div>
        </div>
      </div>

      <div class="p-5 rounded-3xl bg-white border-3 border-purple-200 shadow-sm flex items-center gap-4">
        <span class="text-4xl p-3 rounded-2xl bg-purple-100 border border-purple-300">⭐</span>
        <div>
          <div class="text-2xl sm:text-3xl font-black text-purple-700">{{ totalStars }}</div>
          <div class="text-xs font-bold text-slate-400">Tổng số sao tích lũy</div>
        </div>
      </div>

      <div class="p-5 rounded-3xl bg-white border-3 border-rose-200 shadow-sm flex items-center gap-4">
        <span class="text-4xl p-3 rounded-2xl bg-rose-100 border border-rose-300">💡</span>
        <div>
          <div class="text-2xl sm:text-3xl font-black text-rose-600">{{ wrongBankCount }}</div>
          <div class="text-xs font-bold text-slate-400">Câu sai cần ôn lại</div>
        </div>
      </div>
    </div>

    <!-- Topic Mastery & Weakness Detection -->
    <div class="bg-white rounded-3xl p-6 sm:p-8 border-3 border-amber-200 shadow-md space-y-6">
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-100">
        <div>
          <h2 class="text-xl font-black text-slate-800 flex items-center gap-2">
            <span>📊</span> Đánh Giá Mức Độ Thuần Thục Theo Chủ Đề
          </h2>
          <p class="text-xs font-bold text-slate-500">Hệ thống phân tích từ các bài thi thực tế của bé</p>
        </div>
        <span class="text-xs font-bold px-3 py-1 bg-amber-100 text-amber-900 rounded-full">
          Chuẩn GDPT Lớp 2
        </span>
      </div>

      <!-- Topic Mastery Rows -->
      <div class="space-y-4">
        <div
          v-for="topic in topicStats"
          :key="topic.id"
          class="p-4 rounded-2xl border-2 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4"
          :class="topic.level === 'weak' ? 'bg-rose-50/50 border-rose-200' : 'bg-slate-50/50 border-slate-200'"
        >
          <!-- Topic Info -->
          <div class="flex items-center gap-3 min-w-[260px]">
            <span class="text-2xl">{{ topic.icon }}</span>
            <div>
              <div class="font-black text-sm text-slate-800">{{ topic.name }}</div>
              <div class="text-xs text-slate-400 font-bold">Đã làm {{ topic.total }} câu • Đúng {{ topic.correct }} câu</div>
            </div>
          </div>

          <!-- Progress Bar & Percentage -->
          <div class="flex-1 max-w-md">
            <div class="flex items-center justify-between text-xs font-bold mb-1">
              <span :class="topic.level === 'weak' ? 'text-rose-700' : 'text-slate-600'">Độ chính xác:</span>
              <span class="font-black" :class="topic.level === 'weak' ? 'text-rose-700' : 'text-emerald-700'">
                {{ topic.percentage }}%
              </span>
            </div>
            <div class="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
              <div
                class="h-full rounded-full transition-all duration-500"
                :class="topic.percentage >= 80 ? 'bg-emerald-500' : topic.percentage >= 60 ? 'bg-amber-500' : 'bg-rose-500'"
                :style="{ width: `${topic.percentage}%` }"
              ></div>
            </div>
          </div>

          <!-- Status Badge & Action -->
          <div class="flex items-center gap-2 justify-end">
            <span
              :class="[
                'px-2.5 py-1 rounded-full text-xs font-black',
                topic.percentage >= 80 ? 'bg-emerald-100 text-emerald-800' : topic.percentage >= 60 ? 'bg-amber-100 text-amber-800' : 'bg-rose-100 text-rose-800'
              ]"
            >
              {{ topic.percentage >= 80 ? 'Thành thạo 🌟' : topic.percentage >= 60 ? 'Khá tốt 👍' : 'Cần ôn thêm ⚠️' }}
            </span>

            <button
              @click="createTopicExam(topic.id, topic.name)"
              class="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-black text-xs transition-all cursor-pointer shadow-xs active:scale-95 whitespace-nowrap"
            >
              Tạo đề ôn chủ đề này 🚀
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Exam History Table -->
    <div class="bg-white rounded-3xl p-6 sm:p-8 border-3 border-amber-200 shadow-md space-y-4">
      <div class="flex items-center justify-between pb-3 border-b border-slate-100">
        <h2 class="text-xl font-black text-slate-800 flex items-center gap-2">
          <span>📜</span> Lịch Sử Các Đề Đã Hoàn Thành
        </h2>
        <span class="text-xs font-bold text-slate-400">Gần đây nhất</span>
      </div>

      <div v-if="examStore.history.length === 0" class="text-center py-12 text-slate-400">
        <span class="text-5xl block mb-2">🎈</span>
        <p class="font-bold">Bé chưa hoàn thành bài thi nào.</p>
        <p class="text-xs mt-1">Hãy bắt đầu với Vòng 1 để tích lũy thành tích nhé!</p>
      </div>

      <div v-else class="overflow-x-auto">
        <table class="w-full text-left text-sm">
          <thead>
            <tr class="border-b-2 border-slate-100 text-xs font-black text-slate-400 uppercase tracking-wider">
              <th class="py-3 px-4">Thời Gian</th>
              <th class="py-3 px-4">Đề Thi</th>
              <th class="py-3 px-4 text-center">Điểm Số</th>
              <th class="py-3 px-4 text-center">Đúng / Sai</th>
              <th class="py-3 px-4 text-center">Tỷ Lệ</th>
              <th class="py-3 px-4 text-right">Thời Gian Làm</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 font-bold">
            <tr v-for="(hist, idx) in examStore.history" :key="idx" class="hover:bg-amber-50/40 transition-colors">
              <td class="py-3 px-4 text-xs text-slate-500 whitespace-nowrap">
                {{ formatDate(hist.date) }}
              </td>
              <td class="py-3 px-4 text-slate-800 font-black">
                {{ hist.title }}
              </td>
              <td class="py-3 px-4 text-center">
                <span class="px-2.5 py-1 rounded-full text-xs font-black bg-amber-100 text-amber-800">
                  {{ hist.score }} / {{ hist.maxScore }}
                </span>
              </td>
              <td class="py-3 px-4 text-center text-xs whitespace-nowrap">
                <span class="text-emerald-700">{{ hist.correctCount }} đúng</span> • 
                <span class="text-rose-600">{{ hist.wrongCount }} sai</span>
              </td>
              <td class="py-3 px-4 text-center">
                <span class="font-black" :class="hist.accuracy >= 80 ? 'text-emerald-700' : hist.accuracy >= 50 ? 'text-amber-700' : 'text-rose-600'">
                  {{ hist.accuracy }}%
                </span>
              </td>
              <td class="py-3 px-4 text-right text-xs text-slate-500 whitespace-nowrap">
                {{ Math.floor(hist.timeElapsed / 60) }}p {{ hist.timeElapsed % 60 }}s
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { examStore } from '../store/examStore'
import { TOPICS } from '../data/questionsData'

const wrongBankCount = computed(() => Object.keys(examStore.wrongQuestionsBank || {}).length)

const avgAccuracy = computed(() => {
  if (examStore.history.length === 0) return 0
  const sum = examStore.history.reduce((acc, h) => acc + (h.accuracy || 0), 0)
  return Math.round(sum / examStore.history.length)
})

const totalStars = computed(() => {
  return examStore.history.reduce((acc, h) => {
    if (h.accuracy >= 90) return acc + 3
    if (h.accuracy >= 60) return acc + 2
    return acc + 1
  }, 0)
})

// Topic Mastery Breakdown
const topicStats = computed(() => {
  const map = {}
  TOPICS.forEach(t => {
    map[t.id] = { id: t.id, name: t.name, icon: t.icon, total: 0, correct: 0 }
  })

  examStore.history.forEach(hist => {
    hist.gradedQuestions?.forEach(q => {
      if (map[q.topic]) {
        map[q.topic].total++
        if (q.evaluation?.isCorrect) {
          map[q.topic].correct++
        }
      }
    })
  })

  return Object.values(map).map(item => {
    const percentage = item.total > 0 ? Math.round((item.correct / item.total) * 100) : 100
    let level = 'good'
    if (item.total > 0 && percentage < 60) level = 'weak'
    else if (item.total > 0 && percentage < 80) level = 'moderate'

    return {
      ...item,
      percentage,
      level
    }
  })
})

function formatDate(isoStr) {
  if (!isoStr) return ''
  const d = new Date(isoStr)
  return `${d.getHours()}:${String(d.getMinutes()).padStart(2, '0')} - ${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`
}

function createTopicExam(topicId, topicName) {
  examStore.startCustomExam({
    type: 'topic',
    topic: topicId,
    count: 10,
    title: `Đề Ôn Tập: ${topicName}`,
    timeLimit: 1200
  })
}

function confirmClearHistory() {
  if (confirm('Phụ huynh có chắc chắn muốn xóa toàn bộ lịch sử làm bài không?')) {
    examStore.clearHistory()
  }
}

function printReport() {
  window.print()
}
</script>
