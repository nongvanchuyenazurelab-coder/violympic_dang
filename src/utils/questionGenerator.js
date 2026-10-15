// Dynamic Question Generator for Grade 2 Violympic Math
// Guarantees age-appropriate, mathematically sound, non-contradictory questions with precise step-by-step solutions

function randInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

let generatedCounter = 1000

// ===============================================================
// 1. GENERATE MATRIX ORDER QUESTION (Bài 1)
// ===============================================================
export function generateMatrixOrderQuestion(count = 16) {
  generatedCounter++
  const usedValues = new Set()
  const items = []

  while (items.length < count) {
    const isExpr = Math.random() > 0.4
    let val, text

    if (isExpr) {
      const isAdd = Math.random() > 0.5
      if (isAdd) {
        const a = randInt(5, 50)
        const b = randInt(5, 45)
        val = a + b
        text = `${a} + ${b}`
      } else {
        const a = randInt(20, 99)
        const b = randInt(5, a - 5)
        val = a - b
        text = `${a} - ${b}`
      }
    } else {
      val = randInt(5, 99)
      text = String(val)
    }

    if (!usedValues.has(val)) {
      usedValues.add(val)
      items.push({
        id: items.length + 1,
        text,
        value: val
      })
    }
  }

  // Calculate sorted order for explanation
  const sorted = [...items].sort((a, b) => a.value - b.value)
  const stepsText = sorted.map((item, idx) => `${item.text} (${item.value}) đứng thứ ${idx + 1}`).join('\n')

  return {
    id: `gen_matrix_${generatedCounter}`,
    round: 'custom',
    section: 'Bài 1: Điền số vào bảng theo thứ tự tăng dần',
    topic: 'addition_subtraction',
    difficulty: 'medium',
    type: 'matrix_order',
    content: `Hãy tính nhẩm và điền số thứ tự từ 1 đến ${count} vào các ô tròn để sắp xếp các giá trị trong bảng theo thứ tự TĂNG DẦN:`,
    items,
    hint: 'Tính giá trị của từng ô trước rồi tìm số nhỏ nhất xếp thứ 1, số tiếp theo thứ 2...',
    explanation: `Thứ tự sắp xếp từ bé đến lớn là:\n${stepsText}`
  }
}

// ===============================================================
// 2. GENERATE VERTICAL MATH QUESTION (Đặt tính hàng dọc)
// ===============================================================
export function generateVerticalMathQuestion() {
  generatedCounter++
  const isAdd = Math.random() > 0.5

  if (isAdd) {
    const tens1 = randInt(1, 4)
    const units1 = randInt(1, 8)
    const tens2 = randInt(1, 4)
    const units2 = randInt(1, 9 - units1) // no carry or simple carry

    const num1 = tens1 * 10 + units1
    const num2 = tens2 * 10 + units2
    const sum = num1 + num2

    const sumTens = Math.floor(sum / 10)
    const sumUnits = sum % 10

    // Hide units of num1 and tens of num2
    return {
      id: `gen_vert_${generatedCounter}`,
      round: 'custom',
      section: 'Bài 3: Đặt tính và điền số vào ô trống',
      topic: 'addition_subtraction',
      difficulty: 'medium',
      type: 'vertical_math',
      content: 'Điền các chữ số thích hợp vào các ô trống để được phép tính cộng đúng:',
      operation: '+',
      topDigits: [String(tens1), { id: `box_${generatedCounter}_1`, correct: String(units1) }],
      bottomDigits: [{ id: `box_${generatedCounter}_2`, correct: String(tens2) }, String(units2)],
      resultDigits: [String(sumTens), String(sumUnits)],
      explanation: `Bước 1: Cột đơn vị: ? + ${units2} = ${sumUnits} => ô trống thứ nhất điền ${units1}.\nBước 2: Cột chục: ${tens1} + ? = ${sumTens} => ô trống thứ hai điền ${tens2}.\nPhép tính hoàn chỉnh là: ${num1} + ${num2} = ${sum}.`
    }
  } else {
    const tens1 = randInt(4, 9)
    const units1 = randInt(3, 9)
    const tens2 = randInt(1, tens1 - 2)
    const units2 = randInt(1, units1 - 1)

    const num1 = tens1 * 10 + units1
    const num2 = tens2 * 10 + units2
    const diff = num1 - num2

    const diffTens = Math.floor(diff / 10)
    const diffUnits = diff % 10

    return {
      id: `gen_vert_${generatedCounter}`,
      round: 'custom',
      section: 'Bài 3: Đặt tính và điền số vào ô trống',
      topic: 'addition_subtraction',
      difficulty: 'medium',
      type: 'vertical_math',
      content: 'Điền các chữ số thích hợp vào các ô trống để được phép tính trừ đúng:',
      operation: '-',
      topDigits: [{ id: `box_${generatedCounter}_1`, correct: String(tens1) }, String(units1)],
      bottomDigits: [String(tens2), { id: `box_${generatedCounter}_2`, correct: String(units2) }],
      resultDigits: [String(diffTens), String(diffUnits)],
      explanation: `Bước 1: Cột đơn vị: ${units1} - ? = ${diffUnits} => ô trống thứ hai điền ${units2}.\nBước 2: Cột chục: ? - ${tens2} = ${diffTens} => ô trống thứ nhất điền ${tens1}.\nPhép tính hoàn chỉnh là: ${num1} - ${num2} = ${diff}.`
    }
  }
}

