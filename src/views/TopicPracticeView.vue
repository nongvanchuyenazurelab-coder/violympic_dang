<template>
  <div class="space-y-6 pb-16">
    <!-- Header -->
    <div>
      <div class="inline-flex items-center gap-1.5 px-3 py-1 bg-sky-100 text-sky-900 rounded-full text-xs font-black mb-2">
        <span>🎯</span> Tự Do Luyện Tập & Tăng Tốc
      </div>
      <h1 class="text-3xl sm:text-4xl font-black text-slate-800">
        Luyện Tập Theo Chủ Đề Toán Lớp 2
      </h1>
      <p class="text-slate-500 font-bold text-sm mt-1">
        Bé còn yếu phần nào, hãy chọn chủ đề đó để làm thêm nhiều bài tập cho thật thuần thục nhé!
      </p>
    </div>

    <!-- Topics Grid -->
    <div>
      <h3 class="text-lg font-black text-slate-800 mb-3 flex items-center gap-2">
        <span>1.</span> Chọn Chủ Đề Cần Ôn Luyện:
      </h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
        <div
          v-for="topic in TOPICS"
          :key="topic.id"
          @click="selectedTopic = selectedTopic === topic.id ? null : topic.id"
          :class="[
            'p-4 rounded-3xl border-3 transition-all duration-200 cursor-pointer shadow-xs flex items-center gap-3 select-none active:scale-98',
            selectedTopic === topic.id
              ? 'bg-amber-100 border-amber-500 ring-4 ring-amber-300 shadow-md scale-102'
              : 'bg-white border-slate-200 hover:border-amber-300 hover:bg-amber-50/50'
          ]"
        >
          <span class="text-3xl p-2 rounded-2xl bg-amber-50 border border-amber-200">{{ topic.icon }}</span>
          <div>
            <h4 class="font-black text-sm text-slate-800 leading-snug">{{ topic.name }}</h4>
            <span class="text-[11px] font-bold text-slate-400">Toán lớp 2 GDPT</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Test Configuration Settings -->
    <div class="bg-white rounded-3xl p-6 border-3 border-amber-200 shadow-md space-y-6">
      <h3 class="text-lg font-black text-slate-800 flex items-center gap-2">
        <span>2.</span> Cấu Hình Đề Thi:
      </h3>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
        
        <!-- Question Count -->
        <div>
          <label class="block text-xs font-black text-slate-600 uppercase tracking-wider mb-2">
            Số lượng câu hỏi
          </label>
          <div class="flex gap-2">
            <button
              v-for="count in [10, 15, 20]"
              :key="count"
              @click="questionCount = count"
              :class="[
                'flex-1 py-2.5 rounded-2xl font-black text-sm border-2 transition-all cursor-pointer',
                questionCount === count
                  ? 'bg-amber-500 border-amber-600 text-white shadow-xs'
                  : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
              ]"
            >
              {{ count }} câu
            </button>
          </div>
        </div>

        <!-- Difficulty Level -->
        <div>
          <label class="block text-xs font-black text-slate-600 uppercase tracking-wider mb-2">
            Mức độ thử thách
          </label>
          <div class="flex gap-2">
            <button
              v-for="lvl in [{ id: 'easy', name: 'Cơ bản' }, { id: 'medium', name: 'Vừa sức' }, { id: 'hard', name: 'Nâng cao' }]"
              :key="lvl.id"
              @click="difficulty = lvl.id"
              :class="[
                'flex-1 py-2.5 rounded-2xl font-black text-xs sm:text-sm border-2 transition-all cursor-pointer',
                difficulty === lvl.id
                  ? 'bg-amber-500 border-amber-600 text-white shadow-xs'
                  : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
              ]"
            >
              {{ lvl.name }}
            </button>
          </div>
        </div>

        <!-- Time Limit -->
        <div>
          <label class="block text-xs font-black text-slate-600 uppercase tracking-wider mb-2">
            Thời gian làm bài
          </label>
          <div class="flex gap-2">
            <button
              v-for="t in [{ sec: 0, label: 'Thong thả' }, { sec: 900, label: '15 phút' }, { sec: 1200, label: '20 phút' }]"
              :key="t.sec"
              @click="timeLimit = t.sec"
              :class="[
                'flex-1 py-2.5 rounded-2xl font-black text-xs sm:text-sm border-2 transition-all cursor-pointer',
                timeLimit === t.sec
                  ? 'bg-amber-500 border-amber-600 text-white shadow-xs'
                  : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
              ]"
            >
              {{ t.label }}
            </button>
          </div>
        </div>

      </div>

      <!-- Start Button Banner -->
      <div class="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div class="text-xs font-bold text-slate-500">
          Đề thi sẽ được tạo tự động với các câu hỏi bám sát kiến thức lớp 2.
        </div>
        <button
          @click="startTopicExam"
          class="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 active:scale-95 text-white font-black text-base shadow-lg shadow-orange-300 transition-all cursor-pointer flex items-center justify-center gap-2"
        >
          <span>🚀</span> Bắt Đầu Làm Bài Ngay
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { examStore } from '../store/examStore'
import { TOPICS } from '../data/questionsData'

const selectedTopic = ref(null)
const questionCount = ref(15)
const difficulty = ref('medium')
const timeLimit = ref(1200)

function startTopicExam() {
  const topicObj = TOPICS.find(t => t.id === selectedTopic.value)
  const title = topicObj 
    ? `Luyện Tập: ${topicObj.name}` 
    : 'Luyện Tập Toán Tổng Hợp Lớp 2'

  examStore.startCustomExam({
    type: selectedTopic.value ? 'topic' : 'mixed',
    topic: selectedTopic.value,
    difficulty: difficulty.value,
    count: questionCount.value,
    timeLimit: timeLimit.value,
    title
  })
}
</script>
