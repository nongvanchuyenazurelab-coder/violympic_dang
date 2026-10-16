<template>
  <Teleport to="body">
    <div 
      v-if="isOpen && exam" 
      @click.self="$emit('close')"
      class="print-modal-root fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 print:p-0 print:bg-white print:static print:inset-auto print:overflow-visible print:block print:w-full"
    >
      <!-- Modal Card (on screen) / Sheet (on print) -->
      <div class="print-paper-card bg-white rounded-3xl w-full max-w-4xl max-h-[94vh] overflow-y-auto print:max-h-none print:overflow-visible print:rounded-none print:shadow-none shadow-2xl border-4 border-amber-300 print:border-none flex flex-col print:block print:w-full print:max-w-none">
        
        <!-- Top Action Bar (HIDDEN ON PRINT) -->
        <div class="print-action-bar sticky top-0 z-20 bg-amber-500 text-white px-6 py-4 flex flex-wrap items-center justify-between gap-3 shadow-md print:hidden">
        <div class="flex items-center gap-2">
          <span class="text-2xl">🖨️</span>
          <div>
            <h3 class="font-black text-lg sm:text-xl leading-tight">
              In Đề Thi: Đề Số {{ exam.number }}
            </h3>
            <p class="text-amber-100 text-xs font-bold">
              Định dạng chuẩn trang in A4 cho học sinh lớp 2 làm trên giấy
            </p>
          </div>
        </div>

        <div class="flex items-center gap-3">
          <!-- Toggle Solutions -->
          <label class="flex items-center gap-2 bg-amber-600/70 hover:bg-amber-600 px-3 py-1.5 rounded-xl cursor-pointer text-xs font-bold transition-all select-none">
            <input 
              type="checkbox" 
              v-model="includeSolutions" 
              class="w-4 h-4 rounded text-amber-500 focus:ring-0 cursor-pointer accent-amber-300"
            />
            <span>In kèm Đáp án & Lời giải</span>
          </label>

          <!-- Print Button -->
          <button
            @click="triggerPrint"
            class="px-4 py-2 bg-white text-amber-700 hover:bg-amber-100 active:scale-95 rounded-xl font-black text-sm shadow-md transition-all flex items-center gap-1.5 cursor-pointer"
          >
            <span>🖨️</span> In Đề Ngay (Print / PDF)
          </button>

          <!-- Close Button -->
          <button
            @click="$emit('close')"
            class="w-9 h-9 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-black flex items-center justify-center cursor-pointer transition-all"
          >
            ✕
          </button>
        </div>
      </div>

      <!-- PRINTABLE EXAM PAPER BODY -->
      <div class="p-6 sm:p-10 text-slate-900 bg-white print:p-4 print:text-black print-exam-sheet">
        
        <!-- School & Student Meta Header -->
        <div class="border-b-2 border-slate-800 pb-4 mb-6">
          <div class="flex justify-between items-start text-xs sm:text-sm font-bold">
            <div class="space-y-1.5">
              <div>TRƯỜNG TIỂU HỌC: ................................................................</div>
              <div>HỌ VÀ TÊN HỌC SINH: ........................................................</div>
              <div class="flex gap-6">
                <span>LỚP: 2......</span>
                <span>SỐ BÁO DANH: ....................</span>
              </div>
            </div>

            <div class="text-center space-y-1">
              <div class="font-black text-sm sm:text-base uppercase tracking-wide">
                ĐỀ THI LUYỆN TẬP TOÁN VIOLYMPIC 2
              </div>
              <div class="font-extrabold text-amber-800 text-base sm:text-lg">
                ĐỀ SỐ {{ exam.number < 10 ? '0' + exam.number : exam.number }}
              </div>
              <div class="italic text-xs text-slate-600">
                Thời gian làm bài: 20 phút (không kể phát đề)
              </div>
            </div>
          </div>

          <!-- Score Table -->
          <div class="mt-4 grid grid-cols-3 border-2 border-slate-800 text-center text-xs font-bold">
            <div class="border-r-2 border-slate-800 p-2">
              <div class="uppercase text-[11px] mb-1 text-slate-600">Điểm số</div>
              <div class="h-10 text-xl font-black text-amber-700 flex items-center justify-center">/ 100</div>
            </div>
            <div class="border-r-2 border-slate-800 p-2">
              <div class="uppercase text-[11px] mb-1 text-slate-600">Xếp loại</div>
              <div class="h-10"></div>
            </div>
            <div class="p-2">
              <div class="uppercase text-[11px] mb-1 text-slate-600">Lời phê của thầy cô giáo</div>
              <div class="h-10"></div>
            </div>
          </div>
        </div>

        <!-- EXAM QUESTIONS -->
        <div class="space-y-6">
          
          <div 
            v-for="(q, idx) in exam.questions" 
            :key="q.id"
            class="break-inside-avoid border-b border-dashed border-slate-300 pb-5"
          >
            <!-- Question Number & Prompt -->
            <div class="flex items-start gap-2 mb-2">
              <span class="font-black text-base text-slate-900 min-w-[58px]">
                Câu {{ idx + 1 }}:
              </span>
              <div class="text-sm sm:text-base font-semibold leading-relaxed flex-1">
                {{ q.content }}
              </div>
            </div>

            <!-- 1. Geometry SVG Diagram if available -->
            <div v-if="q.diagram" class="my-3 flex justify-center print:my-1">
              <div class="max-w-md w-full bg-slate-50 border border-slate-300 rounded-xl p-3 print:bg-white print:border-none print:shadow-none print:p-0">
                <GeometryDiagram :diagram="q.diagram" />
              </div>
            </div>

            <!-- 2. Matrix Order Question (Bài 1) -->
            <div v-if="q.type === 'matrix_order'" class="my-3">
              <div class="text-xs italic text-slate-600 mb-2">
                (Em hãy ghi số thứ tự từ 1 đến {{ q.items.length }} vào ô tròn bên dưới mỗi số theo thứ tự từ bé đến lớn):
              </div>
              <div class="grid grid-cols-4 sm:grid-cols-4 gap-2.5 max-w-lg mx-auto">
                <div 
                  v-for="item in q.items" 
                  :key="item.id"
                  class="border-2 border-slate-700 rounded-xl p-2 text-center bg-slate-50 flex flex-col items-center justify-between h-20"
                >
                  <span class="font-black text-base sm:text-lg text-slate-800">{{ item.text }}</span>
                  <div class="w-7 h-7 rounded-full border-2 border-slate-700 flex items-center justify-center font-bold text-xs text-slate-400">
                    ...
                  </div>
                </div>
              </div>
            </div>

            <!-- 3. Vertical Math Notebook Grid -->
            <div v-else-if="q.type === 'vertical_math'" class="my-3 flex justify-center">
              <div class="border-2 border-slate-600 rounded-xl p-4 bg-amber-50/40 inline-flex flex-col items-center font-mono text-2xl font-black">
                <div class="flex justify-end gap-2 w-24">
                  <span v-for="(d, i) in q.topDigits" :key="i">
                    {{ typeof d === 'object' ? '[  ]' : d }}
                  </span>
                </div>
                <div class="flex items-center justify-between w-24 border-b-2 border-slate-800 pb-1">
                  <span>{{ q.operation }}</span>
                  <div class="flex gap-2">
                    <span v-for="(d, i) in q.bottomDigits" :key="i">
                      {{ typeof d === 'object' ? '[  ]' : d }}
                    </span>
                  </div>
                </div>
                <div class="flex justify-end gap-2 w-24 pt-1">
                  <span v-for="(d, i) in q.resultDigits" :key="i">
                    {{ d }}
                  </span>
                </div>
              </div>
            </div>

            <!-- 4. Multiple Choice Options -->
            <div v-else-if="q.type === 'multiple_choice'" class="my-2 grid grid-cols-2 sm:grid-cols-4 gap-3 text-sm">
              <div 
                v-for="(opt, optIdx) in q.options" 
                :key="optIdx"
                class="flex items-center gap-2 p-2 border border-slate-400 rounded-lg"
              >
                <div class="w-4 h-4 rounded-full border-2 border-slate-700"></div>
                <span class="font-bold">{{ String.fromCharCode(65 + optIdx) }}.</span>
                <span>{{ opt }}</span>
              </div>
            </div>

            <!-- 5. Fill blank answer line & scratch working area -->
            <div v-else class="mt-3 flex flex-col gap-2">
              <div class="flex items-center gap-2 text-sm font-bold">
                <span>Đáp số của em:</span>
                <span class="border-b-2 border-dotted border-slate-700 flex-1 h-6"></span>
              </div>
              <div class="text-xs text-slate-400 italic">
                (Bài giải / Nháp): ........................................................................................................................................................................
              </div>
            </div>

          </div>

        </div>

        <!-- SOLUTIONS SECTION (IF ENABLED) -->
        <div v-if="includeSolutions" class="mt-10 pt-8 border-t-4 border-slate-800 break-before-page">
          <div class="text-center mb-6">
            <h2 class="text-xl font-black uppercase text-amber-800">
              ĐÁP ÁN & HƯỚNG DẪN GIẢI CHI TIẾT
            </h2>
            <p class="text-xs text-slate-600 font-bold italic">
              Đề số {{ exam.number }} • Dành cho Phụ huynh và Giáo viên đối chiếu
            </p>
          </div>

          <div class="space-y-4 text-sm">
            <div 
              v-for="(q, idx) in exam.questions" 
              :key="'sol_' + q.id"
              class="border-b border-slate-200 pb-3"
            >
              <div class="flex items-center gap-2 font-black text-slate-800 mb-1">
                <span class="text-amber-700">Câu {{ idx + 1 }}:</span>
                <span v-if="q.correctAnswer" class="bg-emerald-100 text-emerald-900 px-2.5 py-0.5 rounded-md font-mono">
                  Đáp án: {{ q.correctAnswer }}
                </span>
              </div>
              <div class="text-slate-700 text-xs sm:text-sm pl-4 border-l-2 border-amber-400 whitespace-pre-line leading-relaxed font-sans">
                {{ q.explanation }}
              </div>
            </div>
          </div>
        </div>

        <!-- Footer signature -->
        <div class="mt-8 pt-4 border-t border-slate-300 flex justify-between items-center text-[11px] text-slate-500 font-sans print:flex">
          <div>Hệ thống Luyện thi Violympic Toán Lớp 2</div>
          <div>Chúc các em làm bài đạt kết quả thật tốt! 🌟</div>
        </div>

      </div>

    </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted } from 'vue'