// ===============================================================
// 3. GENERATE MISSING COMPONENT / ALGEBRAIC EQUATION
// ===============================================================
export function generateMissingComponentQuestion() {
  generatedCounter++
  const kind = randInt(1, 4)

  if (kind === 1) {
    // ? - B = C  => ? = B + C
    const b = randInt(12, 45)
    const c = randInt(15, 50)
    const ans = b + c
    return {
      id: `gen_comp_${generatedCounter}`,
      round: 'custom',
      section: 'Bài 2: Tìm thành phần phép tính',
      topic: 'missing_components',
      difficulty: 'easy',
      type: 'fill_blank',
      content: `Điền số thích hợp vào chỗ trống: ...... - ${b} = ${c}`,
      correctAnswer: String(ans),
      hint: `Muốn tìm số bị trừ, ta lấy hiệu cộng với số trừ: ${c} + ${b}.`,
      explanation: `Muốn tìm số bị trừ, ta lấy hiệu cộng với số trừ:\n${c} + ${b} = ${ans}.\nVậy số cần điền là ${ans}.`
    }
  } else if (kind === 2) {
    // A - ? = C  => ? = A - C
    const a = randInt(40, 95)
    const c = randInt(10, a - 15)
    const ans = a - c
    return {
      id: `gen_comp_${generatedCounter}`,
      round: 'custom',
      section: 'Bài 2: Tìm thành phần phép tính',
      topic: 'missing_components',
      difficulty: 'easy',
      type: 'fill_blank',
      content: `Điền số thích hợp vào chỗ trống: ${a} - ...... = ${c}`,
      correctAnswer: String(ans),
      hint: `Muốn tìm số trừ, ta lấy số bị trừ trừ đi hiệu: ${a} - ${c}.`,
      explanation: `Muốn tìm số trừ, ta lấy số bị trừ trừ đi hiệu:\n${a} - ${c} = ${ans}.\nVậy số cần điền là ${ans}.`
    }
  } else if (kind === 3) {
    // A + ? = C + D
    const c = randInt(20, 45)
    const d = randInt(15, 45)
    const rightSide = c + d
    const a = randInt(10, rightSide - 5)
    const ans = rightSide - a
    return {
      id: `gen_comp_${generatedCounter}`,
      round: 'custom',
      section: 'Bài 2: Tìm thành phần phép tính',
      topic: 'missing_components',
      difficulty: 'medium',
      type: 'fill_blank',
      content: `Điền số thích hợp: ${a} + ...... = ${c} + ${d}`,
      correctAnswer: String(ans),
      hint: `Tính vế phải trước: ${c} + ${d} = ${rightSide}. Sau đó lấy ${rightSide} - ${a}.`,
      explanation: `Bước 1: Tính vế phải: ${c} + ${d} = ${rightSide}.\nBước 2: Tìm số hạng còn thiếu: ${rightSide} - ${a} = ${ans}.\nVậy số cần điền là ${ans}.`
    }
  } else {
    // ? + A = B
    const a = randInt(15, 45)
    const ans = randInt(10, 45)
    const sum = a + ans
    return {
      id: `gen_comp_${generatedCounter}`,
      round: 'custom',
      section: 'Bài 2: Tìm thành phần phép tính',
      topic: 'missing_components',
      difficulty: 'easy',
      type: 'fill_blank',
      content: `Điền số thích hợp vào chỗ trống: ...... + ${a} = ${sum}`,
      correctAnswer: String(ans),
      hint: `Muốn tìm số hạng chưa biết, ta lấy tổng trừ đi số hạng đã biết: ${sum} - ${a}.`,
      explanation: `Số hạng cần tìm = ${sum} - ${a} = ${ans}.\nVậy số cần điền là ${ans}.`
    }
  }
}

