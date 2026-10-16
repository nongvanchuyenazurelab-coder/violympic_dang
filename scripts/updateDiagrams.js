import fs from 'fs';
import { PRACTICE_EXAMS } from '../src/data/practiceExamsData.js';

// Specific diagram helpers based on question data
function getDiagramForQuestion(q, exam) {
  if (q.diagram) return q.diagram;

  const sec = q.section || '';
  const text = q.content || '';

  // 1. Dãy số / Toa tàu
  if (sec.includes('Toa tàu') || sec.includes('Dãy số') || sec.includes('quy luật')) {
    if (text.includes('30, 26, 22')) return { type: 'train_sequence', seq: [30, 26, 22, 18] };
    if (text.includes('1, 2, 4, 7')) return { type: 'train_sequence', seq: [1, 2, 4, 7] };
    if (text.includes('2, 4, 8, 16')) return { type: 'train_sequence', seq: [2, 4, 8, 16] };
    if (text.includes('3, 5, 9, 15')) return { type: 'train_sequence', seq: [3, 5, 9, 15] };
    if (text.includes('5, 10, 15')) return { type: 'train_sequence', seq: [5, 10, 15, 20] };
    return { type: 'train_sequence', seq: [2, 5, 8, 11] };
  }

  // 2. Tháp khối lập phương
  if (sec.includes('Tháp') || sec.includes('khối lập phương')) {
    return { type: 'cubes_stack', total: 10 };
  }

  // 3. Cấu tạo số logic
  if (sec.includes('Cấu tạo số')) {
    if (text.includes('bằng 9') && text.includes('bằng 3')) {
      return { type: 'digit_riddle', tenDigit: '?', unitDigit: '?', sum: 9, diff: 3 };
    }
    if (text.includes('tổng hai chữ số bằng 10')) {
      return { type: 'digit_riddle', tenDigit: '?', unitDigit: '?', sum: 10, diff: 8 };
    }
    if (text.includes('tổng hai chữ số bằng 8')) {
      return { type: 'digit_riddle', tenDigit: '?', unitDigit: '?', sum: 8, diff: 2 };
    }
    return { type: 'digit_riddle', tenDigit: '?', unitDigit: '?', sum: 9, diff: 3 };
  }

  // 4. Chia kẹo / chia đồ vật / chuyển kẹo
  if (sec.includes('Chia') || sec.includes('kẹo') || sec.includes('Chuyển đồ vật') || sec.includes('Cho nhận')) {
    return { 
      type: 'candy_sharing', 
      total: 14, 
      each: 4, 
      students: ['Bạn An', 'Bạn Bình', 'Bạn Chi'] 
    };
  }

  // 5. Bài toán tuổi tác
  if (sec.includes('tuổi') || sec.includes('Tuổi')) {
    return { 
      type: 'age_logic', 
      person1: 'Anh', 
      age1: 8, 
      person2: 'Em', 
      age2: 5, 
      years: 3 
    };
  }

  // 6. Xếp hàng
  if (sec.includes('Xếp hàng')) {
    return { type: 'lineup', front: 4, name: 'Lan', back: 5 };
  }

  // 7. Cân thăng bằng
  if (sec.includes('Cân thăng bằng')) {
    return { type: 'balance_scale', weight: 2, count: 3 };
  }

  // 8. Đồng hồ thời gian
  if (sec.includes('Đồng hồ') || text.includes('kim ngắn') || text.includes('kim dài')) {
    let hour = 9;
    if (text.includes('6 giờ') || text.includes('số 6')) hour = 6;
    else if (text.includes('4 giờ') || text.includes('số 4')) hour = 4;
    else if (text.includes('2 giờ') || text.includes('số 2')) hour = 2;
    return { type: 'clock_face', hour };
  }

  // 9. Cưa cây / Trồng cây / Cắt dây
  if (sec.includes('Cưa') || sec.includes('Cắt') || sec.includes('Trồng cây')) {
    return { type: 'wood_cutting', parts: 5 };
  }

  // 10. Đếm chân con vật
  if (sec.includes('Đếm chân')) {
    return { type: 'animals_legs', chickens: 3, dogs: 2 };
  }

  // 11. So sánh logic (chiều cao, cân nặng)
  if (sec.includes('So sánh')) {
    return { type: 'animals_height' };
  }

  // 12. Lịch và ngày trong tuần
  if (sec.includes('Lịch') || text.includes('thứ') || text.includes('Thứ')) {
    let day = 8;
    let weekday = 'Thứ Ba';
    if (text.includes('thứ Hai')) weekday = 'Thứ Hai';
    else if (text.includes('thứ Tư')) weekday = 'Thứ Tư';
    else if (text.includes('Chủ Nhật')) weekday = 'Chủ Nhật';
    return { type: 'calendar_day', weekday, day };
  }

  // 13. Mẹo vui logic
  if (sec.includes('Mẹo') || sec.includes('Đố mẹo')) {
    return { type: 'cat_mouse' };
  }

  // 14. Hoa quả
  if (sec.includes('hoa quả') || text.includes('🍎')) {
    return { type: 'fruit_equation', sumApples: 12, sumMixed: 11 };
  }

  // Default to train sequence
  return { type: 'train_sequence', seq: [2, 4, 6, 8] };
}

// Update all exams
PRACTICE_EXAMS.forEach(exam => {
  exam.questions.forEach((q, idx) => {
    q.diagram = getDiagramForQuestion(q, exam);
  });
});

// Format and save as clean JavaScript ES module
const out = `// Trọn bộ 10 Đề Toán Tư Duy & Logic Lớp 2 chuẩn Violympic
// Bỏ qua các phép tính cộng trừ đơn thuần và phép nhân máy móc
// Tập trung 100% vào: Dãy số toa tàu, Hình học tư duy, Cân thăng bằng, Phương trình hoa quả,
// Xếp hàng, Tuổi tác, Cưa gỗ, Đếm chân con vật, So sánh bắc cầu, Lịch thời gian, Mẹo vui logic.

export const PRACTICE_EXAMS = ${JSON.stringify(PRACTICE_EXAMS, null, 2)};
`;

fs.writeFileSync('src/data/practiceExamsData.js', out.normalize('NFC'), 'utf8');
console.log('Successfully enriched all 10 practice exams (150 questions) with diagrams!');
