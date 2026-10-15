<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-xs p-4 animate-fadeIn">
    <div class="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full border-4 border-amber-300 shadow-2xl space-y-5 animate-scaleUp">
      
      <!-- Top Icon & Header -->
      <div class="text-center">
        <div class="w-20 h-20 mx-auto rounded-3xl bg-amber-100 border-2 border-amber-300 flex items-center justify-center text-4xl mb-3 shadow-inner">
          🐢
        </div>
        <h3 class="text-2xl font-black text-slate-800">Bé Ơi, Nộp Bài Nhé?</h3>
        <p class="text-sm font-bold text-slate-500 mt-1">Cùng xem lại bài làm trước khi gửi nào!</p>
      </div>

      <!-- Stats Box -->
      <div class="bg-amber-50 rounded-2xl p-4 border-2 border-amber-200 space-y-2">
        <div class="flex items-center justify-between text-sm font-bold">
          <span class="text-slate-600">Tổng số câu hỏi:</span>
          <span class="text-slate-900 font-black text-base">{{ totalCount }} câu</span>
        </div>
        <div class="flex items-center justify-between text-sm font-bold">
          <span class="text-emerald-700">Đã điền câu trả lời:</span>
          <span class="text-emerald-700 font-black text-base">{{ answeredCount }} câu</span>
        </div>
        <div v-if="unansweredCount > 0" class="flex items-center justify-between text-sm font-bold pt-1 border-t border-amber-200">
          <span class="text-rose-600">Số câu chưa làm:</span>
          <span class="text-rose-600 font-black text-base">{{ unansweredCount }} câu</span>
        </div>
      </div>

      <!-- Warning Note if unanswered questions exist -->
      <div v-if="unansweredCount > 0" class="p-3 bg-rose-50 border border-rose-200 rounded-2xl flex items-center gap-2 text-xs font-bold text-rose-700">
        <span>⚠️</span>
        <span>Bé vẫn còn <b>{{ unansweredCount }} câu</b> chưa làm. Bé có muốn quay lại kiểm tra không?</span>
      </div>
      <div v-else class="p-3 bg-emerald-50 border border-emerald-200 rounded-2xl flex items-center gap-2 text-xs font-bold text-emerald-700">
        <span>🌟</span>
        <span>Tuyệt vời! Bé đã điền đầy đủ tất cả các câu hỏi rồi đó!</span>
      </div>

      <!-- Action Buttons -->
      <div class="flex gap-3 pt-2">
        <button
          @click="$emit('cancel')"
          class="flex-1 py-3.5 rounded-2xl border-2 border-slate-300 font-black text-slate-700 hover:bg-slate-100 transition-all cursor-pointer text-sm sm:text-base active:scale-95"
        >
          Làm tiếp
        </button>
        <button
          @click="$emit('confirm')"
          class="flex-1 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-black shadow-lg shadow-orange-300 transition-all cursor-pointer text-sm sm:text-base active:scale-95 flex items-center justify-center gap-2"
        >
          <span>🏆</span> Nộp Bài
        </button>
      </div>

    </div>
  </div>
</template>

<script setup>
defineProps({
  totalCount: {
    type: Number,
    required: true
  },
  answeredCount: {
    type: Number,
    required: true
  },
  unansweredCount: {
    type: Number,
    required: true
  }
})

defineEmits(['cancel', 'confirm'])
</script>
