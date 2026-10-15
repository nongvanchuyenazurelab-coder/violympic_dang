// Automated Test Suite for Grade 2 Violympic Math Engine
// Run with: node test/mathTest.js

import {
  normalizeAnswer,
  evaluateAnswer,
  calculateMatrixRanks,
  gradeMatrixOrder,
  gradeVerticalMath
} from '../src/utils/mathEvaluator.js'

import {
  generateMatrixOrderQuestion,
  generateVerticalMathQuestion,
  generateMissingComponentQuestion,
  generateWordProblemQuestion,
  generateDigitRiddleQuestion,
  generateCountingQuestion,
  generateMeasurementQuestion,
  generateExamByConfig
} from '../src/utils/questionGenerator.js'

import { QUESTIONS_BANK, ROUNDS_METADATA } from '../src/data/questionsData.js'

let totalTests = 0
let passedTests = 0

function assert(condition, testName) {
  totalTests++
  if (condition) {
    passedTests++
    console.log(`  ✓ ${testName}`)
  } else {
    console.error(`  ✕ FAILED: ${testName}`)
  }
}

console.log('==================================================')
console.log('🧪 BẮT ĐẦU KIỂM THỬ HỆ THỐNG TOÁN VIOLYMPIC LỚP 2')
console.log('==================================================\n')

// 1. KIỂM THỬ BỘ CHUẨN HÓA & SO SÁNH ĐÁP ÁN (mathEvaluator.js)
console.log('1. Kiểm thử Chuẩn Hóa và Chấm Điểm:')
assert(normalizeAnswer(' 51 ') === '51', 'Chuẩn hóa loại bỏ khoảng trắng')
assert(normalizeAnswer('51 cm') === '51', 'Chuẩn hóa loại bỏ đơn vị cm')
assert(normalizeAnswer('94 dm') === '94', 'Chuẩn hóa loại bỏ đơn vị dm')
assert(normalizeAnswer('a = 45') === '45', 'Chuẩn hóa loại bỏ tiền tố a = ')
assert(normalizeAnswer('x = 12') === '12', 'Chuẩn hóa loại bỏ tiền tố x = ')
assert(normalizeAnswer(' > ') === '>', 'Chuẩn hóa dấu so sánh >')

assert(evaluateAnswer('51', '51').isCorrect === true, 'Đúng: 51 === 51')
assert(evaluateAnswer('05', '5').isCorrect === true, 'Đúng theo giá trị số: 05 === 5')
assert(evaluateAnswer('15 cm', '15').isCorrect === true, 'Đúng khi học sinh nhập thêm đơn vị: 15 cm')
assert(evaluateAnswer('a = 45', '45').isCorrect === true, 'Đúng khi học sinh nhập a = 45')
assert(evaluateAnswer('2, 6, 14, 17', '2, 6, 14, 17', { type: 'sequence' }).isCorrect === true, 'Đúng chuỗi dãy số')
assert(evaluateAnswer('50', '51').isCorrect === false, 'Sai khi nhập số khác')
assert(evaluateAnswer('', '51').isEmpty === true, 'Nhận biết câu chưa làm khi để trống')

// 2. KIỂM THỬ XẾP HÀNG BẢNG SỐ TĂNG DẦN (Bài 1)
console.log('\n2. Kiểm thử Bảng Số Thứ Tự Tăng Dần (Bài 1):')
const testItems = [
  { id: 1, text: '98', value: 98 },
  { id: 2, text: '7', value: 7 },
  { id: 3, text: '41', value: 41 },
  { id: 4, text: '33', value: 33 }
]
const { ranks, sortedList } = calculateMatrixRanks(testItems)
assert(ranks[1] === 1, 'Số 7 nhỏ nhất đứng thứ 1')
assert(ranks[3] === 2, 'Số 33 đứng thứ 2')
assert(ranks[2] === 3, 'Số 41 đứng thứ 3')
assert(ranks[0] === 4, 'Số 98 đứng thứ 4')

// Grade matrix order with correct user ranks
const userMatrixAns = { 0: 4, 1: 1, 2: 3, 3: 2 }
const matrixGrade = gradeMatrixOrder(userMatrixAns, testItems)
assert(matrixGrade.isFullyCorrect === true, 'Chấm đúng 100% khi học sinh điền chuẩn thứ tự')
assert(matrixGrade.score === 10, 'Đạt trọn 10 điểm')

// Partial credit test
const partialUserMatrixAns = { 0: 4, 1: 1, 2: 2, 3: 3 } // 2 cells correct out of 4
const partialGrade = gradeMatrixOrder(partialUserMatrixAns, testItems)
assert(partialGrade.correctCount === 2, 'Hỗ trợ chấm điểm từng ô độc lập')

