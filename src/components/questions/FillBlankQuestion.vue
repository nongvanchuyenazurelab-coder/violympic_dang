<template>
  <div class="space-y-6">
    <!-- Big Answer Input Area -->
    <div class="flex flex-col sm:flex-row items-center justify-center gap-4 py-4">
      <label class="text-lg sm:text-xl font-black text-slate-700">
        Câu trả lời của bé:
      </label>
      <div class="relative w-full max-w-xs">
        <input
          ref="inputRef"
          type="text"
          :value="modelValue"
          @input="handleInput"
          placeholder="Nhập đáp án..."
          class="w-full px-5 py-4 rounded-3xl border-4 border-amber-300 bg-white font-black text-2xl sm:text-3xl text-center text-amber-700 shadow-lg focus:outline-hidden focus:border-amber-500 focus:ring-4 focus:ring-amber-200 transition-all placeholder:text-slate-300 placeholder:text-lg"
        />
        <button
          v-if="modelValue"
          @click="clearInput"
          class="absolute right-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-200 text-slate-600 font-bold flex items-center justify-center hover:bg-slate-300 transition-all cursor-pointer"
        >
          ✕
        </button>
      </div>
    </div>

    <!-- Friendly Child Keypad (Bàn phím số tương tác) -->
    <div class="max-w-xs mx-auto bg-amber-50/70 p-3 rounded-3xl border-2 border-amber-200 shadow-sm">
      <div class="text-center text-xs font-bold text-slate-500 mb-2">
        Bàn phím số hỗ trợ chuột & cảm ứng
      </div>
      <div class="grid grid-cols-3 gap-2">
        <button
          v-for="digit in [1, 2, 3, 4, 5, 6, 7, 8, 9]"
          :key="digit"
          @click="pressDigit(String(digit))"
          class="h-12 rounded-2xl bg-white border-2 border-amber-200 hover:border-amber-400 font-black text-xl text-slate-800 shadow-xs hover:shadow-md hover:bg-amber-100 transition-all cursor-pointer active:scale-95"
        >
          {{ digit }}
        </button>
        <button
          @click="clearInput"
          class="h-12 rounded-2xl bg-rose-50 border-2 border-rose-200 hover:bg-rose-100 text-rose-600 font-black text-sm flex items-center justify-center shadow-xs transition-all cursor-pointer active:scale-95"
        >
          Xóa hết
        </button>
        <button
          @click="pressDigit('0')"
          class="h-12 rounded-2xl bg-white border-2 border-amber-200 hover:border-amber-400 font-black text-xl text-slate-800 shadow-xs hover:shadow-md hover:bg-amber-100 transition-all cursor-pointer active:scale-95"
        >
          0
        </button>
        <button
          @click="backspace"
          class="h-12 rounded-2xl bg-amber-100 border-2 border-amber-300 hover:bg-amber-200 text-amber-900 font-black text-lg flex items-center justify-center shadow-xs transition-all cursor-pointer active:scale-95"
        >
          ⌫
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { soundManager } from '../../utils/soundEffects'

const props = defineProps({
  question: {
    type: Object,
    required: true
  },
  modelValue: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['update:modelValue'])
const inputRef = ref(null)

function handleInput(event) {
  emit('update:modelValue', event.target.value)
}

function pressDigit(d) {
  soundManager.playClick()
  const newVal = (props.modelValue || '') + d
  emit('update:modelValue', newVal)
}

function backspace() {
  soundManager.playClick()
  const cur = props.modelValue || ''
  if (cur.length > 0) {
    emit('update:modelValue', cur.slice(0, -1))
  }
}

function clearInput() {
  soundManager.playClick()
  emit('update:modelValue', '')
}
</script>
