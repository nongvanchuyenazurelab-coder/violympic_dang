<template>
  <div class="my-4 flex flex-col items-center justify-center p-3 sm:p-5 bg-gradient-to-b from-amber-50/70 via-white to-sky-50/50 rounded-3xl border-2 border-amber-300 shadow-sm print:border-none print:shadow-none print:bg-white print:my-1 print:p-0 select-none">
    
    <div class="text-xs font-black text-amber-800 mb-2 flex items-center gap-1.5 print:hidden">
      <span class="text-base">📐</span> 
      <span>Hình vẽ minh họa trực quan cho học sinh lớp 2:</span>
    </div>

    <!-- ================================================================= -->
    <!-- 1. THÁP KHỐI LẬP PHƯƠNG 3D (10 KHỐI XẾP THÀNH 4 TẦNG)            -->
    <!-- ================================================================= -->
    <div v-if="diagram.type === 'cubes_stack'" class="w-full flex flex-col items-center">
      <svg viewBox="0 0 360 210" class="max-w-full h-44 sm:h-52 drop-shadow-md">
        <!-- Background pedestal / floor line -->
        <ellipse cx="180" cy="185" rx="140" ry="14" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="2" />
        
        <!-- Tier 4 (Bottom - 4 cubes: idx 7, 8, 9, 10) -->
        <!-- Cube 7: x=105, y=140 -->
        <g transform="translate(105, 135)">
          <polygon points="20,0 40,11 20,22 0,11" fill="#fef08a" stroke="#ca8a04" stroke-width="2" />
          <polygon points="0,11 20,22 20,44 0,33" fill="#fb923c" stroke="#ea580c" stroke-width="2" />
          <polygon points="20,22 40,11 40,33 20,44" fill="#f97316" stroke="#c2410c" stroke-width="2" />
          <circle cx="20" cy="11" r="7" fill="#ffffff" />
          <text x="20" y="14" text-anchor="middle" class="font-black text-[10px] fill-amber-950">7</text>
        </g>
        <!-- Cube 8: x=155, y=140 -->
        <g transform="translate(155, 135)">
          <polygon points="20,0 40,11 20,22 0,11" fill="#fef08a" stroke="#ca8a04" stroke-width="2" />
          <polygon points="0,11 20,22 20,44 0,33" fill="#fb923c" stroke="#ea580c" stroke-width="2" />
          <polygon points="20,22 40,11 40,33 20,44" fill="#f97316" stroke="#c2410c" stroke-width="2" />
          <circle cx="20" cy="11" r="7" fill="#ffffff" />
          <text x="20" y="14" text-anchor="middle" class="font-black text-[10px] fill-amber-950">8</text>
        </g>
        <!-- Cube 9: x=205, y=140 -->
        <g transform="translate(205, 135)">
          <polygon points="20,0 40,11 20,22 0,11" fill="#fef08a" stroke="#ca8a04" stroke-width="2" />
          <polygon points="0,11 20,22 20,44 0,33" fill="#fb923c" stroke="#ea580c" stroke-width="2" />
          <polygon points="20,22 40,11 40,33 20,44" fill="#f97316" stroke="#c2410c" stroke-width="2" />
          <circle cx="20" cy="11" r="7" fill="#ffffff" />
          <text x="20" y="14" text-anchor="middle" class="font-black text-[10px] fill-amber-950">9</text>
        </g>
        <!-- Cube 10: x=255, y=140 -->
        <g transform="translate(255, 135)">
          <polygon points="20,0 40,11 20,22 0,11" fill="#fef08a" stroke="#ca8a04" stroke-width="2" />
          <polygon points="0,11 20,22 20,44 0,33" fill="#fb923c" stroke="#ea580c" stroke-width="2" />
          <polygon points="20,22 40,11 40,33 20,44" fill="#f97316" stroke="#c2410c" stroke-width="2" />
          <circle cx="20" cy="11" r="7" fill="#ffffff" />
          <text x="20" y="14" text-anchor="middle" class="font-black text-[10px] fill-amber-950">10</text>
        </g>

        <!-- Tier 3 (Middle-lower - 3 cubes: idx 4, 5, 6) -->
        <!-- Cube 4: x=130, y=98 -->
        <g transform="translate(130, 95)">
          <polygon points="20,0 40,11 20,22 0,11" fill="#fde047" stroke="#ca8a04" stroke-width="2" />
          <polygon points="0,11 20,22 20,44 0,33" fill="#fb923c" stroke="#ea580c" stroke-width="2" />
          <polygon points="20,22 40,11 40,33 20,44" fill="#f97316" stroke="#c2410c" stroke-width="2" />
          <circle cx="20" cy="11" r="7" fill="#ffffff" />
          <text x="20" y="14" text-anchor="middle" class="font-black text-[10px] fill-amber-950">4</text>
        </g>
        <!-- Cube 5: x=180, y=98 -->
        <g transform="translate(180, 95)">
          <polygon points="20,0 40,11 20,22 0,11" fill="#fde047" stroke="#ca8a04" stroke-width="2" />
          <polygon points="0,11 20,22 20,44 0,33" fill="#fb923c" stroke="#ea580c" stroke-width="2" />
          <polygon points="20,22 40,11 40,33 20,44" fill="#f97316" stroke="#c2410c" stroke-width="2" />
          <circle cx="20" cy="11" r="7" fill="#ffffff" />
          <text x="20" y="14" text-anchor="middle" class="font-black text-[10px] fill-amber-950">5</text>
        </g>
        <!-- Cube 6: x=230, y=98 -->
        <g transform="translate(230, 95)">
          <polygon points="20,0 40,11 20,22 0,11" fill="#fde047" stroke="#ca8a04" stroke-width="2" />
          <polygon points="0,11 20,22 20,44 0,33" fill="#fb923c" stroke="#ea580c" stroke-width="2" />
          <polygon points="20,22 40,11 40,33 20,44" fill="#f97316" stroke="#c2410c" stroke-width="2" />
          <circle cx="20" cy="11" r="7" fill="#ffffff" />
          <text x="20" y="14" text-anchor="middle" class="font-black text-[10px] fill-amber-950">6</text>
        </g>

        <!-- Tier 2 (Middle-upper - 2 cubes: idx 2, 3) -->
        <!-- Cube 2: x=155, y=55 -->
        <g transform="translate(155, 55)">
          <polygon points="20,0 40,11 20,22 0,11" fill="#facc15" stroke="#ca8a04" stroke-width="2" />
          <polygon points="0,11 20,22 20,44 0,33" fill="#f97316" stroke="#ea580c" stroke-width="2" />
          <polygon points="20,22 40,11 40,33 20,44" fill="#ea580c" stroke="#c2410c" stroke-width="2" />
          <circle cx="20" cy="11" r="7" fill="#ffffff" />
          <text x="20" y="14" text-anchor="middle" class="font-black text-[10px] fill-amber-950">2</text>
        </g>
        <!-- Cube 3: x=205, y=55 -->
        <g transform="translate(205, 55)">
          <polygon points="20,0 40,11 20,22 0,11" fill="#facc15" stroke="#ca8a04" stroke-width="2" />
          <polygon points="0,11 20,22 20,44 0,33" fill="#f97316" stroke="#ea580c" stroke-width="2" />
          <polygon points="20,22 40,11 40,33 20,44" fill="#ea580c" stroke="#c2410c" stroke-width="2" />
          <circle cx="20" cy="11" r="7" fill="#ffffff" />
          <text x="20" y="14" text-anchor="middle" class="font-black text-[10px] fill-amber-950">3</text>
        </g>

        <!-- Tier 1 (Top - 1 cube: idx 1) -->
        <!-- Cube 1: x=180, y=15 -->
        <g transform="translate(180, 15)">
          <polygon points="20,0 40,11 20,22 0,11" fill="#eab308" stroke="#a16207" stroke-width="2" />
          <polygon points="0,11 20,22 20,44 0,33" fill="#ea580c" stroke="#c2410c" stroke-width="2" />
          <polygon points="20,22 40,11 40,33 20,44" fill="#c2410c" stroke="#9a3412" stroke-width="2" />
          <circle cx="20" cy="11" r="7" fill="#ffffff" />
          <text x="20" y="14" text-anchor="middle" class="font-black text-[10px] fill-amber-950">1</text>
        </g>

        <!-- Left brackets showing tier levels -->
        <text x="80" y="38" text-anchor="end" class="font-bold text-[10px] fill-slate-500">Tầng 1 (1 khối)</text>
        <text x="80" y="78" text-anchor="end" class="font-bold text-[10px] fill-slate-500">Tầng 2 (2 khối)</text>
        <text x="80" y="118" text-anchor="end" class="font-bold text-[10px] fill-slate-500">Tầng 3 (3 khối)</text>
        <text x="80" y="158" text-anchor="end" class="font-bold text-[10px] fill-slate-500">Tầng 4 (4 khối)</text>
      </svg>
      <div class="mt-1 px-3 py-1 bg-amber-100/90 border border-amber-300 rounded-xl text-center text-xs font-bold text-amber-900">
        Tháp gồm 4 tầng: <b>1 + 2 + 3 + 4 = 10 khối lập phương</b> • Lấy đi 4 khối thì còn lại đúng 6 khối!
      </div>
    </div>

    <!-- ================================================================= -->
    <!-- 2. CÂU ĐỐ CHỮ SỐ (HÀNG CHỤC & HÀNG ĐƠN VỊ - CÂU 13)               -->
    <!-- ================================================================= -->
    <div v-else-if="diagram.type === 'digit_riddle'" class="w-full flex flex-col items-center">
      <div class="flex items-center justify-center gap-3 sm:gap-6 my-2">
        <!-- Chữ số hàng chục -->
        <div class="flex flex-col items-center">
          <div class="w-16 h-20 sm:w-20 sm:h-24 bg-sky-100 border-3 border-sky-500 rounded-2xl flex items-center justify-center shadow-md">
            <span class="font-black text-2xl sm:text-3xl text-sky-800">{{ diagram.tenDigit || '?' }}</span>
          </div>
          <span class="mt-1 text-xs font-black text-sky-700 uppercase">Hàng Chục</span>
        </div>

        <!-- Biểu tượng liên kết -->
        <div class="flex flex-col items-center gap-1">
          <div class="px-2.5 py-1 bg-rose-100 border border-rose-300 rounded-full text-[11px] font-black text-rose-700 whitespace-nowrap">
            ➕ Tổng = {{ diagram.sum || 9 }}
          </div>
          <div class="px-2.5 py-1 bg-amber-100 border border-amber-300 rounded-full text-[11px] font-black text-amber-800 whitespace-nowrap">
            ➖ Hiệu = {{ diagram.diff || 3 }}
          </div>
        </div>

        <!-- Chữ số hàng đơn vị -->
        <div class="flex flex-col items-center">
          <div class="w-16 h-20 sm:w-20 sm:h-24 bg-emerald-100 border-3 border-emerald-500 rounded-2xl flex items-center justify-center shadow-md">
            <span class="font-black text-2xl sm:text-3xl text-emerald-800">{{ diagram.unitDigit || '?' }}</span>
          </div>
          <span class="mt-1 text-xs font-black text-emerald-700 uppercase">Hàng Đơn Vị</span>
        </div>
      </div>
      <div class="text-xs font-bold text-slate-600 text-center">
        Tìm 2 chữ số sao cho: <b>(Hàng chục + Đơn vị = {{ diagram.sum || 9 }})</b> và <b>(Hàng chục - Đơn vị = {{ diagram.diff || 3 }})</b>
      </div>
    </div>

    <!-- ================================================================= -->
    <!-- 3. CHIA KẸO CÓ DƯ CHO CÁC BẠN (CÂU 14)                            -->
    <!-- ================================================================= -->
    <div v-else-if="diagram.type === 'candy_sharing'" class="w-full flex flex-col items-center space-y-2">
      <!-- Hũ kẹo ban đầu -->
      <div class="flex items-center gap-2 px-3 py-1.5 bg-amber-100/80 border border-amber-300 rounded-2xl">
        <span class="text-xl">🍬</span>
        <span class="text-xs font-black text-amber-900">
          Tổng số kẹo ban đầu của cô giáo: <b>{{ diagram.total || 14 }} viên kẹo</b>
        </span>
      </div>

      <!-- 3 Bạn nhận kẹo -->
      <div class="grid grid-cols-3 gap-2 w-full max-w-sm">
        <div 
          v-for="(name, idx) in (diagram.students || ['Bạn An', 'Bạn Bình', 'Bạn Chi'])" 
          :key="idx"
          class="p-2 bg-sky-50 border-2 border-sky-300 rounded-2xl flex flex-col items-center text-center"
        >
          <span class="text-lg">🧒</span>
          <span class="text-[11px] font-black text-sky-900">{{ name }}</span>
          <div class="mt-1 text-xs text-amber-600 tracking-wider">
            🍬🍬🍬🍬
          </div>
          <span class="text-[10px] font-bold text-slate-500">({{ diagram.each || 4 }} viên)</span>
        </div>
      </div>

      <!-- Kẹo còn thừa -->
      <div class="px-4 py-1.5 bg-rose-50 border-2 border-rose-300 rounded-xl text-xs font-bold text-rose-800 flex items-center gap-1.5">
        <span>🎁</span>
        <span>Đã chia: 4 + 4 + 4 = 12 viên • <b>Còn thừa lại: {{ (diagram.total || 14) - 12 }} viên kẹo!</b></span>
      </div>
    </div>

    <!-- ================================================================= -->
    <!-- BÀI TOÁN TUỔI TÁC THEO THỜI GIAN (AGE LOGIC)                      -->
    <!-- ================================================================= -->
    <div v-else-if="diagram.type === 'age_logic'" class="w-full flex flex-col items-center space-y-2">
      <div class="grid grid-cols-2 gap-3 max-w-sm w-full my-1">
        <!-- Người 1 -->
        <div class="p-2.5 bg-sky-50 border-2 border-sky-300 rounded-2xl flex flex-col items-center text-center">
          <span class="text-2xl">👦</span>
          <span class="text-xs font-black text-sky-900">{{ diagram.person1 || 'Anh' }}</span>
          <div class="mt-1 flex items-center gap-1 text-[11px] font-bold text-slate-600">
            <span>Hiện nay: <b>{{ diagram.age1 || 8 }} tuổi</b></span>
          </div>
          <div class="mt-1 px-2 py-0.5 bg-sky-200 text-sky-950 rounded-lg text-[10px] font-black">
            + {{ diagram.years || 3 }} năm 👉 {{ (diagram.age1 || 8) + (diagram.years || 3) }} tuổi
          </div>
        </div>

        <!-- Người 2 -->
        <div class="p-2.5 bg-emerald-50 border-2 border-emerald-300 rounded-2xl flex flex-col items-center text-center">
          <span class="text-2xl">🧒</span>
          <span class="text-xs font-black text-emerald-900">{{ diagram.person2 || 'Em' }}</span>
          <div class="mt-1 flex items-center gap-1 text-[11px] font-bold text-slate-600">
            <span>Hiện nay: <b>{{ diagram.age2 || 5 }} tuổi</b></span>
          </div>
          <div class="mt-1 px-2 py-0.5 bg-emerald-200 text-emerald-950 rounded-lg text-[10px] font-black">
            + {{ diagram.years || 3 }} năm 👉 {{ (diagram.age2 || 5) + (diagram.years || 3) }} tuổi
          </div>
        </div>
      </div>
      <div class="px-3 py-1 bg-amber-100 border border-amber-300 rounded-xl text-center text-xs font-bold text-amber-900">
        Sau {{ diagram.years || 3 }} năm: Cả 2 người đều tăng thêm {{ diagram.years || 3 }} tuổi!
      </div>
    </div>

    <!-- ================================================================= -->
    <!-- 4. CÂN THĂNG BẰNG DƯA HẤU & QUẢ CÂN (SVG CHI TIẾT TRỰC QUAN)     -->
    <!-- ================================================================= -->
    <div v-else-if="diagram.type === 'balance_scale'" class="w-full flex flex-col items-center">
      <svg viewBox="0 0 380 180" class="max-w-full h-40 sm:h-48 drop-shadow-md">
        <!-- Stand Base -->
        <rect x="140" y="155" width="100" height="15" rx="5" fill="#475569" stroke="#1e293b" stroke-width="2" />
        <!-- Stand Pillar -->
        <rect x="185" y="45" width="10" height="110" fill="#64748b" stroke="#334155" stroke-width="2" />
        <!-- Fulcrum / Pivot -->
        <polygon points="190,40 180,55 200,55" fill="#f59e0b" stroke="#b45309" stroke-width="2" />
        <!-- Balance Pointer Dial -->
        <circle cx="190" cy="40" r="10" fill="#fef08a" stroke="#ca8a04" stroke-width="2" />
        <line x1="190" y1="40" x2="190" y2="22" stroke="#dc2626" stroke-width="2.5" stroke-linecap="round" />

        <!-- Balance Beam (Horizontal) -->
        <line x1="60" y1="40" x2="320" y2="40" stroke="#0f172a" stroke-width="4.5" stroke-linecap="round" />

        <!-- Left Pan Strings & Pan -->
        <line x1="65" y1="40" x2="35" y2="105" stroke="#94a3b8" stroke-width="1.8" />
        <line x1="65" y1="40" x2="95" y2="105" stroke="#94a3b8" stroke-width="1.8" />
        <path d="M 25 105 Q 65 125 105 105 Z" fill="#94a3b8" stroke="#475569" stroke-width="2" />
        <!-- Watermelon on Left Pan -->
        <ellipse cx="65" cy="85" rx="26" ry="22" fill="#22c55e" stroke="#15803d" stroke-width="3" />
        <!-- Watermelon stripes -->
        <path d="M 50 67 Q 45 85 50 103" stroke="#15803d" stroke-width="3" fill="none" />
        <path d="M 65 63 Q 65 85 65 107" stroke="#15803d" stroke-width="3" fill="none" />
        <path d="M 80 67 Q 85 85 80 103" stroke="#15803d" stroke-width="3" fill="none" />
        <text x="65" y="89" text-anchor="middle" class="font-black text-[9px] fill-emerald-950">1 Quả Dưa</text>

        <!-- Right Pan Strings & Pan -->
        <line x1="315" y1="40" x2="285" y2="105" stroke="#94a3b8" stroke-width="1.8" />
        <line x1="315" y1="40" x2="345" y2="105" stroke="#94a3b8" stroke-width="1.8" />
        <path d="M 275 105 Q 315 125 355 105 Z" fill="#94a3b8" stroke="#475569" stroke-width="2" />
        
        <!-- Weights on Right Pan (3 weights of 2kg) -->
        <g transform="translate(282, 70)">
          <!-- Weight 1 -->
          <circle cx="10" cy="5" r="4" fill="none" stroke="#71717a" stroke-width="2" />
          <rect x="2" y="8" width="16" height="22" rx="3" fill="#a1a1aa" stroke="#52525b" stroke-width="1.5" />
          <text x="10" y="22" text-anchor="middle" class="font-black text-[8px] fill-zinc-900">{{ diagram.weight || 2 }}k</text>
        </g>
        <g transform="translate(305, 70)">
          <!-- Weight 2 -->
          <circle cx="10" cy="5" r="4" fill="none" stroke="#71717a" stroke-width="2" />
          <rect x="2" y="8" width="16" height="22" rx="3" fill="#a1a1aa" stroke="#52525b" stroke-width="1.5" />
          <text x="10" y="22" text-anchor="middle" class="font-black text-[8px] fill-zinc-900">{{ diagram.weight || 2 }}k</text>
        </g>
        <g transform="translate(328, 70)">
          <!-- Weight 3 -->
          <circle cx="10" cy="5" r="4" fill="none" stroke="#71717a" stroke-width="2" />
          <rect x="2" y="8" width="16" height="22" rx="3" fill="#a1a1aa" stroke="#52525b" stroke-width="1.5" />
          <text x="10" y="22" text-anchor="middle" class="font-black text-[8px] fill-zinc-900">{{ diagram.weight || 2 }}k</text>
        </g>
      </svg>
      <div class="mt-1 px-4 py-1.5 bg-emerald-100 border border-emerald-300 rounded-xl text-center text-xs font-bold text-emerald-900">
        ⚖️ Hai đĩa cân thăng bằng: <b>1 quả dưa hấu = 2kg + 2kg + 2kg = 6kg</b>
      </div>
    </div>

    <!-- ================================================================= -->
    <!-- 5. TOA TÀU QUY LUẬT DÃY SỐ (SVG ĐOÀN TÀU HOẠT HÌNH)               -->
    <!-- ================================================================= -->
    <div v-else-if="diagram.type === 'train_sequence'" class="w-full flex flex-col items-center">
      <svg viewBox="0 0 460 130" class="max-w-full h-32 sm:h-36 drop-shadow-md">
        <!-- Railway Tracks -->
        <line x1="10" y1="105" x2="450" y2="105" stroke="#64748b" stroke-width="4" />
        <line x1="10" y1="112" x2="450" y2="112" stroke="#94a3b8" stroke-width="3" />
        <line v-for="t in 22" :key="'tie_'+t" :x1="t * 20" y1="100" :x2="t * 20" y2="117" stroke="#78350f" stroke-width="3" />

        <!-- Locomotive Engine (Left) -->
        <g transform="translate(15, 30)">
          <!-- Cabin -->
          <rect x="35" y="10" width="35" height="55" rx="4" fill="#dc2626" stroke="#991b1b" stroke-width="2" />
          <rect x="42" y="18" width="20" height="20" rx="3" fill="#e0f2fe" stroke="#0284c7" stroke-width="1.5" />
          <!-- Boiler body -->
          <rect x="0" y="28" width="40" height="37" rx="6" fill="#2563eb" stroke="#1d4ed8" stroke-width="2" />
          <!-- Chimney / Smokestack -->
          <polygon points="10,28 8,10 22,10 20,28" fill="#1e293b" />
          <!-- Steam puffs -->
          <circle cx="15" cy="2" r="5" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
          <circle cx="28" cy="-5" r="7" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5" />
          <!-- Wheels -->
          <circle cx="18" cy="68" r="9" fill="#0f172a" stroke="#e2e8f0" stroke-width="2" />
          <circle cx="52" cy="68" r="9" fill="#0f172a" stroke="#e2e8f0" stroke-width="2" />
          <!-- Headlight -->
          <circle cx="0" cy="45" r="4" fill="#fef08a" stroke="#ca8a04" stroke-width="1.5" />
        </g>

        <!-- Connecting Chain -->
        <line x1="85" y1="78" x2="100" y2="78" stroke="#475569" stroke-width="3" />

        <!-- Carriages with Numbers -->
        <g 
          v-for="(num, idx) in (diagram.seq || [2, 4, 6, 8])" 
          :key="idx" 
          :transform="`translate(${100 + idx * 72}, 42)`"
        >
          <!-- Wagon Coupler to next -->
          <line x1="60" y1="36" x2="72" y2="36" stroke="#475569" stroke-width="3" />
          <!-- Wagon Body -->
          <rect 
            x="0" 
            y="5" 
            width="60" 
            height="48" 
            rx="8" 
            :fill="['#fef3c7', '#dcfce7', '#e0f2fe', '#fae8ff'][idx % 4]" 
            :stroke="['#d97706', '#16a34a', '#0284c7', '#9333ea'][idx % 4]" 
            stroke-width="2.5" 
          />
          <!-- Wagon Window -->
          <rect x="6" y="10" width="14" height="12" rx="2" fill="#ffffff" stroke="#94a3b8" stroke-width="1" />
          <rect x="40" y="10" width="14" height="12" rx="2" fill="#ffffff" stroke="#94a3b8" stroke-width="1" />
          <!-- Wagon Number -->
          <text x="30" y="38" text-anchor="middle" class="font-black text-xl fill-slate-900 font-mono">{{ num }}</text>
          <!-- Wheels -->
          <circle cx="15" cy="56" r="7" fill="#1e293b" stroke="#e2e8f0" stroke-width="1.5" />
          <circle cx="45" cy="56" r="7" fill="#1e293b" stroke="#e2e8f0" stroke-width="1.5" />
        </g>

        <!-- Final Missing Question Mark Wagon -->
        <g :transform="`translate(${100 + (diagram.seq || [2, 4, 6, 8]).length * 72}, 42)`">
          <rect x="0" y="5" width="60" height="48" rx="8" fill="#ffe4e6" stroke="#e11d48" stroke-width="2.5" stroke-dasharray="3 2" />
          <text x="30" y="38" text-anchor="middle" class="font-black text-2xl fill-rose-600 font-mono">?</text>
          <circle cx="15" cy="56" r="7" fill="#1e293b" stroke="#e2e8f0" stroke-width="1.5" />
          <circle cx="45" cy="56" r="7" fill="#1e293b" stroke="#e2e8f0" stroke-width="1.5" />
        </g>
      </svg>
      <div class="mt-1 text-xs font-bold text-slate-600 text-center">
        🚂 Quan sát quy luật cộng thêm giữa các toa tàu để tìm số ở toa mang dấu <b>(?)</b>
      </div>
    </div>

    <!-- ================================================================= -->
    <!-- 6. HÌNH VUÔNG 2 ĐƯỜNG CHÉO (8 TAM GIÁC PHÂN BIỆT 4 MÀU RÕ RÀNG)    -->
    <!-- ================================================================= -->
    <div v-else-if="diagram.type === 'square_diagonals'" class="w-full flex flex-col items-center">
      <svg viewBox="0 0 240 210" class="w-48 h-44 drop-shadow-md">
        <!-- 4 Small colored triangles -->
        <!-- Triangle 1 (Top): O(120,100), A(40,20), B(200,20) -->
        <polygon points="120,100 40,20 200,20" fill="#fef08a" stroke="#ca8a04" stroke-width="2" />
        <text x="120" y="50" text-anchor="middle" class="font-black text-sm fill-amber-900">(1)</text>

        <!-- Triangle 2 (Right): O(120,100), B(200,20), C(200,180) -->
        <polygon points="120,100 200,20 200,180" fill="#bbf7d0" stroke="#16a34a" stroke-width="2" />
        <text x="165" y="105" text-anchor="middle" class="font-black text-sm fill-emerald-900">(2)</text>

        <!-- Triangle 3 (Bottom): O(120,100), C(200,180), D(40,180) -->
        <polygon points="120,100 200,180 40,180" fill="#bae6fd" stroke="#0284c7" stroke-width="2" />
        <text x="120" y="155" text-anchor="middle" class="font-black text-sm fill-sky-900">(3)</text>

        <!-- Triangle 4 (Left): O(120,100), D(40,180), A(40,20) -->
        <polygon points="120,100 40,180 40,20" fill="#fbcfe8" stroke="#db2777" stroke-width="2" />
        <text x="75" y="105" text-anchor="middle" class="font-black text-sm fill-pink-900">(4)</text>

        <!-- Outer square border -->
        <rect x="40" y="20" width="160" height="160" fill="none" stroke="#334155" stroke-width="3" rx="4" />
        <!-- Diagonals -->
        <line x1="40" y1="20" x2="200" y2="180" stroke="#334155" stroke-width="2.5" />
        <line x1="200" y1="20" x2="40" y2="180" stroke="#334155" stroke-width="2.5" />

        <!-- Vertices labels -->
        <circle cx="40" cy="20" r="4" fill="#0f172a" />
        <text x="26" y="20" class="font-black text-xs fill-slate-900">A</text>
        <circle cx="200" cy="20" r="4" fill="#0f172a" />
        <text x="208" y="20" class="font-black text-xs fill-slate-900">B</text>
        <circle cx="200" cy="180" r="4" fill="#0f172a" />
        <text x="208" y="188" class="font-black text-xs fill-slate-900">C</text>
        <circle cx="40" cy="180" r="4" fill="#0f172a" />
        <text x="26" y="188" class="font-black text-xs fill-slate-900">D</text>
        <circle cx="120" cy="100" r="4" fill="#dc2626" />
        <text x="120" y="93" text-anchor="middle" class="font-black text-xs fill-rose-700">O</text>
      </svg>
      <div class="mt-1 px-3 py-1 bg-amber-100 border border-amber-300 rounded-xl text-center text-xs font-bold text-amber-900">
        Gồm <b>4 tam giác đơn</b> (1, 2, 3, 4) + <b>4 tam giác ghép đôi</b> = <b>8 hình tam giác tất cả!</b>
      </div>
    </div>

    <!-- ================================================================= -->
    <!-- 7. HÌNH CHỮ NHẬT CẮT XIÊN LÀM 3 PHẦN (6 TỨ GIÁC)                  -->
    <!-- ================================================================= -->
    <div v-else-if="diagram.type === 'composite_quadrilateral'" class="w-full flex flex-col items-center">
      <svg viewBox="0 0 320 160" class="max-w-full h-36 sm:h-40 drop-shadow-md">
        <!-- 3 Shaded Quadrilaterals -->
        <!-- Part 1 -->
        <polygon points="30,20 100,20 80,130 30,130" fill="#f3e8ff" stroke="#7e22ce" stroke-width="2.5" />
        <text x="58" y="80" class="font-black text-base fill-purple-900">(1)</text>

        <!-- Part 2 -->
        <polygon points="100,20 210,20 230,130 80,130" fill="#fef3c7" stroke="#b45309" stroke-width="2.5" />
        <text x="150" y="80" class="font-black text-base fill-amber-900">(2)</text>

        <!-- Part 3 -->
        <polygon points="210,20 290,20 290,130 230,130" fill="#dcfce7" stroke="#15803d" stroke-width="2.5" />
        <text x="252" y="80" class="font-black text-base fill-emerald-900">(3)</text>

        <!-- Outer rectangle border -->
        <rect x="30" y="20" width="260" height="110" fill="none" stroke="#1e293b" stroke-width="3.5" rx="6" />
      </svg>
      <div class="mt-1 px-3 py-1 bg-purple-100 border border-purple-300 rounded-xl text-center text-xs font-bold text-purple-900">
        3 tứ giác đơn (1, 2, 3) + 2 tứ giác đôi (1+2, 2+3) + 1 tứ giác lớn (1+2+3) = <b>6 hình tứ giác!</b>
      </div>
    </div>

    <!-- ================================================================= -->
    <!-- 8. XẾP HÀNG TẬP THỂ DỤC (BẠN LAN Ở GIỮA)                          -->
    <!-- ================================================================= -->
    <div v-else-if="diagram.type === 'lineup'" class="w-full flex flex-col items-center">
      <div class="flex items-center justify-center flex-wrap gap-1 sm:gap-2 my-2 py-2 px-4 bg-sky-50 border-2 border-sky-300 rounded-3xl">
        <span class="text-xs font-black text-sky-800">ĐẦU HÀNG ➡️</span>
        
        <!-- Front students -->
        <div class="flex items-center gap-1">
          <div 
            v-for="i in (diagram.front || 4)" 
            :key="'f_'+i" 
            class="w-7 h-11 sm:w-8 sm:h-12 bg-sky-200 border border-sky-400 rounded-xl flex flex-col items-center justify-center text-[10px] font-black text-sky-900"
          >
            <span>👦</span>
            <span>{{ i }}</span>
          </div>
        </div>

        <!-- Lan prominently highlighted -->
        <div class="px-2.5 py-1.5 bg-gradient-to-r from-amber-400 to-orange-400 border-2 border-amber-600 rounded-2xl text-center shadow-md animate-bounce-gentle">
          <div class="text-lg">👧</div>
          <div class="text-[11px] font-black text-white whitespace-nowrap">⭐ {{ diagram.name || 'Lan' }}</div>
        </div>

        <!-- Back students -->
        <div class="flex items-center gap-1">
          <div 
            v-for="i in (diagram.back || 5)" 
            :key="'b_'+i" 
            class="w-7 h-11 sm:w-8 sm:h-12 bg-emerald-200 border border-emerald-400 rounded-xl flex flex-col items-center justify-center text-[10px] font-black text-emerald-900"
          >
            <span>👧</span>
            <span>{{ i }}</span>
          </div>
        </div>

        <span class="text-xs font-black text-emerald-800">⬅️ CUỐI HÀNG</span>
      </div>
      <div class="text-xs font-bold text-slate-600 text-center">
        {{ diagram.front || 4 }} bạn trước + bạn {{ diagram.name || 'Lan' }} (1 bạn) + {{ diagram.back || 5 }} bạn sau = <b>{{ (diagram.front || 4) + (diagram.back || 5) + 1 }} bạn tất cả</b>
      </div>
    </div>

    <!-- ================================================================= -->
    <!-- 9. CƯA KHÚC GỖ (TRỰC QUAN KHÚC GỖ VÀ NHÁT CƯA)                    -->
    <!-- ================================================================= -->
    <div v-else-if="diagram.type === 'wood_cutting'" class="w-full flex flex-col items-center">
      <svg viewBox="0 0 400 120" class="max-w-full h-28 sm:h-32 drop-shadow-md">
        <!-- Log Body (Wood Cylinder) -->
        <rect x="30" y="35" width="340" height="40" fill="#b45309" stroke="#78350f" stroke-width="2.5" rx="8" />
        <!-- Wood Rings Left End -->
        <ellipse cx="30" cy="55" rx="8" ry="20" fill="#d97706" stroke="#78350f" stroke-width="2" />
        <ellipse cx="30" cy="55" rx="4" ry="10" fill="#f59e0b" />
        
        <!-- Cut Marks (4 Cuts for 5 parts) -->
        <g v-for="c in ((diagram.parts || 5) - 1)" :key="'cut_'+c">
          <!-- Cut position -->
          <line 
            :x1="30 + c * (340 / (diagram.parts || 5))" 
            y1="20" 
            :x2="30 + c * (340 / (diagram.parts || 5))" 
            y2="90" 
            stroke="#ef4444" 
            stroke-width="2.5" 
            stroke-dasharray="4 3" 
          />
          <!-- Saw Icon above cut -->
          <text 
            :x="30 + c * (340 / (diagram.parts || 5))" 
            y="18" 
            text-anchor="middle" 
            class="text-base"
          >
            🪚
          </text>
        </g>

        <!-- Segment labels below log -->
        <text 
          v-for="s in (diagram.parts || 5)" 
          :key="'seg_'+s" 
          :x="30 + (s - 0.5) * (340 / (diagram.parts || 5))" 
          y="60" 
          text-anchor="middle" 
          class="font-black text-xs fill-amber-100"
        >
          Khúc {{ s }}
        </text>
      </svg>
      <div class="mt-1 px-3 py-1 bg-amber-100 border border-amber-300 rounded-xl text-center text-xs font-bold text-amber-900">
        🪵 Để có <b>{{ diagram.parts || 5 }} khúc gỗ</b>, cần thực hiện đúng <b>{{ (diagram.parts || 5) - 1 }} lần cưa</b>!
      </div>
    </div>

    <!-- ================================================================= -->
    <!-- 10. ĐẾM CHÂN GÀ VÀ CHÓ (TRỰC QUAN GÀ 2 CHÂN, CHÓ 4 CHÂN)         -->
    <!-- ================================================================= -->
    <div v-else-if="diagram.type === 'animals_legs'" class="w-full flex flex-col items-center">
      <div class="flex items-center justify-center gap-4 sm:gap-8 my-2">
        <!-- Gà: 2 chân -->
        <div class="p-3 bg-amber-50 border-2 border-amber-300 rounded-2xl flex flex-col items-center text-center">
          <div class="text-3xl flex gap-1">
            <span v-for="i in (diagram.chickens || 3)" :key="'c_'+i">🐔</span>
          </div>
          <span class="mt-1 text-xs font-black text-amber-900">{{ diagram.chickens || 3 }} con gà</span>
          <span class="text-[11px] font-bold text-amber-700">Mỗi con có 2 chân 👉 {{ (diagram.chickens || 3) * 2 }} chân</span>
        </div>

        <span class="text-2xl font-black text-slate-400">➕</span>

        <!-- Chó: 4 chân -->
        <div class="p-3 bg-emerald-50 border-2 border-emerald-300 rounded-2xl flex flex-col items-center text-center">
          <div class="text-3xl flex gap-1">
            <span v-for="i in (diagram.dogs || 2)" :key="'d_'+i">🐶</span>
          </div>
          <span class="mt-1 text-xs font-black text-emerald-900">{{ diagram.dogs || 2 }} con chó</span>
          <span class="text-[11px] font-bold text-emerald-700">Mỗi con có 4 chân 👉 {{ (diagram.dogs || 2) * 4 }} chân</span>
        </div>
      </div>
      <div class="text-xs font-bold text-slate-600 text-center">
        Tổng số chân: <b>{{ (diagram.chickens || 3) * 2 }} (chân gà) + {{ (diagram.dogs || 2) * 4 }} (chân chó) = {{ (diagram.chickens || 3) * 2 + (diagram.dogs || 2) * 4 }} chân</b>
      </div>
    </div>

    <!-- ================================================================= -->
    <!-- 11. MẶT ĐỒNG HỒ TRỜI GIAN KIM NGẮN & KIM DÀI                     -->
    <!-- ================================================================= -->
    <div v-else-if="diagram.type === 'clock_face'" class="w-full flex flex-col items-center">
      <svg viewBox="0 0 140 140" class="w-32 h-32 drop-shadow-md">
        <!-- Outer Rim -->
        <circle cx="70" cy="70" r="64" fill="#ffffff" stroke="#0284c7" stroke-width="5" />
        <circle cx="70" cy="70" r="58" fill="#f0f9ff" />
        
        <!-- 12 Hour Numbers -->
        <text x="70" y="26" text-anchor="middle" class="font-black text-xs fill-sky-950">12</text>
        <text x="96" y="34" text-anchor="middle" class="font-black text-[10px] fill-sky-900">1</text>
        <text x="112" y="52" text-anchor="middle" class="font-black text-[10px] fill-sky-900">2</text>
        <text x="118" y="74" text-anchor="middle" class="font-black text-xs fill-sky-950">3</text>
        <text x="112" y="96" text-anchor="middle" class="font-black text-[10px] fill-sky-900">4</text>
        <text x="96" y="114" text-anchor="middle" class="font-black text-[10px] fill-sky-900">5</text>
        <text x="70" y="122" text-anchor="middle" class="font-black text-xs fill-sky-950">6</text>
        <text x="44" y="114" text-anchor="middle" class="font-black text-[10px] fill-sky-900">7</text>
        <text x="28" y="96" text-anchor="middle" class="font-black text-[10px] fill-sky-900">8</text>
        <text x="22" y="74" text-anchor="middle" class="font-black text-xs fill-sky-950">9</text>
        <text x="28" y="52" text-anchor="middle" class="font-black text-[10px] fill-sky-900">10</text>
        <text x="44" y="34" text-anchor="middle" class="font-black text-[10px] fill-sky-900">11</text>

        <!-- Long Minute Hand (to 12) -->
        <line x1="70" y1="70" x2="70" y2="30" stroke="#0369a1" stroke-width="3" stroke-linecap="round" />
        <!-- Short Hour Hand -->
        <line 
          x1="70" 
          y1="70" 
          :x2="70 + 26 * Math.sin((diagram.hour || 9) * 30 * Math.PI / 180)" 
          :y2="70 - 26 * Math.cos((diagram.hour || 9) * 30 * Math.PI / 180)" 
          stroke="#ef4444" 
          stroke-width="4.5" 
          stroke-linecap="round" 
        />
        <!-- Center Hub Pin -->
        <circle cx="70" cy="70" r="5" fill="#f59e0b" stroke="#78350f" stroke-width="1.5" />
      </svg>
      <div class="mt-1 px-3 py-1 bg-sky-100 border border-sky-300 rounded-xl text-xs font-bold text-sky-900">
        Kim ngắn chỉ số {{ diagram.hour || 9 }}, kim dài chỉ số 12 👉 <b>{{ diagram.hour || 9 }} giờ đúng</b>
      </div>
    </div>

    <!-- ================================================================= -->
    <!-- 12. TỜ LỊCH THỜI GIAN (BẢN VIỆT NAM CHU KỲ 7 NGÀY)                 -->
    <!-- ================================================================= -->
    <div v-else-if="diagram.type === 'calendar_day'" class="w-full flex flex-col items-center">
      <div class="flex items-center justify-center gap-4 sm:gap-8 my-2">
        <!-- Tờ lịch hôm nay -->
        <div class="w-28 sm:w-32 bg-white border-3 border-rose-500 rounded-2xl overflow-hidden shadow-md flex flex-col items-center">
          <div class="w-full bg-rose-600 text-white text-center py-1 font-black text-xs uppercase tracking-wider">
            {{ diagram.weekday || 'Thứ Ba' }}
          </div>
          <div class="py-2 sm:py-3 text-3xl sm:text-4xl font-black text-slate-800">
            {{ diagram.day || 8 }}
          </div>
          <div class="w-full bg-rose-50 text-[10px] text-rose-700 font-bold text-center py-0.5 border-t border-rose-200">
            HÔM NAY
          </div>
        </div>

        <!-- Mũi tên cộng 7 ngày -->
        <div class="flex flex-col items-center">
          <span class="text-xs font-black text-rose-600">+ 7 ngày (1 tuần)</span>
          <span class="text-2xl text-rose-500">➡️</span>
        </div>

        <!-- Tờ lịch tuần sau -->
        <div class="w-28 sm:w-32 bg-rose-50/60 border-2 border-dashed border-rose-400 rounded-2xl overflow-hidden flex flex-col items-center">
          <div class="w-full bg-rose-400 text-white text-center py-1 font-black text-xs uppercase tracking-wider">
            {{ diagram.weekday || 'Thứ Ba' }}
          </div>
          <div class="py-2 sm:py-3 text-3xl sm:text-4xl font-black text-rose-600">
            {{ (diagram.day || 8) + 7 }}
          </div>
          <div class="w-full bg-rose-100 text-[10px] text-rose-800 font-bold text-center py-0.5">
            TUẦN SAU
          </div>
        </div>
      </div>
      <div class="text-xs font-bold text-slate-600 text-center">
        Một tuần có 7 ngày. {{ diagram.weekday || 'Thứ Ba' }} tuần sau sẽ là ngày: <b>{{ diagram.day || 8 }} + 7 = {{ (diagram.day || 8) + 7 }}</b>
      </div>
    </div>

    <!-- ================================================================= -->
    <!-- 13. SO SÁNH CHIỀU CAO CON VẬT (BỤC CAO THẤP BẮC CẦU)              -->
    <!-- ================================================================= -->
    <div v-else-if="diagram.type === 'animals_height'" class="w-full flex flex-col items-center">
      <div class="flex items-end justify-center gap-4 sm:gap-8 my-2">
        <div class="flex flex-col items-center">
          <span class="text-5xl">🐘</span>
          <div class="w-20 h-16 bg-amber-200 border-2 border-amber-400 rounded-t-xl flex flex-col items-center justify-center">
            <span class="font-black text-xs text-amber-950">Voi</span>
            <span class="text-[10px] font-bold text-amber-800">🥇 Cao nhất</span>
          </div>
        </div>
        <div class="flex flex-col items-center">
          <span class="text-4xl">🐅</span>
          <div class="w-20 h-11 bg-orange-200 border-2 border-orange-400 rounded-t-xl flex flex-col items-center justify-center">
            <span class="font-black text-xs text-orange-950">Hổ</span>
            <span class="text-[10px] font-bold text-orange-800">🥈 Ở giữa</span>
          </div>
        </div>
        <div class="flex flex-col items-center">
          <span class="text-3xl">🐻</span>
          <div class="w-20 h-7 bg-slate-200 border-2 border-slate-400 rounded-t-xl flex flex-col items-center justify-center">
            <span class="font-black text-xs text-slate-950">Gấu</span>
            <span class="text-[10px] font-bold text-slate-700">🥉 Thấp nhất</span>
          </div>
        </div>
      </div>
      <div class="text-xs font-bold text-slate-600 text-center">
        Voi cao hơn Hổ, Hổ cao hơn Gấu 👉 <b>Con vật thấp nhất là Gấu!</b>
      </div>
    </div>

    <!-- ================================================================= -->
    <!-- 14. ĐỐ MẸO MÈO VÀ CHUỘT (ĂN CÙNG MỘT LÚC ĐỒNG THỜI)               -->
    <!-- ================================================================= -->
    <div v-else-if="diagram.type === 'cat_mouse'" class="w-full flex flex-col items-center space-y-2">
      <div class="grid grid-cols-3 gap-2 max-w-sm w-full">
        <div class="p-2 bg-purple-50 border-2 border-purple-300 rounded-2xl text-center">
          <div class="text-2xl">🐱 ➔ 🐭</div>
          <span class="text-[10px] font-black text-purple-900">Mèo 1 (5 phút)</span>
        </div>
        <div class="p-2 bg-purple-50 border-2 border-purple-300 rounded-2xl text-center">
          <div class="text-2xl">🐱 ➔ 🐭</div>
          <span class="text-[10px] font-black text-purple-900">Mèo 2 (5 phút)</span>
        </div>
        <div class="p-2 bg-purple-50 border-2 border-purple-300 rounded-2xl text-center">
          <div class="text-2xl">🐱 ➔ 🐭</div>
          <span class="text-[10px] font-black text-purple-900">Mèo 3 (5 phút)</span>
        </div>
      </div>
      <div class="px-3 py-1.5 bg-purple-100 border border-purple-300 rounded-xl text-center text-xs font-bold text-purple-900">
        ⏱️ Cả 3 chú mèo cùng ăn <b>ĐỒNG THỜI VÀO CÙNG MỘT LÚC</b> 👉 1 con mèo ăn 1 con chuột vẫn mất <b>5 phút!</b>
      </div>
    </div>

    <!-- ================================================================= -->
    <!-- 15. PHƯƠNG TRÌNH HOA QUẢ TƯ DUY                                   -->
    <!-- ================================================================= -->
    <div v-else-if="diagram.type === 'fruit_equation'" class="w-full flex flex-col items-center space-y-2">
      <div class="px-4 py-2 bg-amber-50 border-2 border-amber-300 rounded-2xl flex items-center justify-center gap-2 text-xl sm:text-2xl font-black">
        <span>🍎</span> <span>+</span> <span>🍎</span> <span>=</span> <span class="text-rose-600 font-mono">{{ diagram.sumApples || 12 }}</span>
        <span class="text-xs text-slate-500 font-bold ml-2">👉 1 quả táo = {{ (diagram.sumApples || 12) / 2 }}</span>
      </div>
      <div class="px-4 py-2 bg-amber-50 border-2 border-amber-300 rounded-2xl flex items-center justify-center gap-2 text-xl sm:text-2xl font-black">
        <span>🍎</span> <span>+</span> <span>🍌</span> <span>=</span> <span class="text-amber-600 font-mono">{{ diagram.sumMixed || 11 }}</span>
        <span class="text-xs text-slate-500 font-bold ml-2">👉 1 quả chuối = {{ (diagram.sumMixed || 11) - (diagram.sumApples || 12) / 2 }}</span>
      </div>
    </div>

    <!-- ================================================================= -->
    <!-- CÁC HÌNH HỌC CƠ BẢN KHÁC (SPLIT RECT, APEX TRIANGLE, POLYLINE)    -->
    <!-- ================================================================= -->
    <!-- Thanh hình chữ nhật chia N ô vuông nhỏ -->
    <svg 
      v-else-if="diagram.type === 'split_rect'" 
      :viewBox="`0 0 ${diagram.count * 80 + 40} 120`" 
      class="max-w-full h-24 sm:h-32 drop-shadow-md"
    >
      <g transform="translate(20, 20)">
        <rect
          x="0"
          y="0"
          :width="diagram.count * 80"
          height="80"
          fill="#fef3c7"
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

    <!-- Tam giác có các đường kẻ từ đỉnh xuống đáy -->
    <svg 
      v-else-if="diagram.type === 'apex_triangle'" 
      viewBox="0 0 360 220" 
      class="max-w-full h-40 sm:h-48 drop-shadow-md"
    >
      <polygon
        points="180,30 40,180 320,180"
        fill="#e0f2fe"
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

    <!-- Chu vi tam giác -->
    <svg 
      v-else-if="diagram.type === 'triangle_perimeter'" 
      viewBox="0 0 340 220" 
      class="max-w-full h-40 sm:h-48 drop-shadow-md"
    >
      <polygon
        points="140,40 50,180 290,180"
        fill="#ecfdf5"
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

    <!-- Đường gấp khúc -->
    <svg 
      v-else-if="diagram.type === 'polyline'" 
      viewBox="0 0 380 180" 
      class="max-w-full h-32 sm:h-40 drop-shadow-md"
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

// Calculates points along the base for apex_triangle
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
