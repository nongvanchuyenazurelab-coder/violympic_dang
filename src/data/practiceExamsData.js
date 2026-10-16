// Trọn bộ 10 Đề Toán Tư Duy & Logic Lớp 2 chuẩn Violympic
// Bỏ qua các phép tính cộng trừ đơn thuần và phép nhân máy móc
// Tập trung 100% vào: Dãy số toa tàu, Hình học tư duy, Cân thăng bằng, Phương trình hoa quả,
// Xếp hàng, Tuổi tác, Cưa gỗ, Đếm chân con vật, So sánh bắc cầu, Lịch thời gian, Mẹo vui logic.

export const PRACTICE_EXAMS = [
  // =========================================================================
  // ĐỀ SỐ 1: KHÁM PHÁ TOÁN TƯ DUY 1 (Mức độ: Cơ bản - Khởi động)
  // =========================================================================
  {
    id: 'de-1',
    number: 1,
    title: 'Đề Số 01: Khám Phá Toán Tư Duy 1',
    subtitle: 'Toa tàu dãy số, đếm 8 hình tam giác, cân thăng bằng và đố mẹo mèo chuột',
    level: 'Dễ',
    levelColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    timeLimit: 1200,
    questionsCount: 15,
    questions: [
      {
        id: 'de1_q1',
        section: 'Toán Tư Duy: Quy luật toa tàu',
        topic: 'patterns_sequences',
        difficulty: 'easy',
        type: 'fill_blank',
        content: 'Quan sát đoàn tàu bên dưới và điền số thích hợp vào toa tàu cuối cùng mang dấu hỏi chấm (?):',
        diagram: { type: 'train_sequence', seq: [2, 4, 6, 8] },
        correctAnswer: '10',
        hint: 'Mỗi toa tàu sau hơn toa tàu trước 2 đơn vị: 8 + 2 = ?',
        explanation: 'Quy luật toa tàu: Mỗi số ở toa sau bằng số ở toa trước cộng thêm 2 đơn vị.\nSố ở toa cuối cùng là: 8 + 2 = 10.'
      },
      {
        id: 'de1_q2',
        section: 'Toán Tư Duy: Đếm hình học',
        topic: 'geometry',
        difficulty: 'medium',
        type: 'multiple_choice',
        content: 'Quan sát hình vuông có 2 đường chéo cắt nhau bên dưới. Hỏi trong hình có tất cả bao nhiêu hình tam giác?',
        diagram: { type: 'square_diagonals' },
        options: ['4 hình', '6 hình', '8 hình', '10 hình'],
        correctAnswer: '8 hình',
        hint: 'Có 4 tam giác nhỏ đơn (AOB, BOC, COD, DOA) và 4 tam giác lớn ghép từ 2 tam giác nhỏ (ABC, BCD, CDA, DAB).',
        explanation: 'Cách đếm hình tam giác:\n- 4 hình tam giác đơn: tam giác AOB, BOC, COD, DOA.\n- 4 hình tam giác ghép đôi: tam giác ABC, BCD, CDA, DAB.\nTổng cộng có: 4 + 4 = 8 hình tam giác.'
      },
      {
        id: 'de1_q3',
        section: 'Toán Tư Duy: Cân não hoa quả',
        topic: 'missing_components',
        difficulty: 'easy',
        type: 'fill_blank',
        content: 'Quan sát các phép tính hoa quả bên dưới. Biết 🍎 + 🍎 = 10 và 🍎 + 🍌 = 8. Hỏi quả chuối 🍌 có giá trị bằng bao nhiêu?',
        diagram: { type: 'fruit_equation', sumApples: 10, sumMixed: 8 },
        correctAnswer: '3',
        hint: 'Hai quả táo giống nhau cộng lại bằng 10 nên 1 quả táo bằng 5. Lấy 8 - 5 để tìm quả chuối.',
        explanation: 'Vì 🍎 + 🍎 = 10 và hai quả táo có giá trị như nhau, nên 🍎 = 5 (vì 5 + 5 = 10).\nThay 🍎 = 5 vào dòng thứ hai: 5 + 🍌 = 8 => 🍌 = 8 - 5 = 3.'
      },
      {
        id: 'de1_q4',
        section: 'Toán Tư Duy: Cân thăng bằng',
        topic: 'word_problems',
        difficulty: 'easy',
        type: 'fill_blank',
        content: 'Một đĩa cân bên trái đặt 1 quả dưa hấu, đĩa cân bên phải đặt 3 quả cân loại 2kg thì cân thăng bằng (như hình bên dưới). Hỏi quả dưa hấu nặng bao nhiêu ki-lô-gam? ........ kg.',
        diagram: { type: 'balance_scale', weight: 2, count: 3 },
        correctAnswer: '6',
        hint: 'Vì cân thăng bằng nên quả dưa hấu nặng bằng tổng cân nặng của 3 quả cân 2kg: 2 + 2 + 2 = ?',
        explanation: 'Cân thăng bằng nghĩa là cân nặng hai đĩa bằng nhau.\nCân nặng 3 quả cân là: 2 + 2 + 2 = 6 (kg).\nVậy quả dưa hấu nặng 6 kg.'
      },
      {
        id: 'de1_q5',
        section: 'Toán Tư Duy: Đồng hồ thời gian',
        topic: 'measurement_time',
        difficulty: 'easy',
        type: 'fill_blank',
        content: 'Đồng hồ bên dưới đang chỉ 9 giờ đúng. Hỏi 2 giờ trước, đồng hồ chỉ mấy giờ? ........ giờ.',
        diagram: { type: 'clock_face', hour: 9 },
        correctAnswer: '7',
        hint: '2 giờ trước là lùi về trước: lấy 9 - 2 = ?',
        explanation: 'Thời gian 2 giờ trước đó là: 9 - 2 = 7 (giờ).'
      },
      {
        id: 'de1_q6',
        section: 'Toán Tư Duy: Xếp hàng tập thể dục',
        topic: 'word_problems',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Trong giờ tập thể dục, đứng trước bạn Lan có 4 bạn, đứng sau bạn Lan có 5 bạn (như hình bên dưới). Hỏi hàng đó có tất cả bao nhiêu bạn? ........ bạn.',
        diagram: { type: 'lineup', front: 4, back: 5, name: 'Lan' },
        correctAnswer: '10',
        hint: 'Đừng quên tính cả bạn Lan nhé: 4 bạn phía trước + 1 bạn Lan + 5 bạn phía sau.',
        explanation: 'Số bạn trong hàng là:\n4 (bạn phía trước) + 1 (bạn Lan) + 5 (bạn phía sau) = 10 (bạn).'
      },
      {
        id: 'de1_q7',
        section: 'Toán Tư Duy: Cưa gỗ logic',
        topic: 'word_problems',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Bác thợ mộc muốn cưa một khúc gỗ dài thành 5 đoạn nhỏ bằng nhau (như hình bên dưới). Hỏi bác thợ mộc phải cưa tất cả bao nhiêu lần? ........ lần.',
        diagram: { type: 'wood_cutting', parts: 5 },
        correctAnswer: '4',
        hint: 'Để được 2 đoạn chỉ cần 1 nhát cưa, 3 đoạn cần 2 nhát cưa. Để được 5 đoạn cần lấy 5 - 1 nhát cưa.',
        explanation: 'Số lần cưa luôn ít hơn số đoạn gỗ là 1 lần.\nĐể cưa khúc gỗ thành 5 đoạn, bác thợ phải cưa: 5 - 1 = 4 (lần cưa).'
      },
      {
        id: 'de1_q8',
        section: 'Toán Tư Duy: Đếm chân con vật',
        topic: 'word_problems',
        difficulty: 'easy',
        type: 'fill_blank',
        content: 'Trong sân có 3 con gà và 2 con chó (như hình bên dưới). Hỏi có tất cả bao nhiêu cái chân? ........ cái chân.',
        diagram: { type: 'animals_legs', chickens: 3, dogs: 2 },
        correctAnswer: '14',
        hint: 'Mỗi con gà có 2 chân (3 con gà: 2 + 2 + 2 = 6 chân). Mỗi con chó có 4 chân (2 con chó: 4 + 4 = 8 chân). Cộng lại: 6 + 8.',
        explanation: '3 con gà có số chân là: 2 + 2 + 2 = 6 (chân).\n2 con chó có số chân là: 4 + 4 = 8 (chân).\nTất cả có số chân là: 6 + 8 = 14 (chân).'
      },
      {
        id: 'de1_q9',
        section: 'Toán Tư Duy: So sánh logic bắc cầu',
        topic: 'word_problems',
        difficulty: 'easy',
        type: 'multiple_choice',
        content: 'Biết Voi cao hơn Hổ, Hổ cao hơn Gấu. Hỏi trong ba con vật, con vật nào thấp nhất?',
        diagram: { type: 'animals_height' },
        options: ['Voi', 'Hổ', 'Gấu', 'Ba con cao bằng nhau'],
        correctAnswer: 'Gấu',
        hint: 'Voi > Hổ > Gấu. Con nào đứng cuối cùng?',
        explanation: 'Thứ tự chiều cao từ cao đến thấp là: Voi > Hổ > Gấu.\nVậy con vật thấp nhất là Gấu.'
      },
      {
        id: 'de1_q10',
        section: 'Toán Tư Duy: Lịch và ngày trong tuần',
        topic: 'measurement_time',
        difficulty: 'easy',
        type: 'fill_blank',
        content: 'Hôm nay là thứ Ba, ngày 8 (như tờ lịch bên dưới). Hỏi thứ Ba tuần sau là ngày mấy? Ngày ........',
        diagram: { type: 'calendar_day', weekday: 'Thứ Ba', day: 8 },
        correctAnswer: '15',
        hint: 'Một tuần lễ có 7 ngày: lấy 8 + 7.',
        explanation: 'Một tuần có 7 ngày. Thứ Ba tuần sau sẽ là ngày: 8 + 7 = 15.'
      },
      {
        id: 'de1_q11',
        section: 'Toán Tư Duy: Mẹo vui thời gian',
        topic: 'word_problems',
        difficulty: 'hard',
        type: 'multiple_choice',
        content: 'Nếu 1 con mèo ăn hết 1 con chuột trong 5 phút. Hỏi 5 con mèo ăn hết 5 con chuột trong thời gian bao lâu?',
        diagram: { type: 'cat_mouse' },
        options: ['1 phút', '5 phút', '25 phút', '10 phút'],
        correctAnswer: '5 phút',
        hint: 'Cả 5 con mèo cùng ăn một lúc, mỗi con ăn riêng 1 con chuột.',
        explanation: 'Vì 5 con mèo cùng ăn 5 con chuột một lúc (mỗi con mèo ăn riêng 1 con chuột), nên thời gian ăn vẫn chỉ là 5 phút.'
      },
      {
        id: 'de1_q12',
        section: 'Toán Tư Duy: Bài toán tuổi tác',
        topic: 'word_problems',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Năm nay anh 8 tuổi, em 5 tuổi. Hỏi 3 năm nữa tổng số tuổi của hai anh em là bao nhiêu? ........ tuổi.',
        correctAnswer: '19',
        hint: 'Sau 3 năm, anh thêm 3 tuổi và em cũng thêm 3 tuổi. Cả hai anh em tăng thêm 6 tuổi.',
        explanation: 'Sau 3 năm:\nTuổi của anh là: 8 + 3 = 11 (tuổi).\nTuổi của em là: 5 + 3 = 8 (tuổi).\nTổng số tuổi hai anh em là: 11 + 8 = 19 (tuổi).'
      },
      {
        id: 'de1_q13',
        section: 'Toán Tư Duy: Cấu tạo số logic',
        topic: 'digit_riddles',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Tìm một số có hai chữ số, biết chữ số hàng chục cộng với chữ số hàng đơn vị bằng 9, và chữ số hàng chục trừ chữ số hàng đơn vị bằng 3. Số đó là: ........',
        correctAnswer: '63',
        hint: 'Tìm hai chữ số có tổng bằng 9 và hiệu bằng 3: đó là 6 và 3 (vì 6 + 3 = 9 và 6 - 3 = 3).',
        explanation: 'Hai chữ số có tổng bằng 9 và hiệu bằng 3 là 6 và 3.\nChữ số hàng chục là 6, chữ số hàng đơn vị là 3. Vậy số đó là 63.'
      },
      {
        id: 'de1_q14',
        section: 'Toán Tư Duy: Chia đồ vật có dư',
        topic: 'word_problems',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Cô giáo có 14 viên kẹo chia đều cho 3 bạn, sao cho mỗi bạn nhận được số kẹo bằng nhau và nhiều nhất có thể. Hỏi cô giáo còn thừa bao nhiêu viên kẹo? ........ viên.',
        correctAnswer: '2',
        hint: 'Mỗi bạn được 4 viên kẹo: 4 + 4 + 4 = 12 viên. Số kẹo còn thừa: 14 - 12 = ?',
        explanation: 'Nếu chia mỗi bạn 4 viên kẹo thì hết: 4 + 4 + 4 = 12 (viên kẹo).\nSố viên kẹo còn thừa lại là: 14 - 12 = 2 (viên kẹo).'
      },
      {
        id: 'de1_q15',
        section: 'Toán Tư Duy: Tháp khối lập phương',
        topic: 'geometry',
        difficulty: 'easy',
        type: 'fill_blank',
        content: 'Một chiếc tháp được xếp từ 10 khối lập phương nhỏ (như hình bên dưới). Cần lấy đi ít nhất bao nhiêu khối để chiếc tháp chỉ còn lại 6 khối? ........ khối.',
        diagram: { type: 'cubes_stack', total: 10 },
        correctAnswer: '4',
        hint: 'Lấy 10 khối ban đầu trừ đi 6 khối còn lại.',
        explanation: 'Số khối lập phương cần lấy đi là: 10 - 6 = 4 (khối).'
      }
    ]
  },

  // =========================================================================
  // ĐỀ SỐ 2: TƯ DUY KHỞI ĐỘNG 2 (Mức độ: Dễ)
  // =========================================================================
  {
    id: 'de-2',
    number: 2,
    title: 'Đề Số 02: Khám Phá Toán Tư Duy 2',
    subtitle: 'Đếm 6 hình tứ giác cắt xiên, bài toán chuyển bi bằng nhau, cưa khúc gỗ',
    level: 'Dễ',
    levelColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    timeLimit: 1200,
    questionsCount: 15,
    questions: [
      {
        id: 'de2_q1',
        section: 'Toán Tư Duy: Quy luật toa tàu',
        topic: 'patterns_sequences',
        difficulty: 'easy',
        type: 'fill_blank',
        content: 'Quan sát các toa tàu bên dưới và điền số thích hợp vào toa tàu mang dấu hỏi chấm (?):',
        diagram: { type: 'train_sequence', seq: [1, 4, 7, 10] },
        correctAnswer: '13',
        hint: 'Mỗi toa sau hơn toa trước 3 đơn vị: 10 + 3 = ?',
        explanation: 'Quy luật: Mỗi số sau hơn số trước 3 đơn vị: 1 + 3 = 4; 4 + 3 = 7; 7 + 3 = 10.\nSố ở toa cuối cùng là: 10 + 3 = 13.'
      },
      {
        id: 'de2_q2',
        section: 'Toán Tư Duy: Đếm hình học',
        topic: 'geometry',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Quan sát hình chữ nhật bị chia xiên làm 3 phần 1, 2, 3 (như hình vẽ bên dưới). Trong hình có tất cả bao nhiêu hình tứ giác? ........ hình.',
        diagram: { type: 'composite_quadrilateral' },
        correctAnswer: '6',
        hint: '3 hình đơn (1, 2, 3) + 2 hình đôi (1+2, 2+3) + 1 hình ba bao quanh: 3 + 2 + 1.',
        explanation: 'Mỗi phần 1, 2, 3 đều là hình tứ giác.\n- 3 hình đơn: (1), (2), (3)\n- 2 hình đôi: (1+2), (2+3)\n- 1 hình ba: hình chữ nhật bao quanh\nTổng cộng có: 3 + 2 + 1 = 6 hình tứ giác.'
      },
      {
        id: 'de2_q3',
        section: 'Toán Tư Duy: Cân não hoa quả',
        topic: 'missing_components',
        difficulty: 'easy',
        type: 'fill_blank',
        content: 'Quan sát hình vẽ: Biết 🍎 + 🍎 = 16 và 🍎 + 🍌 = 12. Hỏi quả chuối 🍌 có giá trị bằng bao nhiêu?',
        diagram: { type: 'fruit_equation', sumApples: 16, sumMixed: 12 },
        correctAnswer: '4',
        hint: 'Hai quả táo giống nhau bằng 16 nên 1 quả táo bằng 8 (8 + 8 = 16). Quả chuối = 12 - 8.',
        explanation: '🍎 + 🍎 = 16 => 🍎 = 8 (vì 8 + 8 = 16).\n🍎 + 🍌 = 12 => 8 + 🍌 = 12 => 🍌 = 12 - 8 = 4.'
      },
      {
        id: 'de2_q4',
        section: 'Toán Tư Duy: Cân thăng bằng',
        topic: 'word_problems',
        difficulty: 'easy',
        type: 'fill_blank',
        content: 'Một quả dưa hấu đặt ở đĩa cân bên trái thăng bằng với 2 quả cân loại 5kg ở đĩa cân bên phải. Hỏi quả dưa hấu nặng bao nhiêu ki-lô-gam? ........ kg.',
        diagram: { type: 'balance_scale', weight: 5, count: 2 },
        correctAnswer: '10',
        hint: '2 quả cân loại 5kg: 5 + 5 = ?',
        explanation: 'Cân thăng bằng nên quả dưa hấu nặng: 5 + 5 = 10 (kg).'
      },
      {
        id: 'de2_q5',
        section: 'Toán Tư Duy: Đồng hồ thời gian',
        topic: 'measurement_time',
        difficulty: 'easy',
        type: 'fill_blank',
        content: 'Đồng hồ bên dưới đang chỉ 7 giờ đúng. Hỏi 3 giờ sau, đồng hồ sẽ chỉ mấy giờ? ........ giờ.',
        diagram: { type: 'clock_face', hour: 7 },
        correctAnswer: '10',
        hint: '3 giờ sau là cộng thêm: 7 + 3 = ?',
        explanation: 'Thời gian sau 3 giờ nữa là: 7 + 3 = 10 (giờ).'
      },
      {
        id: 'de2_q6',
        section: 'Toán Tư Duy: Xếp hàng tập thể dục',
        topic: 'word_problems',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Trong một hàng dọc, bạn Nam đứng thứ 5 từ trên xuống dưới, và đứng thứ 4 từ dưới lên trên. Hỏi hàng đó có tất cả bao nhiêu bạn? ........ bạn.',
        correctAnswer: '8',
        hint: 'Vì bạn Nam được đếm 2 lần (cả từ trên xuống và từ dưới lên), nên lấy 5 + 4 - 1.',
        explanation: 'Số bạn trong hàng là: 5 + 4 - 1 = 8 (bạn).\n(Hoặc: phía trước Nam có 4 bạn, phía sau Nam có 3 bạn, cộng bạn Nam: 4 + 3 + 1 = 8 bạn).'
      },
      {
        id: 'de2_q7',
        section: 'Toán Tư Duy: Chuyển đồ vật bằng nhau',
        topic: 'word_problems',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'An có nhiều hơn Bình 6 viên bi. Hỏi An phải cho Bình bao nhiêu viên bi để số bi của hai bạn bằng nhau? ........ viên bi.',
        correctAnswer: '3',
        hint: 'Để hai bạn bằng nhau, An chỉ cần cho Bình một nửa số bi nhiều hơn: 6 : 2 = ?',
        explanation: 'Số viên bi An cần cho Bình để hai bạn bằng nhau là: 6 : 2 = 3 (viên bi).'
      },
      {
        id: 'de2_q8',
        section: 'Toán Tư Duy: Đếm chân con vật',
        topic: 'word_problems',
        difficulty: 'easy',
        type: 'fill_blank',
        content: 'Trong sân có 4 con gà và 1 con chó. Hỏi có tất cả bao nhiêu cái chân? ........ cái chân.',
        diagram: { type: 'animals_legs', chickens: 4, dogs: 1 },
        correctAnswer: '12',
        hint: '4 con gà có: 2 + 2 + 2 + 2 = 8 chân. 1 con chó có 4 chân. Tổng: 8 + 4.',
        explanation: '4 con gà có: 2 + 2 + 2 + 2 = 8 (chân).\n1 con chó có: 4 (chân).\nTất cả có: 8 + 4 = 12 (chân).'
      },
      {
        id: 'de2_q9',
        section: 'Toán Tư Duy: So sánh logic',
        topic: 'word_problems',
        difficulty: 'easy',
        type: 'multiple_choice',
        content: 'Bạn Minh chạy nhanh hơn bạn Đức, bạn Đức chạy nhanh hơn bạn Thắng. Hỏi bạn nào chạy nhanh nhất?',
        options: ['Minh', 'Đức', 'Thắng', 'Hai bạn nhanh bằng nhau'],
        correctAnswer: 'Minh',
        hint: 'Minh > Đức > Thắng.',
        explanation: 'Thứ tự tốc độ chạy: Minh nhanh hơn Đức, Đức nhanh hơn Thắng.\nVậy bạn chạy nhanh nhất là Minh.'
      },
      {
        id: 'de2_q10',
        section: 'Toán Tư Duy: Lịch và ngày trong tuần',
        topic: 'measurement_time',
        difficulty: 'easy',
        type: 'fill_blank',
        content: 'Hôm nay là thứ Năm, ngày 10. Hỏi thứ Năm tuần trước là ngày mấy? Ngày ........',
        correctAnswer: '3',
        hint: 'Tuần trước thì lùi lại 7 ngày: lấy 10 - 7.',
        explanation: 'Thứ Năm của tuần trước là ngày: 10 - 7 = 3.'
      },
      {
        id: 'de2_q11',
        section: 'Toán Tư Duy: Mẹo vui đố logic',
        topic: 'word_problems',
        difficulty: 'hard',
        type: 'multiple_choice',
        content: 'Có 3 quả táo trên bàn, bạn lấy đi 2 quả. Hỏi bạn còn lại bao nhiêu quả táo?',
        options: ['1 quả', '2 quả', '3 quả', '0 quả'],
        correctAnswer: '2 quả',
        hint: 'Đọc kỹ câu hỏi: Bạn lấy đi 2 quả, vậy bạn đang cầm trong tay mấy quả?',
        explanation: 'Vì chính BẠN đã lấy đi 2 quả táo, nên trong tay bạn có 2 quả táo!'
      },
      {
        id: 'de2_q12',
        section: 'Toán Tư Duy: Cắt dây logic',
        topic: 'word_problems',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Một sợi dây dài muốn cắt thành 6 đoạn bằng nhau thì cần cắt bao nhiêu nhát kéo? ........ nhát.',
        correctAnswer: '5',
        hint: 'Số nhát cắt = Số đoạn - 1 = 6 - 1.',
        explanation: 'Để cắt một sợi dây thành 6 đoạn, ta cần cắt: 6 - 1 = 5 (nhát kéo).'
      },
      {
        id: 'de2_q13',
        section: 'Toán Tư Duy: Cấu tạo số',
        topic: 'digit_riddles',
        difficulty: 'easy',
        type: 'fill_blank',
        content: 'Số nhỏ nhất có hai chữ số mà hiệu hai chữ số bằng 2 là số: ........',
        correctAnswer: '13',
        hint: 'Hàng chục nhỏ nhất là 1. Hàng đơn vị = 1 + 2 = 3.',
        explanation: 'Hàng chục nhỏ nhất là 1. Hàng đơn vị là 1 + 2 = 3. Số nhỏ nhất là 13 (vì 3 - 1 = 2).'
      },
      {
        id: 'de2_q14',
        section: 'Toán Tư Duy: Chia kẹo có dư',
        topic: 'word_problems',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Mẹ có 11 cái bánh chia đều cho 2 anh em, mỗi người nhận được số bánh nhiều nhất có thể. Hỏi mẹ còn thừa mấy cái bánh? ........ cái.',
        correctAnswer: '1',
        hint: 'Mỗi người nhận 5 cái: 5 + 5 = 10 cái. Còn thừa: 11 - 10.',
        explanation: 'Mỗi người nhận 5 cái bánh thì hết 10 cái.\nMẹ còn thừa lại: 11 - 10 = 1 (cái bánh).'
      },
      {
        id: 'de2_q15',
        section: 'Toán Tư Duy: Tháp khối lập phương',
        topic: 'geometry',
        difficulty: 'easy',
        type: 'fill_blank',
        content: 'Một bạn nhỏ xếp được một kim tự tháp gồm 8 khối lập phương. Bạn ấy gắn thêm 4 khối lập phương nữa. Hỏi chiếc tháp có tất cả bao nhiêu khối? ........ khối.',
        diagram: { type: 'cubes_stack', total: 8 },
        correctAnswer: '12',
        hint: 'Lấy 8 khối ban đầu cộng thêm 4 khối mới.',
        explanation: 'Chiếc tháp có tất cả số khối là: 8 + 4 = 12 (khối lập phương).'
      }
    ]
  },

  // =========================================================================
  // ĐỀ SỐ 3: PHÁT TRIỂN TƯ DUY 1 (Mức độ: Trung bình)
  // =========================================================================
  {
    id: 'de-3',
    number: 3,
    title: 'Đề Số 03: Phát Triển Tư Duy 1',
    subtitle: 'Tam giác cắt ngang MN, đố mẹo thắp nến, logic tuổi anh em',
    level: 'Trung bình',
    levelColor: 'bg-sky-100 text-sky-800 border-sky-300',
    timeLimit: 1200,
    questionsCount: 15,
    questions: [
      {
        id: 'de3_q1',
        section: 'Toán Tư Duy: Quy luật toa tàu',
        topic: 'patterns_sequences',
        difficulty: 'easy',
        type: 'fill_blank',
        content: 'Quan sát dãy số trên toa tàu và tìm số thích hợp điền vào dấu (?):',
        diagram: { type: 'train_sequence', seq: [5, 10, 15, 20] },
        correctAnswer: '25',
        hint: 'Mỗi toa tàu cộng thêm 5: 20 + 5 = ?',
        explanation: 'Dãy số đếm thêm 5: số tiếp theo là 20 + 5 = 25.'
      },
      {
        id: 'de3_q2',
        section: 'Toán Tư Duy: Đếm hình học',
        topic: 'geometry',
        difficulty: 'medium',
        type: 'multiple_choice',
        content: 'Quan sát tam giác ABC có đoạn thẳng MN cắt ngang bên dưới. Trong hình vẽ có tất cả bao nhiêu hình tam giác và bao nhiêu hình tứ giác?',
        diagram: { type: 'triangle_with_horizontal' },
        options: ['1 tam giác, 1 tứ giác', '2 tam giác, 1 tứ giác', '2 tam giác, 2 tứ giác', '3 tam giác, 1 tứ giác'],
        correctAnswer: '2 tam giác, 1 tứ giác',
        hint: 'Có 2 tam giác (AMN và ABC) và 1 tứ giác (BMNC).',
        explanation: 'Hình vẽ có 2 hình tam giác (tam giác nhỏ AMN và tam giác lớn ABC) và 1 hình tứ giác ở phía dưới (tứ giác BMNC).'
      },
      {
        id: 'de3_q3',
        section: 'Toán Tư Duy: Cân não hoa quả',
        topic: 'missing_components',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Biết 🍎 + 🍎 = 12 và 🍎 + 🍌 = 11. Hỏi quả chuối 🍌 có giá trị bằng bao nhiêu?',
        diagram: { type: 'fruit_equation', sumApples: 12, sumMixed: 11 },
        correctAnswer: '5',
        hint: '🍎 + 🍎 = 12 nên 🍎 = 6. Quả chuối = 11 - 6.',
        explanation: '🍎 = 6 (vì 6 + 6 = 12).\nChuối 🍌 = 11 - 6 = 5.'
      },
      {
        id: 'de3_q4',
        section: 'Toán Tư Duy: Cân thăng bằng',
        topic: 'word_problems',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Một con ngỗng nặng bằng 2 con vịt. Một con vịt nặng 2 kg. Hỏi con ngỗng nặng bao nhiêu ki-lô-gam? ........ kg.',
        correctAnswer: '4',
        hint: '1 con vịt nặng 2 kg thì 2 con vịt nặng: 2 + 2 = ?',
        explanation: 'Con ngỗng nặng bằng 2 con vịt nên cân nặng của ngỗng là: 2 + 2 = 4 (kg).'
      },
      {
        id: 'de3_q5',
        section: 'Toán Tư Duy: Đồng hồ thời gian',
        topic: 'measurement_time',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Đồng hồ chỉ 11 giờ trưa. Hỏi 4 giờ trước đó là mấy giờ sáng? ........ giờ.',
        diagram: { type: 'clock_face', hour: 11 },
        correctAnswer: '7',
        hint: 'Lấy 11 - 4 = ?',
        explanation: 'Thời gian 4 giờ trước đó là: 11 - 4 = 7 (giờ sáng).'
      },
      {
        id: 'de3_q6',
        section: 'Toán Tư Duy: Xếp hàng tập thể dục',
        topic: 'word_problems',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Có một hàng gồm 12 bạn học sinh. Bạn Tuấn đứng thứ 7 từ đầu hàng đếm xuống. Hỏi sau bạn Tuấn còn có bao nhiêu bạn? ........ bạn.',
        correctAnswer: '5',
        hint: 'Lấy cả hàng trừ đi vị trí của Tuấn: 12 - 7 = ?',
        explanation: 'Số bạn đứng phía sau bạn Tuấn là: 12 - 7 = 5 (bạn).'
      },
      {
        id: 'de3_q7',
        section: 'Toán Tư Duy: Cưa gỗ logic',
        topic: 'word_problems',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Để cưa một khúc gỗ thành 4 đoạn bằng nhau, mỗi lần cưa mất 2 phút. Hỏi cưa xong khúc gỗ mất bao nhiêu phút? ........ phút.',
        diagram: { type: 'wood_cutting', parts: 4 },
        correctAnswer: '6',
        hint: 'Cần 3 lần cưa (4 - 1 = 3 lần). Mỗi lần mất 2 phút: 2 + 2 + 2 = ?',
        explanation: 'Cưa thành 4 đoạn cần cưa: 4 - 1 = 3 (lần cưa).\nThời gian cưa xong là: 2 + 2 + 2 = 6 (phút).'
      },
      {
        id: 'de3_q8',
        section: 'Toán Tư Duy: Đếm chân con vật',
        topic: 'word_problems',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Bác nông dân nhốt 2 con gà và 3 con thỏ trong chuồng. Hỏi bác đếm được tất cả bao nhiêu cái chân? ........ cái chân.',
        correctAnswer: '16',
        hint: 'Gà có 2 chân (2 con gà: 2 + 2 = 4 chân). Thỏ có 4 chân (3 con thỏ: 4 + 4 + 4 = 12 chân).',
        explanation: '2 con gà có: 2 + 2 = 4 (chân).\n3 con thỏ có: 4 + 4 + 4 = 12 (chân).\nTất cả có: 4 + 12 = 16 (chân).'
      },
      {
        id: 'de3_q9',
        section: 'Toán Tư Duy: So sánh logic',
        topic: 'word_problems',
        difficulty: 'easy',
        type: 'multiple_choice',
        content: 'Quả cam nặng hơn quả táo, quả táo nặng hơn quả mận. Hỏi quả nào nhẹ nhất?',
        options: ['Quả cam', 'Quả táo', 'Quả mận', 'Nặng bằng nhau'],
        correctAnswer: 'Quả mận',
        hint: 'Cam > Táo > Mận.',
        explanation: 'Thứ tự cân nặng giảm dần: Cam > Táo > Mận. Quả nhẹ nhất là quả mận.'
      },
      {
        id: 'de3_q10',
        section: 'Toán Tư Duy: Lịch và ngày trong tuần',
        topic: 'measurement_time',
        difficulty: 'easy',
        type: 'fill_blank',
        content: 'Nếu hôm nay là thứ Hai thì ngày kia là thứ mấy?',
        correctAnswer: 'thứ Tư',
        hint: 'Hôm nay là thứ Hai, ngày mai là thứ Ba, ngày kia là thứ Tư.',
        explanation: 'Hôm nay là thứ Hai -> Ngày mai là thứ Ba -> Ngày kia là thứ Tư.'
      },
      {
        id: 'de3_q11',
        section: 'Toán Tư Duy: Đố mẹo thắp nến',
        topic: 'word_problems',
        difficulty: 'hard',
        type: 'fill_blank',
        content: 'Có 5 cây nến đang cháy. Gió thổi tắt mất 2 cây nến. Người ta không thắp lại. Hỏi cuối cùng còn lại mấy cây nến? ........ cây.',
        correctAnswer: '2',
        hint: '3 cây nến còn lại tiếp tục cháy sẽ tan chảy hết. 2 cây nến bị thổi tắt thì còn nguyên.',
        explanation: '3 cây nến không bị thổi tắt sẽ cháy hết sạch thành sáp tan chảy. Chỉ có 2 cây nến bị tắt là còn nguyên vẹn cây nến. Vậy cuối cùng còn lại 2 cây nến.'
      },
      {
        id: 'de3_q12',
        section: 'Toán Tư Duy: Tuổi tác logic',
        topic: 'word_problems',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Hiện nay mẹ 30 tuổi, con 5 tuổi. Hỏi sau bao nhiêu năm nữa thì mẹ vẫn hơn con 25 tuổi? Trả lời: Sau ........ năm nữa.',
        correctAnswer: 'mọi',
        options: ['1 năm', '5 năm', '10 năm', 'Bao nhiêu năm cũng vẫn hơn 25 tuổi'],
        type: 'multiple_choice',
        hint: 'Hiệu số tuổi của hai người không bao giờ thay đổi theo thời gian.',
        explanation: 'Hiệu số tuổi giữa hai người luôn không đổi theo thời gian: mỗi năm mẹ thêm 1 tuổi thì con cũng thêm 1 tuổi. Nên bao nhiêu năm nữa mẹ vẫn luôn hơn con 25 tuổi.'
      },
      {
        id: 'de3_q13',
        section: 'Toán Tư Duy: Cấu tạo số',
        topic: 'digit_riddles',
        difficulty: 'easy',
        type: 'fill_blank',
        content: 'Số lớn nhất có hai chữ số khác nhau là số: ........',
        correctAnswer: '98',
        hint: 'Hàng chục là 9, hàng đơn vị khác 9 và lớn nhất là 8.',
        explanation: 'Số lớn nhất có 2 chữ số khác nhau là 98.'
      },
      {
        id: 'de3_q14',
        section: 'Toán Tư Duy: Chia kẹo có dư',
        topic: 'word_problems',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Có 17 quả táo chia đều vào 4 giỏ sao cho số táo ở mỗi giỏ nhiều nhất có thể. Hỏi còn thừa mấy quả táo? ........ quả.',
        correctAnswer: '1',
        hint: 'Mỗi giỏ đựng 4 quả táo: 4 + 4 + 4 + 4 = 16 quả. Còn thừa: 17 - 16 = ?',
        explanation: '4 giỏ mỗi giỏ đựng 4 quả táo hết: 4 + 4 + 4 + 4 = 16 (quả).\nCòn thừa lại: 17 - 16 = 1 (quả táo).'
      },
      {
        id: 'de3_q15',
        section: 'Toán Tư Duy: Tháp khối lập phương',
        topic: 'geometry',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Một hình lập phương có tất cả bao nhiêu mặt vuông? ........ mặt.',
        correctAnswer: '6',
        hint: 'Quan sát viên xúc xắc (con súc sắc) có các chấm từ 1 đến 6.',
        explanation: 'Hình lập phương (như viên xúc xắc) có đúng 6 mặt vuông.'
      }
    ]
  },

  // =========================================================================
  // ĐỀ SỐ 4: PHÁT TRIỂN TƯ DUY 2 (Mức độ: Trung bình)
  // =========================================================================
  {
    id: 'de-4',
    number: 4,
    title: 'Đề Số 04: Phát Triển Tư Duy 2',
    subtitle: 'Đếm hình tam giác chung đỉnh, xếp hàng hai đầu, quả cân thăng bằng',
    level: 'Trung bình',
    levelColor: 'bg-sky-100 text-sky-800 border-sky-300',
    timeLimit: 1200,
    questionsCount: 15,
    questions: [
      {
        id: 'de4_q1',
        section: 'Toán Tư Duy: Quy luật toa tàu',
        topic: 'patterns_sequences',
        difficulty: 'easy',
        type: 'fill_blank',
        content: 'Điền số thích hợp vào toa tàu mang dấu hỏi chấm (?): 10, 20, 30, 40, ........',
        diagram: { type: 'train_sequence', seq: [10, 20, 30, 40] },
        correctAnswer: '50',
        hint: 'Dãy số tròn chục đếm thêm 10: 40 + 10 = ?',
        explanation: 'Mỗi toa tàu tăng thêm 10 đơn vị. Toa tiếp theo là 40 + 10 = 50.'
      },
      {
        id: 'de4_q2',
        section: 'Toán Tư Duy: Đếm hình học',
        topic: 'geometry',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Quan sát tam giác ABC có các đường kẻ từ đỉnh A xuống đáy chia đáy thành 3 đoạn nhỏ (như hình bên dưới). Trong hình có tất cả bao nhiêu hình tam giác? ........ hình.',
        diagram: { type: 'apex_triangle', baseSegments: 3 },
        correctAnswer: '6',
        hint: 'Đáy chia 3 đoạn: 3 + 2 + 1 = 6 hình tam giác.',
        explanation: 'Số hình tam giác có chung đỉnh A là: 3 + 2 + 1 = 6 (hình tam giác).'
      },
      {
        id: 'de4_q3',
        section: 'Toán Tư Duy: Cân não hoa quả',
        topic: 'missing_components',
        difficulty: 'easy',
        type: 'fill_blank',
        content: 'Biết 🍎 + 🍎 = 8 và 🍎 + 🍌 = 7. Hỏi quả chuối 🍌 có giá trị bằng bao nhiêu?',
        diagram: { type: 'fruit_equation', sumApples: 8, sumMixed: 7 },
        correctAnswer: '3',
        hint: '🍎 + 🍎 = 8 nên 🍎 = 4. Quả chuối = 7 - 4.',
        explanation: '🍎 = 4 (vì 4 + 4 = 8).\nChuối 🍌 = 7 - 4 = 3.'
      },
      {
        id: 'de4_q4',
        section: 'Toán Tư Duy: Cân thăng bằng',
        topic: 'word_problems',
        difficulty: 'easy',
        type: 'fill_blank',
        content: 'Một đĩa cân đặt 1 quả dưa hấu, đĩa kia đặt 4 quả cân loại 2kg thì cân thăng bằng. Quả dưa hấu nặng bao nhiêu kg? ........ kg.',
        diagram: { type: 'balance_scale', weight: 2, count: 4 },
        correctAnswer: '8',
        hint: '4 quả cân 2kg: 2 + 2 + 2 + 2 = ?',
        explanation: 'Cân thăng bằng nên quả dưa hấu nặng: 2 + 2 + 2 + 2 = 8 (kg).'
      },
      {
        id: 'de4_q5',
        section: 'Toán Tư Duy: Đồng hồ thời gian',
        topic: 'measurement_time',
        difficulty: 'easy',
        type: 'fill_blank',
        content: 'Đồng hồ chỉ 8 giờ sáng. Hỏi 3 giờ trước đó là mấy giờ? ........ giờ.',
        diagram: { type: 'clock_face', hour: 8 },
        correctAnswer: '5',
        hint: '8 - 3 = 5.',
        explanation: 'Thời gian 3 giờ trước đó là: 8 - 3 = 5 (giờ sáng).'
      },
      {
        id: 'de4_q6',
        section: 'Toán Tư Duy: Xếp hàng tập thể dục',
        topic: 'word_problems',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Một hàng có 10 bạn. Bạn Hà đứng ở chính giữa hàng. Hỏi phía trước bạn Hà có bao nhiêu bạn? ........ bạn.',
        correctAnswer: 'câu hỏi này cần điều kiện lẻ',
        options: ['4 bạn', '5 bạn', 'Không có ai đứng chính giữa của hàng 10 bạn'],
        type: 'multiple_choice',
        content: 'Một hàng có 9 bạn. Bạn Hà đứng ở chính giữa hàng. Hỏi phía trước bạn Hà có bao nhiêu bạn?',
        options: ['3 bạn', '4 bạn', '5 bạn', '6 bạn'],
        correctAnswer: '4 bạn',
        hint: '9 bạn chia đôi: 4 bạn trước + bạn Hà + 4 bạn sau = 9 bạn.',
        explanation: 'Để đứng chính giữa hàng 9 bạn, phía trước Hà có 4 bạn, phía sau Hà có 4 bạn, và Hà ở vị trí thứ 5 (4 + 1 + 4 = 9).'
      },
      {
        id: 'de4_q7',
        section: 'Toán Tư Duy: Cắt dây logic',
        topic: 'word_problems',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Một khúc gỗ cưa 3 lần thì được bao nhiêu đoạn gỗ? ........ đoạn.',
        correctAnswer: '4',
        hint: 'Số đoạn gỗ = Số lần cưa + 1 = 3 + 1.',
        explanation: 'Số đoạn gỗ nhận được là: 3 + 1 = 4 (đoạn gỗ).'
      },
      {
        id: 'de4_q8',
        section: 'Toán Tư Duy: Đếm chân con vật',
        topic: 'word_problems',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Có 5 con gà và 2 con chó. Tổng số chân của chúng là: ........ chân.',
        diagram: { type: 'animals_legs', chickens: 5, dogs: 2 },
        correctAnswer: '18',
        hint: '5 con gà: 2 x 5 = 10 chân. 2 con chó: 4 + 4 = 8 chân. Tổng: 10 + 8.',
        explanation: '5 con gà có: 10 (chân).\n2 con chó có: 4 + 4 = 8 (chân).\nTổng số chân là: 10 + 8 = 18 (chân).'
      },
      {
        id: 'de4_q9',
        section: 'Toán Tư Duy: So sánh logic',
        topic: 'word_problems',
        difficulty: 'easy',
        type: 'multiple_choice',
        content: 'Bình nặng hơn An, An nặng hơn Chi. Hỏi bạn nào nặng nhất?',
        options: ['Bình', 'An', 'Chi', 'Ba bạn nặng bằng nhau'],
        correctAnswer: 'Bình',
        hint: 'Bình > An > Chi.',
        explanation: 'Thứ tự cân nặng: Bình > An > Chi. Vậy bạn nặng nhất là Bình.'
      },
      {
        id: 'de4_q10',
        section: 'Toán Tư Duy: Lịch và ngày trong tuần',
        topic: 'measurement_time',
        difficulty: 'easy',
        type: 'fill_blank',
        content: 'Hôm nay là thứ Sáu ngày 12. Thứ Sáu tuần sau là ngày mấy? Ngày ........',
        correctAnswer: '19',
        hint: 'Lấy 12 + 7 = 19.',
        explanation: 'Thứ Sáu tuần sau là ngày: 12 + 7 = 19.'
      },
      {
        id: 'de4_q11',
        section: 'Toán Tư Duy: Đố mẹo logic',
        topic: 'word_problems',
        difficulty: 'medium',
        type: 'multiple_choice',
        content: 'Trên cành cây có 5 con chim. Người thợ săn bắn súng nổ một tiếng lớn "ĐOÀNG", trúng rơi 1 con chim. Hỏi trên cành cây còn lại mấy con chim?',
        options: ['4 con', '0 con', '1 con', '5 con'],
        correctAnswer: '0 con',
        hint: 'Khi nghe tiếng súng nổ rất to, các con chim còn lại sẽ làm gì?',
        explanation: 'Khi nghe tiếng súng nổ, những con chim còn lại giật mình và bay đi hết. Do đó trên cành cây không còn con chim nào (0 con).'
      },
      {
        id: 'de4_q12',
        section: 'Toán Tư Duy: Bài toán tuổi tác',
        topic: 'word_problems',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Năm nay anh 10 tuổi, em 6 tuổi. Hỏi khi em 10 tuổi thì anh bao nhiêu tuổi? ........ tuổi.',
        correctAnswer: '14',
        hint: 'Anh hơn em 4 tuổi (10 - 6 = 4). Khi em 10 tuổi thì anh: 10 + 4.',
        explanation: 'Anh hơn em số tuổi là: 10 - 6 = 4 (tuổi).\nKhi em 10 tuổi thì anh là: 10 + 4 = 14 (tuổi).'
      },
      {
        id: 'de4_q13',
        section: 'Toán Tư Duy: Cấu tạo số',
        topic: 'digit_riddles',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Số bé nhất có hai chữ số mà hiệu hai chữ số bằng 5 là số: ........',
        correctAnswer: '16',
        hint: 'Hàng chục nhỏ nhất là 1. Hàng đơn vị = 1 + 5 = 6.',
        explanation: 'Chữ số hàng chục nhỏ nhất là 1. Chữ số hàng đơn vị là: 1 + 5 = 6. Vậy số đó là 16 (vì 6 - 1 = 5).'
      },
      {
        id: 'de4_q14',
        section: 'Toán Tư Duy: Chia đồ vật có dư',
        topic: 'word_problems',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Có 19 chiếc kẹo chia đều cho 5 bạn, mỗi bạn nhận được nhiều nhất có thể. Hỏi còn thừa mấy chiếc kẹo? ........ chiếc.',
        correctAnswer: '4',
        hint: 'Mỗi bạn 3 chiếc: 3 + 3 + 3 + 3 + 3 = 15 chiếc. Còn thừa: 19 - 15 = ?',
        explanation: '5 bạn mỗi bạn 3 chiếc hết 15 chiếc.\nCòn thừa lại: 19 - 15 = 4 (chiếc kẹo).'
      },
      {
        id: 'de4_q15',
        section: 'Toán Tư Duy: Tháp khối lập phương',
        topic: 'geometry',
        difficulty: 'easy',
        type: 'fill_blank',
        content: 'Một thanh dài được ghép từ 4 ô vuông nhỏ nằm ngang (như hình bên dưới). Trong hình có tất cả bao nhiêu hình chữ nhật?',
        diagram: { type: 'split_rect', count: 4 },
        correctAnswer: '10',
        hint: 'Ghép từ 1 ô (4 hình), 2 ô (3 hình), 3 ô (2 hình), 4 ô (1 hình): 4 + 3 + 2 + 1.',
        explanation: 'Số hình chữ nhật là: 4 + 3 + 2 + 1 = 10 (hình chữ nhật).'
      }
    ]
  },

  // =========================================================================
  // ĐỀ SỐ 5: NÂNG CAO TƯ DUY 1 (Mức độ: Khá - Đề thi Cấp Trường)
  // =========================================================================
  {
    id: 'de-5',
    number: 5,
    title: 'Đề Số 05: Thử Thách Tư Duy (Cấp Trường 1)',
    subtitle: 'Đếm 8 tam giác hình vuông, đổi chỗ chữ số, quy luật Fibonacci lớp 2',
    level: 'Khá',
    levelColor: 'bg-amber-100 text-amber-800 border-amber-300',
    timeLimit: 1200,
    questionsCount: 15,
    questions: [
      {
        id: 'de5_q1',
        section: 'Toán Tư Duy: Toa tàu quy luật cộng dồn',
        topic: 'patterns_sequences',
        difficulty: 'hard',
        type: 'fill_blank',
        content: 'Quan sát quy luật toa tàu: 1, 2, 3, 5, 8, ........ Mỗi số sau bằng tổng hai số liền trước. Điền số tiếp theo:',
        correctAnswer: '13',
        hint: '1 + 2 = 3; 2 + 3 = 5; 3 + 5 = 8. Số tiếp theo là: 5 + 8 = ?',
        explanation: 'Quy luật Fibonacci: Mỗi số đứng sau bằng tổng hai số đứng liền trước nó:\n5 + 8 = 13.'
      },
      {
        id: 'de5_q2',
        section: 'Toán Tư Duy: Đếm hình học',
        topic: 'geometry',
        difficulty: 'medium',
        type: 'multiple_choice',
        content: 'Một chiếc khăn tay hình vuông gấp chéo hai góc đối diện tạo thành 2 đường chéo (như hình bên dưới). Có tất cả bao nhiêu hình tam giác?',
        diagram: { type: 'square_diagonals' },
        options: ['4 hình', '6 hình', '8 hình', '12 hình'],
        correctAnswer: '8 hình',
        hint: '4 tam giác đơn + 4 tam giác đôi = 8 hình.',
        explanation: 'Có 4 tam giác nhỏ và 4 tam giác lớn ghép từ 2 tam giác nhỏ. Tổng cộng là 8 hình tam giác.'
      },
      {
        id: 'de5_q3',
        section: 'Toán Tư Duy: Cân não hoa quả',
        topic: 'missing_components',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Biết 🍎 + 🍎 = 14 và 🍎 + 🍌 = 13. Hỏi giá trị của 🍌 là bao nhiêu?',
        diagram: { type: 'fruit_equation', sumApples: 14, sumMixed: 13 },
        correctAnswer: '6',
        hint: '🍎 = 7 (vì 7 + 7 = 14). Chuối = 13 - 7.',
        explanation: '🍎 = 7.\nChuối 🍌 = 13 - 7 = 6.'
      },
      {
        id: 'de5_q4',
        section: 'Toán Tư Duy: Cân thăng bằng',
        topic: 'word_problems',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Một quả bí đỏ nặng bằng 3 quả dưa lê. Mỗi quả dưa lê nặng 2 kg. Hỏi quả bí đỏ nặng bao nhiêu kg? ........ kg.',
        correctAnswer: '6',
        hint: 'Lấy 2 + 2 + 2 = 6 kg.',
        explanation: 'Quả bí đỏ nặng: 2 + 2 + 2 = 6 (kg).'
      },
      {
        id: 'de5_q5',
        section: 'Toán Tư Duy: Đồng hồ thời gian',
        topic: 'measurement_time',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Bây giờ là 10 giờ đêm. Hỏi 5 giờ trước đó là mấy giờ chiều? ........ giờ.',
        correctAnswer: '5',
        hint: '10 - 5 = 5 giờ chiều.',
        explanation: '10 giờ đêm lùi lại 5 giờ là 5 giờ chiều.'
      },
      {
        id: 'de5_q6',
        section: 'Toán Tư Duy: Xếp hàng tập thể dục',
        topic: 'word_problems',
        difficulty: 'hard',
        type: 'fill_blank',
        content: 'Trong một hàng dọc, bạn Hùng đứng thứ 6 từ đầu hàng đếm lại, và đứng thứ 6 từ cuối hàng đếm lên. Hỏi hàng đó có tất cả bao nhiêu bạn? ........ bạn.',
        correctAnswer: '11',
        hint: 'Vì bạn Hùng được đếm 2 lần: 6 + 6 - 1 = 11 bạn.',
        explanation: 'Số bạn trong hàng là: 6 + 6 - 1 = 11 (bạn).'
      },
      {
        id: 'de5_q7',
        section: 'Toán Tư Duy: Trồng cây 2 đầu đường',
        topic: 'word_problems',
        difficulty: 'hard',
        type: 'fill_blank',
        content: 'Người ta trồng 5 cây cách đều nhau trên một đoạn đường thẳng. Hỏi giữa 5 cây đó có tất cả bao nhiêu khoảng cách? ........ khoảng cách.',
        correctAnswer: '4',
        hint: 'Số khoảng cách = Số cây - 1 = 5 - 1.',
        explanation: 'Giữa 5 cây trồng thành hàng có: 5 - 1 = 4 (khoảng cách).'
      },
      {
        id: 'de5_q8',
        section: 'Toán Tư Duy: Đếm chân con vật',
        topic: 'word_problems',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Một đàn gà và thỏ đếm được có 3 con gà và 3 con thỏ. Hỏi có tất cả bao nhiêu cái chân? ........ cái chân.',
        diagram: { type: 'animals_legs', chickens: 3, dogs: 3 },
        correctAnswer: '18',
        hint: '3 con gà: 6 chân. 3 con thỏ: 4 + 4 + 4 = 12 chân. Tổng: 6 + 12.',
        explanation: '3 con gà có: 6 chân.\n3 con thỏ có: 12 chân.\nTổng cộng có: 6 + 12 = 18 (chân).'
      },
      {
        id: 'de5_q9',
        section: 'Toán Tư Duy: So sánh logic',
        topic: 'word_problems',
        difficulty: 'medium',
        type: 'multiple_choice',
        content: 'Cây bàng cao hơn cây phượng, cây phượng cao hơn cây xoài, cây xoài cao hơn cây ổi. Hỏi cây nào cao nhất?',
        options: ['Cây bàng', 'Cây phượng', 'Cây xoài', 'Cây ổi'],
        correctAnswer: 'Cây bàng',
        hint: 'Bàng > Phượng > Xoài > Ổi.',
        explanation: 'Cây cao nhất là cây bàng.'
      },
      {
        id: 'de5_q10',
        section: 'Toán Tư Duy: Lịch và ngày trong tuần',
        topic: 'measurement_time',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Hôm qua là thứ Bảy. Hỏi ngày mai là thứ mấy?',
        correctAnswer: 'thứ Hai',
        hint: 'Hôm qua là thứ Bảy -> Hôm nay là Chủ Nhật -> Ngày mai là thứ Hai.',
        explanation: 'Hôm qua là thứ Bảy -> Hôm nay là Chủ Nhật -> Ngày mai là thứ Hai.'
      },
      {
        id: 'de5_q11',
        section: 'Toán Tư Duy: Đố mẹo thời gian',
        topic: 'word_problems',
        difficulty: 'hard',
        type: 'multiple_choice',
        content: 'Cần 3 phút để luộc chín 1 quả trứng gà. Hỏi muốn luộc chín 3 quả trứng gà cùng lúc trong 1 chiếc nồi thì mất bao nhiêu phút?',
        options: ['1 phút', '3 phút', '6 phút', '9 phút'],
        correctAnswer: '3 phút',
        hint: 'Cả 3 quả trứng được cho vào nồi luộc cùng một lúc.',
        explanation: 'Vì luộc 3 quả trứng cùng một lúc trong nồi, nên chỉ mất 3 phút là cả 3 quả đều chín.'
      },
      {
        id: 'de5_q12',
        section: 'Toán Tư Duy: Bài toán tuổi tác',
        topic: 'word_problems',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Hai năm trước, tổng số tuổi của hai chị em là 14 tuổi. Hỏi hiện nay tổng số tuổi của hai chị em là bao nhiêu? ........ tuổi.',
        correctAnswer: '18',
        hint: 'Mỗi người tăng thêm 2 tuổi, cả 2 chị em tăng thêm 2 + 2 = 4 tuổi: 14 + 4.',
        explanation: 'Sau 2 năm, mỗi người đều thêm 2 tuổi.\nHiện nay tổng số tuổi là: 14 + 2 + 2 = 18 (tuổi).'
      },
      {
        id: 'de5_q13',
        section: 'Toán Tư Duy: Cấu tạo số đảo ngược',
        topic: 'digit_riddles',
        difficulty: 'hard',
        type: 'fill_blank',
        content: 'Khi đổi chỗ hai chữ số của số 49 cho nhau ta được một số mới. Hỏi số mới lớn hơn số ban đầu bao nhiêu đơn vị? ........ đơn vị.',
        correctAnswer: '45',
        hint: 'Đổi chỗ hai chữ số được số 94. Lấy 94 - 49 = ?',
        explanation: 'Đổi chỗ hai chữ số của 49 ta được số 94.\nSố mới lớn hơn số ban đầu: 94 - 49 = 45 (đơn vị).'
      },
      {
        id: 'de5_q14',
        section: 'Toán Tư Duy: Chia đồ vật có dư',
        topic: 'word_problems',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Có 23 cái kẹo chia đều cho 4 bạn, mỗi bạn được nhiều nhất có thể. Hỏi còn thừa mấy cái kẹo? ........ cái.',
        correctAnswer: '3',
        hint: '4 bạn mỗi bạn 5 cái kẹo hết: 5 + 5 + 5 + 5 = 20 cái. Còn thừa: 23 - 20 = 3.',
        explanation: 'Mỗi bạn nhận 5 cái kẹo hết 20 cái.\nSố kẹo còn thừa là: 23 - 20 = 3 (cái kẹo).'
      },
      {
        id: 'de5_q15',
        section: 'Toán Tư Duy: Tháp khối lập phương',
        topic: 'geometry',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Một hình lập phương có bao nhiêu đỉnh nhọn? ........ đỉnh.',
        correctAnswer: '8',
        hint: '4 đỉnh ở mặt trên và 4 đỉnh ở mặt dưới.',
        explanation: 'Hình lập phương có 8 đỉnh (4 đỉnh mặt trên và 4 đỉnh mặt dưới).'
      }
    ]
  },

  // =========================================================================
  // ĐỀ SỐ 6: NÂNG CAO TƯ DUY 2 (Mức độ: Khá - Đề thi Cấp Trường)
  // =========================================================================
  {
    id: 'de-6',
    number: 6,
    title: 'Đề Số 06: Thử Thách Tư Duy (Cấp Trường 2)',
    subtitle: 'Đếm 6 hình tứ giác cắt xiên, bài toán cho nhận bi bằng nhau, cưa khúc gỗ',
    level: 'Khá',
    levelColor: 'bg-amber-100 text-amber-800 border-amber-300',
    timeLimit: 1200,
    questionsCount: 15,
    questions: [
      {
        id: 'de6_q1',
        section: 'Toán Tư Duy: Toa tàu nhảy bước',
        topic: 'patterns_sequences',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Điền số thích hợp vào toa tàu mang dấu hỏi (?): 2, 6, 10, 14, ........',
        diagram: { type: 'train_sequence', seq: [2, 6, 10, 14] },
        correctAnswer: '18',
        hint: 'Mỗi số sau hơn số trước 4 đơn vị: 14 + 4 = ?',
        explanation: 'Quy luật đếm thêm 4: 14 + 4 = 18.'
      },
      {
        id: 'de6_q2',
        section: 'Toán Tư Duy: Đếm hình học',
        topic: 'geometry',
        difficulty: 'hard',
        type: 'fill_blank',
        content: 'Quan sát hình chữ nhật cắt xiên làm 3 phần bên dưới. Trong hình có tất cả bao nhiêu hình tứ giác? ........ hình.',
        diagram: { type: 'composite_quadrilateral' },
        correctAnswer: '6',
        hint: '3 hình đơn + 2 hình đôi + 1 hình lớn = 6 hình.',
        explanation: 'Có 3 hình tứ giác đơn (1, 2, 3), 2 hình ghép đôi (1+2, 2+3), và 1 hình ba bao quanh. Tổng cộng là 6 hình tứ giác.'
      },
      {
        id: 'de6_q3',
        section: 'Toán Tư Duy: Cân não hoa quả',
        topic: 'missing_components',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Biết 🍎 + 🍎 = 18 và 🍎 + 🍌 = 15. Hỏi quả chuối 🍌 có giá trị bằng bao nhiêu?',
        diagram: { type: 'fruit_equation', sumApples: 18, sumMixed: 15 },
        correctAnswer: '6',
        hint: '🍎 = 9 (vì 9 + 9 = 18). Chuối = 15 - 9.',
        explanation: '🍎 = 9.\nChuối 🍌 = 15 - 9 = 6.'
      },
      {
        id: 'de6_q4',
        section: 'Toán Tư Duy: Cân thăng bằng',
        topic: 'word_problems',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Một quả dưa hấu và một quả cân 2kg ở đĩa trái thì thăng bằng với 1 quả cân 5kg và 1 quả cân 2kg ở đĩa phải. Hỏi quả dưa hấu nặng bao nhiêu kg? ........ kg.',
        correctAnswer: '5',
        hint: 'Bớt quả cân 2kg ở cả hai bên đĩa cân đi.',
        explanation: 'Cả hai đĩa cân đều có quả cân 2kg. Bỏ quả cân 2kg ở hai bên đi, quả dưa hấu sẽ thăng bằng với quả cân 5kg. Vậy quả dưa nặng 5 kg.'
      },
      {
        id: 'de6_q5',
        section: 'Toán Tư Duy: Đồng hồ thời gian',
        topic: 'measurement_time',
        difficulty: 'easy',
        type: 'fill_blank',
        content: 'Kim ngắn chỉ số 6, kim dài chỉ số 12. Hỏi lúc đó là mấy giờ?',
        options: ['6 giờ', '12 giờ', '6 giờ 12 phút', '7 giờ'],
        type: 'multiple_choice',
        correctAnswer: '6 giờ',
        hint: 'Kim dài chỉ 12 là giờ đúng.',
        explanation: 'Kim ngắn chỉ số 6, kim dài chỉ số 12 là 6 giờ đúng.'
      },
      {
        id: 'de6_q6',
        section: 'Toán Tư Duy: Xếp hàng tập thể dục',
        topic: 'word_problems',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Đứng trước bạn Mai có 6 bạn, đứng sau bạn Mai có 7 bạn. Hỏi hàng có tất cả bao nhiêu bạn? ........ bạn.',
        diagram: { type: 'lineup', front: 6, back: 7, name: 'Mai' },
        correctAnswer: '14',
        hint: '6 bạn trước + Mai + 7 bạn sau: 6 + 1 + 7.',
        explanation: 'Số bạn trong hàng là: 6 + 1 + 7 = 14 (bạn).'
      },
      {
        id: 'de6_q7',
        section: 'Toán Tư Duy: Cho nhận để bằng nhau',
        topic: 'word_problems',
        difficulty: 'hard',
        type: 'fill_blank',
        content: 'Nam có 20 viên bi, Hải có 12 viên bi. Hỏi Nam phải cho Hải bao nhiêu viên bi để hai bạn có số bi bằng nhau? ........ viên bi.',
        correctAnswer: '4',
        hint: 'Nam nhiều hơn Hải: 20 - 12 = 8 viên. Nam cho Hải một nửa số bi nhiều hơn: 8 : 2 = ?',
        explanation: 'Nam nhiều hơn Hải số bi là: 20 - 12 = 8 (viên bi).\nNam phải cho Hải một nửa số chênh lệch: 8 : 2 = 4 (viên bi).\n(Khi đó cả hai bạn đều có 16 viên bi).'
      },
      {
        id: 'de6_q8',
        section: 'Toán Tư Duy: Đếm chân con vật',
        topic: 'word_problems',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Bác Ba có 1 con chó và một số con gà. Bác đếm được tất cả có 10 cái chân. Hỏi bác Ba có mấy con gà? ........ con gà.',
        correctAnswer: '3',
        hint: 'Con chó có 4 chân. Số chân gà là: 10 - 4 = 6 chân. Mỗi con gà có 2 chân nên có: 6 : 2 = 3 con.',
        explanation: '1 con chó có 4 chân.\nSố chân của các con gà là: 10 - 4 = 6 (chân).\nSố con gà là: 6 : 2 = 3 (con gà).'
      },
      {
        id: 'de6_q9',
        section: 'Toán Tư Duy: So sánh logic',
        topic: 'word_problems',
        difficulty: 'medium',
        type: 'multiple_choice',
        content: 'Có 3 bạn: An, Bình, Chi. An cao hơn Bình, Chi thấp hơn Bình. Hỏi bạn nào thấp nhất?',
        options: ['An', 'Bình', 'Chi', 'An và Chi'],
        correctAnswer: 'Chi',
        hint: 'An > Bình > Chi.',
        explanation: 'Thứ tự chiều cao: An > Bình > Chi. Bạn thấp nhất là Chi.'
      },
      {
        id: 'de6_q10',
        section: 'Toán Tư Duy: Lịch và ngày trong tuần',
        topic: 'measurement_time',
        difficulty: 'easy',
        type: 'fill_blank',
        content: 'Hôm nay là thứ Tư ngày 7. Thứ Tư của 2 tuần sau là ngày mấy? Ngày ........',
        correctAnswer: '21',
        hint: 'Mỗi tuần có 7 ngày, 2 tuần có 7 + 7 = 14 ngày: lấy 7 + 14 = ?',
        explanation: '2 tuần có: 7 + 7 = 14 (ngày).\nThứ Tư của 2 tuần sau là ngày: 7 + 14 = 21.'
      },
      {
        id: 'de6_q11',
        section: 'Toán Tư Duy: Mẹo vui logic',
        topic: 'word_problems',
        difficulty: 'hard',
        type: 'multiple_choice',
        content: 'Nhà Nam có 4 anh em trai. Mỗi người anh em trai đều có duy nhất 1 cô em gái út. Hỏi nhà Nam có tất cả bao nhiêu anh chị em?',
        options: ['8 người', '5 người', '4 người', '6 người'],
        correctAnswer: '5 người',
        hint: 'Cô em gái út là em gái chung của cả 4 anh em trai!',
        explanation: '4 anh em trai đều có chung 1 cô em gái út. Vậy gia đình có: 4 người con trai + 1 người con gái = 5 người con.'
      },
      {
        id: 'de6_q12',
        section: 'Toán Tư Duy: Bài toán tuổi tác',
        topic: 'word_problems',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Hiện nay mẹ 32 tuổi, con 7 tuổi. Hỏi khi con 10 tuổi thì mẹ bao nhiêu tuổi? ........ tuổi.',
        correctAnswer: '35',
        hint: 'Mẹ hơn con: 32 - 7 = 25 tuổi. Khi con 10 tuổi thì mẹ: 10 + 25.',
        explanation: 'Mẹ hơn con: 32 - 7 = 25 (tuổi).\nKhi con 10 tuổi thì tuổi của mẹ là: 10 + 25 = 35 (tuổi).'
      },
      {
        id: 'de6_q13',
        section: 'Toán Tư Duy: Cấu tạo số',
        topic: 'digit_riddles',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Số bé nhất có hai chữ số mà tổng hai chữ số bằng 10 là số: ........',
        correctAnswer: '19',
        hint: 'Để số bé nhất thì hàng chục phải nhỏ nhất là 1. Hàng đơn vị = 10 - 1 = 9.',
        explanation: 'Hàng chục nhỏ nhất là 1. Hàng đơn vị là 10 - 1 = 9. Vậy số đó là 19.'
      },
      {
        id: 'de6_q14',
        section: 'Toán Tư Duy: Chia đồ vật có dư',
        topic: 'word_problems',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Cô giáo có 25 cái kẹo chia đều cho 3 bạn sao cho mỗi bạn được nhiều nhất có thể. Hỏi cô còn thừa mấy cái kẹo? ........ cái.',
        correctAnswer: '1',
        hint: 'Mỗi bạn nhận 8 cái kẹo: 8 + 8 + 8 = 24 cái. Còn thừa: 25 - 24 = 1.',
        explanation: '3 bạn mỗi bạn 8 cái kẹo hết 24 cái.\nSố kẹo còn thừa là: 25 - 24 = 1 (cái kẹo).'
      },
      {
        id: 'de6_q15',
        section: 'Toán Tư Duy: Tháp khối lập phương',
        topic: 'geometry',
        difficulty: 'easy',
        type: 'fill_blank',
        content: 'Một hình lập phương có bao nhiêu cạnh thẳng? ........ cạnh.',
        correctAnswer: '12',
        hint: '4 cạnh đáy trên, 4 cạnh đáy dưới và 4 cạnh đứng.',
        explanation: 'Hình lập phương có đúng 12 cạnh bằng nhau.'
      }
    ]
  },

  // =========================================================================
  // ĐỀ SỐ 7: THỬ THÁCH ĐẤU TRƯỜNG 1 (Mức độ: Khá - Thi Cấp Huyện)
  // =========================================================================
  {
    id: 'de-7',
    number: 7,
    title: 'Đề Số 07: Thử Thách Đấu Trường (Cấp Huyện 1)',
    subtitle: 'Đếm 8 tam giác hình vuông, cưa cây thành đoạn, tuổi ông cháu',
    level: 'Khá',
    levelColor: 'bg-amber-100 text-amber-800 border-amber-300',
    timeLimit: 1200,
    questionsCount: 15,
    questions: [
      {
        id: 'de7_q1',
        section: 'Toán Tư Duy: Dãy số nhảy cách',
        topic: 'patterns_sequences',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Tìm số tiếp theo của dãy số giảm dần sau: 30, 26, 22, 18, ........',
        correctAnswer: '14',
        hint: 'Mỗi số sau bớt đi 4 đơn vị: 18 - 4 = ?',
        explanation: 'Quy luật: Mỗi số sau kém số trước 4 đơn vị.\nSố tiếp theo là: 18 - 4 = 14.'
      },
      {
        id: 'de7_q2',
        section: 'Toán Tư Duy: Đếm hình học',
        topic: 'geometry',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Trong một hình vuông có 2 đường chéo cắt nhau, có tất cả bao nhiêu hình tam giác? ........ hình.',
        diagram: { type: 'square_diagonals' },
        correctAnswer: '8',
        hint: '4 tam giác nhỏ và 4 tam giác lớn.',
        explanation: 'Có tất cả 8 hình tam giác.'
      },
      {
        id: 'de7_q3',
        section: 'Toán Tư Duy: Cân não hoa quả',
        topic: 'missing_components',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Biết 🍎 + 🍎 = 20 và 🍎 + 🍌 = 16. Hỏi quả chuối 🍌 có giá trị bằng bao nhiêu?',
        diagram: { type: 'fruit_equation', sumApples: 20, sumMixed: 16 },
        correctAnswer: '6',
        hint: '🍎 = 10 (vì 10 + 10 = 20). Chuối = 16 - 10.',
        explanation: '🍎 = 10.\nChuối 🍌 = 16 - 10 = 6.'
      },
      {
        id: 'de7_q4',
        section: 'Toán Tư Duy: Cân thăng bằng',
        topic: 'word_problems',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Một bao gạo nặng bằng 4 quả cân loại 5kg. Hỏi bao gạo nặng bao nhiêu kg? ........ kg.',
        correctAnswer: '20',
        hint: '4 quả cân 5kg: 5 + 5 + 5 + 5 = ?',
        explanation: 'Bao gạo nặng: 5 + 5 + 5 + 5 = 20 (kg).'
      },
      {
        id: 'de7_q5',
        section: 'Toán Tư Duy: Đồng hồ thời gian',
        topic: 'measurement_time',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Buổi chiều, khi kim ngắn chỉ số 4 và kim dài chỉ số 12 thì đó là mấy giờ?',
        options: ['4 giờ sáng', '14 giờ', '16 giờ (4 giờ chiều)', '18 giờ'],
        type: 'multiple_choice',
        correctAnswer: '16 giờ (4 giờ chiều)',
        hint: '4 giờ chiều trong hệ 24 giờ là 12 + 4 = 16 giờ.',
        explanation: '4 giờ chiều tương ứng với 16 giờ.'
      },
      {
        id: 'de7_q6',
        section: 'Toán Tư Duy: Xếp hàng tập thể dục',
        topic: 'word_problems',
        difficulty: 'hard',
        type: 'fill_blank',
        content: 'Trong một hàng dọc có 15 bạn. Đứng trước bạn Hoa có 8 bạn. Hỏi đứng sau bạn Hoa có bao nhiêu bạn? ........ bạn.',
        correctAnswer: '6',
        hint: '8 bạn trước + bạn Hoa = 9 bạn. Phía sau bạn Hoa có: 15 - 9 = ?',
        explanation: 'Số bạn đứng phía sau bạn Hoa là: 15 - 8 - 1 = 6 (bạn).'
      },
      {
        id: 'de7_q7',
        section: 'Toán Tư Duy: Cưa cây cọc rào',
        topic: 'word_problems',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Một thanh tre dài được cưa thành 7 đoạn nhỏ để làm cọc rào. Hỏi bác thợ phải cưa bao nhiêu lần? ........ lần.',
        correctAnswer: '6',
        hint: 'Số lần cưa = 7 - 1 = 6.',
        explanation: 'Cần cưa: 7 - 1 = 6 (lần cưa).'
      },
      {
        id: 'de7_q8',
        section: 'Toán Tư Duy: Đếm chân con vật',
        topic: 'word_problems',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Một bạn đếm thấy trong chuồng có tất cả 4 cái đầu và 10 cái chân (gồm gà và thỏ). Hỏi trong chuồng có mấy con gà và mấy con thỏ?',
        options: ['3 con gà, 1 con thỏ', '2 con gà, 2 con thỏ', '1 con gà, 3 con thỏ', '4 con gà, 0 con thỏ'],
        type: 'multiple_choice',
        correctAnswer: '3 con gà, 1 con thỏ',
        hint: 'Thử trường hợp 3 gà (6 chân) + 1 thỏ (4 chân) = 10 chân và đủ 4 con!',
        explanation: '3 con gà có: 3 x 2 = 6 (chân).\n1 con thỏ có: 4 (chân).\nTổng số con: 3 + 1 = 4 (con).\nTổng số chân: 6 + 4 = 10 (chân). Đáp án đúng là 3 con gà, 1 con thỏ.'
      },
      {
        id: 'de7_q9',
        section: 'Toán Tư Duy: So sánh logic',
        topic: 'word_problems',
        difficulty: 'medium',
        type: 'multiple_choice',
        content: 'Trong cuộc thi chạy: Bạn Dũng về đích trước bạn Huy. Bạn Huy về đích trước bạn Sơn. Hỏi ai là người chiến thắng về đích đầu tiên?',
        options: ['Dũng', 'Huy', 'Sơn', 'Dũng và Sơn cùng về đích'],
        correctAnswer: 'Dũng',
        hint: 'Dũng > Huy > Sơn.',
        explanation: 'Thứ tự về đích: Dũng trước Huy, Huy trước Sơn. Vậy người về đích đầu tiên là Dũng.'
      },
      {
        id: 'de7_q10',
        section: 'Toán Tư Duy: Lịch và ngày trong tuần',
        topic: 'measurement_time',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Tháng này có ngày mùng 1 là thứ Hai. Hỏi ngày thứ Hai tiếp theo của tháng là ngày mùng mấy? Ngày mùng ........',
        correctAnswer: '8',
        hint: '1 + 7 = 8.',
        explanation: 'Ngày thứ Hai tiếp theo là ngày: 1 + 7 = 8.'
      },
      {
        id: 'de7_q11',
        section: 'Toán Tư Duy: Mẹo vui logic',
        topic: 'word_problems',
        difficulty: 'hard',
        type: 'multiple_choice',
        content: 'Một đoàn tàu hỏa chạy từ Bắc vào Nam. Gió thổi từ Tây sang Đông. Hỏi khói tàu bay về hướng nào?',
        options: ['Hướng Đông', 'Hướng Tây', 'Hướng Nam', 'Tàu hỏa chạy điện nên không có khói'],
        correctAnswer: 'Tàu hỏa chạy điện nên không có khói',
        hint: 'Đoàn tàu hỏa chạy điện có khói không?',
        explanation: 'Đoàn tàu hỏa chạy bằng điện hiện đại không xả khói!'
      },
      {
        id: 'de7_q12',
        section: 'Toán Tư Duy: Bài toán tuổi tác',
        topic: 'word_problems',
        difficulty: 'hard',
        type: 'fill_blank',
        content: 'Ông năm nay 70 tuổi, cháu 8 tuổi. Hỏi 5 năm trước ông hơn cháu bao nhiêu tuổi? ........ tuổi.',
        correctAnswer: '62',
        hint: 'Hiệu số tuổi không bao giờ thay đổi: 70 - 8 = ?',
        explanation: 'Hiệu số tuổi giữa hai người luôn không đổi qua các năm.\nHiện nay ông hơn cháu là: 70 - 8 = 62 (tuổi).\nVậy 5 năm trước ông vẫn hơn cháu 62 tuổi.'
      },
      {
        id: 'de7_q13',
        section: 'Toán Tư Duy: Cấu tạo số',
        topic: 'digit_riddles',
        difficulty: 'hard',
        type: 'fill_blank',
        content: 'Số lớn nhất có hai chữ số mà chữ số hàng chục gấp 4 lần chữ số hàng đơn vị là số: ........',
        correctAnswer: '82',
        hint: 'Hàng chục gấp 4 lần hàng đơn vị: nếu hàng đơn vị là 2 thì hàng chục là 8.',
        explanation: 'Nếu chữ số hàng đơn vị là 2 thì chữ số hàng chục là: 2 x 4 = 8. Ta được số 82.'
      },
      {
        id: 'de7_q14',
        section: 'Toán Tư Duy: Chia đồ vật có dư',
        topic: 'word_problems',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Có 22 quyển vở chia đều cho 5 bạn, mỗi bạn được nhiều nhất có thể. Hỏi còn thừa mấy quyển vở? ........ quyển.',
        correctAnswer: '2',
        hint: '5 bạn mỗi bạn 4 quyển hết 20 quyển. Còn thừa: 22 - 20 = 2.',
        explanation: '5 bạn mỗi bạn 4 quyển hết 20 quyển.\nSố quyển vở còn thừa là: 22 - 20 = 2 (quyển).'
      },
      {
        id: 'de7_q15',
        section: 'Toán Tư Duy: Tháp khối lập phương',
        topic: 'geometry',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Cần ít nhất bao nhiêu khối lập phương nhỏ để xếp thành một khối lập phương lớn hơn?',
        options: ['4 khối', '6 khối', '8 khối', '9 khối'],
        type: 'multiple_choice',
        correctAnswer: '8 khối',
        hint: 'Cần 2 khối mỗi cạnh: 2 x 2 x 2 = 8 khối.',
        explanation: 'Để xếp thành khối lập phương lớn hơn, mỗi cạnh cần 2 khối nhỏ. Số khối cần là: 2 x 2 x 2 = 8 khối lập phương nhỏ.'
      }
    ]
  },

  // =========================================================================
  // ĐỀ SỐ 8: THỬ THÁCH ĐẤU TRƯỜNG 2 (Mức độ: Nâng cao - Thi Cấp Huyện)
  // =========================================================================
  {
    id: 'de-8',
    number: 8,
    title: 'Đề Số 08: Thử Thách Đấu Trường (Cấp Huyện 2)',
    subtitle: 'Đếm 10 tam giác đỉnh chung, chia kẹo có dư, chuyển nước trong can',
    level: 'Nâng cao',
    levelColor: 'bg-rose-100 text-rose-800 border-rose-300',
    timeLimit: 1200,
    questionsCount: 15,
    questions: [
      {
        id: 'de8_q1',
        section: 'Toán Tư Duy: Toa tàu khoảng cách tăng dần',
        topic: 'patterns_sequences',
        difficulty: 'hard',
        type: 'fill_blank',
        content: 'Tìm số tiếp theo điền vào chỗ chấm: 1, 2, 4, 7, 11, ........',
        correctAnswer: '16',
        hint: 'Khoảng cách giữa các số tăng dần: +1, +2, +3, +4. Số tiếp theo cộng 5: 11 + 5 = ?',
        explanation: 'Khoảng cách: 2 - 1 = 1; 4 - 2 = 2; 7 - 4 = 3; 11 - 7 = 4.\nKhoảng cách tiếp theo là 5: 11 + 5 = 16.'
      },
      {
        id: 'de8_q2',
        section: 'Toán Tư Duy: Đếm hình học',
        topic: 'geometry',
        difficulty: 'hard',
        type: 'fill_blank',
        content: 'Một hình tam giác có đáy chia làm 4 đoạn nhỏ (như hình bên dưới). Trong hình có tất cả bao nhiêu hình tam giác? ........ hình.',
        diagram: { type: 'apex_triangle', baseSegments: 4 },
        correctAnswer: '10',
        hint: '4 + 3 + 2 + 1 = 10 hình tam giác.',
        explanation: 'Số hình tam giác là: 4 + 3 + 2 + 1 = 10 (hình tam giác).'
      },
      {
        id: 'de8_q3',
        section: 'Toán Tư Duy: Cân não hoa quả',
        topic: 'missing_components',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Biết 🍎 + 🍎 + 🍎 = 15 và 🍎 + 🍌 = 9. Hỏi quả chuối 🍌 có giá trị bằng bao nhiêu?',
        correctAnswer: '4',
        hint: '3 quả táo giống nhau bằng 15 nên 1 quả táo bằng 5 (5 + 5 + 5 = 15). Quả chuối = 9 - 5.',
        explanation: '3 quả táo = 15 => 🍎 = 5 (vì 5 + 5 + 5 = 15).\nQuả chuối 🍌 = 9 - 5 = 4.'
      },
      {
        id: 'de8_q4',
        section: 'Toán Tư Duy: Cân thăng bằng',
        topic: 'word_problems',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Một quả dưa hấu nặng bằng 2 quả dưa gang. Một quả dưa gang nặng bằng 2 quả bưởi. Biết một quả bưởi nặng 1 kg. Hỏi quả dưa hấu nặng bao nhiêu kg? ........ kg.',
        correctAnswer: '4',
        hint: 'Quả dưa gang = 1 + 1 = 2 kg. Quả dưa hấu = 2 + 2 = 4 kg.',
        explanation: '1 quả dưa gang nặng: 1 + 1 = 2 (kg).\n1 quả dưa hấu nặng: 2 + 2 = 4 (kg).'
      },
      {
        id: 'de8_q5',
        section: 'Toán Tư Duy: Đồng hồ thời gian',
        topic: 'measurement_time',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Bây giờ là 2 giờ chiều. Hỏi sau 4 giờ nữa đồng hồ sẽ chỉ mấy giờ tối? ........ giờ tối.',
        correctAnswer: '6',
        hint: '2 + 4 = 6 giờ tối.',
        explanation: 'Thời gian sau 4 giờ nữa là: 2 + 4 = 6 (giờ tối).'
      },
      {
        id: 'de8_q6',
        section: 'Toán Tư Duy: Xếp hàng tập thể dục',
        topic: 'word_problems',
        difficulty: 'hard',
        type: 'fill_blank',
        content: 'Một hàng có 16 bạn học sinh. Bạn Trang đứng thứ 10 từ đầu hàng đếm xuống. Hỏi bạn Trang đứng thứ mấy nếu đếm từ cuối hàng lên? Thứ ........',
        correctAnswer: '7',
        hint: 'Phía sau Trang có: 16 - 10 = 6 bạn. Đếm từ cuối lên, Trang đứng thứ: 6 + 1 = 7.',
        explanation: 'Phía sau bạn Trang có: 16 - 10 = 6 (bạn).\nVậy nếu đếm từ cuối hàng lên, bạn Trang đứng ở vị trí thứ: 6 + 1 = 7.'
      },
      {
        id: 'de8_q7',
        section: 'Toán Tư Duy: Rót nước đong can',
        topic: 'word_problems',
        difficulty: 'hard',
        type: 'fill_blank',
        content: 'Thùng thứ nhất có 18 lít dầu, thùng thứ hai có 10 lít dầu. Hỏi phải chuyển bao nhiêu lít dầu từ thùng thứ nhất sang thùng thứ hai để hai thùng có số dầu bằng nhau? ........ lít.',
        correctAnswer: '4',
        hint: 'Thùng 1 hơn thùng 2: 18 - 10 = 8 lít. Chuyển một nửa: 8 : 2 = 4 lít.',
        explanation: 'Thùng thứ nhất hơn thùng thứ hai: 18 - 10 = 8 (lít).\nCần chuyển số lít dầu là: 8 : 2 = 4 (lít).\n(Khi đó cả hai thùng đều có 14 lít).'
      },
      {
        id: 'de8_q8',
        section: 'Toán Tư Duy: Đếm chân con vật',
        topic: 'word_problems',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Trong chuồng có 6 con gà và 2 con mèo. Hỏi có tất cả bao nhiêu cái chân? ........ cái chân.',
        correctAnswer: '20',
        hint: '6 con gà: 6 x 2 = 12 chân. 2 con mèo: 4 + 4 = 8 chân. Tổng: 12 + 8.',
        explanation: '6 con gà có: 12 (chân).\n2 con mèo có: 8 (chân).\nTổng cộng có: 12 + 8 = 20 (chân).'
      },
      {
        id: 'de8_q9',
        section: 'Toán Tư Duy: So sánh logic',
        topic: 'word_problems',
        difficulty: 'medium',
        type: 'multiple_choice',
        content: 'Bạn An có nhiều kẹo hơn bạn Bình, nhưng lại có ít kẹo hơn bạn Cường. Hỏi bạn nào có nhiều kẹo nhất?',
        options: ['An', 'Bình', 'Cường', 'Không so sánh được'],
        correctAnswer: 'Cường',
        hint: 'Cường > An > Bình.',
        explanation: 'Thứ tự số kẹo: Cường nhiều hơn An, An nhiều hơn Bình. Vậy bạn có nhiều kẹo nhất là Cường.'
      },
      {
        id: 'de8_q10',
        section: 'Toán Tư Duy: Lịch và ngày trong tuần',
        topic: 'measurement_time',
        difficulty: 'hard',
        type: 'fill_blank',
        content: 'Hôm nay là Chủ Nhật ngày 14. Hỏi Chủ Nhật tuần trước là ngày mấy? Ngày ........',
        correctAnswer: '7',
        hint: '14 - 7 = 7.',
        explanation: 'Chủ Nhật tuần trước là ngày: 14 - 7 = 7.'
      },
      {
        id: 'de8_q11',
        section: 'Toán Tư Duy: Đố mẹo logic',
        topic: 'word_problems',
        difficulty: 'hard',
        type: 'multiple_choice',
        content: 'Một người thợ may có một tấm vải dài 10 mét. Mỗi ngày ông cắt đi một mảnh dài 2 mét. Hỏi sau bao nhiêu ngày thì ông cắt xong tấm vải?',
        options: ['5 ngày', '4 ngày', '3 ngày', '2 ngày'],
        correctAnswer: '4 ngày',
        hint: 'Đến ngày thứ 4, ông cắt 2 mét thì phần còn lại 2 mét cũng tự thành mảnh cuối cùng mà không cần nhát cắt ngày thứ 5!',
        explanation: 'Sau 4 ngày ông đã cắt được 4 nhát, chia tấm vải thành 5 mảnh dài 2m. Mảnh cuối cùng tự rời ra không cần cắt nữa. Vậy chỉ mất 4 ngày.'
      },
      {
        id: 'de8_q12',
        section: 'Toán Tư Duy: Bài toán tuổi tác',
        topic: 'word_problems',
        difficulty: 'hard',
        type: 'fill_blank',
        content: 'Năm nay anh 12 tuổi, em 4 tuổi. Hỏi mấy năm nữa tuổi anh gấp đôi tuổi em? Trả lời: Sau ........ năm nữa.',
        correctAnswer: '4',
        hint: 'Anh hơn em: 12 - 4 = 8 tuổi. Khi tuổi anh gấp đôi tuổi em, em sẽ 8 tuổi. Sau: 8 - 4 = 4 năm.',
        explanation: 'Anh hơn em: 12 - 4 = 8 (tuổi).\nKhi anh gấp đôi tuổi em thì em 8 tuổi và anh 16 tuổi.\nSố năm nữa là: 8 - 4 = 4 (năm).'
      },
      {
        id: 'de8_q13',
        section: 'Toán Tư Duy: Cấu tạo số',
        topic: 'digit_riddles',
        difficulty: 'hard',
        type: 'fill_blank',
        content: 'Tìm số có hai chữ số biết chữ số hàng đơn vị là 5, và khi đổi chỗ hai chữ số cho nhau thì số đó giảm đi 18 đơn vị. Số đó là: ........',
        correctAnswer: '75',
        hint: 'Số ban đầu là a5, số mới là 5a. 75 đổi thành 57: 75 - 57 = 18.',
        explanation: 'Số đó là 75. Khi đổi chỗ ta được 57.\n75 - 57 = 18 đơn vị.'
      },
      {
        id: 'de8_q14',
        section: 'Toán Tư Duy: Chia đồ vật có dư',
        topic: 'word_problems',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Có 26 quả bóng chia đều vào 4 túi, mỗi túi có nhiều bóng nhất có thể. Hỏi còn thừa mấy quả bóng? ........ quả.',
        correctAnswer: '2',
        hint: '4 túi mỗi túi 6 quả hết 24 quả. Còn thừa: 26 - 24 = 2.',
        explanation: '4 túi mỗi túi 6 quả bóng hết: 6 + 6 + 6 + 6 = 24 (quả).\nCòn thừa lại: 26 - 24 = 2 (quả bóng).'
      },
      {
        id: 'de8_q15',
        section: 'Toán Tư Duy: Tháp khối lập phương',
        topic: 'geometry',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Một hình chữ nhật dài được chia thành 5 ô vuông nhỏ nằm ngang. Hỏi có tất cả bao nhiêu hình chữ nhật?',
        diagram: { type: 'split_rect', count: 5 },
        correctAnswer: '15',
        hint: '5 + 4 + 3 + 2 + 1 = 15 hình.',
        explanation: 'Số hình chữ nhật là: 5 + 4 + 3 + 2 + 1 = 15 (hình chữ nhật).'
      }
    ]
  },

  // =========================================================================
  // ĐỀ SỐ 9: CHINH PHỤC ĐỈNH CAO 1 (Mức độ: Nâng cao - Vòng Tỉnh/TP)
  // =========================================================================
  {
    id: 'de-9',
    number: 9,
    title: 'Đề Số 09: Chinh Phục Đỉnh Cao (Vòng Tỉnh 1)',
    subtitle: 'Đếm 15 tam giác đáy 5 đoạn, logic thỏ gà, bài toán ngày sinh nhật',
    level: 'Nâng cao',
    levelColor: 'bg-rose-100 text-rose-800 border-rose-300',
    timeLimit: 1200,
    questionsCount: 15,
    questions: [
      {
        id: 'de9_q1',
        section: 'Toán Tư Duy: Dãy số nhảy bước',
        topic: 'patterns_sequences',
        difficulty: 'hard',
        type: 'fill_blank',
        content: 'Tìm số thích hợp điền vào dấu (?): 2, 4, 8, 16, ........ (Mỗi số sau gấp 2 lần số trước)',
        correctAnswer: '32',
        hint: '16 + 16 = 32.',
        explanation: 'Quy luật: Mỗi số sau gấp đôi số liền trước:\n2 x 2 = 4; 4 x 2 = 8; 8 x 2 = 16; 16 x 2 = 32.'
      },
      {
        id: 'de9_q2',
        section: 'Toán Tư Duy: Đếm hình học',
        topic: 'geometry',
        difficulty: 'hard',
        type: 'fill_blank',
        content: 'Quan sát tam giác ABC có đáy BC được chia làm 5 đoạn nhỏ bằng nhau (như hình vẽ bên dưới). Trong hình có tất cả bao nhiêu hình tam giác? ........ hình.',
        diagram: { type: 'apex_triangle', baseSegments: 5 },
        correctAnswer: '15',
        hint: '5 + 4 + 3 + 2 + 1 = 15 hình tam giác.',
        explanation: 'Số hình tam giác có chung đỉnh A là: 5 + 4 + 3 + 2 + 1 = 15 (hình tam giác).'
      },
      {
        id: 'de9_q3',
        section: 'Toán Tư Duy: Cân não hoa quả 3 loại',
        topic: 'missing_components',
        difficulty: 'hard',
        type: 'fill_blank',
        content: 'Biết 🍎 + 🍎 = 10, 🍎 + 🍌 = 9 và 🍌 + 🍊 = 7. Hỏi quả cam 🍊 có giá trị bằng bao nhiêu?',
        correctAnswer: '3',
        hint: '🍎 = 5. Quả chuối = 9 - 5 = 4. Quả cam = 7 - 4 = 3.',
        explanation: '🍎 = 5 (vì 5 + 5 = 10).\n🍌 = 9 - 5 = 4.\n🍊 = 7 - 4 = 3.'
      },
      {
        id: 'de9_q4',
        section: 'Toán Tư Duy: Cân thăng bằng',
        topic: 'word_problems',
        difficulty: 'hard',
        type: 'fill_blank',
        content: 'Một quả dưa hấu và 1 kg táo thăng bằng với 3 quả cân loại 2kg. Hỏi quả dưa hấu nặng bao nhiêu kg? ........ kg.',
        correctAnswer: '5',
        hint: '3 quả cân 2kg là 6kg. Quả dưa hấu = 6kg - 1kg táo = 5kg.',
        explanation: 'Tổng đĩa bên phải là: 2 + 2 + 2 = 6 (kg).\nQuả dưa hấu nặng là: 6 - 1 = 5 (kg).'
      },
      {
        id: 'de9_q5',
        section: 'Toán Tư Duy: Đồng hồ thời gian',
        topic: 'measurement_time',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Hiện nay là 9 giờ sáng. Hỏi sau mấy giờ nữa thì đồng hồ chỉ 2 giờ chiều cùng ngày? Trả lời: Sau ........ giờ nữa.',
        correctAnswer: '5',
        hint: '2 giờ chiều là 14 giờ. Lấy 14 - 9 = 5 giờ.',
        explanation: '2 giờ chiều tương ứng với 14 giờ.\nThời gian từ 9 giờ sáng đến 2 giờ chiều là: 14 - 9 = 5 (giờ).'
      },
      {
        id: 'de9_q6',
        section: 'Toán Tư Duy: Xếp hàng tập thể dục',
        topic: 'word_problems',
        difficulty: 'hard',
        type: 'fill_blank',
        content: 'Một đàn vịt bơi trên ao: 1 con vịt đi trước 2 con vịt, 1 con vịt đi giữa 2 con vịt, 1 con vịt đi sau 2 con vịt. Hỏi đàn vịt có ít nhất bao nhiêu con vịt? ........ con vịt.',
        correctAnswer: '3',
        hint: 'Xếp 3 con vịt nối đuôi nhau thành một hàng dọc!',
        explanation: 'Chỉ cần đúng 3 con vịt bơi nối đuôi nhau:\n- Con thứ nhất đi trước 2 con sau.\n- Con thứ hai đi giữa con đầu và con cuối.\n- Con thứ ba đi sau 2 con trước.\nVậy đàn vịt có ít nhất 3 con.'
      },
      {
        id: 'de9_q7',
        section: 'Toán Tư Duy: Trồng cây 2 bên đường',
        topic: 'word_problems',
        difficulty: 'hard',
        type: 'fill_blank',
        content: 'Người ta trồng cây ven một con đường thẳng, có trồng cây ở cả hai đầu đường. Đếm được tất cả có 7 cây. Hỏi có bao nhiêu khoảng cách giữa các cây? ........ khoảng cách.',
        correctAnswer: '6',
        hint: 'Số khoảng cách = Số cây - 1 = 7 - 1 = 6.',
        explanation: 'Số khoảng cách giữa các cây là: 7 - 1 = 6 (khoảng cách).'
      },
      {
        id: 'de9_q8',
        section: 'Toán Tư Duy: Đếm chân con vật',
        topic: 'word_problems',
        difficulty: 'hard',
        type: 'fill_blank',
        content: 'Trong một chuồng nuôi thỏ và gà, đếm được có 5 con thỏ và số gà bằng số thỏ. Hỏi có tất cả bao nhiêu cái chân? ........ cái chân.',
        correctAnswer: '30',
        hint: 'Có 5 con thỏ và 5 con gà. 5 thỏ: 5 x 4 = 20 chân. 5 gà: 5 x 2 = 10 chân. Tổng: 20 + 10 = 30 chân.',
        explanation: '5 con thỏ có: 20 chân.\n5 con gà có: 10 chân.\nTổng cộng có: 20 + 10 = 30 (chân).'
      },
      {
        id: 'de9_q9',
        section: 'Toán Tư Duy: So sánh logic',
        topic: 'word_problems',
        difficulty: 'medium',
        type: 'multiple_choice',
        content: 'Trong 4 bạn: An, Bình, Cường, Dũng. Biết An lớn tuổi hơn Bình, Bình lớn tuổi hơn Cường, Cường lớn tuổi hơn Dũng. Hỏi ai là bạn nhỏ tuổi nhất?',
        options: ['An', 'Bình', 'Cường', 'Dũng'],
        correctAnswer: 'Dũng',
        hint: 'An > Bình > Cường > Dũng.',
        explanation: 'Thứ tự tuổi giảm dần: An > Bình > Cường > Dũng. Bạn nhỏ tuổi nhất là Dũng.'
      },
      {
        id: 'de9_q10',
        section: 'Toán Tư Duy: Lịch và ngày trong tuần',
        topic: 'measurement_time',
        difficulty: 'hard',
        type: 'fill_blank',
        content: 'Tháng này có 30 ngày. Ngày mùng 1 là thứ Tư. Hỏi ngày mùng 8 của tháng đó là thứ mấy?',
        options: ['Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu'],
        type: 'multiple_choice',
        correctAnswer: 'Thứ Tư',
        hint: '1 + 7 = 8 nên ngày mùng 8 cũng là thứ Tư.',
        explanation: 'Một tuần có 7 ngày. Ngày 1 là thứ Tư thì ngày 1 + 7 = 8 cũng là thứ Tư.'
      },
      {
        id: 'de9_q11',
        section: 'Toán Tư Duy: Đố mẹo logic',
        topic: 'word_problems',
        difficulty: 'hard',
        type: 'multiple_choice',
        content: 'Một người đứng quay mặt về hướng Bắc. Hỏi sau khi người đó quay sang phải 2 lần (mỗi lần quay 1 góc vuông), thì người đó quay mặt về hướng nào?',
        options: ['Hướng Đông', 'Hướng Tây', 'Hướng Nam', 'Hướng Bắc'],
        correctAnswer: 'Hướng Nam',
        hint: 'Quay phải lần 1 sang hướng Đông, quay phải lần 2 sang hướng Nam.',
        explanation: 'Ban đầu hướng Bắc. Quay phải 1 góc vuông sang hướng Đông. Quay phải tiếp 1 góc vuông nữa thành hướng Nam (ngược lại với hướng Bắc).'
      },
      {
        id: 'de9_q12',
        section: 'Toán Tư Duy: Bài toán tuổi tác',
        topic: 'word_problems',
        difficulty: 'hard',
        type: 'fill_blank',
        content: 'Tổng số tuổi của hai anh em hiện nay là 16 tuổi. Hỏi 3 năm nữa tổng số tuổi của hai anh em là bao nhiêu? ........ tuổi.',
        correctAnswer: '22',
        hint: 'Mỗi người tăng 3 tuổi, hai người tăng 3 + 3 = 6 tuổi: 16 + 6.',
        explanation: 'Sau 3 năm, mỗi người tăng 3 tuổi.\nTổng số tuổi hai anh em lúc đó là: 16 + 3 + 3 = 22 (tuổi).'
      },
      {
        id: 'de9_q13',
        section: 'Toán Tư Duy: Cấu tạo số',
        topic: 'digit_riddles',
        difficulty: 'hard',
        type: 'fill_blank',
        content: 'Số tự nhiên có hai chữ số mà chữ số hàng chục gấp 3 lần chữ số hàng đơn vị và lớn hơn 50 là số: ........',
        correctAnswer: '62',
        options: ['31', '62', '93', 'Cả 62 và 93 đều đúng'],
        type: 'multiple_choice',
        content: 'Tìm số có hai chữ số mà chữ số hàng chục gấp 3 lần chữ số hàng đơn vị và hàng chục là chữ số 6:',
        options: ['61', '62', '63', '64'],
        correctAnswer: '62',
        hint: 'Hàng chục là 6, hàng đơn vị là 6 : 3 = 2.',
        explanation: 'Hàng chục là 6 thì hàng đơn vị là 6 : 3 = 2. Số đó là 62.'
      },
      {
        id: 'de9_q14',
        section: 'Toán Tư Duy: Chia đồ vật có dư',
        topic: 'word_problems',
        difficulty: 'hard',
        type: 'fill_blank',
        content: 'Có 31 quả cam chia đều vào 4 giỏ sao cho mỗi giỏ được nhiều nhất có thể. Hỏi còn thừa mấy quả cam? ........ quả.',
        correctAnswer: '3',
        hint: 'Mỗi giỏ 7 quả cam: 7 + 7 + 7 + 7 = 28 quả. Còn thừa: 31 - 28 = 3.',
        explanation: '4 giỏ mỗi giỏ đựng 7 quả hết 28 quả.\nCòn thừa lại: 31 - 28 = 3 (quả cam).'
      },
      {
        id: 'de9_q15',
        section: 'Toán Tư Duy: Tháp khối lập phương',
        topic: 'geometry',
        difficulty: 'hard',
        type: 'fill_blank',
        content: 'Một hình lập phương được sơn màu xanh ở tất cả các mặt bên ngoài. Hỏi người ta đã sơn tất cả bao nhiêu mặt? ........ mặt.',
        correctAnswer: '6',
        hint: 'Hình lập phương có 6 mặt.',
        explanation: 'Hình lập phương có đúng 6 mặt nên đã sơn tất cả 6 mặt.'
      }
    ]
  },

  // =========================================================================
  // ĐỀ SỐ 10: CHUNG KẾT VINH QUANG (Mức độ: Xuất sắc - Vòng Toàn quốc)
  // =========================================================================
  {
    id: 'de-10',
    number: 10,
    title: 'Đề Số 10: Chung Kết Vinh Quang (Vòng Toàn Quốc)',
    subtitle: 'Tổng hợp đỉnh cao Toán Tư Duy lớp 2: Suy luận logic, đếm hình phức tạp',
    level: 'Xuất sắc',
    levelColor: 'bg-purple-100 text-purple-800 border-purple-300',
    timeLimit: 1200,
    questionsCount: 15,
    questions: [
      {
        id: 'de10_q1',
        section: 'Toán Tư Duy: Dãy số quy luật kép',
        topic: 'patterns_sequences',
        difficulty: 'hard',
        type: 'fill_blank',
        content: 'Quan sát dãy số: 3, 5, 9, 15, 23, ........ Khoảng cách giữa các số tăng dần: +2, +4, +6, +8. Điền số tiếp theo:',
        correctAnswer: '33',
        hint: 'Khoảng cách tiếp theo là +10: lấy 23 + 10 = ?',
        explanation: 'Khoảng cách giữa các số: +2, +4, +6, +8.\nKhoảng cách tiếp theo là +10: 23 + 10 = 33.'
      },
      {
        id: 'de10_q2',
        section: 'Toán Tư Duy: Đếm hình học',
        topic: 'geometry',
        difficulty: 'hard',
        type: 'fill_blank',
        content: 'Một hình chữ nhật được chia xiên làm 3 phần như hình bên dưới. Trong hình có tất cả bao nhiêu hình tứ giác? ........ hình.',
        diagram: { type: 'composite_quadrilateral' },
        correctAnswer: '6',
        hint: '3 hình đơn (1, 2, 3) + 2 hình đôi (1+2, 2+3) + 1 hình ba bao quanh: 3 + 2 + 1.',
        explanation: 'Tổng cộng có: 3 + 2 + 1 = 6 hình tứ giác.'
      },
      {
        id: 'de10_q3',
        section: 'Toán Tư Duy: Cân não hoa quả 3 loại',
        topic: 'missing_components',
        difficulty: 'hard',
        type: 'fill_blank',
        content: 'Biết 🍎 + 🍎 = 12, 🍎 + 🍌 = 10 và 🍌 + 🍊 = 8. Hỏi giá trị của quả cam 🍊 là bao nhiêu?',
        correctAnswer: '4',
        hint: '🍎 = 6. 🍌 = 10 - 6 = 4. 🍊 = 8 - 4 = 4.',
        explanation: '🍎 = 6 (vì 6 + 6 = 12).\nChuối 🍌 = 10 - 6 = 4.\nCam 🍊 = 8 - 4 = 4.'
      },
      {
        id: 'de10_q4',
        section: 'Toán Tư Duy: Cân thăng bằng',
        topic: 'word_problems',
        difficulty: 'hard',
        type: 'fill_blank',
        content: 'Biết 1 quả dưa hấu nặng bằng 2 quả dứa. 1 quả dứa nặng bằng 3 quả cam. Hỏi 1 quả dưa hấu nặng bằng mấy quả cam? ........ quả cam.',
        correctAnswer: '6',
        hint: '1 quả dứa = 3 quả cam. 2 quả dứa = 3 + 3 = 6 quả cam.',
        explanation: '1 quả dưa hấu = 2 quả dứa = 3 quả cam + 3 quả cam = 6 quả cam.'
      },
      {
        id: 'de10_q5',
        section: 'Toán Tư Duy: Đồng hồ thời gian',
        topic: 'measurement_time',
        difficulty: 'hard',
        type: 'fill_blank',
        content: 'Một chiếc đồng hồ cứ mỗi giờ lại đánh số tiếng chuông đúng bằng số giờ (lúc 1 giờ đánh 1 tiếng chuông, 2 giờ đánh 2 tiếng chuông, 3 giờ đánh 3 tiếng chuông...). Hỏi từ lúc 1 giờ đến 4 giờ đúng, đồng hồ đã đánh tất cả bao nhiêu tiếng chuông? ........ tiếng chuông.',
        correctAnswer: '10',
        hint: 'Cộng dồn số tiếng chuông: 1 + 2 + 3 + 4 = ?',
        explanation: 'Tổng số tiếng chuông đánh là: 1 + 2 + 3 + 4 = 10 (tiếng chuông).'
      },
      {
        id: 'de10_q6',
        section: 'Toán Tư Duy: Xếp hàng hai đầu',
        topic: 'word_problems',
        difficulty: 'hard',
        type: 'fill_blank',
        content: 'Trong một hàng dọc, bạn Hùng đứng thứ 7 từ trên xuống và đứng thứ 8 từ dưới lên. Hỏi hàng đó có bao nhiêu bạn? ........ bạn.',
        correctAnswer: '14',
        hint: 'Hùng được đếm 2 lần: 7 + 8 - 1 = 14.',
        explanation: 'Số bạn trong hàng là: 7 + 8 - 1 = 14 (bạn).'
      },
      {
        id: 'de10_q7',
        section: 'Toán Tư Duy: Trồng cây 2 đầu đường',
        topic: 'word_problems',
        difficulty: 'hard',
        type: 'fill_blank',
        content: 'Một con đường thẳng dài 30 mét. Người ta trồng các cây cách đều nhau, cứ cách 5 mét lại trồng một cây và trồng cây ở cả hai đầu đường. Hỏi trồng được tất cả bao nhiêu cây? ........ cây.',
        correctAnswer: '7',
        hint: 'Số khoảng cách = 30 : 5 = 6 khoảng. Trồng cả hai đầu đường nên số cây = 6 + 1 = 7 cây.',
        explanation: 'Số khoảng cách là: 30 : 5 = 6 (khoảng cách).\nVì trồng cây ở cả hai đầu đường nên số cây là: 6 + 1 = 7 (cây).'
      },
      {
        id: 'de10_q8',
        section: 'Toán Tư Duy: Đếm chân con vật',
        topic: 'word_problems',
        difficulty: 'hard',
        type: 'fill_blank',
        content: 'Trong chuồng có một số con gà và một số con thỏ. Đếm được có tất cả 5 cái đầu và 14 cái chân. Hỏi trong chuồng có mấy con thỏ?',
        options: ['1 con thỏ', '2 con thỏ', '3 con thỏ', '4 con thỏ'],
        type: 'multiple_choice',
        correctAnswer: '2 con thỏ',
        hint: '2 thỏ (8 chân) + 3 gà (6 chân) = 14 chân và đúng 5 con!',
        explanation: '2 con thỏ có: 2 x 4 = 8 (chân).\n3 con gà có: 3 x 2 = 6 (chân).\nTổng số con: 2 + 3 = 5 (con).\nTổng số chân: 8 + 6 = 14 (chân). Vậy có 2 con thỏ.'
      },
      {
        id: 'de10_q9',
        section: 'Toán Tư Duy: So sánh logic',
        topic: 'word_problems',
        difficulty: 'hard',
        type: 'multiple_choice',
        content: 'Có 3 quả bóng: Đỏ, Xanh, Vàng. Quả bóng Đỏ nặng hơn quả bóng Xanh. Quả bóng Vàng nặng hơn quả bóng Đỏ. Hỏi quả bóng nào nhẹ nhất?',
        options: ['Bóng Đỏ', 'Bóng Xanh', 'Bóng Vàng', 'Ba quả nặng bằng nhau'],
        correctAnswer: 'Bóng Xanh',
        hint: 'Vàng > Đỏ > Xanh.',
        explanation: 'Thứ tự cân nặng: Vàng nặng hơn Đỏ, Đỏ nặng hơn Xanh. Vậy quả bóng nhẹ nhất là quả bóng Xanh.'
      },
      {
        id: 'de10_q10',
        section: 'Toán Tư Duy: Lịch và ngày trong tuần',
        topic: 'measurement_time',
        difficulty: 'hard',
        type: 'fill_blank',
        content: 'Hôm nay là thứ Ba ngày 15. Hỏi thứ Ba cuối cùng của tháng này (tháng có 31 ngày) là ngày mấy? Ngày ........',
        correctAnswer: '29',
        hint: 'Các thứ Ba tiếp theo: 15 + 7 = 22; 22 + 7 = 29. (29 + 7 = 36 > 31 ngày).',
        explanation: 'Các ngày thứ Ba tiếp theo trong tháng là: 15 + 7 = 22; 22 + 7 = 29.\nVì tháng có 31 ngày nên ngày 29 là thứ Ba cuối cùng của tháng.'
      },
      {
        id: 'de10_q11',
        section: 'Toán Tư Duy: Mẹo vui logic',
        topic: 'word_problems',
        difficulty: 'hard',
        type: 'multiple_choice',
        content: 'Bố có 3 người con trai, mỗi người con trai lại có đúng 1 người chị gái. Hỏi bố có tất cả bao nhiêu người con?',
        options: ['6 người', '4 người', '5 người', '3 người'],
        correctAnswer: '4 người',
        hint: 'Người chị gái là chị gái chung của cả 3 người con trai!',
        explanation: '3 người con trai có chung 1 người chị gái. Vậy bố có tất cả: 3 người con trai + 1 người con gái = 4 người con.'
      },
      {
        id: 'de10_q12',
        section: 'Toán Tư Duy: Bài toán tuổi tác',
        topic: 'word_problems',
        difficulty: 'hard',
        type: 'fill_blank',
        content: 'Hiện nay mẹ 36 tuổi, con 8 tuổi. Hỏi cách đây 3 năm, mẹ hơn con bao nhiêu tuổi? ........ tuổi.',
        correctAnswer: '28',
        hint: 'Hiệu số tuổi không đổi theo thời gian: 36 - 8 = ?',
        explanation: 'Hiệu số tuổi của mẹ và con luôn không đổi theo thời gian.\nHiện nay mẹ hơn con: 36 - 8 = 28 (tuổi).\nVậy cách đây 3 năm mẹ vẫn hơn con 28 tuổi.'
      },
      {
        id: 'de10_q13',
        section: 'Toán Tư Duy: Cấu tạo số logic',
        topic: 'digit_riddles',
        difficulty: 'hard',
        type: 'fill_blank',
        content: 'Tìm số có hai chữ số, biết chữ số hàng chục cộng với chữ số hàng đơn vị bằng 14, và chữ số hàng chục trừ chữ số hàng đơn vị bằng 2. Số đó là: ........',
        correctAnswer: '86',
        hint: 'Hai số có tổng bằng 14 và hiệu bằng 2 là 8 và 6. Số đó là 86 (vì 8 + 6 = 14 và 8 - 6 = 2).',
        explanation: 'Chữ số hàng chục là: (14 + 2) : 2 = 8.\nChữ số hàng đơn vị là: 8 - 2 = 6.\nVậy số đó là 86.'
      },
      {
        id: 'de10_q14',
        section: 'Toán Tư Duy: Chuyển kẹo bằng nhau',
        topic: 'word_problems',
        difficulty: 'hard',
        type: 'fill_blank',
        content: 'Bạn Mai có 24 cái kẹo, bạn Lan có 16 cái kẹo. Hỏi bạn Mai phải cho bạn Lan bao nhiêu cái kẹo để hai bạn có số kẹo bằng nhau? ........ cái kẹo.',
        correctAnswer: '4',
        hint: 'Mai nhiều hơn Lan: 24 - 16 = 8 cái. Cho một nửa: 8 : 2 = 4 cái.',
        explanation: 'Mai nhiều hơn Lan số kẹo là: 24 - 16 = 8 (cái kẹo).\nMai cần cho Lan số kẹo là: 8 : 2 = 4 (cái kẹo).\n(Khi đó mỗi bạn đều có 20 cái kẹo).'
      },
      {
        id: 'de10_q15',
        section: 'Toán Tư Duy: Tháp khối lập phương',
        topic: 'geometry',
        difficulty: 'hard',
        type: 'fill_blank',
        content: 'Một hình vuông có 2 đường chéo cắt nhau tại tâm. Trong hình vẽ có tất cả bao nhiêu hình tam giác?',
        diagram: { type: 'square_diagonals' },
        correctAnswer: '8',
        hint: '4 tam giác nhỏ và 4 tam giác lớn ghép đôi = 8 hình tam giác.',
        explanation: 'Có tất cả 8 hình tam giác.'
      }
    ]
  }
]
