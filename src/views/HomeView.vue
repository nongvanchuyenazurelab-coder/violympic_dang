<template>
  <div class="space-y-8 pb-16">
    <!-- Hero Banner -->
    <div class="relative overflow-hidden rounded-3xl bg-gradient-to-r from-amber-400 via-orange-400 to-rose-400 p-6 sm:p-10 text-white shadow-xl">
      <!-- Decorative background circles -->
      <div class="absolute -top-12 -right-12 w-64 h-64 rounded-full bg-white/10 blur-xl pointer-events-none"></div>
      <div class="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-white/10 blur-lg pointer-events-none"></div>

      <div class="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="space-y-3 text-center md:text-left max-w-xl">
          <div class="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-xs font-black tracking-wide uppercase">
            <span>✨</span> Luyện Thi Violympic Toán Lớp 2
          </div>
          <h1 class="text-3xl sm:text-5xl font-black tracking-tight leading-tight drop-shadow-xs">
            Chào mừng {{ examStore.studentName }} đến với Đấu Trường Toán Học! 🌟
          </h1>
          <p class="text-white/90 text-base sm:text-lg font-medium leading-relaxed">
            Cùng làm quen với cấu trúc đề thi Violympic chuẩn: Bảng số tăng dần, Đặt tính hàng dọc, Tìm X và các bài toán lời văn thực tế sinh động!
          </p>
          
          <div class="pt-2 flex flex-wrap items-center justify-center md:justify-start gap-3">
            <button
              @click="examStore.startRoundExam('vong-1')"
              class="px-6 py-3.5 rounded-2xl bg-white text-orange-600 hover:bg-amber-50 font-black text-base shadow-lg shadow-orange-700/20 hover:scale-105 transition-all duration-200 cursor-pointer flex items-center gap-2 active:scale-95"
            >
              <span>🚀</span> Vào Thi Vòng 1 Ngay!
            </button>
            <button
              @click="examStore.navigate('rounds')"
              class="px-6 py-3.5 rounded-2xl bg-orange-600/30 hover:bg-orange-600/50 backdrop-blur-md border-2 border-white/40 text-white font-black text-base transition-all duration-200 cursor-pointer flex items-center gap-2 active:scale-95"
            >
              <span>📚</span> Danh Sách 18 Vòng Thi
            </button>
          </div>
        </div>

        <!-- Hero Mascot Illustration -->
        <div class="relative flex-shrink-0">
          <div class="w-36 h-36 sm:w-48 sm:h-48 rounded-3xl bg-white/20 backdrop-blur-md border-4 border-white/40 flex items-center justify-center text-7xl sm:text-8xl shadow-2xl animate-bounce-gentle">
            🐝
          </div>
          <div class="absolute -bottom-3 -right-3 px-3 py-1 bg-amber-300 text-amber-950 font-black text-xs rounded-full shadow-md border-2 border-white">
            Ong Vàng Chăm Chỉ
          </div>
        </div>
      </div>
    </div>

    <!-- Active Exam Alert (if user has an in-progress exam) -->
    <div 
      v-if="hasActiveExam"
      class="p-4 sm:p-5 rounded-3xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-4"
    >
      <div class="flex items-center gap-3">
        <span class="text-3xl">⏰</span>
        <div>
          <div class="font-black text-lg">Bé đang làm dở một bài thi!</div>
          <div class="text-xs text-white/90">Bài làm đã được tự động lưu lại. Bé có muốn làm tiếp không?</div>
        </div>
      </div>
      <div class="flex items-center gap-2">
        <button
          @click="examStore.clearActiveExam(); hasActiveExam = false"
          class="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-xl font-bold text-xs cursor-pointer"
        >
          Bỏ qua
        </button>
        <button
          @click="examStore.navigate('exam')"
          class="px-5 py-2.5 bg-white text-emerald-700 hover:bg-emerald-50 rounded-2xl font-black text-sm shadow-md cursor-pointer flex items-center gap-1.5 active:scale-95"
        >
          <span>Tiếp tục làm</span> →
        </button>
      </div>
    </div>

    <!-- Featured 10 Practice Exams Banner -->
    <div 
      @click="examStore.navigate('practice10')"
      class="p-5 sm:p-6 rounded-3xl bg-gradient-to-r from-purple-600 via-indigo-600 to-amber-500 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-5 cursor-pointer hover:shadow-2xl transition-all group border-3 border-purple-300/40"
    >
      <div class="flex items-center gap-4">
        <div class="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-xs flex items-center justify-center text-4xl group-hover:scale-110 transition-transform shadow-inner shrink-0">
          📝
        </div>
        <div>
          <div class="inline-flex items-center gap-1.5 px-3 py-0.5 bg-yellow-300 text-yellow-950 rounded-full text-xs font-black mb-1 shadow-xs">
            <span>✨ MỚI RA MẮT</span> • Chuẩn Cấu Trúc Toàn Diện
          </div>
          <h2 class="text-xl sm:text-2xl font-black tracking-tight">
            Trọn Bộ 10 Đề Luyện Tập Chuẩn & In Đề Ra Giấy A4
          </h2>
          <p class="text-xs sm:text-sm text-purple-100 font-bold mt-1">
            150 câu hỏi phong phú, có hình vẽ minh họa SVG, hỗ trợ làm bài trực tuyến hoặc in đề ra giấy cho bé luyện chữ
          </p>
        </div>
      </div>
      <div class="flex items-center gap-2.5 w-full md:w-auto justify-end">
        <button
          class="px-5 py-3 rounded-2xl bg-white text-purple-900 font-black text-sm shadow-md group-hover:bg-yellow-300 group-hover:text-yellow-950 transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap active:scale-95"
        >
          <span>Khám phá 10 Đề & In Ngay</span>
          <span>→</span>
        </button>
      </div>
    </div>

    <!-- Quick Mode Selector Grid -->
    <div>
      <div class="flex items-center justify-between mb-4">
        <h2 class="text-2xl font-black text-slate-800 flex items-center gap-2">
          <span>🎮</span> Các Chế Độ Luyện Tập
        </h2>
        <span class="text-xs font-bold text-slate-500">Chọn chế độ bé yêu thích</span>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <!-- Mode 1: 18 Vòng Chuẩn -->
        <div 
          @click="examStore.navigate('rounds')"
          class="p-5 rounded-3xl bg-white border-3 border-amber-200 hover:border-amber-400 hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col justify-between"
        >
          <div>
            <div class="w-14 h-14 rounded-2xl bg-amber-100 border-2 border-amber-300 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
              🏆
            </div>
            <h3 class="text-lg font-black text-slate-800 mb-1 group-hover:text-amber-600 transition-colors">
              18 Vòng Chuẩn PDF
            </h3>
            <p class="text-xs font-bold text-slate-500 leading-relaxed">
              Trọn bộ 18 vòng thi Violympic chính thức: Vòng 1, Vòng 2, Vòng 3... bám sát cấu trúc đề.
            </p>
          </div>
          <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-black text-amber-600">
            <span>Chọn vòng thi</span>
            <span>→</span>
          </div>
        </div>

        <!-- Mode 2: Luyện Theo Chủ Đề -->
        <div 
          @click="examStore.navigate('topics')"
          class="p-5 rounded-3xl bg-white border-3 border-sky-200 hover:border-sky-400 hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col justify-between"
        >
          <div>
            <div class="w-14 h-14 rounded-2xl bg-sky-100 border-2 border-sky-300 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
              🎯
            </div>
            <h3 class="text-lg font-black text-slate-800 mb-1 group-hover:text-sky-600 transition-colors">
              Luyện Theo Chủ Đề
            </h3>
            <p class="text-xs font-bold text-slate-500 leading-relaxed">
              Tập trung ôn luyện: Phép cộng trừ có nhớ, Tìm thành phần, Toán lời văn thực tế, Đại lượng.
            </p>
          </div>
          <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-black text-sky-600">
            <span>Khám phá chủ đề</span>
            <span>→</span>
          </div>
        </div>

        <!-- Mode 3: Đề Ngẫu Nhiên Vô Tận -->
        <div 
          @click="startQuickMixedExam"
          class="p-5 rounded-3xl bg-white border-3 border-emerald-200 hover:border-emerald-400 hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col justify-between"
        >
          <div>
            <div class="w-14 h-14 rounded-2xl bg-emerald-100 border-2 border-emerald-300 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
              🎲
            </div>
            <h3 class="text-lg font-black text-slate-800 mb-1 group-hover:text-emerald-600 transition-colors">
              Đề Tự Động Sinh Mới
            </h3>
            <p class="text-xs font-bold text-slate-500 leading-relaxed">
              Hệ thống tự động sinh 15 câu ngẫu nhiên đảm bảo chuẩn toán học, làm bao nhiêu đề cũng không trùng!
            </p>
          </div>
          <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-black text-emerald-600">
            <span>Tạo đề mới ngay</span>
            <span>→</span>
          </div>
        </div>

        <!-- Mode 4: Ôn Tập Câu Sai -->
        <div 
          @click="handleReviewWrong"
          class="p-5 rounded-3xl bg-white border-3 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
          :class="wrongCount > 0 ? 'border-rose-300 hover:border-rose-400 hover:shadow-xl' : 'border-slate-200 opacity-80'"
        >
          <div>
            <div class="w-14 h-14 rounded-2xl bg-rose-100 border-2 border-rose-300 flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform relative">
              🔁
              <span v-if="wrongCount > 0" class="absolute -top-1.5 -right-1.5 px-2 py-0.5 bg-rose-600 text-white rounded-full font-black text-[11px] shadow-xs">
                {{ wrongCount }}
              </span>
            </div>
            <h3 class="text-lg font-black text-slate-800 mb-1 group-hover:text-rose-600 transition-colors">
              Ôn Lại Câu Sai
            </h3>
            <p class="text-xs font-bold text-slate-500 leading-relaxed">
              {{ wrongCount > 0 ? `Bé có ${wrongCount} câu từng trả lời sai, hãy ôn lại để nắm vững nhé!` : 'Hiện bé chưa có câu sai nào cần ôn tập. Quá giỏi!' }}
            </p>
          </div>
          <div class="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-black text-rose-600">
            <span>{{ wrongCount > 0 ? 'Luyện câu sai' : 'Chưa có câu sai' }}</span>
            <span>→</span>
          </div>
        </div>

      </div>
    </div>

    <!-- Student Stats Snapshot & Mascot Speech -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
      
      <!-- Mascot Encouragement Box -->
      <div class="md:col-span-2">
        <MascotGuide mascot="bee" badge="Lời khuyên của Ong Vàng">
          Chào <b>{{ examStore.studentName }}</b>! Khi làm bài bảng số tăng dần ở Bài 1, bé nhớ tính nhẩm cẩn thận từng phép tính rồi mới xếp thứ tự nhé. Hãy tự tin lên, bé chắc chắn sẽ giành được thật nhiều điểm 10! 🌟
        </MascotGuide>
      </div>

      <!-- Quick Summary Card -->
      <div class="p-5 rounded-3xl bg-white border-3 border-amber-200 shadow-md flex flex-col justify-between">
        <div class="flex items-center justify-between mb-3">
          <span class="text-sm font-black text-slate-700">Thành Tích Của Bé</span>
          <span class="text-xs font-bold text-amber-600">Lớp 2</span>
        </div>
        <div class="grid grid-cols-3 gap-2 text-center">
          <div class="p-2.5 rounded-2xl bg-amber-50 border border-amber-200">
            <div class="text-xl font-black text-amber-700">{{ examStore.history.length }}</div>
            <div class="text-[10px] font-bold text-slate-500">Đề đã làm</div>
          </div>
          <div class="p-2.5 rounded-2xl bg-emerald-50 border border-emerald-200">
            <div class="text-xl font-black text-emerald-700">{{ avgScore }}</div>
            <div class="text-[10px] font-bold text-slate-500">Điểm TB</div>
          </div>
          <div class="p-2.5 rounded-2xl bg-purple-50 border border-purple-200">
            <div class="text-xl font-black text-purple-700">{{ highestAccuracy }}%</div>
            <div class="text-[10px] font-bold text-slate-500">Cao nhất</div>
          </div>
        </div>
        <div class="mt-3 pt-2 border-t border-slate-100 text-center">
          <button
            @click="examStore.navigate('parent')"
            class="text-xs font-black text-amber-600 hover:text-amber-700 hover:underline cursor-pointer"
          >
            Xem chi tiết góc phụ huynh →
          </button>
        </div>
      </div>

    </div>

    <!-- Educational Values Feature List -->
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
      <div class="p-5 rounded-3xl bg-white/80 border-2 border-slate-200 flex items-start gap-3">
        <span class="text-2xl p-2 rounded-2xl bg-emerald-100">💯</span>
        <div>
          <h4 class="font-black text-slate-800 text-sm">Chấm Điểm Tự Động</h4>
          <p class="text-xs font-medium text-slate-500 mt-0.5">Xác thực bằng bộ giải toán học thông minh, chấm điểm từng ô linh hoạt.</p>
        </div>
      </div>
      <div class="p-5 rounded-3xl bg-white/80 border-2 border-slate-200 flex items-start gap-3">
        <span class="text-2xl p-2 rounded-2xl bg-sky-100">📖</span>
        <div>
          <h4 class="font-black text-slate-800 text-sm">Lời Giải Từng Bước</h4>
          <p class="text-xs font-medium text-slate-500 mt-0.5">Giải thích sư phạm nhẹ nhàng, câu từ gần gũi với học sinh 7-8 tuổi.</p>
        </div>
      </div>
      <div class="p-5 rounded-3xl bg-white/80 border-2 border-slate-200 flex items-start gap-3">
        <span class="text-2xl p-2 rounded-2xl bg-amber-100">💖</span>
        <div>
          <h4 class="font-black text-slate-800 text-sm">Luôn Khích Lệ Bé</h4>
          <p class="text-xs font-medium text-slate-500 mt-0.5">Không phê bình tiêu cực, luôn tặng sao và huy hiệu động viên bé tiến bộ.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'
