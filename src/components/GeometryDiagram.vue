<template>
  <div class="my-5 flex flex-col items-center justify-center p-4 sm:p-6 bg-gradient-to-b from-amber-50/60 to-white rounded-3xl border-3 border-amber-200 shadow-sm">
    <div class="text-xs font-bold text-slate-500 mb-3 flex items-center gap-1.5">
      <span>📐</span> Hình vẽ minh họa cho đề bài:
    </div>

    <!-- 1. Thanh hình chữ nhật chia N ô vuông nhỏ -->
    <svg 
      v-if="diagram.type === 'split_rect'" 
      :viewBox="`0 0 ${diagram.count * 80 + 40} 120`" 
      class="max-w-full h-28 sm:h-36 drop-shadow-md select-none"
    >
      <defs>
        <linearGradient id="rectGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#fef3c7" />
          <stop offset="100%" stop-color="#fde68a" />
        </linearGradient>
      </defs>
      <g transform="translate(20, 20)">
        <rect
          x="0"
          y="0"
          :width="diagram.count * 80"
          height="80"
          fill="url(#rectGrad)"
          stroke="#b45309"
          stroke-width="3.5"
          rx="12"
        />
        <!-- Inner dividing lines -->
        <line
          v-for="i in diagram.count - 1"
          :key="i"
          :x1="i * 80"
          y1="0"
          :x2="i * 80"
          y2="80"
          stroke="#b45309"
          stroke-width="3"
          stroke-dasharray="2 0"
        />
        <!-- Numbers in squares -->
        <text
          v-for="i in diagram.count"
          :key="'txt_' + i"
          :x="(i - 1) * 80 + 40"
          y="48"
          text-anchor="middle"
          dominant-baseline="middle"
          class="font-black text-2xl fill-amber-900"
        >
          ({{ i }})
        </text>
      </g>
    </svg>

    <!-- 2. Tam giác có các đường kẻ từ đỉnh xuống cạnh đáy -->
    <svg 
      v-else-if="diagram.type === 'apex_triangle'" 
      viewBox="0 0 360 220" 
      class="max-w-full h-44 sm:h-52 drop-shadow-md select-none"
    >
      <defs>
        <linearGradient id="triGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#e0f2fe" />
          <stop offset="100%" stop-color="#bae6fd" />
        </linearGradient>
      </defs>
      <!-- Base triangle -->
      <polygon
        points="180,30 40,180 320,180"
        fill="url(#triGrad)"
        stroke="#0369a1"
        stroke-width="3.5"
        stroke-linejoin="round"
      />
      <!-- Dividing lines from Apex (180, 30) -->
      <line
        v-for="(seg, idx) in internalLines"
        :key="idx"
        x1="180"
        y1="30"
        :x2="seg.x"
        y2="180"
        stroke="#0369a1"
        stroke-width="2.5"
      />
      <!-- Vertex Labels -->
      <circle cx="180" cy="30" r="4.5" fill="#0284c7" />
      <text x="180" y="16" text-anchor="middle" class="font-black text-base fill-sky-950">A</text>

      <circle cx="40" cy="180" r="4.5" fill="#0284c7" />
      <text x="35" y="204" text-anchor="middle" class="font-black text-base fill-sky-950">B</text>

      <circle cx="320" cy="180" r="4.5" fill="#0284c7" />
      <text x="325" y="204" text-anchor="middle" class="font-black text-base fill-sky-950">C</text>

      <!-- Intermediate points on base -->
      <g v-for="(seg, idx) in internalLines" :key="'p_' + idx">
        <circle :cx="seg.x" cy="180" r="4" fill="#0284c7" />
        <text :x="seg.x" y="204" text-anchor="middle" class="font-black text-sm fill-sky-900">{{ seg.label }}</text>
      </g>
    </svg>

    <!-- 3. Chu vi tam giác với độ dài các cạnh (AB, BC, CA) -->
    <svg 
      v-else-if="diagram.type === 'triangle_perimeter'" 
      viewBox="0 0 340 220" 
      class="max-w-full h-44 sm:h-52 drop-shadow-md select-none"
    >
      <defs>
        <linearGradient id="periGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#ecfdf5" />
          <stop offset="100%" stop-color="#a7f3d0" />
        </linearGradient>
      </defs>
      <!-- Triangle -->
      <polygon
        points="140,40 50,180 290,180"
        fill="url(#periGrad)"
        stroke="#047857"
        stroke-width="3.5"
        stroke-linejoin="round"
      />
      <!-- Vertex Points -->
      <text x="140" y="26" text-anchor="middle" class="font-black text-base fill-emerald-950">A</text>
      <text x="36" y="195" text-anchor="middle" class="font-black text-base fill-emerald-950">B</text>
      <text x="305" y="195" text-anchor="middle" class="font-black text-base fill-emerald-950">C</text>

      <!-- Side Length Labels -->
      <rect x="65" y="90" width="70" height="24" rx="8" fill="#ffffff" stroke="#10b981" stroke-width="1.5" />
      <text x="100" y="106" text-anchor="middle" class="font-bold text-xs fill-emerald-900">{{ diagram.a }} {{ diagram.unit || 'cm' }}</text>

      <rect x="200" y="90" width="70" height="24" rx="8" fill="#ffffff" stroke="#10b981" stroke-width="1.5" />
      <text x="235" y="106" text-anchor="middle" class="font-bold text-xs fill-emerald-900">{{ diagram.b }} {{ diagram.unit || 'cm' }}</text>

      <rect x="135" y="188" width="70" height="24" rx="8" fill="#ffffff" stroke="#10b981" stroke-width="1.5" />
      <text x="170" y="204" text-anchor="middle" class="font-bold text-xs fill-emerald-900">{{ diagram.c }} {{ diagram.unit || 'cm' }}</text>
    </svg>

    <!-- 4. Đường gấp khúc gồm 3 hoặc 4 đoạn thẳng -->
    <svg 
      v-else-if="diagram.type === 'polyline'" 
      viewBox="0 0 380 180" 
      class="max-w-full h-36 sm:h-44 drop-shadow-md select-none"
    >
      <polyline
        points="40,140 140,50 240,140 340,60"
        fill="none"
        stroke="#d97706"
        stroke-width="4.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <!-- Nodes A, B, C, D -->
      <circle cx="40" cy="140" r="5" fill="#b45309" />
      <text x="40" y="165" text-anchor="middle" class="font-black text-sm fill-amber-950">A</text>

      <circle cx="140" cy="50" r="5" fill="#b45309" />
      <text x="140" y="32" text-anchor="middle" class="font-black text-sm fill-amber-950">B</text>

      <circle cx="240" cy="140" r="5" fill="#b45309" />
      <text x="240" y="165" text-anchor="middle" class="font-black text-sm fill-amber-950">C</text>

      <circle cx="340" cy="60" r="5" fill="#b45309" />
      <text x="340" y="42" text-anchor="middle" class="font-black text-sm fill-amber-950">D</text>

      <!-- Length Badges -->
      <rect x="65" y="80" width="60" height="22" rx="6" fill="#ffffff" stroke="#f59e0b" stroke-width="1.5" />
      <text x="95" y="95" text-anchor="middle" class="font-bold text-xs fill-amber-900">{{ diagram.d1 }} cm</text>

      <rect x="165" y="105" width="60" height="22" rx="6" fill="#ffffff" stroke="#f59e0b" stroke-width="1.5" />
      <text x="195" y="120" text-anchor="middle" class="font-bold text-xs fill-amber-900">{{ diagram.d2 }} cm</text>

      <rect x="265" y="80" width="60" height="22" rx="6" fill="#ffffff" stroke="#f59e0b" stroke-width="1.5" />
      <text x="295" y="95" text-anchor="middle" class="font-bold text-xs fill-amber-900">{{ diagram.d3 }} cm</text>
    </svg>

    <!-- 5. Hình chữ nhật chia xiên (Đếm hình tứ giác & tam giác như PDF Trang 9) -->
    <svg 
      v-else-if="diagram.type === 'composite_quadrilateral'" 
      viewBox="0 0 340 180" 
      class="max-w-full h-36 sm:h-44 drop-shadow-md select-none"
    >
      <defs>
        <linearGradient id="quadGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#faf5ff" />
          <stop offset="100%" stop-color="#f3e8ff" />
        </linearGradient>
      </defs>
      <g transform="translate(30, 20)">
        <!-- Outer rectangle -->
        <rect
          x="0"
          y="0"
          width="280"
          height="130"
          fill="url(#quadGrad)"
          stroke="#7e22ce"
          stroke-width="3.5"
          rx="6"
        />
        <!-- Slanted inner lines dividing into triangles and quadrilaterals -->
        <line x1="80" y1="130" x2="110" y2="0" stroke="#7e22ce" stroke-width="3" />
        <line x1="200" y1="0" x2="230" y2="130" stroke="#7e22ce" stroke-width="3" />
        
        <!-- Region markers -->
        <text x="45" y="70" class="font-bold text-sm fill-purple-700">1</text>
        <text x="155" y="70" class="font-bold text-sm fill-purple-700">2</text>
        <text x="255" y="70" class="font-bold text-sm fill-purple-700">3</text>
      </g>
    </svg>

    <!-- 6. Tam giác có đường cắt ngang tạo hình thang / tứ giác -->
    <svg 
      v-else-if="diagram.type === 'triangle_with_horizontal'" 
      viewBox="0 0 320 220" 
      class="max-w-full h-44 sm:h-52 drop-shadow-md select-none"
    >
      <defs>
        <linearGradient id="triHGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#fef2f2" />
          <stop offset="100%" stop-color="#fee2e2" />
        </linearGradient>
      </defs>
      <polygon
        points="160,30 40,190 280,190"
        fill="url(#triHGrad)"
        stroke="#b91c1c"
        stroke-width="3.5"
        stroke-linejoin="round"
      />
      <!-- Horizontal cross line -->
      <line x1="100" y1="110" x2="220" y2="110" stroke="#b91c1c" stroke-width="3" />

      <!-- Apex & points -->
      <text x="160" y="20" text-anchor="middle" class="font-black text-sm fill-rose-950">A</text>
      <text x="30" y="205" text-anchor="middle" class="font-black text-sm fill-rose-950">B</text>
      <text x="290" y="205" text-anchor="middle" class="font-black text-sm fill-rose-950">C</text>
      <text x="85" y="115" text-anchor="middle" class="font-black text-xs fill-rose-900">M</text>
      <text x="235" y="115" text-anchor="middle" class="font-black text-xs fill-rose-900">N</text>
    </svg>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  diagram: {
    type: Object,
    required: true
  }
})

// Calculates points along the base (from x=40 to x=320) for apex_triangle
const internalLines = computed(() => {
  if (props.diagram.type !== 'apex_triangle') return []
  const count = props.diagram.baseSegments || 3
  const startX = 40
  const endX = 320
  const step = (endX - startX) / count

  const lines = []
  const pointLabels = ['D', 'E', 'F', 'G']
  for (let i = 1; i < count; i++) {
    lines.push({
      x: Math.round(startX + i * step),
      label: pointLabels[i - 1] || `P${i}`
    })
  }
  return lines
})
</script>