// 3. KIỂM THỬ ĐẶT TÍNH HÀNG DỌC (Bài 3)
console.log('\n3. Kiểm thử Đặt Tính Hàng Dọc (Bài 3):')
const boxes = [
  { id: 'b1', correctDigit: '5' },
  { id: 'b2', correctDigit: '4' }
]
const vertGrade = gradeVerticalMath({ b1: '5', b2: '4' }, boxes)
assert(vertGrade.isFullyCorrect === true, 'Điền đúng các ô trống trong phép tính dọc')
const vertGradeWrong = gradeVerticalMath({ b1: '5', b2: '9' }, boxes)
assert(vertGradeWrong.isFullyCorrect === false, 'Phát hiện ô trống điền sai')

// 4. KIỂM THỬ CÁC BỘ SINH CÂU HỎI TỰ ĐỘNG (questionGenerator.js)
console.log('\n4. Kiểm thử Bộ Sinh Câu Hỏi Tự Động (100 lần thử ngẫu nhiên):')
for (let i = 0; i < 20; i++) {
  // Test Missing Component
  const compQ = generateMissingComponentQuestion()
  const compVal = parseInt(compQ.correctAnswer, 10)
  assert(!isNaN(compVal) && compVal >= 0 && compVal <= 100, `Sinh câu tìm thành phần hợp lệ (lần ${i + 1})`)

  // Test Word Problem
  const wordQ = generateWordProblemQuestion()
  const wordVal = parseInt(wordQ.correctAnswer, 10)
  assert(!isNaN(wordVal) && wordVal > 0, `Sinh câu lời văn có đáp số dương (lần ${i + 1})`)

  // Test Counting numbers
  const countQ = generateCountingQuestion()
  const countVal = parseInt(countQ.correctAnswer, 10)
  assert(!isNaN(countVal) && countVal >= 0, `Sinh câu đếm số chính xác (lần ${i + 1})`)
}

// Test Matrix Generator
const genMat = generateMatrixOrderQuestion(16)
assert(genMat.items.length === 16, 'Sinh ma trận đủ 16 ô cho Bài 1')

// Test Exam Generator
const customExam = generateExamByConfig({ count: 10, type: 'mixed' })
assert(customExam.questions.length >= 10, 'Tạo đề thi tổng hợp đầy đủ số câu yêu cầu')

// 5. KIỂM THỬ NGÂN HÀNG CÂU HỎI GỐC (questionsData.js)
console.log('\n5. Kiểm thử Ngân hàng câu hỏi:')
assert(QUESTIONS_BANK.length > 30, `Ngân hàng câu hỏi phong phú (hiện có ${QUESTIONS_BANK.length} câu trích từ PDF)`)
assert(ROUNDS_METADATA.length === 12, 'Có đủ metadata cho các vòng thi Violympic')

let bankErrors = 0
QUESTIONS_BANK.forEach(q => {
  if (!q.id || !q.content || !q.explanation) bankErrors++
  if (q.type === 'multiple_choice' && (!q.options || q.options.length !== 4)) bankErrors++
})
assert(bankErrors === 0, 'Toàn bộ câu hỏi trong ngân hàng đều đạt chuẩn cấu trúc dữ liệu')

// 6. KIỂM THỬ HÌNH HỌC & ĐẾM HÌNH TỨ GIÁC (Geometry & Quadrilaterals)
console.log('\n6. Kiểm thử Hình học & Đếm hình (Geometry):')
const geomExam = generateExamByConfig({ count: 5, topic: 'geometry' })
assert(geomExam.questions.length === 5, 'Tạo đề luyện tập chuyên đề Hình học không bị lặp vô tận')
assert(geomExam.questions.every(q => q.topic === 'geometry'), 'Tất cả câu hỏi trong đề hình học đều thuộc topic geometry')

const compositeQ = QUESTIONS_BANK.find(q => q.id === 'v6_b3_quad')
assert(compositeQ && compositeQ.correctAnswer === '6', 'Hình chữ nhật cắt 2 đường xiên gồm chính xác 6 hình tứ giác (3 đơn + 2 đôi + 1 ba)')

const splitRectQ = QUESTIONS_BANK.find(q => q.id === 'v5_b3_5_rect')
assert(splitRectQ && splitRectQ.correctAnswer === '6', 'Hình chữ nhật chia 3 ô gồm 6 hình chữ nhật')

console.log('\n==================================================')
console.log(`🎉 KẾT QUẢ: ĐÃ VƯỢT QUA ${passedTests}/${totalTests} BÀI KIỂM THỬ TỰ ĐỘNG!`)
console.log('==================================================')

if (passedTests === totalTests) {
  process.exit(0)
} else {
  process.exit(1)
}
