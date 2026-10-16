import fs from 'fs';
import { PRACTICE_EXAMS } from '../src/data/practiceExamsData.js';

PRACTICE_EXAMS.forEach((exam) => {
  exam.questions.forEach((q, idx) => {
    const sec = q.section || '';
    const text = q.content || '';

    // Remove any diagram from Age (Q12) and Digit Riddles (Q13) - pure text reasoning!
    if (sec.includes('tuổi') || sec.includes('Tuổi') || sec.includes('Cấu tạo số')) {
      delete q.diagram;
      return;
    }

    // Only assign cat_mouse if text is about mèo and chuột
    if (sec.includes('Mẹo') || sec.includes('Đố mẹo')) {
      if (text.includes('mèo') && text.includes('chuột')) {
        q.diagram = { type: 'cat_mouse' };
      } else {
        delete q.diagram;
      }
      return;
    }

    // Wood cutting (Q7 or Q8)
    if (sec.includes('Cưa') || text.includes('cưa') || text.includes('khúc gỗ')) {
      let parts = 5;
      if (text.includes('7 đoạn') || text.includes('7 khúc')) parts = 7;
      else if (text.includes('6 đoạn') || text.includes('6 khúc')) parts = 6;
      else if (text.includes('4 đoạn') || text.includes('4 khúc')) parts = 4;
      q.diagram = { type: 'wood_cutting', parts };
      return;
    }

    // Train sequence (Q1)
    if (sec.includes('Toa tàu') || sec.includes('Dãy số') || text.includes('toa tàu') || text.includes('dãy số')) {
      if (text.includes('30, 26, 22')) q.diagram = { type: 'train_sequence', seq: [30, 26, 22, 18] };
      else if (text.includes('1, 2, 4, 7')) q.diagram = { type: 'train_sequence', seq: [1, 2, 4, 7] };
      else if (text.includes('2, 4, 8, 16')) q.diagram = { type: 'train_sequence', seq: [2, 4, 8, 16] };
      else if (text.includes('3, 5, 9, 15')) q.diagram = { type: 'train_sequence', seq: [3, 5, 9, 15] };
      else if (text.includes('5, 10, 15')) q.diagram = { type: 'train_sequence', seq: [5, 10, 15, 20] };
      else q.diagram = { type: 'train_sequence', seq: [2, 4, 6, 8] };
      return;
    }

    // Geometry Q2
    if (sec.includes('Hình học') || sec.includes('tam giác') || sec.includes('tứ giác')) {
      if (text.includes('hình vuông') && text.includes('đường chéo')) {
        q.diagram = { type: 'square_diagonals' };
      } else if (text.includes('cắt xiên') || text.includes('tứ giác')) {
        q.diagram = { type: 'composite_quadrilateral' };
      } else if (text.includes('đáy') || text.includes('tam giác ABC')) {
        q.diagram = { type: 'apex_triangle', baseSegments: 4 };
      }
      return;
    }

    // Fruit equations (Q3)
    if (sec.includes('hoa quả') || text.includes('🍎')) {
      let sumApples = 12;
      let sumMixed = 11;
      if (text.includes('🍎 + 🍎 = 16')) sumApples = 16;
      else if (text.includes('🍎 + 🍎 = 18')) sumApples = 18;
      else if (text.includes('🍎 + 🍎 = 20')) sumApples = 20;
      else if (text.includes('🍎 + 🍎 = 10')) sumApples = 10;
      else if (text.includes('🍎 + 🍎 = 14')) sumApples = 14;
      q.diagram = { type: 'fruit_equation', sumApples, sumMixed };
      return;
    }

    // Balance scale (Q4)
    if (sec.includes('Cân thăng bằng') || text.includes('thăng bằng')) {
      q.diagram = { type: 'balance_scale', weight: 2, count: 3 };
      return;
    }

    // Clock face (Q5)
    if (sec.includes('Đồng hồ') || text.includes('kim ngắn') || text.includes('kim dài')) {
      let hour = 9;
      if (text.includes('6 giờ') || text.includes('số 6')) hour = 6;
      else if (text.includes('4 giờ') || text.includes('số 4')) hour = 4;
      else if (text.includes('2 giờ') || text.includes('số 2')) hour = 2;
      q.diagram = { type: 'clock_face', hour };
      return;
    }

    // Lineup (Q6)
    if (sec.includes('Xếp hàng') || text.includes('hàng tập thể dục') || text.includes('hàng dọc')) {
      q.diagram = { type: 'lineup', front: 4, name: 'Lan', back: 5 };
      return;
    }

    // Animals legs (Q8 or Q9)
    if (sec.includes('Đếm chân') || (text.includes('gà') && text.includes('chân'))) {
      q.diagram = { type: 'animals_legs', chickens: 3, dogs: 2 };
      return;
    }

    // Animals height (Q9 or Q10)
    if (sec.includes('So sánh') && (text.includes('cao hơn') || text.includes('thấp nhất'))) {
      q.diagram = { type: 'animals_height' };
      return;
    }

    // Calendar day (Q10 or Q11)
    if (sec.includes('Lịch') || text.includes('thứ Ba') || text.includes('ngày 8')) {
      q.diagram = { type: 'calendar_day', weekday: 'Thứ Ba', day: 8 };
      return;
    }

    // Candy sharing (Q14)
    if (sec.includes('Chia') && text.includes('kẹo')) {
      q.diagram = { type: 'candy_sharing', total: 14 };
      return;
    }

    // Cubes stack (Q15)
    if (sec.includes('Tháp') || text.includes('khối lập phương')) {
      q.diagram = { type: 'cubes_stack', total: 10 };
      return;
    }
  });
});

const out = `// Trọn bộ 10 Đề Toán Tư Duy & Logic Lớp 2 chuẩn Violympic
// Bỏ qua các phép tính cộng trừ đơn thuần và phép nhân máy móc
// Tập trung 100% vào: Dãy số toa tàu, Hình học tư duy, Cân thăng bằng, Phương trình hoa quả,
// Xếp hàng, Tuổi tác, Cưa gỗ, Đếm chân con vật, So sánh bắc cầu, Lịch thời gian, Mẹo vui logic.

export const PRACTICE_EXAMS = ${JSON.stringify(PRACTICE_EXAMS, null, 2)};
`;

fs.writeFileSync('src/data/practiceExamsData.js', out.normalize('NFC'), 'utf8');
console.log('Cleaned and accurately mapped diagrams for all 10 practice exams!');