import GeometryDiagram from './GeometryDiagram.vue'

const props = defineProps({
  exam: {
    type: Object,
    default: null
  },
  isOpen: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close'])

const includeSolutions = ref(false)

function triggerPrint() {
  window.print()
}

function handleKeyDown(e) {
  if (e.key === 'Escape' && props.isOpen) {
    emit('close')
  }
}

watch(() => props.isOpen, (newVal) => {
  if (newVal) {
    document.body.classList.add('printing-exam-active')
  } else {
    document.body.classList.remove('printing-exam-active')
  }
})

onMounted(() => {
  window.addEventListener('keydown', handleKeyDown)
  if (props.isOpen) {
    document.body.classList.add('printing-exam-active')
  }
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeyDown)
  document.body.classList.remove('printing-exam-active')
})
</script>

<style>
.print-exam-sheet,
.print-exam-sheet * {
  font-family: 'Be Vietnam Pro', 'Nunito', 'Segoe UI', Arial, sans-serif !important;
  text-rendering: optimizeLegibility;
}

@page {
  size: A4 portrait;
  margin: 12mm 15mm;
}

@media print {
  /* 1. HIDE THE ENTIRE WEBSITE (#app) AND ALL NON-PRINT ELEMENTS */
  #app,
  header,
  footer,
  nav,
  aside,
  .print-action-bar,
  .print\:hidden {
    display: none !important;
  }

  /* 2. Reset html and body to clean white page */
  html,
  body {
    background: #ffffff !important;
    background-image: none !important;
    color: #000000 !important;
    padding: 0 !important;
    margin: 0 !important;
    width: 100% !important;
    height: auto !important;
    overflow: visible !important;
    font-family: 'Be Vietnam Pro', 'Nunito', 'Segoe UI', Arial, sans-serif !important;
  }

  /* 3. Reset Modal overlay and paper container */
  .print-modal-root {
    position: static !important;
    inset: auto !important;
    background: #ffffff !important;
    padding: 0 !important;
    margin: 0 !important;
    display: block !important;
    width: 100% !important;
    overflow: visible !important;
  }

  .print-paper-card {
    box-shadow: none !important;
    border: none !important;
    border-radius: 0 !important;
    max-height: none !important;
    overflow: visible !important;
    width: 100% !important;
    max-width: 100% !important;
    margin: 0 !important;
    padding: 0 !important;
    display: block !important;
  }

  .print-exam-sheet {
    display: block !important;
    width: 100% !important;
    max-width: 100% !important;
    padding: 0 !important;
    margin: 0 !important;
    border: none !important;
    box-shadow: none !important;
    font-family: 'Be Vietnam Pro', 'Nunito', 'Segoe UI', Arial, sans-serif !important;
  }

  .print-exam-sheet * {
    font-family: 'Be Vietnam Pro', 'Nunito', 'Segoe UI', Arial, sans-serif !important;
  }

  .break-inside-avoid {
    break-inside: avoid;
    page-break-inside: avoid;
  }

  .break-before-page {
    break-before: page;
    page-break-before: always;
  }
}
</style>
