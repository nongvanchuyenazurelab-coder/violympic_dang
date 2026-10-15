<template>
  <div class="space-y-6 pb-16">
    <!-- Header -->
    <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
      <div>
        <div class="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100 text-amber-900 rounded-full text-xs font-black mb-2">
          <span>📚</span> Đề Thi Trích Từ Đề Chuẩn PDF Violympic
        </div>
        <h1 class="text-3xl sm:text-4xl font-black text-slate-800">
          Trọn Bộ 18 Vòng Thi Violympic Toán 2
        </h1>
        <p class="text-slate-500 font-bold text-sm mt-1">
          Luyện tập đầy đủ 3 bài thi mỗi vòng: Bảng số tăng dần, Đặt tính ô vuông, Điền kết quả và Cóc vàng tài ba
        </p>
      </div>

      <!-- Filter Tabs -->
      <div class="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
        <button
          v-for="tab in filterTabs"
          :key="tab.id"
          @click="activeFilter = tab.id"
          :class="[
            'px-3.5 py-2 rounded-2xl font-black text-xs whitespace-nowrap transition-all cursor-pointer shadow-xs',
            activeFilter === tab.id
              ? 'bg-amber-500 text-white shadow-amber-300 shadow-md scale-105'
              : 'bg-white text-slate-700 hover:bg-amber-50 border border-slate-200'
          ]"
        >
          {{ tab.name }}
        </button>
      </div>
    </div>

    <!-- Rounds Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      <div
        v-for="round in filteredRounds"
        :key="round.id"
        class="bg-white rounded-3xl p-6 border-3 border-amber-200 hover:border-amber-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
      >
        <div>
          <!-- Top Tag & Status -->
          <div class="flex items-center justify-between mb-3">
            <span class="px-3 py-1 rounded-full text-xs font-black bg-amber-100 text-amber-800 border border-amber-300">
              {{ round.name.split(':')[0] }}
            </span>

            <!-- Completed Badge / Star rating -->
            <span v-if="getRoundStats(round.id)" class="px-2.5 py-1 rounded-full text-xs font-black bg-emerald-100 text-emerald-800 border border-emerald-300 flex items-center gap-1">
              <span>⭐</span> {{ getRoundStats(round.id).score }} điểm
            </span>
            <span v-else class="text-xs font-bold text-slate-400">
              Chưa làm
            </span>
          </div>

          <!-- Title & Description -->
          <h3 class="text-xl font-black text-slate-800 group-hover:text-amber-600 transition-colors mb-2">
            {{ round.name }}
          </h3>
          <p class="text-slate-500 font-medium text-xs sm:text-sm leading-relaxed mb-4">
            {{ round.description }}
          </p>

          <!-- Structure Breakdown -->
          <div class="space-y-1.5 p-3 rounded-2xl bg-amber-50/60 border border-amber-200/60 text-xs font-bold text-slate-700">
            <div class="flex items-center gap-1.5">
              <span class="text-amber-600">Bài 1:</span> Bảng số & Phép tính tăng dần
            </div>
            <div class="flex items-center gap-1.5">
              <span class="text-sky-600">Bài 2:</span> Điền kết quả / Cặp bằng nhau
            </div>
            <div class="flex items-center gap-1.5">
              <span class="text-emerald-600">Bài 3:</span> Đặt tính hàng dọc & Toán lời văn
            </div>
          </div>
        </div>

        <!-- Action Button -->
        <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
          <span class="text-xs font-bold text-slate-400">Thời gian: 20 phút</span>
          <button
            @click="startRound(round.id)"
            class="px-5 py-2.5 rounded-2xl bg-amber-500 hover:bg-amber-600 active:scale-95 text-white font-black text-sm shadow-md shadow-amber-300/50 transition-all cursor-pointer flex items-center gap-2"
          >
            <span>🚀</span> Vào Thi Ngay
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { examStore } from '../store/examStore'
import { ROUNDS_METADATA } from '../data/questionsData'

const activeFilter = ref('all')

const filterTabs = [
  { id: 'all', name: 'Tất Cả 18 Vòng' },
  { id: 'school', name: 'Vòng Cấp Trường (1 - 6)' },
  { id: 'district', name: 'Vòng Cấp Huyện (7 - 12)' },
  { id: 'province', name: 'Vòng Cấp Tỉnh (13 - 18)' }
]

const filteredRounds = computed(() => {
  if (activeFilter.value === 'school') {
    return ROUNDS_METADATA.filter(r => ['vong-1', 'vong-2', 'vong-3', 'vong-4', 'vong-5', 'vong-6'].includes(r.id))
  } else if (activeFilter.value === 'district') {
    return ROUNDS_METADATA.filter(r => ['vong-7', 'vong-8', 'vong-10'].includes(r.id))
  } else if (activeFilter.value === 'province') {
    return ROUNDS_METADATA.filter(r => ['vong-14', 'vong-17', 'vong-18'].includes(r.id))
  }
  return ROUNDS_METADATA
})

function getRoundStats(roundId) {
  return examStore.history.find(h => h.roundId === roundId)
}

function startRound(roundId) {
  examStore.startRoundExam(roundId)
}
</script>
