<template>
  <div class="my-5 flex flex-col items-center justify-center p-4 sm:p-6 bg-gradient-to-b from-amber-50/60 to-white rounded-3xl border-3 border-amber-200 shadow-sm print:border print:border-slate-300 print:bg-white print:my-2 print:p-2">
    <div class="text-xs font-bold text-slate-500 mb-3 flex items-center gap-1.5 print:hidden">
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
        <line
          v-for="i in diagram.count - 1"
          :key="i"
          :x1="i * 80"
          y1="0"
          :x2="i * 80"
          y2="80"
          stroke="#b45309"
          stroke-width="3"
        />
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
      <polygon
        points="180,30 40,180 320,180"
        fill="url(#triGrad)"
        stroke="#0369a1"
        stroke-width="3.5"
        stroke-linejoin="round"
      />
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
      <circle cx="180" cy="30" r="4.5" fill="#0284c7" />
      <text x="180" y="16" text-anchor="middle" class="font-black text-base fill-sky-950">A</text>
      <circle cx="40" cy="180" r="4.5" fill="#0284c7" />
      <text x="35" y="204" text-anchor="middle" class="font-black text-base fill-sky-950">B</text>
      <circle cx="320" cy="180" r="4.5" fill="#0284c7" />
      <text x="325" y="204" text-anchor="middle" class="font-black text-base fill-sky-950">C</text>
      <g v-for="(seg, idx) in internalLines" :key="'p_' + idx">
        <circle :cx="seg.x" cy="180" r="4" fill="#0284c7" />
        <text :x="seg.x" y="204" text-anchor="middle" class="font-black text-sm fill-sky-900">{{ seg.label }}</text>
      </g>
    </svg>

    <!-- 3. Chu vi tam giác với độ dài các cạnh -->
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
      <polygon
        points="140,40 50,180 290,180"
        fill="url(#periGrad)"
        stroke="#047857"
        stroke-width="3.5"
        stroke-linejoin="round"
      />
      <text x="140" y="26" text-anchor="middle" class="font-black text-base fill-emerald-950">A</text>
      <text x="36" y="195" text-anchor="middle" class="font-black text-base fill-emerald-950">B</text>
      <text x="305" y="195" text-anchor="middle" class="font-black text-base fill-emerald-950">C</text>
      <rect x="65" y="90" width="70" height="24" rx="8" fill="#ffffff" stroke="#10b981" stroke-width="1.5" />
      <text x="100" y="106" text-anchor="middle" class="font-bold text-xs fill-emerald-900">{{ diagram.a }} {{ diagram.unit || 'cm' }}</text>
      <rect x="200" y="90" width="70" height="24" rx="8" fill="#ffffff" stroke="#10b981" stroke-width="1.5" />
      <text x="235" y="106" text-anchor="middle" class="font-bold text-xs fill-emerald-900">{{ diagram.b }} {{ diagram.unit || 'cm' }}</text>
      <rect x="135" y="188" width="70" height="24" rx="8" fill="#ffffff" stroke="#10b981" stroke-width="1.5" />
      <text x="170" y="204" text-anchor="middle" class="font-bold text-xs fill-emerald-900">{{ diagram.c }} {{ diagram.unit || 'cm' }}</text>
    </svg>

    <!-- 4. Đường gấp khúc -->
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
      <circle cx="40" cy="140" r="5" fill="#b45309" />
      <text x="40" y="165" text-anchor="middle" class="font-black text-sm fill-amber-950">A</text>
      <circle cx="140" cy="50" r="5" fill="#b45309" />
      <text x="140" y="32" text-anchor="middle" class="font-black text-sm fill-amber-950">B</text>
      <circle cx="240" cy="140" r="5" fill="#b45309" />
      <text x="240" y="165" text-anchor="middle" class="font-black text-sm fill-amber-950">C</text>
      <circle cx="340" cy="60" r="5" fill="#b45309" />
      <text x="340" y="42" text-anchor="middle" class="font-black text-sm fill-amber-950">D</text>
      <rect x="65" y="80" width="60" height="22" rx="6" fill="#ffffff" stroke="#f59e0b" stroke-width="1.5" />
      <text x="95" y="95" text-anchor="middle" class="font-bold text-xs fill-amber-900">{{ diagram.d1 }} cm</text>
      <rect x="165" y="105" width="60" height="22" rx="6" fill="#ffffff" stroke="#f59e0b" stroke-width="1.5" />
      <text x="195" y="120" text-anchor="middle" class="font-bold text-xs fill-amber-900">{{ diagram.d2 }} cm</text>
      <rect x="265" y="80" width="60" height="22" rx="6" fill="#ffffff" stroke="#f59e0b" stroke-width="1.5" />
      <text x="295" y="95" text-anchor="middle" class="font-bold text-xs fill-amber-900">{{ diagram.d3 }} cm</text>
    </svg>

    <!-- 5. Hình chữ nhật chia xiên (6 hình tứ giác) -->
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
        <line x1="80" y1="130" x2="110" y2="0" stroke="#7e22ce" stroke-width="3" />
        <line x1="200" y1="0" x2="230" y2="130" stroke="#7e22ce" stroke-width="3" />
        <text x="45" y="70" class="font-bold text-sm fill-purple-700">1</text>
        <text x="155" y="70" class="font-bold text-sm fill-purple-700">2</text>
        <text x="255" y="70" class="font-bold text-sm fill-purple-700">3</text>
      </g>
    </svg>

    <!-- 6. Tam giác có đường cắt ngang MN -->
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
      <line x1="100" y1="110" x2="220" y2="110" stroke="#b91c1c" stroke-width="3" />
      <text x="160" y="20" text-anchor="middle" class="font-black text-sm fill-rose-950">A</text>
      <text x="30" y="205" text-anchor="middle" class="font-black text-sm fill-rose-950">B</text>
      <text x="290" y="205" text-anchor="middle" class="font-black text-sm fill-rose-950">C</text>
      <text x="85" y="115" text-anchor="middle" class="font-black text-xs fill-rose-900">M</text>
      <text x="235" y="115" text-anchor="middle" class="font-black text-xs fill-rose-900">N</text>
    </svg>

    <!-- 7. HÌNH VUÔNG 2 ĐƯỜNG CHÉO (8 TAM GIÁC - CHUẨN HTML MẪU) -->
    <svg 
      v-else-if="diagram.type === 'square_diagonals'" 
      viewBox="0 0 200 200" 
      class="w-36 h-36 drop-shadow-md select-none"
    >
      <rect x="20" y="20" width="160" height="160" fill="#fef9c3" stroke="#ca8a04" stroke-width="3.5" rx="6"/>
      <line x1="20" y1="20" x2="180" y2="180" stroke="#ca8a04" stroke-width="3"/>
      <line x1="180" y1="20" x2="20" y2="180" stroke="#ca8a04" stroke-width="3"/>
      <circle cx="100" cy="100" r="3" fill="#854d0e"/>
      <text x="12" y="18" class="font-black text-xs fill-amber-900">A</text>
      <text x="184" y="18" class="font-black text-xs fill-amber-900">B</text>
      <text x="184" y="196" class="font-black text-xs fill-amber-900">C</text>
      <text x="12" y="196" class="font-black text-xs fill-amber-900">D</text>
      <text x="100" y="92" text-anchor="middle" class="font-black text-xs fill-amber-900">O</text>
    </svg>

    <!-- 8. TOA TÀU QUY LUẬT DÃY SỐ (CHUẨN HTML MẪU) -->
    <div 
      v-else-if="diagram.type === 'train_sequence'" 
      class="flex items-center justify-center flex-wrap gap-2 text-2xl sm:text-3xl font-black py-2 select-none"
    >
      <span class="text-4xl">🚂</span>
      <div 
        v-for="(num, idx) in (diagram.seq || [2, 4, 6, 8])" 
        :key="idx" 
        class="px-3 py-1.5 bg-amber-100 border-2 border-amber-400 rounded-2xl text-amber-950 shadow-xs flex items-center gap-1"
      >
        <span class="text-base text-slate-400">🚃</span>
        <span class="font-mono">{{ num }}</span>
      </div>
      <div class="px-3.5 py-1.5 bg-rose-100 border-2 border-rose-400 text-rose-600 rounded-2xl font-black flex items-center gap-1 animate-pulse">
        <span class="text-base">🚃</span>
        <span>?</span>
      </div>
    </div>

    <!-- 9. PHƯƠNG TRÌNH HOA QUẢ TƯ DUY (CHUẨN HTML MẪU) -->
    <div 
      v-else-if="diagram.type === 'fruit_equation'" 
      class="p-4 bg-amber-50/70 border-2 border-amber-300 rounded-3xl text-center space-y-2 text-xl sm:text-2xl font-black shadow-xs"
    >
      <div class="flex items-center justify-center gap-2">
        <span>🍎</span> <span>+</span> <span>🍎</span> <span>=</span> <span class="text-rose-600 font-mono">{{ diagram.sumApples }}</span>
      </div>
      <div class="flex items-center justify-center gap-2">
        <span>🍎</span> <span>+</span> <span>🍌</span> <span>=</span> <span class="text-amber-600 font-mono">{{ diagram.sumMixed }}</span>
      </div>
      <div class="text-xs font-bold text-slate-500 pt-1 border-t border-amber-200">
        Hỏi giá trị của 🍌 là bao nhiêu?
      </div>
    </div>

    <!-- 10. CÂN THĂNG BẰNG DƯA HẤU & QUẢ CÂN (CHUẨN HTML MẪU) -->
    <div 
      v-else-if="diagram.type === 'balance_scale'" 
      class="flex flex-col items-center p-4 bg-emerald-50/70 border-2 border-emerald-300 rounded-3xl"
    >
      <div class="flex items-center gap-4 sm:gap-6 text-3xl font-black mb-2">
        <div class="flex items-center gap-1.5 px-4 py-2 bg-emerald-100 border-2 border-emerald-400 rounded-2xl">
          <span>🍉</span>
          <span class="text-xs font-bold text-emerald-800">1 quả dưa hấu</span>
        </div>
        <span class="text-4xl text-slate-600">⚖️</span>
        <div class="flex flex-wrap gap-1.5 items-center justify-center">
          <span 
            v-for="i in (diagram.count || 3)" 
            :key="i" 
            class="px-2.5 py-1 bg-amber-100 border-2 border-amber-400 rounded-xl text-xs font-black text-amber-900 shadow-xs"
          >
            [{{ diagram.weight || 2 }}kg]
          </span>
        </div>
      </div>
      <span class="text-xs font-bold text-slate-500">Cân đang ở vị trí thăng bằng</span>
    </div>

    <!-- 11. MẶT ĐỒNG HỒ THỜI GIAN (CHUẨN HTML MẪU) -->
    <div 
      v-else-if="diagram.type === 'clock_face'" 
      class="flex flex-col items-center justify-center"
    >
      <svg viewBox="0 0 120 120" class="w-28 h-28 drop-shadow-md select-none">
        <circle cx="60" cy="60" r="54" fill="#ffffff" stroke="#0284c7" stroke-width="4.5"/>
        <circle cx="60" cy="60" r="4.5" fill="#0369a1"/>
        <text x="60" y="24" text-anchor="middle" class="font-black text-xs fill-sky-950">12</text>
        <text x="100" y="64" text-anchor="middle" class="font-black text-xs fill-sky-950">3</text>
        <text x="60" y="104" text-anchor="middle" class="font-black text-xs fill-sky-950">6</text>
        <text x="20" y="64" text-anchor="middle" class="font-black text-xs fill-sky-950">9</text>
        <!-- Minute hand to 12 -->
        <line x1="60" y1="60" x2="60" y2="28" stroke="#0369a1" stroke-width="3" stroke-linecap="round"/>
        <!-- Hour hand -->
        <line 
          x1="60" 
          y1="60" 
          :x2="60 + 24 * Math.sin((diagram.hour || 9) * 30 * Math.PI / 180)" 
          :y2="60 - 24 * Math.cos((diagram.hour || 9) * 30 * Math.PI / 180)" 
          stroke="#ef4444" 
          stroke-width="4.5" 
          stroke-linecap="round"
        />
      </svg>
      <div class="mt-2 text-xs font-bold text-slate-600">
        Đồng hồ đang chỉ: <b class="text-rose-600">{{ diagram.hour || 9 }} giờ đúng</b>
      </div>
    </div>

    <!-- 12. XẾP HÀNG TẬP THỂ DỤC (CHUẨN HTML MẪU) -->
    <div 
      v-else-if="diagram.type === 'lineup'" 
      class="p-3 bg-sky-50 border-2 border-sky-300 rounded-2xl flex items-center justify-center gap-1 text-2xl sm:text-3xl select-none"
    >
      <span v-for="i in (diagram.front || 4)" :key="'f_'+i" title="Bạn đứng trước">🧍‍♂️</span>
      <span class="px-2.5 py-1 bg-amber-300 border-2 border-amber-500 rounded-xl font-black text-xs text-amber-950">
        {{ diagram.name || 'Lan' }}
      </span>
      <span v-for="i in (diagram.back || 5)" :key="'b_'+i" title="Bạn đứng sau">🧍‍♀️</span>
    </div>

    <!-- 13. CƯA GỖ / ĐOẠN GỖ (CHUẨN HTML MẪU) -->
    <div 
      v-else-if="diagram.type === 'wood_cutting'" 
      class="p-4 bg-amber-50 border-2 border-amber-300 rounded-2xl flex items-center justify-center flex-wrap gap-2 text-3xl"
    >
      <span v-for="i in (diagram.parts || 5)" :key="i" class="flex items-center gap-1.5">
        <span>🪵</span>
        <span v-if="i < (diagram.parts || 5)" class="text-xl text-slate-400">🪚</span>
      </span>
    </div>

    <!-- 14. ĐẾM CHÂN CON VẬT (CHUẨN HTML MẪU) -->
    <div 
      v-else-if="diagram.type === 'animals_legs'" 
      class="p-3 bg-emerald-50 border-2 border-emerald-300 rounded-2xl text-center space-y-1.5"
    >
      <div class="text-3xl flex items-center justify-center gap-4">
        <div class="flex items-center gap-1">
          <span v-for="i in (diagram.chickens || 3)" :key="'c_'+i">🐔</span>
        </div>
        <div class="flex items-center gap-1">
          <span v-for="i in (diagram.dogs || 2)" :key="'d_'+i">🐶</span>
        </div>
      </div>
      <div class="text-xs font-bold text-emerald-800">
        {{ diagram.chickens || 3 }} con gà (2 chân) và {{ diagram.dogs || 2 }} con chó (4 chân)
      </div>
    </div>

    <!-- 15. SO SÁNH CHIỀU CAO CON VẬT (CHUẨN HTML MẪU) -->
    <div 
      v-else-if="diagram.type === 'animals_height'" 
      class="p-4 bg-yellow-50 border-2 border-yellow-300 rounded-2xl flex items-end justify-center gap-6"
    >
      <div class="flex flex-col items-center">
        <span style="font-size: 50px">🐘</span>
        <span class="text-xs font-bold text-slate-700">Voi (Cao nhất)</span>
      </div>
      <div class="flex flex-col items-center">
        <span style="font-size: 40px">🐅</span>
        <span class="text-xs font-bold text-slate-700">Hổ</span>
      </div>
      <div class="flex flex-col items-center">
        <span style="font-size: 30px">🐻</span>
        <span class="text-xs font-bold text-slate-700">Gấu</span>
      </div>
    </div>

    <!-- 16. TỜ LỊCH THỜI GIAN (CHUẨN HTML MẪU) -->
    <div 
      v-else-if="diagram.type === 'calendar_day'" 
      class="p-3 bg-rose-50 border-2 border-rose-300 rounded-2xl text-center"
    >
      <span class="text-4xl">📅</span>
      <div class="font-black text-base text-rose-700 mt-1">
        {{ diagram.weekday || 'Thứ Ba' }}, Ngày {{ diagram.day || 8 }}
      </div>
    </div>

    <!-- 17. MÈO VÀ CHUỘT (ĐỐ MẸO THỜI GIAN - CHUẨN HTML MẪU) -->
    <div 
      v-else-if="diagram.type === 'cat_mouse'" 
      class="p-3 bg-purple-50 border-2 border-purple-300 rounded-2xl flex items-center justify-center gap-3 text-3xl"
    >
      <span>🐱</span> <span>🐟</span> <span>🐭</span>
    </div>

    <!-- 18. THÁP KHỐI LẬP PHƯƠNG (CHUẨN HTML MẪU) -->
    <div 
      v-else-if="diagram.type === 'cubes_stack'" 
      class="p-3 bg-indigo-50 border-2 border-indigo-200 rounded-2xl flex flex-col items-center gap-1.5"
    >
      <div class="text-3xl flex items-center justify-center gap-1">
        <span v-for="i in Math.min(diagram.total || 8, 10)" :key="i">🧊</span>
      </div>
      <span class="text-xs font-black text-indigo-900">Tháp xếp từ {{ diagram.total || 8 }} khối lập phương</span>
    </div>

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
