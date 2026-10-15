<template>
  <div class="flex flex-col items-center justify-center p-6 bg-amber-50/50 rounded-3xl border-3 border-amber-200">
    <div class="text-sm font-bold text-slate-600 mb-6 flex items-center gap-2">
      <span>✏️</span> Nhập chữ số thích hợp (0 - 9) vào từng ô vuông trống:
    </div>

    <!-- Arithmetic Column Container (Vở ô ly style) -->
    <div class="relative bg-white px-8 py-6 rounded-3xl border-4 border-amber-300 shadow-lg min-w-[220px]">
      
      <!-- Operation Sign (+ or -) -->
      <div class="absolute left-4 top-[56px] text-3xl font-black text-amber-600 select-none">
        {{ question.operation || '+' }}
      </div>

      <!-- Top Row -->
      <div class="flex items-center justify-end gap-3 mb-2">
        <template v-for="(digit, idx) in question.topDigits" :key="'top_' + idx">
          <div v-if="typeof digit === 'string'" class="w-12 h-14 flex items-center justify-center text-3xl font-black text-slate-800">
            {{ digit }}
          </div>
          <div v-else class="w-12 h-14 rounded-2xl border-3 border-amber-400 bg-amber-50 flex items-center justify-center shadow-inner">
            <input
              type="text"
              inputmode="numeric"
              maxlength="1"
              :value="userValues[digit.id] || ''"
              @input="updateBox(digit.id, $event)"
              class="w-full h-full text-center text-3xl font-black text-amber-700 bg-transparent focus:outline-hidden"
              placeholder="?"
            />
          </div>
        </template>
      </div>

      <!-- Bottom Row -->
      <div class="flex items-center justify-end gap-3 mb-3">
        <template v-for="(digit, idx) in question.bottomDigits" :key="'bottom_' + idx">
          <div v-if="typeof digit === 'string'" class="w-12 h-14 flex items-center justify-center text-3xl font-black text-slate-800">
            {{ digit }}
          </div>
          <div v-else class="w-12 h-14 rounded-2xl border-3 border-amber-400 bg-amber-50 flex items-center justify-center shadow-inner">
            <input
              type="text"
              inputmode="numeric"
              maxlength="1"
              :value="userValues[digit.id] || ''"
              @input="updateBox(digit.id, $event)"
              class="w-full h-full text-center text-3xl font-black text-amber-700 bg-transparent focus:outline-hidden"
              placeholder="?"
            />
          </div>
        </template>
      </div>

      <!-- Horizontal Divider Line -->
      <div class="w-full h-1 bg-slate-800 rounded-full mb-3"></div>

      <!-- Result Row -->
      <div class="flex items-center justify-end gap-3">
        <template v-for="(digit, idx) in question.resultDigits" :key="'res_' + idx">
          <div v-if="typeof digit === 'string'" class="w-12 h-14 flex items-center justify-center text-3xl font-black text-slate-900">
            {{ digit }}
          </div>
          <div v-else class="w-12 h-14 rounded-2xl border-3 border-amber-400 bg-amber-50 flex items-center justify-center shadow-inner">
            <input
              type="text"
              inputmode="numeric"
              maxlength="1"
              :value="userValues[digit.id] || ''"
              @input="updateBox(digit.id, $event)"
              class="w-full h-full text-center text-3xl font-black text-amber-700 bg-transparent focus:outline-hidden"
              placeholder="?"
            />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  question: {
    type: Object,
    required: true
  },
  modelValue: {
    type: Object,
    default: () => ({})
  }
})

const emit = defineEmits(['update:modelValue'])

const userValues = ref({ ...(props.modelValue || {}) })

watch(
  () => props.modelValue,
  (newVal) => {
    userValues.value = { ...(newVal || {}) }
  },
  { deep: true }
)

function updateBox(id, event) {
  const val = event.target.value.replace(/\D/g, '')
  if (val) {
    userValues.value[id] = val
  } else {
    delete userValues.value[id]
  }
  emit('update:modelValue', { ...userValues.value })
}
</script>