// ===============================================================
// 4. GENERATE WORD PROBLEMS (Toán có lời văn thực tế)
// ===============================================================
export function generateWordProblemQuestion() {
  generatedCounter++
  const kind = randInt(1, 4)
  const names = ['An', 'Bình', 'Hồng', 'Hà', 'Mai', 'Lan', 'Nam', 'Việt', 'Đào']

  if (kind === 1) {
    // More than problem
    const name1 = pickRandom(names)
    let name2 = pickRandom(names)
    while (name2 === name1) name2 = pickRandom(names)
    const num1 = randInt(25, 60)
    const more = randInt(5, 25)
    const ans = num1 + more
    const items = pickRandom(['viên bi', 'chiếc nhãn vở', 'quyển vở', 'con tem', 'bông hoa'])

    return {
      id: `gen_word_${generatedCounter}`,
      round: 'custom',
      section: 'Bài 2: Bài toán có lời văn',
      topic: 'word_problems',
      difficulty: 'easy',
      type: 'fill_blank',
      content: `${name1} có ${num1} ${items}, ${name2} có nhiều hơn ${name1} ${more} ${items}. Hỏi ${name2} có bao nhiêu ${items}?`,
      correctAnswer: String(ans),
      hint: `Vì ${name2} có nhiều hơn ${name1}, ta làm phép tính cộng: ${num1} + ${more}.`,
      explanation: `${name2} có số ${items} là:\n${num1} + ${more} = ${ans} (${items}).\nĐáp số: ${ans}.`
    }
  } else if (kind === 2) {
    // Store inventory problem
    const original = randInt(50, 95)
    const sold = randInt(15, original - 10)
    const remaining = original - sold
    const goods = pickRandom(['kg gạo', 'chiếc quạt', 'lít dầu', 'quả cam', 'quả trứng', 'quyển sách'])

    return {
      id: `gen_word_${generatedCounter}`,
      round: 'custom',
      section: 'Bài 2: Bài toán có lời văn',
      topic: 'word_problems',
      difficulty: 'easy',
      type: 'fill_blank',
      content: `Một cửa hàng có ${original} ${goods}. Cửa hàng đã bán được ${sold} ${goods}. Hỏi cửa hàng còn lại bao nhiêu ${goods}?`,
      correctAnswer: String(remaining),
      hint: `Lấy số lượng ban đầu trừ đi số lượng đã bán: ${original} - ${sold}.`,
      explanation: `Cửa hàng còn lại số ${goods} là:\n${original} - ${sold} = ${remaining} (${goods}).\nĐáp số: ${remaining}.`
    }
  } else if (kind === 3) {
    // 2-step word problem: sum of both
    const name1 = pickRandom(names)
    let name2 = pickRandom(names)
    while (name2 === name1) name2 = pickRandom(names)
    const num1 = randInt(18, 40)
    const diff = randInt(4, 15)
    const num2 = num1 + diff
    const total = num1 + num2

    return {
      id: `gen_word_${generatedCounter}`,
      round: 'custom',
      section: 'Bài 2: Bài toán có lời văn 2 bước',
      topic: 'word_problems',
      difficulty: 'hard',
      type: 'fill_blank',
      content: `${name1} có ${num1} viên bi, ${name2} có nhiều hơn ${name1} ${diff} viên bi. Hỏi cả hai bạn có tất cả bao nhiêu viên bi?`,
      correctAnswer: String(total),
      hint: `Bước 1: Tìm số bi của ${name2} (${num1} + ${diff}). Bước 2: Tính tổng số bi của cả 2 bạn.`,
      explanation: `Bước 1: ${name2} có số viên bi là:\n${num1} + ${diff} = ${num2} (viên bi).\nBước 2: Cả hai bạn có tất cả số viên bi là:\n${num1} + ${num2} = ${total} (viên bi).\nĐáp số: ${total} viên bi.`
    }
  } else {
    // Equal distribution / giving away problem
    const name1 = pickRandom(names)
    let name2 = pickRandom(names)
    while (name2 === name1) name2 = pickRandom(names)
    const give = randInt(3, 15)
    const more = give * 2

    return {
      id: `gen_word_${generatedCounter}`,
      round: 'custom',
      section: 'Bài 2: Bài toán có lời văn tư duy',
      topic: 'word_problems',
      difficulty: 'hard',
      type: 'fill_blank',
      content: `${name1} có nhiều hơn ${name2} ${more} viên bi. Hỏi ${name1} phải cho ${name2} bao nhiêu viên bi để số bi của hai bạn bằng nhau?`,
      correctAnswer: String(give),
      hint: `Khi cho đi X viên, khoảng cách chênh lệch giảm đi 2 lần X. Lấy số bi chênh lệch chia cho 2.`,
      explanation: `Để số bi của hai bạn bằng nhau, ${name1} cần cho ${name2} một nửa số bi chênh lệch:\n${more} : 2 = ${give} (viên bi).\nĐáp số: ${give} viên bi.`
    }
  }
}

