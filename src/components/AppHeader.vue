<template>
  <header class="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b-4 border-amber-300 shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
      
      <!-- Logo & Brand -->
      <div 
        @click="examStore.navigate('home')" 
        class="flex items-center gap-3 cursor-pointer group select-none transition-transform active:scale-95"
      >
        <div class="w-14 h-14 bg-gradient-to-tr from-amber-400 to-yellow-300 rounded-2xl flex items-center justify-center shadow-lg border-2 border-amber-200 transform group-hover:rotate-6 transition-all duration-300">
          <span class="text-3xl animate-bounce-gentle">🐝</span>
        </div>
        <div>
          <div class="flex items-center gap-2">
            <span class="text-2xl font-black bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600 bg-clip-text text-transparent tracking-tight">
              VIOLYMPIC TOÁN 2
            </span>
            <span class="hidden sm:inline-block px-2.5 py-0.5 text-xs font-bold bg-amber-100 text-amber-800 rounded-full border border-amber-300">
              Chương trình GDPT
            </span>
          </div>
          <p class="text-xs font-bold text-slate-500">Đấu Trường Trí Tuệ Nhí • Vui Học Mê Say</p>
        </div>
      </div>

      <!-- Navigation Links -->
      <nav class="hidden md:flex items-center gap-2">
        <button
          @click="examStore.navigate('home')"
          :class="[
            'px-4 py-2.5 rounded-2xl font-black text-sm transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-sm',
            examStore.currentView === 'home'
              ? 'bg-amber-500 text-white shadow-amber-300 shadow-md scale-105'
              : 'bg-amber-50 text-amber-900 hover:bg-amber-100'
          ]"
        >
          <span>🏠</span> Trang Chủ
        </button>

        <button
          @click="examStore.navigate('practice10')"
          :class="[
            'px-4 py-2.5 rounded-2xl font-black text-sm transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-sm',
            examStore.currentView === 'practice10'
              ? 'bg-purple-600 text-white shadow-purple-300 shadow-md scale-105'
              : 'bg-purple-50 text-purple-900 hover:bg-purple-100 border border-purple-200'
          ]"
        >
          <span>📝</span> 10 Đề Luyện Thi & In Đề
        </button>

        <button
          @click="examStore.navigate('rounds')"
          :class="[
            'px-4 py-2.5 rounded-2xl font-black text-sm transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-sm',
            examStore.currentView === 'rounds'
              ? 'bg-amber-500 text-white shadow-amber-300 shadow-md scale-105'
              : 'bg-amber-50 text-amber-900 hover:bg-amber-100'
          ]"
        >
          <span>🏆</span> 18 Vòng Thi Chuẩn
        </button>

        <button
          @click="examStore.navigate('topics')"
          :class="[
            'px-4 py-2.5 rounded-2xl font-black text-sm transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-sm',
            examStore.currentView === 'topics'
              ? 'bg-amber-500 text-white shadow-amber-300 shadow-md scale-105'
              : 'bg-amber-50 text-amber-900 hover:bg-amber-100'
          ]"
        >
          <span>🎯</span> Luyện Chủ Đề
        </button>

        <button
          @click="examStore.navigate('parent')"
          :class="[
            'px-4 py-2.5 rounded-2xl font-black text-sm transition-all duration-200 flex items-center gap-2 cursor-pointer shadow-sm',
            examStore.currentView === 'parent'
              ? 'bg-amber-500 text-white shadow-amber-300 shadow-md scale-105'
              : 'bg-amber-50 text-amber-900 hover:bg-amber-100'
          ]"
        >
          <span>👨‍👩‍👧</span> Góc Phụ Huynh
        </button>
      </nav>

      <!-- Right Controls: Audio & Profile -->
      <div class="flex items-center gap-2 sm:gap-3">
        <!-- Sound Toggle -->
        <button
          @click="soundManager.toggleSound()"
          :title="soundManager.isEnabled ? 'Tắt âm thanh' : 'Bật âm thanh'"
          class="w-12 h-12 rounded-2xl flex items-center justify-center font-bold text-xl transition-all cursor-pointer border-2 shadow-sm active:scale-90"
          :class="soundManager.isEnabled ? 'bg-emerald-50 border-emerald-300 text-emerald-700 hover:bg-emerald-100' : 'bg-slate-100 border-slate-300 text-slate-400'"
        >
          <span>{{ soundManager.isEnabled ? '🔊' : '🔇' }}</span>
        </button>

        <!-- Profile Avatar & Name -->
        <div 
          @click="openProfileModal"
          class="flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-amber-100 to-yellow-100 border-2 border-amber-300 rounded-2xl cursor-pointer hover:shadow-md transition-all active:scale-95 select-none"
        >
          <span class="text-2xl">{{ examStore.studentAvatar }}</span>
          <span class="font-black text-slate-800 text-sm hidden sm:inline">{{ examStore.studentName }}</span>
          <span class="text-xs text-amber-600 hidden sm:inline">✏️</span>
        </div>
      </div>
    </div>

    <!-- Mobile Nav Bar -->
    <div class="md:hidden flex items-center justify-around border-t border-amber-200 bg-amber-50/80 px-1 py-2 overflow-x-auto gap-1">
      <button 
        @click="examStore.navigate('home')" 
        :class="['px-2 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1 whitespace-nowrap', examStore.currentView === 'home' ? 'bg-amber-500 text-white' : 'text-slate-700']"
      >
        <span>🏠</span> Trang Chủ
      </button>
      <button 
        @click="examStore.navigate('practice10')" 
        :class="['px-2 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1 whitespace-nowrap', examStore.currentView === 'practice10' ? 'bg-purple-600 text-white' : 'text-purple-900 font-black']"
      >
        <span>📝</span> 10 Đề & In
      </button>
      <button 
        @click="examStore.navigate('rounds')" 
        :class="['px-2 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1 whitespace-nowrap', examStore.currentView === 'rounds' ? 'bg-amber-500 text-white' : 'text-slate-700']"
      >
        <span>🏆</span> 18 Vòng
      </button>
      <button 
        @click="examStore.navigate('topics')" 
        :class="['px-2 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1 whitespace-nowrap', examStore.currentView === 'topics' ? 'bg-amber-500 text-white' : 'text-slate-700']"
      >
        <span>🎯</span> Chủ Đề
      </button>
      <button 
        @click="examStore.navigate('parent')" 
        :class="['px-2 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1 whitespace-nowrap', examStore.currentView === 'parent' ? 'bg-amber-500 text-white' : 'text-slate-700']"
      >
        <span>📊</span> Ba Mẹ
      </button>
    </div>

    <!-- Simple Profile Modal -->
    <div v-if="showProfileModal" class="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4">
      <div class="bg-white rounded-3xl p-6 max-w-sm w-full border-4 border-amber-300 shadow-2xl animate-bounce-gentle">
        <h3 class="text-xl font-black text-slate-800 mb-4 text-center">Thông Tin Của Bé</h3>
        
        <div class="mb-4">
          <label class="block text-sm font-bold text-slate-600 mb-1">Tên của bé:</label>
          <input 
            v-model="tempName" 
            type="text" 
            maxlength="20"
            class="w-full px-4 py-2.5 rounded-2xl border-2 border-amber-300 focus:outline-hidden focus:border-amber-500 font-bold text-slate-800"
            placeholder="Nhập tên bé..."
          />
        </div>

        <div class="mb-5">
          <label class="block text-sm font-bold text-slate-600 mb-2">Chọn nhân vật đại diện:</label>
          <div class="grid grid-cols-5 gap-2 text-3xl text-center">
            <button 
              v-for="av in avatars" 
              :key="av" 
              @click="tempAvatar = av"
              class="p-2 rounded-2xl border-2 transition-all cursor-pointer"
              :class="tempAvatar === av ? 'border-amber-500 bg-amber-100 scale-110 shadow-sm' : 'border-slate-200 hover:bg-slate-50'"
            >
              {{ av }}
            </button>
          </div>
        </div>

        <div class="flex gap-2">
          <button 
            @click="showProfileModal = false" 
            class="flex-1 py-2.5 rounded-2xl border-2 border-slate-300 font-bold text-slate-600 hover:bg-slate-100 cursor-pointer"
          >
            Đóng
          </button>
          <button 
            @click="saveProfile" 
            class="flex-1 py-2.5 rounded-2xl bg-amber-500 text-white font-black hover:bg-amber-600 shadow-md cursor-pointer"
          >
            Lưu Lại
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { examStore } from '../store/examStore'
import { soundManager } from '../utils/soundEffects'

const showProfileModal = ref(false)
const tempName = ref(examStore.studentName)
const tempAvatar = ref(examStore.studentAvatar)

const avatars = ['🦁', '🐱', '🐼', '🦊', '🐸', '🐰', '🐯', '🦄', '🐧', '🐝']

function openProfileModal() {
  tempName.value = examStore.studentName
  tempAvatar.value = examStore.studentAvatar
  showProfileModal.value = true
}

function saveProfile() {
  examStore.setStudentProfile(tempName.value, tempAvatar.value)
  showProfileModal.value = false
  soundManager.playStar()
}
</script>
