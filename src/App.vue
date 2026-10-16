<template>
  <div class="min-h-screen flex flex-col bg-gradient-to-br from-amber-50/70 via-sky-50/50 to-emerald-50/60 font-sans">
    
    <!-- Top Global App Header -->
    <AppHeader />

    <!-- Main Container -->
    <main class="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8">
      
      <!-- View: Home -->
      <HomeView v-if="examStore.currentView === 'home'" />

      <!-- View: 10 Practice Exams & Print -->
      <PracticeExamsView v-else-if="examStore.currentView === 'practice10'" />

      <!-- View: 18 Rounds -->
      <RoundsView v-else-if="examStore.currentView === 'rounds'" />

      <!-- View: Topic Practice -->
      <TopicPracticeView v-else-if="examStore.currentView === 'topics'" />

      <!-- View: Active Exam taking -->
      <ExamView v-else-if="examStore.currentView === 'exam'" />

      <!-- View: Result & Explanations -->
      <ResultView v-else-if="examStore.currentView === 'result'" />

      <!-- View: Parent & Statistics Dashboard -->
      <ParentDashboard v-else-if="examStore.currentView === 'parent'" />

    </main>

    <!-- Kid-Friendly Footer -->
    <footer class="bg-white/80 border-t-2 border-amber-200 py-6 text-center text-xs font-bold text-slate-500">
      <div class="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div class="flex items-center gap-2">
          <span>🌟</span>
          <span><b>Violympic Toán Lớp 2</b> — Bám sát khung chương trình Giáo dục phổ thông Việt Nam</span>
        </div>
        <div class="text-slate-400">
          Thiết kế sinh động dành cho học sinh 7-8 tuổi • Tự động chấm điểm & Lưu trữ tiến độ
        </div>
      </div>
    </footer>

  </div>
</template>

<script setup>
import { examStore } from './store/examStore'
import AppHeader from './components/AppHeader.vue'
import HomeView from './views/HomeView.vue'
import PracticeExamsView from './views/PracticeExamsView.vue'
import RoundsView from './views/RoundsView.vue'
import TopicPracticeView from './views/TopicPracticeView.vue'
import ExamView from './views/ExamView.vue'
import ResultView from './views/ResultView.vue'
import ParentDashboard from './views/ParentDashboard.vue'
</script>