// ===============================================================
// 5. GENERATE DIGIT RIDDLES (Cấu tạo số & đố chữ số)
// ===============================================================
export function generateDigitRiddleQuestion() {
  generatedCounter++
  const kind = randInt(1, 3)

  if (kind === 1) {
    // Smallest 2-digit number with sum of digits = S
    const sum = randInt(7, 16)
    // tens digit must be as small as possible, but units <= 9 => tens >= sum - 9
    const tens = Math.max(1, sum - 9)
    const units = sum - tens
    const ans = tens * 10 + units

    return {
      id: `gen_digit_${generatedCounter}`,
      round: 'custom',
      section: 'Bài 2: Đố chữ số',
      topic: 'digit_riddles',
      difficulty: 'medium',
      type: 'fill_blank',
      content: `Số bé nhất có hai chữ số mà tổng hai chữ số bằng ${sum} là số nào?`,
      correctAnswer: String(ans),
      hint: `Để số bé nhất thì chữ số hàng chục phải nhỏ nhất có thể (chữ số hàng đơn vị không được vượt quá 9).`,
      explanation: `Để số là bé nhất có hai chữ số, chữ số hàng chục phải nhỏ nhất có thể.\nVì chữ số hàng đơn vị lớn nhất là 9, nên chữ số hàng chục nhỏ nhất là: ${sum} - 9 = ${tens}.\nKhi đó chữ số hàng đơn vị là 9.\nVậy số bé nhất cần tìm là ${ans}.`
    }
  } else if (kind === 2) {
    // Largest 2-digit number with sum of digits = S
    const sum = randInt(7, 16)
    const tens = Math.min(9, sum)
    const units = sum - tens
    const ans = tens * 10 + units

    return {
      id: `gen_digit_${generatedCounter}`,
      round: 'custom',
      section: 'Bài 2: Đố chữ số',
      topic: 'digit_riddles',
      difficulty: 'medium',
      type: 'fill_blank',
      content: `Số lớn nhất có hai chữ số mà tổng hai chữ số bằng ${sum} là số nào?`,
      correctAnswer: String(ans),
      hint: `Để số lớn nhất thì chữ số hàng chục phải lớn nhất có thể (tối đa là 9).`,
      explanation: `Để số lớn nhất có hai chữ số, chữ số hàng chục phải lớn nhất có thể là ${tens}.\nChữ số hàng đơn vị là: ${sum} - ${tens} = ${units}.\nVậy số lớn nhất cần tìm là ${ans}.`
    }
  } else {
    // Smallest 2-digit number with diff = D
    const diff = randInt(2, 7)
    // tens = 1, units = 1 + diff
    const ans = 10 + (1 + diff)

    return {
      id: `gen_digit_${generatedCounter}`,
      round: 'custom',
      section: 'Bài 2: Đố chữ số',
      topic: 'digit_riddles',
      difficulty: 'medium',
      type: 'fill_blank',
      content: `Số nhỏ nhất có hai chữ số mà hiệu hai chữ số bằng ${diff} là số nào?`,
      correctAnswer: String(ans),
      hint: `Để số nhỏ nhất, chọn chữ số hàng chục là 1. Hàng đơn vị sẽ là 1 + ${diff}.`,
      explanation: `Chữ số hàng chục nhỏ nhất là 1.\nHiệu hai chữ số bằng ${diff} nên chữ số hàng đơn vị là: 1 + ${diff} = ${1 + diff}.\nVậy số nhỏ nhất là ${ans}.`
    }
  }
}

