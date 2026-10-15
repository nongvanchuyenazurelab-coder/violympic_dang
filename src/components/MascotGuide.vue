<template>
  <div class="flex items-start gap-4 p-4 rounded-3xl bg-gradient-to-r from-amber-100/90 to-yellow-50 border-3 border-amber-300 shadow-sm transition-all hover:shadow-md">
    <!-- Animated Mascot Avatar -->
    <div class="flex-shrink-0 relative">
      <div class="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-tr from-amber-400 to-yellow-300 border-2 border-amber-400 flex items-center justify-center text-3xl sm:text-4xl shadow-md transform hover:scale-105 transition-transform">
        {{ mascotIcon }}
      </div>
      <span class="absolute -bottom-1 -right-1 flex h-4 w-4">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
        <span class="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border border-white"></span>
      </span>
    </div>

    <!-- Speech Content -->
    <div class="flex-1">
      <div class="flex items-center gap-2 mb-1">
        <span class="font-black text-amber-900 text-sm sm:text-base">{{ mascotName }}</span>
        <span class="text-xs bg-amber-200/80 text-amber-800 font-bold px-2 py-0.5 rounded-full">
          {{ badgeText }}
        </span>
      </div>
      <p class="text-slate-700 text-sm sm:text-base font-medium leading-relaxed">
        <slot>{{ message }}</slot>
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  mascot: {
    type: String,
    default: 'bee' // 'bee' | 'frog' | 'cat' | 'owl'
  },
  message: {
    type: String,
    default: 'Bé hãy đọc kỹ đề bài và tính toán thật cẩn thận nhé!'
  },
  badge: {
    type: String,
    default: 'Bạn đồng hành'
  }
})

const mascotIcon = computed(() => {
  switch (props.mascot) {
    case 'frog': return '🐸'
    case 'cat': return '🐱'
    case 'owl': return '🦉'
    case 'monkey': return '🐵'
    case 'bee':
    default: return '🐝'
  }
})

const mascotName = computed(() => {
  switch (props.mascot) {
    case 'frog': return 'Cóc Vàng Tài Ba'
    case 'cat': return 'Mèo Con Chăm Chỉ'
    case 'owl': return 'Cú Mèo Thông Thái'
    case 'monkey': return 'Khỉ Con Nhanh Trí'
    case 'bee':
    default: return 'Ong Vàng Nhí'
  }
})

const badgeText = computed(() => props.badge || 'Bạn đồng hành')
</script>