import { examStore } from '../store/examStore'
import MascotGuide from '../components/MascotGuide.vue'

const hasActiveExam = ref(false)

onMounted(() => {
  const saved = localStorage.getItem('violympic_active_exam')
  if (saved) {
    try {
      const p = JSON.parse(saved)
      if (p && p.status === 'in_progress') {
        hasActiveExam.value = true
      }
    } catch {
      hasActiveExam.value = false
    }
  }
})

const wrongCount = computed(() => {
  return Object.keys(examStore.wrongQuestionsBank || {}).length
})

const avgScore = computed(() => {
  if (examStore.history.length === 0) return 0
  const sum = examStore.history.reduce((acc, h) => acc + (h.score || 0), 0)
  return Math.round(sum / examStore.history.length)
})

const highestAccuracy = computed(() => {
  if (examStore.history.length === 0) return 0
  return Math.max(...examStore.history.map(h => h.accuracy || 0))
})

function startQuickMixedExam() {
  examStore.startCustomExam({
    type: 'mixed',
    count: 15,
    title: 'Đề Thi Ngẫu Nhiên Chuẩn Violympic 2',
    timeLimit: 1200
  })
}

function handleReviewWrong() {
  if (wrongCount.value === 0) {
    alert('Bé hiện chưa có câu trả lời sai nào cần ôn lại. Chúc mừng bé!')
    return
  }
  examStore.startReviewWrongExam()
}
</script>