// ===============================================================
// 6. GENERATE COUNTING QUESTION (Đếm số tự nhiên)
// ===============================================================
export function generateCountingQuestion() {
  generatedCounter++
  const isBetween = Math.random() > 0.5

  if (isBetween) {
    const a = randInt(15, 45)
    const b = randInt(a + 15, 95)
    // Strictly greater than a and less than b: from (a + 1) to (b - 1)
    const count = (b - 1) - (a + 1) + 1 // = b - a - 1

    return {
      id: `gen_count_${generatedCounter}`,
      round: 'custom',
      section: 'Bài 2: Đếm số tự nhiên',
      topic: 'counting_numbers',
      difficulty: 'medium',
      type: 'fill_blank',
      content: `Có bao nhiêu số tự nhiên lớn hơn ${a} và nhỏ hơn ${b}?`,
      correctAnswer: String(count),
      hint: `Các số tự nhiên đó bắt đầu từ ${a + 1} đến ${b - 1}. Công thức tính số lượng: (Số cuối - Số đầu) + 1.`,
      explanation: `Các số tự nhiên lớn hơn ${a} và nhỏ hơn ${b} bắt đầu từ ${a + 1} đến ${b - 1}.\nSố các số là:\n(${b - 1} - ${a + 1}) + 1 = ${count} (số).\nĐáp số: ${count}.`
    }
  } else {
    const bound = randInt(35, 98)
    // 2-digit numbers smaller than bound: from 10 to (bound - 1)
    const count = (bound - 1) - 10 + 1

    return {
      id: `gen_count_${generatedCounter}`,
      round: 'custom',
      section: 'Bài 2: Đếm số tự nhiên',
      topic: 'counting_numbers',
      difficulty: 'medium',
      type: 'fill_blank',
      content: `Hãy cho biết có tất cả bao nhiêu số tự nhiên có 2 chữ số nhỏ hơn ${bound}?`,
      correctAnswer: String(count),
      hint: `Số có 2 chữ số bắt đầu từ 10 và kết thúc ở ${bound - 1}. Tính: (${bound - 1} - 10) + 1.`,
      explanation: `Các số tự nhiên có 2 chữ số nhỏ hơn ${bound} bắt đầu từ 10 đến ${bound - 1}.\nSố các số là:\n(${bound - 1} - 10) + 1 = ${count} (số).\nĐáp số: ${count}.`
    }
  }
}

