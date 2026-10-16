<template>
  <div class="my-3 flex flex-col items-center justify-center p-3 sm:p-4 bg-slate-50/60 rounded-2xl border border-slate-200 select-none print:border-none print:shadow-none print:bg-white print:my-1 print:p-0">
    
    <!-- ================================================================= -->
    <!-- 1. THÁP KHỐI LẬP PHƯƠNG 3D (10 KHỐI XẾP THÀNH 4 TẦNG)            -->
    <!-- ================================================================= -->
    <div v-if="diagram.type === 'cubes_stack'" class="w-full flex flex-col items-center">
      <svg viewBox="0 0 360 200" class="max-w-full h-40 sm:h-48 drop-shadow-sm">
        <!-- Floor / Base ellipse -->
        <ellipse cx="180" cy="180" rx="140" ry="12" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="1.5" />
        
        <!-- Tier 4 (Bottom - 4 cubes: idx 7, 8, 9, 10) -->
        <g transform="translate(105, 130)">
          <polygon points="20,0 40,11 20,22 0,11" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5" />
          <polygon points="0,11 20,22 20,44 0,33" fill="#fb923c" stroke="#ea580c" stroke-width="1.5" />
          <polygon points="20,22 40,11 40,33 20,44" fill="#f97316" stroke="#c2410c" stroke-width="1.5" />
          <circle cx="20" cy="11" r="6" fill="#ffffff" />
          <text x="20" y="14" text-anchor="middle" class="font-black text-[9px] fill-amber-950">7</text>
        </g>
        <g transform="translate(155, 130)">
          <polygon points="20,0 40,11 20,22 0,11" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5" />
          <polygon points="0,11 20,22 20,44 0,33" fill="#fb923c" stroke="#ea580c" stroke-width="1.5" />
          <polygon points="20,22 40,11 40,33 20,44" fill="#f97316" stroke="#c2410c" stroke-width="1.5" />
          <circle cx="20" cy="11" r="6" fill="#ffffff" />
          <text x="20" y="14" text-anchor="middle" class="font-black text-[9px] fill-amber-950">8</text>
        </g>
        <g transform="translate(205, 130)">
          <polygon points="20,0 40,11 20,22 0,11" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5" />
          <polygon points="0,11 20,22 20,44 0,33" fill="#fb923c" stroke="#ea580c" stroke-width="1.5" />
          <polygon points="20,22 40,11 40,33 20,44" fill="#f97316" stroke="#c2410c" stroke-width="1.5" />
          <circle cx="20" cy="11" r="6" fill="#ffffff" />
          <text x="20" y="14" text-anchor="middle" class="font-black text-[9px] fill-amber-950">9</text>
        </g>
        <g transform="translate(255, 130)">
          <polygon points="20,0 40,11 20,22 0,11" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5" />
          <polygon points="0,11 20,22 20,44 0,33" fill="#fb923c" stroke="#ea580c" stroke-width="1.5" />
          <polygon points="20,22 40,11 40,33 20,44" fill="#f97316" stroke="#c2410c" stroke-width="1.5" />
          <circle cx="20" cy="11" r="6" fill="#ffffff" />
          <text x="20" y="14" text-anchor="middle" class="font-black text-[9px] fill-amber-950">10</text>
        </g>

        <!-- Tier 3 (Middle-lower - 3 cubes: idx 4, 5, 6) -->
        <g transform="translate(130, 90)">
          <polygon points="20,0 40,11 20,22 0,11" fill="#fde047" stroke="#ca8a04" stroke-width="1.5" />
          <polygon points="0,11 20,22 20,44 0,33" fill="#fb923c" stroke="#ea580c" stroke-width="1.5" />
          <polygon points="20,22 40,11 40,33 20,44" fill="#f97316" stroke="#c2410c" stroke-width="1.5" />
          <circle cx="20" cy="11" r="6" fill="#ffffff" />
          <text x="20" y="14" text-anchor="middle" class="font-black text-[9px] fill-amber-950">4</text>
        </g>
        <g transform="translate(180, 90)">
          <polygon points="20,0 40,11 20,22 0,11" fill="#fde047" stroke="#ca8a04" stroke-width="1.5" />
          <polygon points="0,11 20,22 20,44 0,33" fill="#fb923c" stroke="#ea580c" stroke-width="1.5" />
          <polygon points="20,22 40,11 40,33 20,44" fill="#f97316" stroke="#c2410c" stroke-width="1.5" />
          <circle cx="20" cy="11" r="6" fill="#ffffff" />
          <text x="20" y="14" text-anchor="middle" class="font-black text-[9px] fill-amber-950">5</text>
        </g>
        <g transform="translate(230, 90)">
          <polygon points="20,0 40,11 20,22 0,11" fill="#fde047" stroke="#ca8a04" stroke-width="1.5" />
          <polygon points="0,11 20,22 20,44 0,33" fill="#fb923c" stroke="#ea580c" stroke-width="1.5" />
          <polygon points="20,22 40,11 40,33 20,44" fill="#f97316" stroke="#c2410c" stroke-width="1.5" />
          <circle cx="20" cy="11" r="6" fill="#ffffff" />
          <text x="20" y="14" text-anchor="middle" class="font-black text-[9px] fill-amber-950">6</text>
        </g>

        <!-- Tier 2 (Middle-upper - 2 cubes: idx 2, 3) -->
        <g transform="translate(155, 50)">
          <polygon points="20,0 40,11 20,22 0,11" fill="#facc15" stroke="#ca8a04" stroke-width="1.5" />
          <polygon points="0,11 20,22 20,44 0,33" fill="#f97316" stroke="#ea580c" stroke-width="1.5" />
          <polygon points="20,22 40,11 40,33 20,44" fill="#ea580c" stroke="#c2410c" stroke-width="1.5" />
          <circle cx="20" cy="11" r="6" fill="#ffffff" />
          <text x="20" y="14" text-anchor="middle" class="font-black text-[9px] fill-amber-950">2</text>
        </g>
        <g transform="translate(205, 50)">
          <polygon points="20,0 40,11 20,22 0,11" fill="#facc15" stroke="#ca8a04" stroke-width="1.5" />
          <polygon points="0,11 20,22 20,44 0,33" fill="#f97316" stroke="#ea580c" stroke-width="1.5" />
          <polygon points="20,22 40,11 40,33 20,44" fill="#ea580c" stroke="#c2410c" stroke-width="1.5" />
          <circle cx="20" cy="11" r="6" fill="#ffffff" />
          <text x="20" y="14" text-anchor="middle" class="font-black text-[9px] fill-amber-950">3</text>
        </g>

        <!-- Tier 1 (Top - 1 cube: idx 1) -->
        <g transform="translate(180, 10)">
          <polygon points="20,0 40,11 20,22 0,11" fill="#eab308" stroke="#a16207" stroke-width="1.5" />
          <polygon points="0,11 20,22 20,44 0,33" fill="#ea580c" stroke="#c2410c" stroke-width="1.5" />
          <polygon points="20,22 40,11 40,33 20,44" fill="#c2410c" stroke="#9a3412" stroke-width="1.5" />
          <circle cx="20" cy="11" r="6" fill="#ffffff" />
          <text x="20" y="14" text-anchor="middle" class="font-black text-[9px] fill-amber-950">1</text>
        </g>
      </svg>
    </div>

    <!-- ================================================================= -->
    <!-- 2. CÂN THĂNG BẰNG DƯA HẤU & QUẢ CÂN                              -->
    <!-- ================================================================= -->
    <div v-else-if="diagram.type === 'balance_scale'" class="w-full flex flex-col items-center">
      <svg viewBox="0 0 380 160" class="max-w-full h-36 sm:h-44 drop-shadow-sm">
        <!-- Stand Base -->
        <rect x="140" y="140" width="100" height="12" rx="4" fill="#475569" stroke="#1e293b" stroke-width="1.5" />
        <!-- Stand Pillar -->
        <rect x="186" y="45" width="8" height="95" fill="#64748b" stroke="#334155" stroke-width="1.5" />
        <!-- Fulcrum / Pivot -->
        <polygon points="190,40 182,52 198,52" fill="#f59e0b" stroke="#b45309" stroke-width="1.5" />
        <circle cx="190" cy="40" r="8" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5" />
        <line x1="190" y1="40" x2="190" y2="24" stroke="#dc2626" stroke-width="2" stroke-linecap="round" />

        <!-- Balance Beam (Horizontal) -->
        <line x1="60" y1="40" x2="320" y2="40" stroke="#0f172a" stroke-width="4" stroke-linecap="round" />

        <!-- Left Pan Strings & Pan -->
        <line x1="65" y1="40" x2="35" y2="95" stroke="#94a3b8" stroke-width="1.5" />
        <line x1="65" y1="40" x2="95" y2="95" stroke="#94a3b8" stroke-width="1.5" />
        <path d="M 25 95 Q 65 115 105 95 Z" fill="#94a3b8" stroke="#475569" stroke-width="1.5" />
        <!-- Watermelon on Left Pan -->
        <ellipse cx="65" cy="78" rx="24" ry="20" fill="#22c55e" stroke="#15803d" stroke-width="2.5" />
        <path d="M 52 62 Q 47 78 52 94" stroke="#15803d" stroke-width="2.5" fill="none" />
        <path d="M 65 58 Q 65 78 65 98" stroke="#15803d" stroke-width="2.5" fill="none" />
        <path d="M 78 62 Q 83 78 78 94" stroke="#15803d" stroke-width="2.5" fill="none" />
        <text x="65" y="82" text-anchor="middle" class="font-black text-[9px] fill-emerald-950">Dưa Hấu</text>

        <!-- Right Pan Strings & Pan -->
        <line x1="315" y1="40" x2="285" y2="95" stroke="#94a3b8" stroke-width="1.5" />
        <line x1="315" y1="40" x2="345" y2="95" stroke="#94a3b8" stroke-width="1.5" />
        <path d="M 275 95 Q 315 115 355 95 Z" fill="#94a3b8" stroke="#475569" stroke-width="1.5" />
        
        <!-- Weights on Right Pan -->
        <g transform="translate(283, 62)">
          <circle cx="9" cy="5" r="3.5" fill="none" stroke="#71717a" stroke-width="1.5" />
          <rect x="2" y="7" width="14" height="20" rx="3" fill="#a1a1aa" stroke="#52525b" stroke-width="1.5" />
          <text x="9" y="20" text-anchor="middle" class="font-black text-[8px] fill-zinc-900">{{ diagram.weight || 2 }}kg</text>
        </g>
        <g transform="translate(305, 62)">
          <circle cx="9" cy="5" r="3.5" fill="none" stroke="#71717a" stroke-width="1.5" />
          <rect x="2" y="7" width="14" height="20" rx="3" fill="#a1a1aa" stroke="#52525b" stroke-width="1.5" />
          <text x="9" y="20" text-anchor="middle" class="font-black text-[8px] fill-zinc-900">{{ diagram.weight || 2 }}kg</text>
        </g>
        <g transform="translate(327, 62)">
          <circle cx="9" cy="5" r="3.5" fill="none" stroke="#71717a" stroke-width="1.5" />
          <rect x="2" y="7" width="14" height="20" rx="3" fill="#a1a1aa" stroke="#52525b" stroke-width="1.5" />
          <text x="9" y="20" text-anchor="middle" class="font-black text-[8px] fill-zinc-900">{{ diagram.weight || 2 }}kg</text>
        </g>
      </svg>
      <div class="text-[11px] font-bold text-slate-500 italic">
        (Hai đĩa cân đang ở vị trí thăng bằng)
      </div>
    </div>

    <!-- ================================================================= -->
    <!-- 3. TOA TÀU QUY LUẬT DÃY SỐ                                        -->
    <!-- ================================================================= -->
    <div v-else-if="diagram.type === 'train_sequence'" class="w-full flex flex-col items-center">
      <svg viewBox="0 0 460 120" class="max-w-full h-28 sm:h-32 drop-shadow-sm">
        <!-- Railway Tracks -->
        <line x1="10" y1="98" x2="450" y2="98" stroke="#64748b" stroke-width="3" />
        <line x1="10" y1="105" x2="450" y2="105" stroke="#94a3b8" stroke-width="2.5" />
        <line v-for="t in 22" :key="'tie_'+t" :x1="t * 20" y1="94" :x2="t * 20" y2="110" stroke="#78350f" stroke-width="2.5" />

        <!-- Locomotive Engine (Left) -->
        <g transform="translate(15, 24)">
          <rect x="35" y="10" width="35" height="55" rx="4" fill="#dc2626" stroke="#991b1b" stroke-width="2" />
          <rect x="42" y="18" width="20" height="20" rx="3" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5" />
          <rect x="0" y="28" width="40" height="37" rx="6" fill="#2563eb" stroke="#1d4ed8" stroke-width="2" />
          <polygon points="10,28 8,10 22,10 20,28" fill="#1e293b" />
          <circle cx="15" cy="2" r="5" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
          <circle cx="28" cy="-5" r="7" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
          <circle cx="18" cy="68" r="9" fill="#0f172a" stroke="#e2e8f0" stroke-width="2" />
          <circle cx="52" cy="68" r="9" fill="#0f172a" stroke="#e2e8f0" stroke-width="2" />
          <circle cx="0" cy="45" r="4" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5" />
        </g>

        <!-- Connecting Chain -->
        <line x1="85" y1="72" x2="100" y2="72" stroke="#475569" stroke-width="2.5" />

        <!-- Carriages with Numbers -->
        <g 
          v-for="(num, idx) in (diagram.seq || [2, 4, 6, 8])" 
          :key="idx" 
          :transform="`translate(${100 + idx * 72}, 36)`"
        >
          <line x1="60" y1="36" x2="72" y2="36" stroke="#475569" stroke-width="2.5" />
          <rect 
            x="0" 
            y="5" 
            width="60" 
            height="48" 
            rx="8" 
            :fill="['#fef3c7', '#dcfce7', '#e0f2fe', '#fae8ff'][idx % 4]" 
            :stroke="['#d97706', '#16a34a', '#0284c7', '#9333ea'][idx % 4]" 
            stroke-width="2" 
          />
          <rect x="6" y="10" width="14" height="12" rx="2" fill="#ffffff" stroke="#94a3b8" stroke-width="1" />
          <rect x="40" y="10" width="14" height="12" rx="2" fill="#ffffff" stroke="#94a3b8" stroke-width="1" />
          <text x="30" y="38" text-anchor="middle" class="font-black text-xl fill-slate-900 font-mono">{{ num }}</text>
          <circle cx="15" cy="56" r="7" fill="#1e293b" stroke="#e2e8f0" stroke-width="1.5" />
          <circle cx="45" cy="56" r="7" fill="#1e293b" stroke="#e2e8f0" stroke-width="1.5" />
        </g>

        <!-- Final Missing Question Mark Wagon -->
        <g :transform="`translate(${100 + (diagram.seq || [2, 4, 6, 8]).length * 72}, 36)`">
          <rect x="0" y="5" width="60" height="48" rx="8" fill="#ffe4e6" stroke="#e11d48" stroke-width="2" stroke-dasharray="3 2" />
          <text x="30" y="38" text-anchor="middle" class="font-black text-2xl fill-rose-600 font-mono">?</text>
          <circle cx="15" cy="56" r="7" fill="#1e293b" stroke="#e2e8f0" stroke-width="1.5" />
          <circle cx="45" cy="56" r="7" fill="#1e293b" stroke="#e2e8f0" stroke-width="1.5" />
        </g>
      </svg>
    </div>

    <!-- ================================================================= -->
    <!-- 4. HÌNH VUÔNG 2 ĐƯỜNG CHÉO (HÌNH TAM GIÁC)                       -->
    <!-- ================================================================= -->
    <div v-else-if="diagram.type === 'square_diagonals'" class="w-full flex flex-col items-center">
      <svg viewBox="0 0 200 190" class="w-40 h-40 drop-shadow-sm">
        <polygon points="100,95 30,25 170,25" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5" />
        <polygon points="100,95 170,25 170,165" fill="#bbf7d0" stroke="#16a34a" stroke-width="1.5" />
        <polygon points="100,95 170,165 30,165" fill="#bae6fd" stroke="#0284c7" stroke-width="1.5" />
        <polygon points="100,95 30,165 30,25" fill="#fbcfe8" stroke="#db2777" stroke-width="1.5" />

        <rect x="30" y="25" width="140" height="140" fill="none" stroke="#334155" stroke-width="2.5" rx="4" />
        <line x1="30" y1="25" x2="170" y2="165" stroke="#334155" stroke-width="2" />
        <line x1="170" y1="25" x2="30" y2="165" stroke="#334155" stroke-width="2" />

        <circle cx="30" cy="25" r="3.5" fill="#0f172a" />
        <text x="18" y="25" class="font-black text-xs fill-slate-900">A</text>
        <circle cx="170" cy="25" r="3.5" fill="#0f172a" />
        <text x="178" y="25" class="font-black text-xs fill-slate-900">B</text>
        <circle cx="170" cy="165" r="3.5" fill="#0f172a" />
        <text x="178" y="172" class="font-black text-xs fill-slate-900">C</text>
        <circle cx="30" cy="165" r="3.5" fill="#0f172a" />
        <text x="18" y="172" class="font-black text-xs fill-slate-900">D</text>
        <circle cx="100" cy="95" r="3.5" fill="#dc2626" />
        <text x="100" y="88" text-anchor="middle" class="font-black text-xs fill-rose-700">O</text>
      </svg>
    </div>

    <!-- ================================================================= -->
    <!-- 5. HÌNH CHỮ NHẬT CẮT XIÊN LÀM 3 PHẦN                             -->
    <!-- ================================================================= -->
    <div v-else-if="diagram.type === 'composite_quadrilateral'" class="w-full flex flex-col items-center">
      <svg viewBox="0 0 320 150" class="max-w-full h-32 sm:h-36 drop-shadow-sm">
        <polygon points="30,20 100,20 80,130 30,130" fill="#f3e8ff" stroke="#7e22ce" stroke-width="2" />
        <polygon points="100,20 210,20 230,130 80,130" fill="#fef3c7" stroke="#b45309" stroke-width="2" />
        <polygon points="210,20 290,20 290,130 230,130" fill="#dcfce7" stroke="#15803d" stroke-width="2" />
        <rect x="30" y="20" width="260" height="110" fill="none" stroke="#1e293b" stroke-width="3" rx="6" />
      </svg>
    </div>

    <!-- ================================================================= -->
    <!-- 6. XẾP HÀNG TẬP THỂ DỤC (BẠN LAN Ở GIỮA)                          -->
    <!-- ================================================================= -->
    <div v-else-if="diagram.type === 'lineup'" class="w-full flex flex-col items-center">
      <div class="flex items-center justify-center flex-wrap gap-1 sm:gap-2 my-1 py-1.5 px-3 bg-sky-50 border border-sky-200 rounded-2xl">
        <span class="text-[11px] font-bold text-sky-800">ĐẦU HÀNG ➡️</span>
        
        <div class="flex items-center gap-1">
          <div 
            v-for="i in (diagram.front || 4)" 
            :key="'f_'+i" 
            class="w-6 h-9 sm:w-7 sm:h-10 bg-sky-200 border border-sky-400 rounded-lg flex flex-col items-center justify-center text-[9px] font-bold text-sky-900"
          >
            <span>👦</span>
            <span>{{ i }}</span>
          </div>
        </div>

        <div class="px-2 py-1 bg-amber-400 border border-amber-600 rounded-xl text-center shadow-xs">
          <div class="text-base">👧</div>
          <div class="text-[10px] font-black text-amber-950 whitespace-nowrap">{{ diagram.name || 'Lan' }}</div>
        </div>

        <div class="flex items-center gap-1">
          <div 
            v-for="i in (diagram.back || 5)" 
            :key="'b_'+i" 
            class="w-6 h-9 sm:w-7 sm:h-10 bg-emerald-200 border border-emerald-400 rounded-lg flex flex-col items-center justify-center text-[9px] font-bold text-emerald-900"
          >
            <span>👧</span>
            <span>{{ i }}</span>
          </div>
        </div>

        <span class="text-[11px] font-bold text-emerald-800">⬅️ CUỐI HÀNG</span>
      </div>
    </div>

    <!-- ================================================================= -->
    <!-- 7. CƯA KHÚC GỖ (TRỰC QUAN KHÚC GỖ VÀ VẾT CƯA - KHÔNG CÓ LỜI GIẢI) -->
    <!-- ================================================================= -->
    <div v-else-if="diagram.type === 'wood_cutting'" class="w-full flex flex-col items-center">
      <svg viewBox="0 0 400 110" class="max-w-full h-24 sm:h-28 drop-shadow-sm">
        <!-- Log Body (Wood Cylinder) -->
        <rect x="30" y="32" width="340" height="38" fill="#b45309" stroke="#78350f" stroke-width="2" rx="6" />
        <ellipse cx="30" cy="51" rx="8" ry="19" fill="#d97706" stroke="#78350f" stroke-width="2" />
        <ellipse cx="30" cy="51" rx="4" ry="9" fill="#f59e0b" />
        
        <!-- Cut Marks -->
        <g v-for="c in ((diagram.parts || 5) - 1)" :key="'cut_'+c">
          <line 
            :x1="30 + c * (340 / (diagram.parts || 5))" 
            y1="20" 
            :x2="30 + c * (340 / (diagram.parts || 5))" 
            y2="82" 
            stroke="#ef4444" 
            stroke-width="2" 
            stroke-dasharray="4 3" 
          />
          <text 
            :x="30 + c * (340 / (diagram.parts || 5))" 
            y="17" 
            text-anchor="middle" 
            class="text-sm"
          >
            🪚
          </text>
        </g>

        <!-- Segment labels -->
        <text 
          v-for="s in (diagram.parts || 5)" 
          :key="'seg_'+s" 
          :x="30 + (s - 0.5) * (340 / (diagram.parts || 5))" 
          y="56" 
          text-anchor="middle" 
          class="font-bold text-xs fill-amber-100"
        >
          Đoạn {{ s }}
        </text>
      </svg>
    </div>

    <!-- ================================================================= -->
    <!-- 8. ĐẾM CHÂN GÀ VÀ CHÓ (KHÔNG CÓ LỜI GIẢI ĐÁP SỐ)                 -->
    <!-- ================================================================= -->
    <div v-else-if="diagram.type === 'animals_legs'" class="w-full flex flex-col items-center">
      <div class="flex items-center justify-center gap-4 sm:gap-6 my-1">
        <div class="p-2.5 bg-amber-50 border border-amber-300 rounded-xl flex flex-col items-center text-center">
          <div class="text-2xl flex gap-1">
            <span v-for="i in (diagram.chickens || 3)" :key="'c_'+i">🐔</span>
          </div>
          <span class="mt-1 text-xs font-bold text-amber-900">{{ diagram.chickens || 3 }} con gà</span>
        </div>

        <div class="p-2.5 bg-emerald-50 border border-emerald-300 rounded-xl flex flex-col items-center text-center">
          <div class="text-2xl flex gap-1">
            <span v-for="i in (diagram.dogs || 2)" :key="'d_'+i">🐶</span>
          </div>
          <span class="mt-1 text-xs font-bold text-emerald-900">{{ diagram.dogs || 2 }} con chó</span>
        </div>
      </div>
    </div>

    <!-- ================================================================= -->
    <!-- 9. MẶT ĐỒNG HỒ THỜI GIAN                                          -->
    <!-- ================================================================= -->
    <div v-else-if="diagram.type === 'clock_face'" class="w-full flex flex-col items-center">
      <svg viewBox="0 0 130 130" class="w-28 h-28 drop-shadow-sm">
        <circle cx="65" cy="65" r="60" fill="#ffffff" stroke="#0284c7" stroke-width="4.5" />
        <circle cx="65" cy="65" r="54" fill="#f0f9ff" />
        
        <text x="65" y="24" text-anchor="middle" class="font-black text-xs fill-sky-950">12</text>
        <text x="105" y="69" text-anchor="middle" class="font-black text-xs fill-sky-950">3</text>
        <text x="65" y="112" text-anchor="middle" class="font-black text-xs fill-sky-950">6</text>
        <text x="24" y="69" text-anchor="middle" class="font-black text-xs fill-sky-950">9</text>

        <!-- Long Minute Hand (to 12) -->
        <line x1="65" y1="65" x2="65" y2="28" stroke="#0369a1" stroke-width="3" stroke-linecap="round" />
        <!-- Short Hour Hand -->
        <line 
          x1="65" 
          y1="65" 
          :x2="65 + 24 * Math.sin((diagram.hour || 9) * 30 * Math.PI / 180)" 
          :y2="65 - 24 * Math.cos((diagram.hour || 9) * 30 * Math.PI / 180)" 
          stroke="#ef4444" 
          stroke-width="4" 
          stroke-linecap="round" 
        />
        <circle cx="65" cy="65" r="4.5" fill="#f59e0b" stroke="#78350f" stroke-width="1.5" />
      </svg>
    </div>

    <!-- ================================================================= -->
    <!-- 10. TỜ LỊCH THỜI GIAN (KHÔNG TIẾT LỘ NGÀY TUẦN SAU)               -->
    <!-- ================================================================= -->
    <div v-else-if="diagram.type === 'calendar_day'" class="w-full flex flex-col items-center">
      <div class="flex items-center justify-center gap-4 sm:gap-6 my-1">
        <div class="w-24 bg-white border-2 border-rose-500 rounded-xl overflow-hidden shadow-xs flex flex-col items-center">
          <div class="w-full bg-rose-600 text-white text-center py-0.5 font-bold text-[11px]">
            {{ diagram.weekday || 'Thứ Ba' }}
          </div>
          <div class="py-2 text-2xl font-black text-slate-800">
            {{ diagram.day || 8 }}
          </div>
        </div>

        <div class="text-rose-500 text-xl font-bold">
          ➡️
        </div>

        <div class="w-24 bg-rose-50/70 border-2 border-dashed border-rose-400 rounded-xl overflow-hidden flex flex-col items-center">
          <div class="w-full bg-rose-400 text-white text-center py-0.5 font-bold text-[11px]">
            {{ diagram.weekday || 'Thứ Ba' }}
          </div>
          <div class="py-2 text-2xl font-black text-rose-500">
            ?
          </div>
        </div>
      </div>
    </div>

    <!-- ================================================================= -->
    <!-- 11. SO SÁNH CHIỀU CAO CON VẬT                                     -->
    <!-- ================================================================= -->
    <div v-else-if="diagram.type === 'animals_height'" class="w-full flex flex-col items-center">
      <div class="flex items-end justify-center gap-4 sm:gap-6 my-1">
        <div class="flex flex-col items-center">
          <span class="text-4xl">🐘</span>
          <div class="w-16 h-14 bg-amber-200 border border-amber-400 rounded-t-lg flex items-center justify-center">
            <span class="font-bold text-[11px] text-amber-950">Voi</span>
          </div>
        </div>
        <div class="flex flex-col items-center">
          <span class="text-3xl">🐅</span>
          <div class="w-16 h-10 bg-orange-200 border border-orange-400 rounded-t-lg flex items-center justify-center">
            <span class="font-bold text-[11px] text-orange-950">Hổ</span>
          </div>
        </div>
        <div class="flex flex-col items-center">
          <span class="text-2xl">🐻</span>
          <div class="w-16 h-6 bg-slate-200 border border-slate-400 rounded-t-lg flex items-center justify-center">
            <span class="font-bold text-[11px] text-slate-950">Gấu</span>
          </div>
        </div>
      </div>
    </div>

    <!-- ================================================================= -->
    <!-- 12. ĐỐ MẸO MÈO VÀ CHUỘT                                           -->
    <!-- ================================================================= -->
    <div v-else-if="diagram.type === 'cat_mouse'" class="w-full flex flex-col items-center">
      <div class="flex items-center justify-center gap-3 text-3xl my-1 p-2 bg-purple-50/70 border border-purple-200 rounded-xl">
        <span>🐱</span> <span>🐟</span> <span>🐭</span>
      </div>
    </div>

    <!-- ================================================================= -->
    <!-- 13. PHƯƠNG TRÌNH HOA QUẢ TƯ DUY (KHÔNG HIỂN THỊ LỜI GIẢI)         -->
    <!-- ================================================================= -->
    <div v-else-if="diagram.type === 'fruit_equation'" class="w-full flex flex-col items-center space-y-1.5">
      <div class="px-4 py-1.5 bg-amber-50 border border-amber-300 rounded-xl flex items-center justify-center gap-2 text-xl font-bold">
        <span>🍎</span> <span>+</span> <span>🍎</span> <span>=</span> <span class="text-rose-600 font-mono">{{ diagram.sumApples || 12 }}</span>
      </div>
      <div class="px-4 py-1.5 bg-amber-50 border border-amber-300 rounded-xl flex items-center justify-center gap-2 text-xl font-bold">
        <span>🍎</span> <span>+</span> <span>🍌</span> <span>=</span> <span class="text-amber-600 font-mono">{{ diagram.sumMixed || 11 }}</span>
      </div>
    </div>

    <!-- ================================================================= -->
    <!-- 14. CHIA KẸO (KHÔNG TIẾT LỘ SỐ KẸO THỪA)                          -->
    <!-- ================================================================= -->
    <div v-else-if="diagram.type === 'candy_sharing'" class="w-full flex flex-col items-center">
      <div class="flex items-center justify-center gap-2 text-2xl my-1 p-2 bg-pink-50/70 border border-pink-200 rounded-xl">
        <span>🍬</span> <span>🍭</span> <span>🍬</span> <span>🍫</span>
      </div>
    </div>

    <!-- ================================================================= -->
    <!-- CÁC HÌNH HỌC KHÁC: SPLIT RECT, APEX TRIANGLE, POLYLINE            -->
    <!-- ================================================================= -->
    <svg 
      v-else-if="diagram.type === 'split_rect'" 
      :viewBox="`0 0 ${diagram.count * 80 + 40} 120`" 
      class="max-w-full h-24 sm:h-30 drop-shadow-sm"
    >
      <g transform="translate(20, 20)">
        <rect
          x="0"
          y="0"
          :width="diagram.count * 80"
          height="80"
          fill="#fef3c7"
          stroke="#b45309"
          stroke-width="3"
          rx="10"
        />
        <line
          v-for="i in diagram.count - 1"
          :key="i"
          :x1="i * 80"
          y1="0"
          :x2="i * 80"
          y2="80"
          stroke="#b45309"
          stroke-width="2.5"
        />
        <text
          v-for="i in diagram.count"
          :key="'txt_' + i"
          :x="(i - 1) * 80 + 40"
          y="48"
          text-anchor="middle"
          dominant-baseline="middle"
          class="font-bold text-xl fill-amber-900"
        >
          ({{ i }})
        </text>
      </g>
    </svg>

    <svg 
      v-else-if="diagram.type === 'apex_triangle'" 
      viewBox="0 0 360 210" 
      class="max-w-full h-36 sm:h-44 drop-shadow-sm"
    >
      <polygon
        points="180,25 40,175 320,175"
        fill="#e0f2fe"
        stroke="#0369a1"
        stroke-width="3"
        stroke-linejoin="round"
      />
      <line
        v-for="(seg, idx) in internalLines"
        :key="idx"
        x1="180"
        y1="25"
        :x2="seg.x"
        y2="175"
        stroke="#0369a1"
        stroke-width="2"
      />
      <circle cx="180" cy="25" r="4" fill="#0284c7" />
      <text x="180" y="14" text-anchor="middle" class="font-black text-xs fill-sky-950">A</text>
      <circle cx="40" cy="175" r="4" fill="#0284c7" />
      <text x="35" y="196" text-anchor="middle" class="font-black text-xs fill-sky-950">B</text>
      <circle cx="320" cy="175" r="4" fill="#0284c7" />
      <text x="325" y="196" text-anchor="middle" class="font-black text-xs fill-sky-950">C</text>
      <g v-for="(seg, idx) in internalLines" :key="'p_' + idx">
        <circle :cx="seg.x" cy="175" r="3.5" fill="#0284c7" />
        <text :x="seg.x" y="196" text-anchor="middle" class="font-bold text-xs fill-sky-900">{{ seg.label }}</text>
      </g>
    </svg>

    <svg 
      v-else-if="diagram.type === 'triangle_perimeter'" 
      viewBox="0 0 340 210" 
      class="max-w-full h-36 sm:h-44 drop-shadow-sm"
    >
      <polygon
        points="140,35 50,175 290,175"
        fill="#ecfdf5"
        stroke="#047857"
        stroke-width="3"
        stroke-linejoin="round"
      />
      <text x="140" y="24" text-anchor="middle" class="font-black text-xs fill-emerald-950">A</text>
      <text x="36" y="188" text-anchor="middle" class="font-black text-xs fill-emerald-950">B</text>
      <text x="305" y="188" text-anchor="middle" class="font-black text-xs fill-emerald-950">C</text>
      <rect x="65" y="85" width="65" height="22" rx="6" fill="#ffffff" stroke="#10b981" stroke-width="1.5" />
      <text x="97" y="100" text-anchor="middle" class="font-bold text-xs fill-emerald-900">{{ diagram.a }} {{ diagram.unit || 'cm' }}</text>
      <rect x="200" y="85" width="65" height="22" rx="6" fill="#ffffff" stroke="#10b981" stroke-width="1.5" />
      <text x="232" y="100" text-anchor="middle" class="font-bold text-xs fill-emerald-900">{{ diagram.b }} {{ diagram.unit || 'cm' }}</text>
      <rect x="135" y="182" width="65" height="22" rx="6" fill="#ffffff" stroke="#10b981" stroke-width="1.5" />
      <text x="167" y="197" text-anchor="middle" class="font-bold text-xs fill-emerald-900">{{ diagram.c }} {{ diagram.unit || 'cm' }}</text>
    </svg>

    <svg 
      v-else-if="diagram.type === 'polyline'" 
      viewBox="0 0 380 170" 
      class="max-w-full h-28 sm:h-36 drop-shadow-sm"
    >
      <polyline
        points="40,130 140,45 240,130 340,55"
        fill="none"
        stroke="#d97706"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <circle cx="40" cy="130" r="4.5" fill="#b45309" />
      <text x="40" y="152" text-anchor="middle" class="font-black text-xs fill-amber-950">A</text>
      <circle cx="140" cy="45" r="4.5" fill="#b45309" />
      <text x="140" y="30" text-anchor="middle" class="font-black text-xs fill-amber-950">B</text>
      <circle cx="240" cy="130" r="4.5" fill="#b45309" />
      <text x="240" y="152" text-anchor="middle" class="font-black text-xs fill-amber-950">C</text>
      <circle cx="340" cy="55" r="4.5" fill="#b45309" />
      <text x="340" y="40" text-anchor="middle" class="font-black text-xs fill-amber-950">D</text>
      <rect x="65" y="75" width="55" height="20" rx="5" fill="#ffffff" stroke="#f59e0b" stroke-width="1.5" />
      <text x="92" y="89" text-anchor="middle" class="font-bold text-xs fill-amber-900">{{ diagram.d1 }} cm</text>
      <rect x="165" y="98" width="55" height="20" rx="5" fill="#ffffff" stroke="#f59e0b" stroke-width="1.5" />
      <text x="192" y="112" text-anchor="middle" class="font-bold text-xs fill-amber-900">{{ diagram.d2 }} cm</text>
      <rect x="265" y="75" width="55" height="20" rx="5" fill="#ffffff" stroke="#f59e0b" stroke-width="1.5" />
      <text x="292" y="89" text-anchor="middle" class="font-bold text-xs fill-amber-900">{{ diagram.d3 }} cm</text>
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

// Calculates points along base for apex_triangle
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