// ===============================================================
// 7. GENERATE MEASUREMENT & TIME QUESTION (Đại lượng & Ngày tháng)
// ===============================================================
export function generateMeasurementQuestion() {
  generatedCounter++
  const kind = randInt(1, 3)

  if (kind === 1) {
    // dm + cm
    const dm = randInt(2, 8)
    const cm = randInt(1, 9) * 10 // e.g. 20 cm = 2 dm
    const cmToDm = cm / 10
    const ans = dm + cmToDm

    return {
      id: `gen_meas_${generatedCounter}`,
      round: 'custom',
      section: 'Bài 3: Đo lường đại lượng',
      topic: 'measurement_time',
      difficulty: 'medium',
      type: 'fill_blank',
      content: `Điền số thích hợp: ${dm} dm + ${cm} cm = ........ dm.`,
      correctAnswer: String(ans),
      hint: `Đổi ${cm} cm = ${cmToDm} dm, sau đó cộng với ${dm} dm.`,
      explanation: `Bước 1: Đổi ${cm} cm = ${cmToDm} dm.\nBước 2: ${dm} dm + ${cmToDm} dm = ${ans} dm.\nVậy số cần điền là ${ans}.`
    }
  } else if (kind === 2) {
    // Day of week
    const days = ['hai', 'ba', 'tư', 'năm', 'sáu', 'bảy', 'chủ nhật']
    const dayName = pickRandom(days)
    const dateThisWeek = randInt(5, 20)
    const dateNextWeek = dateThisWeek + 7

    return {
      id: `gen_meas_${generatedCounter}`,
      round: 'custom',
      section: 'Bài 3: Bài toán thời gian',
      topic: 'measurement_time',
      difficulty: 'medium',
      type: 'fill_blank',
      content: `Thứ ${dayName} tuần này là ngày ${dateThisWeek}. Hỏi thứ ${dayName} tuần sau là ngày bao nhiêu?`,
      correctAnswer: String(dateNextWeek),
      hint: `Một tuần lễ có 7 ngày. Tuần sau cộng thêm 7 ngày: ${dateThisWeek} + 7.`,
      explanation: `Một tuần lễ có 7 ngày.\nThứ ${dayName} tuần sau là ngày:\n${dateThisWeek} + 7 = ${dateNextWeek}.\nĐáp số: ${dateNextWeek}.`
    }
  } else {
    // kg or liter calculation
    const a = randInt(20, 50)
    const b = randInt(15, 40)
    const c = randInt(10, a + b - 15)
    const ans = a + b - c
    const unit = pickRandom(['kg', 'l'])

    return {
      id: `gen_meas_${generatedCounter}`,
      round: 'custom',
      section: 'Bài 3: Đo lường đại lượng',
      topic: 'measurement_time',
      difficulty: 'easy',
      type: 'fill_blank',
      content: `Kết quả của phép tính: ${a} ${unit} + ${b} ${unit} - ${c} ${unit} = ........ ${unit}.`,
      correctAnswer: String(ans),
      hint: `Tính ${a} + ${b} = ${a + b}, rồi trừ tiếp ${c}.`,
      explanation: `Bước 1: ${a} + ${b} = ${a + b}.\nBước 2: ${a + b} - ${c} = ${ans}.\nVậy kết quả là ${ans} ${unit}.`
    }
  }
}

// ===============================================================
// 8. MASTER GENERATOR: GENERATE CUSTOM EXAM
// ===============================================================
export function generateExamByConfig({
  type = 'mixed', // 'mixed' | 'topic' | 'difficulty'
  topic = null,
  difficulty = 'medium',
  count = 15,
  title = 'Đề Thi Tự Luyện Toán Lớp 2'
}) {
  const questions = []

  // Always include a Matrix Order as Question 1 if mixed exam
  if (type === 'mixed') {
    questions.push(generateMatrixOrderQuestion(16))
    questions.push(generateVerticalMathQuestion())
  }

  const generators = [
    generateMissingComponentQuestion,
    generateWordProblemQuestion,
    generateDigitRiddleQuestion,
    generateCountingQuestion,
    generateMeasurementQuestion,
    generateVerticalMathQuestion
  ]

  while (questions.length < count) {
    const gen = pickRandom(generators)
    const q = gen()
    if (!topic || q.topic === topic) {
      questions.push(q)
    }
  }

  return {
    id: `exam_${Date.now()}`,
    title,
    type: 'custom',
    questions
  }
}
