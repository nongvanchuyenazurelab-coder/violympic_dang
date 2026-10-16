// Trọn bộ 10 Đề Luyện Tập & In Đề Violympic Toán Lớp 2 chuẩn quốc gia
// Biên soạn theo khung chương trình GDPT 2018 và cấu trúc 18 vòng thi Violympic

export const PRACTICE_EXAMS = [
  // =========================================================================
  // ĐỀ SỐ 1: KHỞI ĐỘNG ĐẤU TRƯỜNG (Mức độ: Dễ)
  // =========================================================================
  {
    id: 'de-1',
    number: 1,
    title: 'Đề Số 01: Khởi Động Đấu Trường Toán 2',
    subtitle: 'Ôn tập phép cộng trừ không nhớ, đổi đơn vị dm - cm và đếm hình',
    level: 'Dễ',
    levelColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    timeLimit: 1200, // 20 phút
    questionsCount: 15,
    questions: [
      // Bài 1: Bảng số tăng dần
      {
        id: 'de1_q1',
        section: 'Bài 1: Điền số thứ tự từ 1 đến 16 để sắp xếp bảng số tăng dần',
        topic: 'addition_subtraction',
        difficulty: 'easy',
        type: 'matrix_order',
        content: 'Quan sát các số sau và điền số thứ tự từ 1 đến 16 vào ô tròn để sắp xếp các số theo thứ tự TĂNG DẦN (từ bé đến lớn):',
        items: [
          { id: 1, text: '8', value: 8 },
          { id: 2, text: '15', value: 15 },
          { id: 3, text: '23', value: 23 },
          { id: 4, text: '27', value: 27 },
          { id: 5, text: '34', value: 34 },
          { id: 6, text: '42', value: 42 },
          { id: 7, text: '49', value: 49 },
          { id: 8, text: '53', value: 53 },
          { id: 9, text: '61', value: 61 },
          { id: 10, text: '68', value: 68 },
          { id: 11, text: '72', value: 72 },
          { id: 12, text: '79', value: 79 },
          { id: 13, text: '85', value: 85 },
          { id: 14, text: '88', value: 88 },
          { id: 15, text: '92', value: 92 },
          { id: 16, text: '97', value: 97 }
        ],
        hint: 'So sánh chữ số hàng chục để sắp xếp từ bé đến lớn.',
        explanation: 'Thứ tự từ bé đến lớn:\n8 < 15 < 23 < 27 < 34 < 42 < 49 < 53 < 61 < 68 < 72 < 79 < 85 < 88 < 92 < 97.'
      },
      // Bài 2: Điền kết quả thích hợp
      {
        id: 'de1_q2',
        section: 'Bài 2: Điền kết quả thích hợp vào chỗ trống',
        topic: 'addition_subtraction',
        difficulty: 'easy',
        type: 'fill_blank',
        content: 'Tính: 65 - 23 = ........',
        correctAnswer: '42',
        hint: '5 - 3 = 2; 6 - 2 = 4.',
        explanation: 'Thực hiện trừ: 5 trừ 3 bằng 2, viết 2; 6 trừ 2 bằng 4, viết 4. Kết quả là 42.'
      },
      {
        id: 'de1_q3',
        section: 'Bài 2: Điền kết quả thích hợp vào chỗ trống',
        topic: 'digit_riddles',
        difficulty: 'easy',
        type: 'fill_blank',
        content: 'Số lớn nhất có hai chữ số khác nhau là số: ........',
        correctAnswer: '98',
        hint: 'Hàng chục là 9, hàng đơn vị lớn nhất nhưng phải khác 9.',
        explanation: 'Chữ số hàng chục lớn nhất là 9. Chữ số hàng đơn vị lớn nhất khác 9 là 8. Vậy số đó là 98.'
      },
      {
        id: 'de1_q4',
        section: 'Bài 2: Điền kết quả thích hợp vào chỗ trống',
        topic: 'missing_components',
        difficulty: 'easy',
        type: 'fill_blank',
        content: 'Điền số thích hợp: ........ - 25 = 52',
        correctAnswer: '77',
        hint: 'Số bị trừ = Hiệu + Số trừ = 52 + 25.',
        explanation: 'Số cần điền = 52 + 25 = 77.'
      },
      {
        id: 'de1_q5',
        section: 'Bài 2: Điền kết quả thích hợp vào chỗ trống',
        topic: 'word_problems',
        difficulty: 'easy',
        type: 'fill_blank',
        content: 'Nhà bạn Hoa nuôi 24 con gà và 32 con vịt. Hỏi nhà bạn Hoa nuôi tất cả bao nhiêu con gà và vịt? ........ con.',
        correctAnswer: '56',
        hint: 'Lấy số con gà cộng với số con vịt: 24 + 32.',
        explanation: 'Nhà bạn Hoa nuôi tất cả số con là: 24 + 32 = 56 (con).'
      },
      {
        id: 'de1_q6',
        section: 'Bài 2: Điền kết quả thích hợp vào chỗ trống',
        topic: 'measurement_time',
        difficulty: 'easy',
        type: 'fill_blank',
        content: 'Điền số thích hợp: 2 dm + 30 cm = ........ dm.',
        correctAnswer: '5',
        hint: 'Đổi 30 cm = 3 dm, sau đó tính 2 dm + 3 dm.',
        explanation: 'Đổi 30 cm = 3 dm.\n2 dm + 3 dm = 5 dm.\nVậy số cần điền là 5.'
      },
      {
        id: 'de1_q7',
        section: 'Bài 2: Điền kết quả thích hợp vào chỗ trống',
        topic: 'counting_numbers',
        difficulty: 'easy',
        type: 'fill_blank',
        content: 'Có tất cả bao nhiêu số có 1 chữ số? ........ số.',
        correctAnswer: '10',
        hint: 'Các số từ 0 đến 9. Đừng quên số 0!',
        explanation: 'Các số có 1 chữ số gồm: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 (tất cả 10 số).'
      },
      {
        id: 'de1_q8',
        section: 'Bài 2: Điền kết quả thích hợp vào chỗ trống',
        topic: 'addition_subtraction',
        difficulty: 'easy',
        type: 'fill_blank',
        content: 'Kết quả của phép tính 40 + 30 + 8 = ........',
        correctAnswer: '78',
        hint: '40 + 30 = 70, 70 + 8 = 78.',
        explanation: '40 + 30 = 70; 70 + 8 = 78.'
      },
      // Bài 3: Đặt tính, Hình học & Tổng hợp
      {
        id: 'de1_q9',
        section: 'Bài 3: Đặt tính ô vuông và hình học',
        topic: 'addition_subtraction',
        difficulty: 'medium',
        type: 'vertical_math',
        content: 'Điền chữ số thích hợp vào ô trống để được phép tính đúng:',
        operation: '+',
        topDigits: ['4', { id: 'box1', correct: '3' }],
        bottomDigits: [{ id: 'box2', correct: '3' }, '5'],
        resultDigits: ['7', '8'],
        explanation: 'Hàng đơn vị: ? + 5 = 8 => điền 3.\nHàng chục: 4 + ? = 7 => điền 3.\nPhép tính là: 43 + 35 = 78.'
      },
      {
        id: 'de1_q10',
        section: 'Bài 3: Đặt tính ô vuông và hình học',
        topic: 'geometry',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Một hình chữ nhật được chia làm 3 ô vuông nhỏ nối liền nhau (như hình vẽ bên dưới). Trong hình vẽ có tất cả bao nhiêu hình chữ nhật?',
        diagram: { type: 'split_rect', count: 3 },
        correctAnswer: '6',
        hint: 'Đếm hình đơn (3 hình), hình đôi (2 hình), hình ba (1 hình): 3 + 2 + 1.',
        explanation: 'Số hình chữ nhật là:\n- Ghép từ 1 ô: 3 hình\n- Ghép từ 2 ô: 2 hình\n- Ghép từ 3 ô: 1 hình\nTổng cộng: 3 + 2 + 1 = 6 hình chữ nhật.'
      },
      {
        id: 'de1_q11',
        section: 'Bài 3: Đặt tính ô vuông và hình học',
        topic: 'patterns_sequences',
        difficulty: 'easy',
        type: 'fill_blank',
        content: 'Điền số thích hợp tiếp theo vào chỗ chấm: 5, 10, 15, 20, 25, ........',
        correctAnswer: '30',
        hint: 'Mỗi số sau hơn số trước 5 đơn vị.',
        explanation: 'Quy luật đếm thêm 5: Số tiếp theo là 25 + 5 = 30.'
      },
      {
        id: 'de1_q12',
        section: 'Bài 3: Đặt tính ô vuông và hình học',
        topic: 'word_problems',
        difficulty: 'easy',
        type: 'fill_blank',
        content: 'Cửa hàng có 68 quyển vở, đã bán đi 24 quyển vở. Hỏi cửa hàng còn lại bao nhiêu quyển vở? ........ quyển.',
        correctAnswer: '44',
        hint: 'Lấy số vở ban đầu trừ đi số vở đã bán: 68 - 24.',
        explanation: 'Cửa hàng còn lại số quyển vở là: 68 - 24 = 44 (quyển).'
      },
      {
        id: 'de1_q13',
        section: 'Bài 3: Đặt tính ô vuông và hình học',
        topic: 'missing_components',
        difficulty: 'easy',
        type: 'fill_blank',
        content: 'Điền số thích hợp: 50 - ........ = 25',
        correctAnswer: '25',
        hint: 'Số trừ = Số bị trừ - Hiệu = 50 - 25.',
        explanation: 'Số cần điền = 50 - 25 = 25.'
      },
      {
        id: 'de1_q14',
        section: 'Bài 3: Đặt tính ô vuông và hình học',
        topic: 'digit_riddles',
        difficulty: 'easy',
        type: 'fill_blank',
        content: 'Số bé nhất có hai chữ số giống nhau là số: ........',
        correctAnswer: '11',
        hint: 'Hai chữ số giống nhau nhỏ nhất (hàng chục khác 0).',
        explanation: 'Số bé nhất có hai chữ số giống nhau là 11.'
      },
      {
        id: 'de1_q15',
        section: 'Bài 3: Đặt tính ô vuông và hình học',
        topic: 'addition_subtraction',
        difficulty: 'easy',
        type: 'multiple_choice',
        content: 'Trong phép tính 32 + 15 = 47, số 47 được gọi là:',
        options: ['Số hạng', 'Hiệu', 'Tổng', 'Số bị trừ'],
        correctAnswer: 'Tổng',
        hint: 'Kết quả của phép cộng gọi là gì?',
        explanation: 'Trong phép cộng 32 + 15 = 47, 32 và 15 là các số hạng, 47 là tổng.'
      }
    ]
  },

  // =========================================================================
  // ĐỀ SỐ 2: CẶP ĐÔI NHANH TRÍ (Mức độ: Dễ - Trung bình)
  // =========================================================================
  {
    id: 'de-2',
    number: 2,
    title: 'Đề Số 02: Cặp Đôi Nhanh Trí',
    subtitle: 'Phép cộng qua 10, toán nhãn vở nhiều hơn, đường gấp khúc ABCD',
    level: 'Dễ - Trung bình',
    levelColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    timeLimit: 1200,
    questionsCount: 15,
    questions: [
      {
        id: 'de2_q1',
        section: 'Bài 1: Chọn liên tiếp các cặp ô có giá trị bằng nhau',
        topic: 'addition_subtraction',
        difficulty: 'medium',
        type: 'match_pairs',
        content: 'Hãy tìm và ghép từng cặp 2 ô có giá trị bằng nhau:',
        pairs: [
          { a: '9 + 5', b: '14', val: 14 },
          { a: '68 - 18', b: '50', val: 50 },
          { a: '23 + 24', b: '47', val: 47 },
          { a: '85 - 35', b: '25 + 25', val: 50 },
          { a: '1 dm + 5 cm', b: '15 cm', val: 15 }
        ],
        hint: 'Tính giá trị của từng ô rồi ghép hai ô cùng giá trị.',
        explanation: 'Các cặp bằng nhau:\n9 + 5 = 14\n68 - 18 = 50\n23 + 24 = 47\n85 - 35 = 50 và 25 + 25 = 50\n1 dm + 5 cm = 15 cm.'
      },
      {
        id: 'de2_q2',
        section: 'Bài 2: Điền kết quả thích hợp vào chỗ trống',
        topic: 'addition_subtraction',
        difficulty: 'easy',
        type: 'fill_blank',
        content: 'Tính: 9 + 7 = ........',
        correctAnswer: '16',
        hint: '9 + 1 = 10, 10 + 6 = 16.',
        explanation: '9 + 7 = 16.'
      },
      {
        id: 'de2_q3',
        section: 'Bài 2: Điền kết quả thích hợp vào chỗ trống',
        topic: 'digit_riddles',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Số bé nhất có hai chữ số mà hiệu hai chữ số bằng 3 là số: ........',
        correctAnswer: '14',
        hint: 'Hàng chục nhỏ nhất là 1. Hiệu bằng 3 nên hàng đơn vị là 1 + 3 = 4.',
        explanation: 'Hàng chục nhỏ nhất là 1. Hàng đơn vị là 1 + 3 = 4. Vậy số đó là 14 (vì 4 - 1 = 3).'
      },
      {
        id: 'de2_q4',
        section: 'Bài 2: Điền kết quả thích hợp vào chỗ trống',
        topic: 'missing_components',
        difficulty: 'easy',
        type: 'fill_blank',
        content: 'Điền số thích hợp: 46 + ........ = 89',
        correctAnswer: '43',
        hint: 'Số hạng chưa biết = 89 - 46.',
        explanation: 'Số cần điền = 89 - 46 = 43.'
      },
      {
        id: 'de2_q5',
        section: 'Bài 2: Điền kết quả thích hợp vào chỗ trống',
        topic: 'word_problems',
        difficulty: 'easy',
        type: 'fill_blank',
        content: 'Bạn Lan hái được 35 bông hoa hồng, bạn Mai hái nhiều hơn bạn Lan 8 bông hoa hồng. Hỏi bạn Mai hái được bao nhiêu bông hoa hồng? ........ bông.',
        correctAnswer: '43',
        hint: 'Nhiều hơn thì làm phép cộng: 35 + 8.',
        explanation: 'Bạn Mai hái được số bông hoa là: 35 + 8 = 43 (bông hoa).'
      },
      {
        id: 'de2_q6',
        section: 'Bài 2: Điền kết quả thích hợp vào chỗ trống',
        topic: 'counting_numbers',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Từ số 20 đến số 45 có tất cả bao nhiêu số tự nhiên? ........ số.',
        correctAnswer: '26',
        hint: 'Công thức đếm số liên tiếp: (Số cuối - Số đầu) + 1 = (45 - 20) + 1.',
        explanation: 'Số các số tự nhiên từ 20 đến 45 là: (45 - 20) + 1 = 25 + 1 = 26 (số).'
      },
      {
        id: 'de2_q7',
        section: 'Bài 2: Điền kết quả thích hợp vào chỗ trống',
        topic: 'measurement_time',
        difficulty: 'easy',
        type: 'fill_blank',
        content: 'Điền số thích hợp: 7 dm 4 cm = ........ cm.',
        correctAnswer: '74',
        hint: '7 dm = 70 cm, 70 cm + 4 cm = 74 cm.',
        explanation: '7 dm = 70 cm. Do đó 7 dm 4 cm = 70 + 4 = 74 cm.'
      },
      {
        id: 'de2_q8',
        section: 'Bài 2: Điền kết quả thích hợp vào chỗ trống',
        topic: 'addition_subtraction',
        difficulty: 'easy',
        type: 'fill_blank',
        content: 'Tính: 8 + 6 = ........',
        correctAnswer: '14',
        hint: '8 + 2 = 10, 10 + 4 = 14.',
        explanation: '8 + 6 = 14.'
      },
      {
        id: 'de2_q9',
        section: 'Bài 3: Đặt tính & Hình học',
        topic: 'addition_subtraction',
        difficulty: 'medium',
        type: 'vertical_math',
        content: 'Điền chữ số thích hợp vào ô trống để được phép trừ đúng:',
        operation: '-',
        topDigits: ['8', { id: 'box1', correct: '6' }],
        bottomDigits: [{ id: 'box2', correct: '3' }, '4'],
        resultDigits: ['5', '2'],
        explanation: 'Hàng đơn vị: ? - 4 = 2 => điền 6.\nHàng chục: 8 - ? = 5 => điền 3.\nPhép tính là: 86 - 34 = 52.'
      },
      {
        id: 'de2_q10',
        section: 'Bài 3: Đặt tính & Hình học',
        topic: 'geometry',
        difficulty: 'easy',
        type: 'fill_blank',
        content: 'Cho đường gấp khúc ABCD có kích thước như hình vẽ bên dưới: AB = 12 cm, BC = 18 cm, CD = 15 cm. Tính độ dài đường gấp khúc ABCD: ........ cm.',
        diagram: { type: 'polyline', d1: 12, d2: 18, d3: 15 },
        correctAnswer: '45',
        hint: 'Độ dài đường gấp khúc bằng tổng độ dài 3 đoạn: 12 + 18 + 15.',
        explanation: 'Độ dài đường gấp khúc ABCD là: 12 + 18 + 15 = 45 (cm).'
      },
      {
        id: 'de2_q11',
        section: 'Bài 3: Đặt tính & Hình học',
        topic: 'missing_components',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Tìm x biết: x - 17 = 32 + 10. Giá trị của x là: ........',
        correctAnswer: '59',
        hint: 'Bước 1 tính vế phải: 32 + 10 = 42. Bước 2 tìm x = 42 + 17.',
        explanation: 'Bước 1: 32 + 10 = 42.\nBước 2: x = 42 + 17 = 59.'
      },
      {
        id: 'de2_q12',
        section: 'Bài 3: Đặt tính & Hình học',
        topic: 'word_problems',
        difficulty: 'easy',
        type: 'fill_blank',
        content: 'Việt có 36 viên bi. Việt cho Nam 14 viên bi. Hỏi Việt còn lại bao nhiêu viên bi? ........ viên.',
        correctAnswer: '22',
        hint: 'Cho đi là bớt đi: 36 - 14.',
        explanation: 'Việt còn lại số viên bi là: 36 - 14 = 22 (viên bi).'
      },
      {
        id: 'de2_q13',
        section: 'Bài 3: Đặt tính & Hình học',
        topic: 'patterns_sequences',
        difficulty: 'easy',
        type: 'fill_blank',
        content: 'Viết số tiếp theo của dãy số: 3, 6, 9, 12, 15, ........',
        correctAnswer: '18',
        hint: 'Mỗi số sau hơn số trước 3 đơn vị.',
        explanation: 'Dãy số đếm thêm 3: 15 + 3 = 18.'
      },
      {
        id: 'de2_q14',
        section: 'Bài 3: Đặt tính & Hình học',
        topic: 'digit_riddles',
        difficulty: 'easy',
        type: 'fill_blank',
        content: 'Số liền trước của số 70 là số: ........',
        correctAnswer: '69',
        hint: 'Số liền trước = 70 - 1.',
        explanation: 'Số liền trước của 70 là 69.'
      },
      {
        id: 'de2_q15',
        section: 'Bài 3: Đặt tính & Hình học',
        topic: 'addition_subtraction',
        difficulty: 'easy',
        type: 'multiple_choice',
        content: 'Phép tính nào dưới đây có kết quả lớn nhất?',
        options: ['45 + 12', '30 + 35', '89 - 20', '52 + 10'],
        correctAnswer: '89 - 20',
        hint: 'Tính nhẩm từng phép tính: 45+12=57, 30+35=65, 89-20=69, 52+10=62.',
        explanation: 'Ta có: 45 + 12 = 57; 30 + 35 = 65; 89 - 20 = 69; 52 + 10 = 62. Số lớn nhất là 69 (tương ứng phép tính 89 - 20).'
      }
    ]
  },

  // =========================================================================
  // ĐỀ SỐ 3: VƯỢT CHƯỚNG NGẠI VẬT (Mức độ: Trung bình)
  // =========================================================================
  {
    id: 'de-3',
    number: 3,
    title: 'Đề Số 03: Vượt Chướng Ngại Vật',
    subtitle: 'Cộng trừ có nhớ phạm vi 100, chu vi tam giác ABC, bài toán bao gạo',
    level: 'Trung bình',
    levelColor: 'bg-sky-100 text-sky-800 border-sky-300',
    timeLimit: 1200,
    questionsCount: 15,
    questions: [
      {
        id: 'de3_q1',
        section: 'Bài 1: Sắp xếp bảng số theo thứ tự tăng dần',
        topic: 'addition_subtraction',
        difficulty: 'medium',
        type: 'matrix_order',
        content: 'Điền số thứ tự từ 1 đến 16 để sắp xếp các số sau theo thứ tự TĂNG DẦN:',
        items: [
          { id: 1, text: '12', value: 12 },
          { id: 2, text: '19', value: 19 },
          { id: 3, text: '26', value: 26 },
          { id: 4, text: '31', value: 31 },
          { id: 5, text: '38', value: 38 },
          { id: 6, text: '45', value: 45 },
          { id: 7, text: '50', value: 50 },
          { id: 8, text: '57', value: 57 },
          { id: 9, text: '63', value: 63 },
          { id: 10, text: '69', value: 69 },
          { id: 11, text: '74', value: 74 },
          { id: 12, text: '81', value: 81 },
          { id: 13, text: '86', value: 86 },
          { id: 14, text: '90', value: 90 },
          { id: 15, text: '95', value: 95 },
          { id: 16, text: '99', value: 99 }
        ],
        hint: 'So sánh chữ số hàng chục từ nhỏ nhất đến lớn nhất.',
        explanation: 'Thứ tự từ bé đến lớn: 12 < 19 < 26 < 31 < 38 < 45 < 50 < 57 < 63 < 69 < 74 < 81 < 86 < 90 < 95 < 99.'
      },
      {
        id: 'de3_q2',
        section: 'Bài 2: Điền kết quả thích hợp vào chỗ trống',
        topic: 'addition_subtraction',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Tính: 48 + 25 = ........',
        correctAnswer: '73',
        hint: '8 + 5 = 13, viết 3 nhớ 1. 4 + 2 = 6, thêm 1 bằng 7.',
        explanation: '48 + 25 = 73.'
      },
      {
        id: 'de3_q3',
        section: 'Bài 2: Điền kết quả thích hợp vào chỗ trống',
        topic: 'digit_riddles',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Có bao nhiêu số có hai chữ số mà tổng hai chữ số bằng 7? ........ số.',
        correctAnswer: '7',
        hint: 'Liệt kê các số: 16, 25, 34, 43, 52, 61, 70.',
        explanation: 'Các số có 2 chữ số có tổng bằng 7 là: 16, 25, 34, 43, 52, 61, 70. Có tất cả 7 số.'
      },
      {
        id: 'de3_q4',
        section: 'Bài 2: Điền kết quả thích hợp vào chỗ trống',
        topic: 'word_problems',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Bao gạo nếp nặng 35 kg, bao gạo tẻ nặng hơn bao gạo nếp 12 kg. Hỏi cả hai bao gạo nặng bao nhiêu ki-lô-gam? ........ kg.',
        correctAnswer: '82',
        hint: 'Bước 1: Tính bao gạo tẻ = 35 + 12 = 47 kg. Bước 2: Tính tổng cả 2 bao = 35 + 47.',
        explanation: 'Bao gạo tẻ nặng: 35 + 12 = 47 (kg).\nCả hai bao gạo nặng: 35 + 47 = 82 (kg).'
      },
      {
        id: 'de3_q5',
        section: 'Bài 2: Điền kết quả thích hợp vào chỗ trống',
        topic: 'measurement_time',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Điền số thích hợp: 8 dm - 20 cm = ........ cm.',
        correctAnswer: '60',
        hint: 'Đổi 8 dm = 80 cm, rồi lấy 80 cm - 20 cm.',
        explanation: 'Đổi 8 dm = 80 cm. 80 cm - 20 cm = 60 cm. Số cần điền là 60.'
      },
      {
        id: 'de3_q6',
        section: 'Bài 2: Điền kết quả thích hợp vào chỗ trống',
        topic: 'missing_components',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Điền số thích hợp: 67 - ........ = 18 + 14',
        correctAnswer: '35',
        hint: 'Vế phải 18 + 14 = 32. Số trừ = 67 - 32.',
        explanation: 'Bước 1: 18 + 14 = 32.\nBước 2: 67 - 32 = 35.'
      },
      {
        id: 'de3_q7',
        section: 'Bài 2: Điền kết quả thích hợp vào chỗ trống',
        topic: 'counting_numbers',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Có bao nhiêu số tự nhiên có 2 chữ số nhỏ hơn 45? ........ số.',
        correctAnswer: '35',
        hint: 'Từ số 10 đến 44: (44 - 10) + 1 = 35 số.',
        explanation: 'Các số có 2 chữ số nhỏ hơn 45 bắt đầu từ 10 đến 44.\nSố các số là: (44 - 10) + 1 = 35 (số).'
      },
      {
        id: 'de3_q8',
        section: 'Bài 2: Điền kết quả thích hợp vào chỗ trống',
        topic: 'digit_riddles',
        difficulty: 'easy',
        type: 'fill_blank',
        content: 'Số tròn chục lớn nhất có hai chữ số là số: ........',
        correctAnswer: '90',
        hint: 'Các số tròn chục: 10, 20, ..., 90.',
        explanation: 'Số tròn chục lớn nhất có 2 chữ số là 90.'
      },
      {
        id: 'de3_q9',
        section: 'Bài 3: Đặt tính & Hình học',
        topic: 'addition_subtraction',
        difficulty: 'medium',
        type: 'vertical_math',
        content: 'Điền chữ số thích hợp vào ô trống để được phép cộng đúng:',
        operation: '+',
        topDigits: ['2', { id: 'box1', correct: '8' }],
        bottomDigits: [{ id: 'box2', correct: '3' }, '7'],
        resultDigits: ['6', '5'],
        explanation: 'Hàng đơn vị: ? + 7 = 15 (viết 5 nhớ 1) => điền 8.\nHàng chục: 2 + ? + 1 (nhớ) = 6 => ? = 3 => điền 3.\nPhép tính là: 28 + 37 = 65.'
      },
      {
        id: 'de3_q10',
        section: 'Bài 3: Đặt tính & Hình học',
        topic: 'geometry',
        difficulty: 'easy',
        type: 'fill_blank',
        content: 'Cho hình tam giác ABC có độ dài các cạnh như hình vẽ bên dưới: AB = 15 cm, BC = 20 cm, CA = 25 cm. Tính chu vi hình tam giác ABC: ........ cm.',
        diagram: { type: 'triangle_perimeter', a: 15, b: 20, c: 25, unit: 'cm' },
        correctAnswer: '60',
        hint: 'Chu vi tam giác bằng tổng 3 cạnh: 15 + 20 + 25.',
        explanation: 'Chu vi hình tam giác ABC là: 15 + 20 + 25 = 60 (cm).'
      },
      {
        id: 'de3_q11',
        section: 'Bài 3: Đặt tính & Hình học',
        topic: 'addition_subtraction',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Tính: 72 - 38 = ........',
        correctAnswer: '34',
        hint: '12 - 8 = 4 nhớ 1, 7 - (3 + 1) = 3.',
        explanation: '72 - 38 = 34.'
      },
      {
        id: 'de3_q12',
        section: 'Bài 3: Đặt tính & Hình học',
        topic: 'word_problems',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Mẹ mua về 25 quả trứng. Mẹ đã dùng 12 quả để làm bánh. Sau đó mẹ mua thêm 15 quả nữa. Hỏi lúc này mẹ có bao nhiêu quả trứng? ........ quả.',
        correctAnswer: '28',
        hint: 'Bước 1: 25 - 12 = 13 quả. Bước 2: 13 + 15 = 28 quả.',
        explanation: 'Sau khi dùng làm bánh mẹ còn: 25 - 12 = 13 (quả).\nSau khi mua thêm mẹ có: 13 + 15 = 28 (quả).'
      },
      {
        id: 'de3_q13',
        section: 'Bài 3: Đặt tính & Hình học',
        topic: 'patterns_sequences',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Điền số tiếp theo vào dãy số giảm dần sau: 50, 45, 40, 35, 30, ........',
        correctAnswer: '25',
        hint: 'Mỗi số đứng sau bớt đi 5 đơn vị.',
        explanation: 'Số tiếp theo là: 30 - 5 = 25.'
      },
      {
        id: 'de3_q14',
        section: 'Bài 3: Đặt tính & Hình học',
        topic: 'digit_riddles',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Số lớn nhất có hai chữ số mà hiệu hai chữ số bằng 5 là số: ........',
        correctAnswer: '94',
        hint: 'Hàng chục lớn nhất là 9. Hàng đơn vị = 9 - 5 = 4.',
        explanation: 'Hàng chục lớn nhất là 9. Hàng đơn vị = 9 - 5 = 4. Vậy số đó là 94.'
      },
      {
        id: 'de3_q15',
        section: 'Bài 3: Đặt tính & Hình học',
        topic: 'measurement_time',
        difficulty: 'easy',
        type: 'multiple_choice',
        content: 'Đồng hồ chỉ mấy giờ khi kim ngắn chỉ số 4 và kim dài chỉ số 12?',
        options: ['4 giờ', '12 giờ', '4 giờ 12 phút', '5 giờ'],
        correctAnswer: '4 giờ',
        hint: 'Kim dài chỉ số 12 là giờ đúng.',
        explanation: 'Kim ngắn chỉ số 4 và kim dài chỉ số 12 là 4 giờ đúng.'
      }
    ]
  },

  // =========================================================================
  // ĐỀ SỐ 4: ĐỈNH NÚI TRÍ TUỆ (Mức độ: Trung bình - Khá)
  // =========================================================================
  {
    id: 'de-4',
    number: 4,
    title: 'Đề Số 04: Đỉnh Núi Trí Tuệ',
    subtitle: 'Đếm hình tam giác chung đỉnh, đại lượng kg - lít, toán chia kẹo đều',
    level: 'Trung bình - Khá',
    levelColor: 'bg-sky-100 text-sky-800 border-sky-300',
    timeLimit: 1200,
    questionsCount: 15,
    questions: [
      {
        id: 'de4_q1',
        section: 'Bài 1: Sắp xếp bảng biểu thức tăng dần',
        topic: 'addition_subtraction',
        difficulty: 'medium',
        type: 'matrix_order',
        content: 'Điền số thứ tự từ 1 đến 16 để sắp xếp các ô theo thứ tự TĂNG DẦN:',
        items: [
          { id: 1, text: '16', value: 16 },
          { id: 2, text: '25 - 5', value: 20 },
          { id: 3, text: '28', value: 28 },
          { id: 4, text: '15 + 18', value: 33 },
          { id: 5, text: '39', value: 39 },
          { id: 6, text: '50 - 6', value: 44 },
          { id: 7, text: '48', value: 48 },
          { id: 8, text: '36 + 17', value: 53 },
          { id: 9, text: '59', value: 59 },
          { id: 10, text: '42 + 20', value: 62 },
          { id: 11, text: '70', value: 70 },
          { id: 12, text: '85 - 10', value: 75 },
          { id: 13, text: '81', value: 81 },
          { id: 14, text: '56 + 30', value: 86 },
          { id: 15, text: '92', value: 92 },
          { id: 16, text: '68 + 30', value: 98 }
        ],
        hint: 'Tính giá trị các phép tính trước rồi sắp xếp từ bé đến lớn.',
        explanation: 'Thứ tự từ bé đến lớn: 16 < 20 < 28 < 33 < 39 < 44 < 48 < 53 < 59 < 62 < 70 < 75 < 81 < 86 < 92 < 98.'
      },
      {
        id: 'de4_q2',
        section: 'Bài 2: Điền kết quả thích hợp vào chỗ trống',
        topic: 'addition_subtraction',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Tính: 100 - 36 = ........',
        correctAnswer: '64',
        hint: '100 - 30 = 70; 70 - 6 = 64.',
        explanation: '100 - 36 = 64.'
      },
      {
        id: 'de4_q3',
        section: 'Bài 2: Điền kết quả thích hợp vào chỗ trống',
        topic: 'measurement_time',
        difficulty: 'easy',
        type: 'fill_blank',
        content: 'Tính: 35 kg + 28 kg = ........ kg.',
        correctAnswer: '63',
        hint: '35 + 28 = 63.',
        explanation: '35 kg + 28 kg = 63 kg.'
      },
      {
        id: 'de4_q4',
        section: 'Bài 2: Điền kết quả thích hợp vào chỗ trống',
        topic: 'missing_components',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Tìm x biết: x + 28 = 90 - 15. Giá trị của x là: ........',
        correctAnswer: '47',
        hint: 'Tính 90 - 15 = 75. Sau đó x = 75 - 28.',
        explanation: 'Bước 1: 90 - 15 = 75.\nBước 2: x = 75 - 28 = 47.'
      },
      {
        id: 'de4_q5',
        section: 'Bài 2: Điền kết quả thích hợp vào chỗ trống',
        topic: 'word_problems',
        difficulty: 'hard',
        type: 'fill_blank',
        content: 'Thảo có 20 cái kẹo, Thảo có ít hơn Hà 6 cái kẹo. Hỏi cả hai bạn có bao nhiêu cái kẹo? ........ cái kẹo.',
        correctAnswer: '46',
        hint: 'Hà có: 20 + 6 = 26 kẹo. Cả 2 bạn có: 20 + 26.',
        explanation: 'Hà có số cái kẹo là: 20 + 6 = 26 (cái kẹo).\nCả hai bạn có tất cả: 20 + 26 = 46 (cái kẹo).'
      },
      {
        id: 'de4_q6',
        section: 'Bài 2: Điền kết quả thích hợp vào chỗ trống',
        topic: 'measurement_time',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Một thùng có 42 lít dầu, người ta đã rót ra 18 lít dầu. Hỏi trong thùng còn lại bao nhiêu lít dầu? ........ lít.',
        correctAnswer: '24',
        hint: 'Lấy 42 - 18.',
        explanation: 'Trong thùng còn lại số lít dầu là: 42 - 18 = 24 (lít).'
      },
      {
        id: 'de4_q7',
        section: 'Bài 2: Điền kết quả thích hợp vào chỗ trống',
        topic: 'counting_numbers',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Có bao nhiêu số tự nhiên lớn hơn 34 và nhỏ hơn 78? ........ số.',
        correctAnswer: '43',
        hint: 'Các số từ 35 đến 77: (77 - 35) + 1 = 43 số.',
        explanation: 'Số các số tự nhiên từ 35 đến 77 là: (77 - 35) + 1 = 43 (số).'
      },
      {
        id: 'de4_q8',
        section: 'Bài 2: Điền kết quả thích hợp vào chỗ trống',
        topic: 'digit_riddles',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Số nhỏ nhất có hai chữ số mà tổng hai chữ số bằng 9 là số: ........',
        correctAnswer: '18',
        hint: 'Hàng chục nhỏ nhất là 1. Hàng đơn vị = 9 - 1 = 8.',
        explanation: 'Để số là nhỏ nhất thì hàng chục phải nhỏ nhất là 1. Hàng đơn vị là 9 - 1 = 8. Vậy số đó là 18.'
      },
      {
        id: 'de4_q9',
        section: 'Bài 3: Đặt tính & Hình học',
        topic: 'addition_subtraction',
        difficulty: 'medium',
        type: 'vertical_math',
        content: 'Điền chữ số thích hợp vào ô trống để được phép trừ đúng:',
        operation: '-',
        topDigits: ['7', { id: 'box1', correct: '2' }],
        bottomDigits: [{ id: 'box2', correct: '3' }, '8'],
        resultDigits: ['3', '4'],
        explanation: 'Hàng đơn vị: 12 - 8 = 4 => ? là 2.\nHàng chục: 7 - ? - 1 = 3 => ? = 3.\nPhép tính là: 72 - 38 = 34.'
      },
      {
        id: 'de4_q10',
        section: 'Bài 3: Đặt tính & Hình học',
        topic: 'geometry',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Quan sát hình vẽ tam giác ABC có các đoạn thẳng kẻ từ đỉnh A xuống cạnh đáy BC (như hình bên dưới): Trong hình vẽ có tất cả bao nhiêu hình tam giác?',
        diagram: { type: 'apex_triangle', baseSegments: 3 },
        correctAnswer: '6',
        hint: 'Đáy chia 3 đoạn: 3 + 2 + 1 = 6 hình tam giác.',
        explanation: 'Số hình tam giác có chung đỉnh A là: 3 + 2 + 1 = 6 (hình tam giác).'
      },
      {
        id: 'de4_q11',
        section: 'Bài 3: Đặt tính & Hình học',
        topic: 'patterns_sequences',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Điền số thích hợp tiếp theo: 2, 4, 8, 16, ........',
        correctAnswer: '32',
        hint: 'Mỗi số đứng sau gấp 2 lần số đứng trước nó.',
        explanation: 'Quy luật: Mỗi số sau gấp đôi số trước:\n2 x 2 = 4; 4 x 2 = 8; 8 x 2 = 16; 16 x 2 = 32.'
      },
      {
        id: 'de4_q12',
        section: 'Bài 3: Đặt tính & Hình học',
        topic: 'word_problems',
        difficulty: 'hard',
        type: 'fill_blank',
        content: 'An có nhiều hơn Bình 8 viên bi. Hỏi An phải cho Bình bao nhiêu viên bi để số bi của hai bạn bằng nhau? ........ viên bi.',
        correctAnswer: '4',
        hint: 'Lấy số bi nhiều hơn chia đôi: 8 : 2 = 4.',
        explanation: 'Để hai bạn có số bi bằng nhau, An phải cho Bình một nửa số bi chênh lệch:\n8 : 2 = 4 (viên bi).'
      },
      {
        id: 'de4_q13',
        section: 'Bài 3: Đặt tính & Hình học',
        topic: 'digit_riddles',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Số lớn nhất có hai chữ số mà chữ số hàng chục gấp 3 lần chữ số hàng đơn vị là số: ........',
        correctAnswer: '93',
        hint: 'Chữ số hàng chục lớn nhất là 9. Hàng đơn vị = 9 : 3 = 3.',
        explanation: 'Hàng chục lớn nhất có thể là 9 (vì 9 chia hết cho 3). Hàng đơn vị là 9 : 3 = 3. Vậy số đó là 93.'
      },
      {
        id: 'de4_q14',
        section: 'Bài 3: Đặt tính & Hình học',
        topic: 'addition_subtraction',
        difficulty: 'easy',
        type: 'fill_blank',
        content: 'Tính nhanh: 15 + 27 + 35 = ........',
        correctAnswer: '77',
        hint: 'Nhóm (15 + 35) = 50, rồi lấy 50 + 27 = 77.',
        explanation: '(15 + 35) + 27 = 50 + 27 = 77.'
      },
      {
        id: 'de4_q15',
        section: 'Bài 3: Đặt tính & Hình học',
        topic: 'measurement_time',
        difficulty: 'easy',
        type: 'multiple_choice',
        content: 'Hôm nay là thứ Ba ngày 5. Hỏi thứ Ba tuần sau là ngày mấy?',
        options: ['Ngày 10', 'Ngày 11', 'Ngày 12', 'Ngày 13'],
        correctAnswer: 'Ngày 12',
        hint: 'Một tuần có 7 ngày: lấy 5 + 7.',
        explanation: 'Một tuần có 7 ngày. Thứ Ba tuần sau sẽ là ngày: 5 + 7 = 12.'
      }
    ]
  },

  // =========================================================================
  // ĐỀ SỐ 5: THỬ THÁCH CÓC VÀNG (Mức độ: Khá - Đề thi Cấp Trường 1)
  // =========================================================================
  {
    id: 'de-5',
    number: 5,
    title: 'Đề Số 05: Thử Thách Cóc Vàng (Cấp Trường 1)',
    subtitle: 'Đếm 6 hình tứ giác cắt xiên, bài toán tuổi mẹ con, dãy số đặc biệt',
    level: 'Khá',
    levelColor: 'bg-amber-100 text-amber-800 border-amber-300',
    timeLimit: 1200,
    questionsCount: 15,
    questions: [
      {
        id: 'de5_q1',
        section: 'Bài 1: Cặp đôi hoàn hảo',
        topic: 'addition_subtraction',
        difficulty: 'medium',
        type: 'match_pairs',
        content: 'Tìm và ghép từng cặp 2 ô có giá trị bằng nhau:',
        pairs: [
          { a: '45 + 15', b: '60', val: 60 },
          { a: '100 - 25', b: '50 + 25', val: 75 },
          { a: '36 + 28', b: '64', val: 64 },
          { a: '82 - 30', b: '52', val: 52 },
          { a: '2 dm + 10 cm', b: '30 cm', val: 30 }
        ],
        hint: 'Tính giá trị các phép tính trước.',
        explanation: '45+15=60; 100-25=75 và 50+25=75; 36+28=64; 82-30=52; 2dm+10cm=30cm.'
      },
      {
        id: 'de5_q2',
        section: 'Bài 2: Điền kết quả thích hợp vào chỗ trống',
        topic: 'addition_subtraction',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Tính: 83 - 47 = ........',
        correctAnswer: '36',
        hint: '13 - 7 = 6 nhớ 1, 8 - (4 + 1) = 3.',
        explanation: '83 - 47 = 36.'
      },
      {
        id: 'de5_q3',
        section: 'Bài 2: Điền kết quả thích hợp vào chỗ trống',
        topic: 'digit_riddles',
        difficulty: 'hard',
        type: 'fill_blank',
        content: 'Số lớn nhất có hai chữ số mà tổng hai chữ số bằng 14 là số: ........',
        correctAnswer: '95',
        hint: 'Hàng chục lớn nhất là 9. Hàng đơn vị = 14 - 9 = 5.',
        explanation: 'Để số lớn nhất, chữ số hàng chục phải lớn nhất là 9. Chữ số hàng đơn vị là: 14 - 9 = 5. Vậy số đó là 95.'
      },
      {
        id: 'de5_q4',
        section: 'Bài 2: Điền kết quả thích hợp vào chỗ trống',
        topic: 'missing_components',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Điền số thích hợp: 58 - ........ = 24 + 12',
        correctAnswer: '22',
        hint: 'Vế phải: 24 + 12 = 36. Số trừ: 58 - 36.',
        explanation: '24 + 12 = 36. Số cần điền = 58 - 36 = 22.'
      },
      {
        id: 'de5_q5',
        section: 'Bài 2: Điền kết quả thích hợp vào chỗ trống',
        topic: 'word_problems',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Năm nay mẹ 32 tuổi, con 6 tuổi. Hỏi sau 3 năm nữa cả hai mẹ con bao nhiêu tuổi? ........ tuổi.',
        correctAnswer: '44',
        hint: 'Sau 3 năm, mỗi người đều tăng thêm 3 tuổi: (32 + 3) + (6 + 3).',
        explanation: 'Sau 3 năm tuổi mẹ là: 32 + 3 = 35 (tuổi).\nTuổi con là: 6 + 3 = 9 (tuổi).\nTổng số tuổi cả hai mẹ con là: 35 + 9 = 44 (tuổi).'
      },
      {
        id: 'de5_q6',
        section: 'Bài 2: Điền kết quả thích hợp vào chỗ trống',
        topic: 'patterns_sequences',
        difficulty: 'hard',
        type: 'fill_blank',
        content: 'Số tiếp theo cần điền vào dãy sau: 1, 2, 3, 5, 8, 13, ........',
        correctAnswer: '21',
        hint: 'Kể từ số thứ ba, mỗi số bằng tổng 2 số đứng liền trước: 8 + 13.',
        explanation: 'Quy luật Fibonacci: 1+2=3, 2+3=5, 3+5=8, 5+8=13. Số tiếp theo là 8 + 13 = 21.'
      },
      {
        id: 'de5_q7',
        section: 'Bài 2: Điền kết quả thích hợp vào chỗ trống',
        topic: 'counting_numbers',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Có tất cả bao nhiêu số tròn chục có hai chữ số? ........ số.',
        correctAnswer: '9',
        hint: 'Các số: 10, 20, 30, 40, 50, 60, 70, 80, 90.',
        explanation: 'Có 9 số tròn chục có 2 chữ số.'
      },
      {
        id: 'de5_q8',
        section: 'Bài 2: Điền kết quả thích hợp vào chỗ trống',
        topic: 'measurement_time',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Điền số thích hợp: 5 dm 6 cm + 24 cm = ........ dm.',
        correctAnswer: '8',
        hint: '5 dm 6 cm = 56 cm. 56 cm + 24 cm = 80 cm = 8 dm.',
        explanation: '56 cm + 24 cm = 80 cm. Đổi 80 cm = 8 dm. Điền 8.'
      },
      {
        id: 'de5_q9',
        section: 'Bài 3: Đặt tính & Hình học',
        topic: 'addition_subtraction',
        difficulty: 'medium',
        type: 'vertical_math',
        content: 'Điền chữ số thích hợp vào ô trống để được phép tính đúng:',
        operation: '+',
        topDigits: ['3', { id: 'box1', correct: '9' }],
        bottomDigits: [{ id: 'box2', correct: '2' }, '5'],
        resultDigits: ['6', '4'],
        explanation: 'Hàng đơn vị: 9 + 5 = 14 (viết 4 nhớ 1) => điền 9.\nHàng chục: 3 + ? + 1 = 6 => ? = 2 => điền 2.\nPhép tính là: 39 + 25 = 64.'
      },
      {
        id: 'de5_q10',
        section: 'Bài 3: Đặt tính & Hình học',
        topic: 'geometry',
        difficulty: 'hard',
        type: 'fill_blank',
        content: 'Quan sát hình vẽ bên dưới: Trong hình bên có tất cả bao nhiêu hình tứ giác?',
        diagram: { type: 'composite_quadrilateral' },
        correctAnswer: '6',
        hint: 'Mỗi phần 1, 2, 3 đều có 4 cạnh (3 hình đơn). Ghép đôi (2 hình). Ghép cả 3 (1 hình): 3 + 2 + 1.',
        explanation: 'Cách đếm hình tứ giác một cách hệ thống:\n- Hình đơn (1 phần): hình 1, 2, 3 => có 3 hình.\n- Hình đôi (2 phần ghép lại): (1+2) và (2+3) => có 2 hình.\n- Hình ba (3 phần ghép lại): (1+2+3) hình chữ nhật lớn bao quanh => có 1 hình.\nTổng cộng có: 3 + 2 + 1 = 6 hình tứ giác.'
      },
      {
        id: 'de5_q11',
        section: 'Bài 3: Đặt tính & Hình học',
        topic: 'digit_riddles',
        difficulty: 'hard',
        type: 'fill_blank',
        content: 'Tìm một số có hai chữ số biết chữ số hàng chục là số lớn nhất có 1 chữ số, chữ số hàng đơn vị kém chữ số hàng chục 6 đơn vị. Số đó là: ........',
        correctAnswer: '93',
        hint: 'Hàng chục là 9. Hàng đơn vị = 9 - 6 = 3.',
        explanation: 'Chữ số hàng chục là số lớn nhất có 1 chữ số là 9. Chữ số hàng đơn vị là 9 - 6 = 3. Vậy số đó là 93.'
      },
      {
        id: 'de5_q12',
        section: 'Bài 3: Đặt tính & Hình học',
        topic: 'word_problems',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Một cuộn dây dài 95 dm. Bác thợ cắt đi 35 dm để buộc hàng, sau đó cắt tiếp 20 dm nữa. Hỏi cuộn dây còn lại bao nhiêu đề-xi-mét? ........ dm.',
        correctAnswer: '40',
        hint: '95 - 35 - 20 = 40 dm.',
        explanation: 'Cuộn dây còn lại là: 95 - 35 - 20 = 40 (dm).'
      },
      {
        id: 'de5_q13',
        section: 'Bài 3: Đặt tính & Hình học',
        topic: 'addition_subtraction',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Tìm hiệu của số lớn nhất có hai chữ số và số bé nhất có hai chữ số giống nhau: ........',
        correctAnswer: '88',
        hint: 'Số lớn nhất có 2 chữ số là 99. Số bé nhất có 2 chữ số giống nhau là 11: 99 - 11.',
        explanation: 'Số lớn nhất có 2 chữ số là 99. Số bé nhất có 2 chữ số giống nhau là 11.\nHiệu là: 99 - 11 = 88.'
      },
      {
        id: 'de5_q14',
        section: 'Bài 3: Đặt tính & Hình học',
        topic: 'missing_components',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Điền số thích hợp: 100 - ........ = 45 + 15',
        correctAnswer: '40',
        hint: 'Vế phải 45 + 15 = 60. Số trừ = 100 - 60.',
        explanation: '100 - 60 = 40.'
      },
      {
        id: 'de5_q15',
        section: 'Bài 3: Đặt tính & Hình học',
        topic: 'measurement_time',
        difficulty: 'medium',
        type: 'multiple_choice',
        content: 'So sánh: 25 kg + 15 kg ........ 70 dm - 30 dm',
        options: ['>', '<', '=', 'Không so sánh được'],
        correctAnswer: 'Không so sánh được',
        hint: 'Một bên là khối lượng (kg), một bên là độ dài (dm).',
        explanation: 'Vì kg là đơn vị đo khối lượng, còn dm là đơn vị đo độ dài. Hai đơn vị đo khác loại không so sánh được với nhau.'
      }
    ]
  },

  // =========================================================================
  // ĐỀ SỐ 6: TINH ANH HỘI TỤ (Mức độ: Khá - Đề thi Cấp Trường 2)
  // =========================================================================
  {
    id: 'de-6',
    number: 6,
    title: 'Đề Số 06: Tinh Anh Hội Tụ (Cấp Trường 2)',
    subtitle: 'Tam giác cắt ngang MN, tính nhanh tròn chục, cấu tạo chữ số nâng cao',
    level: 'Khá',
    levelColor: 'bg-amber-100 text-amber-800 border-amber-300',
    timeLimit: 1200,
    questionsCount: 15,
    questions: [
      {
        id: 'de6_q1',
        section: 'Bài 1: Sắp xếp bảng số theo thứ tự tăng dần',
        topic: 'addition_subtraction',
        difficulty: 'medium',
        type: 'matrix_order',
        content: 'Điền số thứ tự từ 1 đến 16 để sắp xếp các số sau theo thứ tự TĂNG DẦN:',
        items: [
          { id: 1, text: '9', value: 9 },
          { id: 2, text: '17', value: 17 },
          { id: 3, text: '24', value: 24 },
          { id: 4, text: '32', value: 32 },
          { id: 5, text: '41', value: 41 },
          { id: 6, text: '46', value: 46 },
          { id: 7, text: '53', value: 53 },
          { id: 8, text: '58', value: 58 },
          { id: 9, text: '65', value: 65 },
          { id: 10, text: '71', value: 71 },
          { id: 11, text: '77', value: 77 },
          { id: 12, text: '83', value: 83 },
          { id: 13, text: '89', value: 89 },
          { id: 14, text: '91', value: 91 },
          { id: 15, text: '94', value: 94 },
          { id: 16, text: '98', value: 98 }
        ],
        hint: 'So sánh chữ số hàng chục rồi đến hàng đơn vị.',
        explanation: 'Thứ tự từ bé đến lớn: 9 < 17 < 24 < 32 < 41 < 46 < 53 < 58 < 65 < 71 < 77 < 83 < 89 < 91 < 94 < 98.'
      },
      {
        id: 'de6_q2',
        section: 'Bài 2: Điền kết quả thích hợp vào chỗ trống',
        topic: 'addition_subtraction',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Tính nhanh: 18 + 25 + 32 + 15 = ........',
        correctAnswer: '90',
        hint: 'Nhóm (18 + 32) + (25 + 15) = 50 + 40.',
        explanation: '(18 + 32) + (25 + 15) = 50 + 40 = 90.'
      },
      {
        id: 'de6_q3',
        section: 'Bài 2: Điền kết quả thích hợp vào chỗ trống',
        topic: 'geometry',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Quan sát hình vẽ tam giác ABC có đoạn thẳng MN cắt ngang (như hình bên dưới): Trong hình vẽ có tất cả bao nhiêu hình tam giác?',
        diagram: { type: 'triangle_with_horizontal' },
        correctAnswer: '2',
        hint: 'Tam giác nhỏ AMN ở trên và tam giác lớn ABC bao quanh.',
        explanation: 'Hình vẽ có 2 hình tam giác: tam giác nhỏ AMN và tam giác lớn ABC.'
      },
      {
        id: 'de6_q4',
        section: 'Bài 2: Điền kết quả thích hợp vào chỗ trống',
        topic: 'geometry',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Quan sát hình vẽ tam giác ABC có đoạn thẳng MN cắt ngang (như hình bên dưới): Phần hình BMNC ở phía dưới là hình gì và có mấy hình tứ giác?',
        diagram: { type: 'triangle_with_horizontal' },
        correctAnswer: '1',
        hint: 'Hình BMNC có 4 cạnh (là 1 hình tứ giác).',
        explanation: 'Phần phía dưới là hình tứ giác BMNC. Có đúng 1 hình tứ giác.'
      },
      {
        id: 'de6_q5',
        section: 'Bài 2: Điền kết quả thích hợp vào chỗ trống',
        topic: 'missing_components',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Điền số thích hợp: ........ + 36 = 100 - 18',
        correctAnswer: '46',
        hint: 'Vế phải 100 - 18 = 82. Số cần điền = 82 - 36.',
        explanation: 'Bước 1: 100 - 18 = 82.\nBước 2: 82 - 36 = 46.'
      },
      {
        id: 'de6_q6',
        section: 'Bài 2: Điền kết quả thích hợp vào chỗ trống',
        topic: 'word_problems',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Hôm nay thứ Hai ngày 6. Hỏi thứ Hai tuần sau là ngày mấy? Ngày ........',
        correctAnswer: '13',
        hint: 'Lấy 6 + 7 = 13.',
        explanation: 'Thứ Hai tuần sau là ngày: 6 + 7 = 13.'
      },
      {
        id: 'de6_q7',
        section: 'Bài 2: Điền kết quả thích hợp vào chỗ trống',
        topic: 'digit_riddles',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Tìm số bé nhất có hai chữ số mà tổng hai chữ số của nó bằng 11: ........',
        correctAnswer: '29',
        hint: 'Để số bé nhất thì hàng đơn vị phải lớn nhất là 9. Hàng chục = 11 - 9 = 2.',
        explanation: 'Để số bé nhất, hàng đơn vị phải lớn nhất có thể là 9. Chữ số hàng chục là: 11 - 9 = 2. Vậy số đó là 29.'
      },
      {
        id: 'de6_q8',
        section: 'Bài 2: Điền kết quả thích hợp vào chỗ trống',
        topic: 'measurement_time',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Tính: 45 l - 18 l + 12 l = ........ l.',
        correctAnswer: '39',
        hint: '45 - 18 = 27; 27 + 12 = 39.',
        explanation: '45 l - 18 l = 27 l; 27 l + 12 l = 39 l.'
      },
      {
        id: 'de6_q9',
        section: 'Bài 3: Đặt tính & Tổng hợp',
        topic: 'addition_subtraction',
        difficulty: 'medium',
        type: 'vertical_math',
        content: 'Điền chữ số thích hợp vào ô trống để được phép trừ đúng:',
        operation: '-',
        topDigits: ['9', { id: 'box1', correct: '0' }],
        bottomDigits: [{ id: 'box2', correct: '4' }, '6'],
        resultDigits: ['4', '4'],
        explanation: 'Hàng đơn vị: 10 - 6 = 4 => ? là 0.\nHàng chục: 9 - ? - 1 = 4 => ? = 4.\nPhép tính là: 90 - 46 = 44.'
      },
      {
        id: 'de6_q10',
        section: 'Bài 3: Đặt tính & Tổng hợp',
        topic: 'geometry',
        difficulty: 'easy',
        type: 'fill_blank',
        content: 'Cho hình tam giác ABC có độ dài các cạnh: AB = 14 cm, BC = 18 cm, CA = 22 cm. Tính chu vi hình tam giác ABC: ........ cm.',
        diagram: { type: 'triangle_perimeter', a: 14, b: 18, c: 22, unit: 'cm' },
        correctAnswer: '54',
        hint: '14 + 18 + 22 = 54.',
        explanation: 'Chu vi tam giác ABC là: 14 + 18 + 22 = 54 (cm).'
      },
      {
        id: 'de6_q11',
        section: 'Bài 3: Đặt tính & Tổng hợp',
        topic: 'patterns_sequences',
        difficulty: 'easy',
        type: 'fill_blank',
        content: 'Điền số thích hợp vào chỗ chấm: 10, 20, 30, 40, 50, ........',
        correctAnswer: '60',
        hint: 'Dãy số tròn chục đếm thêm 10.',
        explanation: 'Số tiếp theo là: 50 + 10 = 60.'
      },
      {
        id: 'de6_q12',
        section: 'Bài 3: Đặt tính & Tổng hợp',
        topic: 'word_problems',
        difficulty: 'hard',
        type: 'fill_blank',
        content: 'Lớp 2A có 32 học sinh, trong đó có 18 bạn nữ. Hỏi lớp 2A có bao nhiêu bạn nam? ........ bạn nam.',
        correctAnswer: '14',
        hint: 'Lấy tổng số học sinh trừ đi số bạn nữ: 32 - 18.',
        explanation: 'Số bạn nam là: 32 - 18 = 14 (bạn nam).'
      },
      {
        id: 'de6_q13',
        section: 'Bài 3: Đặt tính & Tổng hợp',
        topic: 'counting_numbers',
        difficulty: 'hard',
        type: 'fill_blank',
        content: 'Có bao nhiêu số chẵn có hai chữ số nhỏ hơn 30? ........ số.',
        correctAnswer: '10',
        hint: 'Các số chẵn từ 10 đến 28: 10, 12, 14, 16, 18, 20, 22, 24, 26, 28.',
        explanation: 'Các số chẵn gồm: 10, 12, 14, 16, 18, 20, 22, 24, 26, 28 (có tất cả 10 số).'
      },
      {
        id: 'de6_q14',
        section: 'Bài 3: Đặt tính & Tổng hợp',
        topic: 'digit_riddles',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Khi đổi chỗ hai chữ số của số 38 thì ta được một số mới lớn hơn số cũ bao nhiêu đơn vị? ........ đơn vị.',
        correctAnswer: '45',
        hint: 'Số mới là 83. Lấy 83 - 38.',
        explanation: 'Đổi chỗ hai chữ số của 38 ta được số 83.\nSố mới lớn hơn số cũ là: 83 - 38 = 45 (đơn vị).'
      },
      {
        id: 'de6_q15',
        section: 'Bài 3: Đặt tính & Tổng hợp',
        topic: 'addition_subtraction',
        difficulty: 'easy',
        type: 'multiple_choice',
        content: 'Số liền trước của số bé nhất có hai chữ số là:',
        options: ['11', '10', '9', '8'],
        correctAnswer: '9',
        hint: 'Số bé nhất có hai chữ số là 10. Liền trước của 10 là số nào?',
        explanation: 'Số bé nhất có hai chữ số là 10. Số liền trước của 10 là 9.'
      }
    ]
  },

  // =========================================================================
  // ĐỀ SỐ 7: CHIẾN BINH TOÁN HỌC (Mức độ: Khá - Đề thi Cấp Huyện 1)
  // =========================================================================
  {
    id: 'de-7',
    number: 7,
    title: 'Đề Số 07: Chiến Binh Toán Học (Cấp Quận/Huyện 1)',
    subtitle: 'Chu vi tam giác số đo lớn, bài toán tuổi ông cháu, trừ qua 100',
    level: 'Khá',
    levelColor: 'bg-amber-100 text-amber-800 border-amber-300',
    timeLimit: 1200,
    questionsCount: 15,
    questions: [
      {
        id: 'de7_q1',
        section: 'Bài 1: Cặp đôi hoàn hảo',
        topic: 'addition_subtraction',
        difficulty: 'medium',
        type: 'match_pairs',
        content: 'Tìm và ghép từng cặp 2 ô có giá trị bằng nhau:',
        pairs: [
          { a: '100 - 45', b: '55', val: 55 },
          { a: '37 + 29', b: '66', val: 66 },
          { a: '90 - 18', b: '72', val: 72 },
          { a: '48 + 32', b: '80', val: 80 },
          { a: '1 m', b: '10 dm', val: 10 }
        ],
        hint: 'Tính giá trị các phép tính.',
        explanation: '100-45=55; 37+29=66; 90-18=72; 48+32=80; 1m=10dm.'
      },
      {
        id: 'de7_q2',
        section: 'Bài 2: Điền kết quả thích hợp vào chỗ trống',
        topic: 'addition_subtraction',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Tính: 100 - 47 = ........',
        correctAnswer: '53',
        hint: '100 - 40 = 60; 60 - 7 = 53.',
        explanation: '100 - 47 = 53.'
      },
      {
        id: 'de7_q3',
        section: 'Bài 2: Điền kết quả thích hợp vào chỗ trống',
        topic: 'missing_components',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Tìm x biết: 85 - x = 27 + 19. Giá trị của x là: ........',
        correctAnswer: '39',
        hint: '27 + 19 = 46. Số trừ x = 85 - 46.',
        explanation: 'Vế phải: 27 + 19 = 46.\nx = 85 - 46 = 39.'
      },
      {
        id: 'de7_q4',
        section: 'Bài 2: Điền kết quả thích hợp vào chỗ trống',
        topic: 'geometry',
        difficulty: 'easy',
        type: 'fill_blank',
        content: 'Cho hình tam giác ABC có ba cạnh đều bằng nhau, mỗi cạnh dài 18 cm. Tính chu vi hình tam giác ABC: ........ cm.',
        correctAnswer: '54',
        hint: 'Cộng ba cạnh: 18 + 18 + 18.',
        explanation: 'Chu vi tam giác là: 18 + 18 + 18 = 54 (cm).'
      },
      {
        id: 'de7_q5',
        section: 'Bài 2: Điền kết quả thích hợp vào chỗ trống',
        topic: 'word_problems',
        difficulty: 'hard',
        type: 'fill_blank',
        content: 'Ông năm nay 68 tuổi, cháu 9 tuổi. Hỏi cách đây 4 năm, ông hơn cháu bao nhiêu tuổi? ........ tuổi.',
        correctAnswer: '59',
        hint: 'Hiệu số tuổi của hai người không bao giờ thay đổi theo thời gian: 68 - 9.',
        explanation: 'Hiệu số tuổi giữa hai người luôn không đổi qua các năm.\nHiện nay ông hơn cháu là: 68 - 9 = 59 (tuổi).\nVậy cách đây 4 năm ông vẫn hơn cháu 59 tuổi.'
      },
      {
        id: 'de7_q6',
        section: 'Bài 2: Điền kết quả thích hợp vào chỗ trống',
        topic: 'patterns_sequences',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Viết số tiếp theo của dãy số: 2, 5, 8, 11, 14, ........',
        correctAnswer: '17',
        hint: 'Mỗi số sau hơn số trước 3 đơn vị: 14 + 3.',
        explanation: 'Quy luật đếm thêm 3: 14 + 3 = 17.'
      },
      {
        id: 'de7_q7',
        section: 'Bài 2: Điền kết quả thích hợp vào chỗ trống',
        topic: 'digit_riddles',
        difficulty: 'hard',
        type: 'fill_blank',
        content: 'Số lớn nhất có hai chữ số mà chữ số hàng chục hơn chữ số hàng đơn vị 7 đơn vị là: ........',
        correctAnswer: '92',
        hint: 'Hàng chục lớn nhất là 9. Hàng đơn vị = 9 - 7 = 2.',
        explanation: 'Hàng chục lớn nhất là 9. Hàng đơn vị là: 9 - 7 = 2. Vậy số đó là 92.'
      },
      {
        id: 'de7_q8',
        section: 'Bài 2: Điền kết quả thích hợp vào chỗ trống',
        topic: 'measurement_time',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Điền số thích hợp: 1 m - 35 cm = ........ cm.',
        correctAnswer: '65',
        hint: 'Đổi 1 m = 100 cm. Sau đó 100 - 35 = 65 cm.',
        explanation: 'Đổi 1 m = 100 cm. 100 cm - 35 cm = 65 cm.'
      },
      {
        id: 'de7_q9',
        section: 'Bài 3: Đặt tính & Tổng hợp',
        topic: 'addition_subtraction',
        difficulty: 'medium',
        type: 'vertical_math',
        content: 'Điền chữ số thích hợp vào ô trống để được phép cộng đúng:',
        operation: '+',
        topDigits: ['4', { id: 'box1', correct: '7' }],
        bottomDigits: [{ id: 'box2', correct: '3' }, '8'],
        resultDigits: ['8', '5'],
        explanation: 'Hàng đơn vị: ? + 8 = 15 (nhớ 1) => ? là 7.\nHàng chục: 4 + ? + 1 = 8 => ? là 3.\nPhép tính là: 47 + 38 = 85.'
      },
      {
        id: 'de7_q10',
        section: 'Bài 3: Đặt tính & Tổng hợp',
        topic: 'geometry',
        difficulty: 'easy',
        type: 'fill_blank',
        content: 'Cho đường gấp khúc ABCD có kích thước: AB = 15 cm, BC = 20 cm, CD = 12 cm (như hình vẽ bên dưới). Tính độ dài đường gấp khúc: ........ cm.',
        diagram: { type: 'polyline', d1: 15, d2: 20, d3: 12 },
        correctAnswer: '47',
        hint: 'Lấy 15 + 20 + 12.',
        explanation: 'Độ dài đường gấp khúc là: 15 + 20 + 12 = 47 (cm).'
      },
      {
        id: 'de7_q11',
        section: 'Bài 3: Đặt tính & Tổng hợp',
        topic: 'word_problems',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Thùng thứ nhất đựng 38 lít dầu, thùng thứ hai đựng nhiều hơn thùng thứ nhất 14 lít dầu. Hỏi cả hai thùng đựng bao nhiêu lít dầu? ........ lít.',
        correctAnswer: '90',
        hint: 'Bước 1: Thùng 2 = 38 + 14 = 52 l. Bước 2: Cả hai thùng = 38 + 52.',
        explanation: 'Thùng thứ hai đựng: 38 + 14 = 52 (lít).\nCả hai thùng đựng: 38 + 52 = 90 (lít).'
      },
      {
        id: 'de7_q12',
        section: 'Bài 3: Đặt tính & Tổng hợp',
        topic: 'counting_numbers',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Có bao nhiêu số có hai chữ số mà chữ số tận cùng là 5? ........ số.',
        correctAnswer: '9',
        hint: 'Các số: 15, 25, 35, 45, 55, 65, 75, 85, 95.',
        explanation: 'Có 9 số: 15, 25, 35, 45, 55, 65, 75, 85, 95.'
      },
      {
        id: 'de7_q13',
        section: 'Bài 3: Đặt tính & Tổng hợp',
        topic: 'digit_riddles',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Số bé nhất có hai chữ số mà tích hai chữ số bằng 12 là số: ........',
        correctAnswer: '26',
        hint: 'Tích bằng 12 có các cặp: 2 x 6, 3 x 4, 4 x 3, 6 x 2. Số bé nhất là 26.',
        explanation: 'Các số có 2 chữ số có tích bằng 12 là: 26, 34, 43, 62. Số bé nhất là 26.'
      },
      {
        id: 'de7_q14',
        section: 'Bài 3: Đặt tính & Tổng hợp',
        topic: 'missing_components',
        difficulty: 'easy',
        type: 'fill_blank',
        content: 'Điền số thích hợp: ........ - 45 = 35',
        correctAnswer: '80',
        hint: 'Số bị trừ = 35 + 45 = 80.',
        explanation: 'Số cần điền = 35 + 45 = 80.'
      },
      {
        id: 'de7_q15',
        section: 'Bài 3: Đặt tính & Tổng hợp',
        topic: 'measurement_time',
        difficulty: 'easy',
        type: 'multiple_choice',
        content: 'Trong một năm, tháng nào dưới đây có 28 hoặc 29 ngày?',
        options: ['Tháng 1', 'Tháng 2', 'Tháng 3', 'Tháng 4'],
        correctAnswer: 'Tháng 2',
        hint: 'Tháng đặc biệt ngắn nhất trong năm.',
        explanation: 'Tháng 2 là tháng đặc biệt có 28 ngày (năm nhuận có 29 ngày).'
      }
    ]
  },

  // =========================================================================
  // ĐỀ SỐ 8: BẢN LĨNH ĐẤU TRƯỜNG (Mức độ: Nâng cao - Cấp Huyện 2)
  // =========================================================================
  {
    id: 'de-8',
    number: 8,
    title: 'Đề Số 08: Bản Lĩnh Đấu Trường (Cấp Quận/Huyện 2)',
    subtitle: 'Làm quen bảng nhân 2 & 5, đếm hình chữ nhật 4 ô, bài toán logic',
    level: 'Nâng cao',
    levelColor: 'bg-rose-100 text-rose-800 border-rose-300',
    timeLimit: 1200,
    questionsCount: 15,
    questions: [
      {
        id: 'de8_q1',
        section: 'Bài 1: Sắp xếp bảng biểu thức tăng dần',
        topic: 'addition_subtraction',
        difficulty: 'hard',
        type: 'matrix_order',
        content: 'Điền số thứ tự từ 1 đến 16 để sắp xếp các ô sau theo thứ tự TĂNG DẦN:',
        items: [
          { id: 1, text: '2 x 5', value: 10 },
          { id: 2, text: '18', value: 18 },
          { id: 3, text: '5 x 5', value: 25 },
          { id: 4, text: '32', value: 32 },
          { id: 5, text: '2 x 9 + 20', value: 38 },
          { id: 6, text: '5 x 9', value: 45 },
          { id: 7, text: '52', value: 52 },
          { id: 8, text: '60 - 2', value: 58 },
          { id: 9, text: '65', value: 65 },
          { id: 10, text: '73', value: 73 },
          { id: 11, text: '100 - 21', value: 79 },
          { id: 12, text: '84', value: 84 },
          { id: 13, text: '45 + 45', value: 90 },
          { id: 14, text: '93', value: 93 },
          { id: 15, text: '96', value: 96 },
          { id: 16, text: '100', value: 100 }
        ],
        hint: 'Tính giá trị các phép nhân và trừ trước rồi sắp xếp.',
        explanation: 'Thứ tự từ bé đến lớn: 10 < 18 < 25 < 32 < 38 < 45 < 52 < 58 < 65 < 73 < 79 < 84 < 90 < 93 < 96 < 100.'
      },
      {
        id: 'de8_q2',
        section: 'Bài 2: Điền kết quả thích hợp vào chỗ trống',
        topic: 'patterns_sequences',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Tính: 2 x 8 + 15 = ........',
        correctAnswer: '31',
        hint: '2 x 8 = 16, sau đó lấy 16 + 15 = 31.',
        explanation: '2 x 8 = 16; 16 + 15 = 31.'
      },
      {
        id: 'de8_q3',
        section: 'Bài 2: Điền kết quả thích hợp vào chỗ trống',
        topic: 'patterns_sequences',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Tính: 5 x 6 - 12 = ........',
        correctAnswer: '18',
        hint: '5 x 6 = 30, sau đó lấy 30 - 12 = 18.',
        explanation: '5 x 6 = 30; 30 - 12 = 18.'
      },
      {
        id: 'de8_q4',
        section: 'Bài 2: Điền kết quả thích hợp vào chỗ trống',
        topic: 'digit_riddles',
        difficulty: 'hard',
        type: 'fill_blank',
        content: 'Số lớn nhất có hai chữ số mà tổng hai chữ số bằng 12 và hiệu hai chữ số bằng 2 là số: ........',
        correctAnswer: '75',
        hint: 'Tìm hai chữ số có tổng bằng 12 và hiệu bằng 2: đó là 7 và 5 (vì 7 + 5 = 12, 7 - 5 = 2).',
        explanation: 'Hai chữ số có tổng bằng 12 và hiệu bằng 2 là 7 và 5. Để số lớn nhất, chữ số 7 đứng ở hàng chục. Vậy số đó là 75.'
      },
      {
        id: 'de8_q5',
        section: 'Bài 2: Điền kết quả thích hợp vào chỗ trống',
        topic: 'word_problems',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Cô giáo có 20 quyển vở, cô chia đều cho 5 bạn học sinh giỏi. Hỏi mỗi bạn được bao nhiêu quyển vở? ........ quyển.',
        correctAnswer: '4',
        hint: 'Lấy 20 chia đều cho 5: 20 : 5 = 4.',
        explanation: 'Mỗi bạn nhận được số quyển vở là: 20 : 5 = 4 (quyển).'
      },
      {
        id: 'de8_q6',
        section: 'Bài 2: Điền kết quả thích hợp vào chỗ trống',
        topic: 'counting_numbers',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Từ số 15 đến số 65 có tất cả bao nhiêu số lẻ? ........ số.',
        correctAnswer: '26',
        hint: 'Dãy số lẻ: 15, 17, 19, ..., 65. Khoảng cách là 2: (65 - 15) : 2 + 1 = 26.',
        explanation: 'Số các số lẻ liên tiếp là: (65 - 15) : 2 + 1 = 50 : 2 + 1 = 26 (số).'
      },
      {
        id: 'de8_q7',
        section: 'Bài 2: Điền kết quả thích hợp vào chỗ trống',
        topic: 'missing_components',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Tìm x biết: x - 35 = 100 - 45. Giá trị của x là: ........',
        correctAnswer: '90',
        hint: '100 - 45 = 55. x = 55 + 35 = 90.',
        explanation: 'Bước 1: 100 - 45 = 55.\nBước 2: x = 55 + 35 = 90.'
      },
      {
        id: 'de8_q8',
        section: 'Bài 2: Điền kết quả thích hợp vào chỗ trống',
        topic: 'measurement_time',
        difficulty: 'easy',
        type: 'fill_blank',
        content: 'Một ngày có bao nhiêu giờ? ........ giờ.',
        correctAnswer: '24',
        hint: 'Một ngày đêm có 24 giờ.',
        explanation: 'Một ngày có 24 giờ.'
      },
      {
        id: 'de8_q9',
        section: 'Bài 3: Đặt tính & Hình học',
        topic: 'addition_subtraction',
        difficulty: 'hard',
        type: 'vertical_math',
        content: 'Điền chữ số thích hợp vào ô trống để được phép trừ đúng:',
        operation: '-',
        topDigits: ['1', '0', { id: 'box1', correct: '0' }],
        bottomDigits: [{ id: 'box2', correct: '3' }, '5'],
        resultDigits: ['6', '5'],
        explanation: '100 - 35 = 65. Ô trên điền 0 (thành số 100), ô dưới điền 3 (thành số 35).'
      },
      {
        id: 'de8_q10',
        section: 'Bài 3: Đặt tính & Hình học',
        topic: 'geometry',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Một thanh gỗ dài hình chữ nhật được chia đều thành 4 ô vuông nhỏ như hình vẽ bên dưới. Trong hình vẽ có tất cả bao nhiêu hình chữ nhật?',
        diagram: { type: 'split_rect', count: 4 },
        correctAnswer: '10',
        hint: 'Ghép từ 1 ô (4 hình), 2 ô (3 hình), 3 ô (2 hình), 4 ô (1 hình): 4 + 3 + 2 + 1.',
        explanation: 'Số hình chữ nhật là:\n4 + 3 + 2 + 1 = 10 (hình chữ nhật).'
      },
      {
        id: 'de8_q11',
        section: 'Bài 3: Đặt tính & Hình học',
        topic: 'patterns_sequences',
        difficulty: 'hard',
        type: 'fill_blank',
        content: 'Điền số thích hợp tiếp theo vào chỗ chấm: 1, 4, 7, 10, 13, 16, ........',
        correctAnswer: '19',
        hint: 'Mỗi số đứng sau hơn số trước 3 đơn vị: 16 + 3 = 19.',
        explanation: 'Quy luật cộng thêm 3: 16 + 3 = 19.'
      },
      {
        id: 'de8_q12',
        section: 'Bài 3: Đặt tính & Hình học',
        topic: 'word_problems',
        difficulty: 'hard',
        type: 'fill_blank',
        content: 'Một sợi dây dài 80 cm. Người ta cắt sợi dây đó thành hai đoạn, đoạn thứ nhất dài hơn đoạn thứ hai 20 cm. Hỏi đoạn thứ hai dài bao nhiêu xăng-ti-mét? ........ cm.',
        correctAnswer: '30',
        hint: 'Đoạn thứ hai = (80 - 20) : 2 = 60 : 2 = 30 cm.',
        explanation: 'Hai lần độ dài đoạn thứ hai là: 80 - 20 = 60 (cm).\nĐoạn thứ hai dài là: 60 : 2 = 30 (cm).'
      },
      {
        id: 'de8_q13',
        section: 'Bài 3: Đặt tính & Hình học',
        topic: 'digit_riddles',
        difficulty: 'hard',
        type: 'fill_blank',
        content: 'Có bao nhiêu số có hai chữ số mà chữ số hàng chục và chữ số hàng đơn vị giống nhau? ........ số.',
        correctAnswer: '9',
        hint: 'Các số: 11, 22, 33, 44, 55, 66, 77, 88, 99.',
        explanation: 'Có 9 số có hai chữ số giống nhau: 11, 22, 33, 44, 55, 66, 77, 88, 99.'
      },
      {
        id: 'de8_q14',
        section: 'Bài 3: Đặt tính & Hình học',
        topic: 'addition_subtraction',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Tính nhanh: 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 = ........',
        correctAnswer: '45',
        hint: 'Nhóm (1+9) + (2+8) + (3+7) + (4+6) + 5 = 10 x 4 + 5 = 45.',
        explanation: '(1 + 9) + (2 + 8) + (3 + 7) + (4 + 6) + 5 = 10 + 10 + 10 + 10 + 5 = 45.'
      },
      {
        id: 'de8_q15',
        section: 'Bài 3: Đặt tính & Hình học',
        topic: 'measurement_time',
        difficulty: 'medium',
        type: 'multiple_choice',
        content: 'Hiện nay là 8 giờ sáng. Hỏi sau 5 giờ nữa đồng hồ sẽ chỉ mấy giờ?',
        options: ['12 giờ trưa', '1 giờ chiều', '2 giờ chiều', '3 giờ chiều'],
        correctAnswer: '1 giờ chiều',
        hint: '8 + 5 = 13 giờ (tức là 1 giờ chiều).',
        explanation: '8 + 5 = 13 giờ. 13 giờ trong ngày chính là 1 giờ chiều.'
      }
    ]
  },

  // =========================================================================
  // ĐỀ SỐ 9: CHINH PHỤC ĐỈNH CAO (Mức độ: Nâng cao - Vòng Tỉnh/TP)
  // =========================================================================
  {
    id: 'de-9',
    number: 9,
    title: 'Đề Số 09: Chinh Phục Đỉnh Cao (Vòng Tỉnh/TP)',
    subtitle: 'Phép nhân chia 2 & 5 nâng cao, logic đố chân gà thỏ, tam giác chung đỉnh',
    level: 'Nâng cao',
    levelColor: 'bg-rose-100 text-rose-800 border-rose-300',
    timeLimit: 1200,
    questionsCount: 15,
    questions: [
      {
        id: 'de9_q1',
        section: 'Bài 1: Cặp đôi hoàn hảo',
        topic: 'addition_subtraction',
        difficulty: 'hard',
        type: 'match_pairs',
        content: 'Tìm và ghép từng cặp 2 ô có giá trị bằng nhau:',
        pairs: [
          { a: '5 x 8', b: '40', val: 40 },
          { a: '2 x 7', b: '14', val: 14 },
          { a: '18 : 2', b: '9', val: 9 },
          { a: '5 x 10', b: '50', val: 50 },
          { a: '45 : 5', b: '9', val: 9 }
        ],
        hint: 'Áp dụng bảng nhân và chia 2, 5.',
        explanation: '5x8=40; 2x7=14; 18:2=9; 5x10=50; 45:5=9.'
      },
      {
        id: 'de9_q2',
        section: 'Bài 2: Điền kết quả thích hợp vào chỗ trống',
        topic: 'patterns_sequences',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Tính: 5 x 9 + 25 = ........',
        correctAnswer: '70',
        hint: '5 x 9 = 45; 45 + 25 = 70.',
        explanation: '5 x 9 = 45; 45 + 25 = 70.'
      },
      {
        id: 'de9_q3',
        section: 'Bài 2: Điền kết quả thích hợp vào chỗ trống',
        topic: 'missing_components',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Tìm x biết: x x 2 = 18. Giá trị của x là: ........',
        correctAnswer: '9',
        hint: 'x = 18 : 2 = 9.',
        explanation: 'x = 18 : 2 = 9.'
      },
      {
        id: 'de9_q4',
        section: 'Bài 2: Điền kết quả thích hợp vào chỗ trống',
        topic: 'word_problems',
        difficulty: 'hard',
        type: 'fill_blank',
        content: 'Bác Ba nuôi một số con gà và một số con thỏ. Đếm được tất cả có 5 con thỏ và 4 con gà. Hỏi tất cả có bao nhiêu cái chân? ........ cái chân.',
        correctAnswer: '28',
        hint: 'Thỏ có 4 chân: 5 x 4 = 20 chân. Gà có 2 chân: 4 x 2 = 8 chân. Tổng: 20 + 8 = 28 chân.',
        explanation: '5 con thỏ có số chân là: 5 x 4 = 20 (chân).\n4 con gà có số chân là: 4 x 2 = 8 (chân).\nTất cả có số chân là: 20 + 8 = 28 (chân).'
      },
      {
        id: 'de9_q5',
        section: 'Bài 2: Điền kết quả thích hợp vào chỗ trống',
        topic: 'geometry',
        difficulty: 'hard',
        type: 'fill_blank',
        content: 'Một hình tam giác có độ dài ba cạnh lần lượt là: 25 cm, 30 cm và 35 cm. Tính chu vi hình tam giác đó ra đề-xi-mét: ........ dm.',
        correctAnswer: '9',
        hint: 'Tính chu vi = 25 + 30 + 35 = 90 cm. Đổi 90 cm = 9 dm.',
        explanation: 'Chu vi tam giác là: 25 + 30 + 35 = 90 (cm).\nĐổi 90 cm = 9 dm. Đáp số: 9.'
      },
      {
        id: 'de9_q6',
        section: 'Bài 2: Điền kết quả thích hợp vào chỗ trống',
        topic: 'digit_riddles',
        difficulty: 'hard',
        type: 'fill_blank',
        content: 'Tìm số tự nhiên có hai chữ số, biết chữ số hàng chục gấp 4 lần chữ số hàng đơn vị: Số đó là: ........',
        correctAnswer: '82',
        hint: 'Hàng đơn vị là 1 thì hàng chục là 4 (số 41). Hàng đơn vị là 2 thì hàng chục là 8 (số 82). Đề bài thi Violympic chuẩn số lớn là 82 (hoặc 41). Điền 82 hoặc 41.',
        explanation: 'Nếu hàng đơn vị là 2 thì hàng chục là 4 x 2 = 8. Ta được số 82.'
      },
      {
        id: 'de9_q7',
        section: 'Bài 2: Điền kết quả thích hợp vào chỗ trống',
        topic: 'measurement_time',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Mẹ đi làm lúc 7 giờ sáng và về đến nhà lúc 5 giờ chiều cùng ngày. Hỏi mẹ đã đi làm trong bao nhiêu giờ? ........ giờ.',
        correctAnswer: '10',
        hint: '5 giờ chiều là 17 giờ. Lấy 17 - 7 = 10 giờ.',
        explanation: '5 giờ chiều là 17 giờ.\nThời gian mẹ đi làm là: 17 - 7 = 10 (giờ).'
      },
      {
        id: 'de9_q8',
        section: 'Bài 2: Điền kết quả thích hợp vào chỗ trống',
        topic: 'counting_numbers',
        difficulty: 'hard',
        type: 'fill_blank',
        content: 'Có tất cả bao nhiêu số tự nhiên có hai chữ số mà tổng hai chữ số bằng 10? ........ số.',
        correctAnswer: '9',
        hint: 'Các số: 19, 28, 37, 46, 55, 64, 73, 82, 91.',
        explanation: 'Có 9 số có tổng các chữ số bằng 10: 19, 28, 37, 46, 55, 64, 73, 82, 91.'
      },
      {
        id: 'de9_q9',
        section: 'Bài 3: Đặt tính & Hình học',
        topic: 'addition_subtraction',
        difficulty: 'hard',
        type: 'vertical_math',
        content: 'Điền chữ số thích hợp vào ô trống để được phép cộng đúng:',
        operation: '+',
        topDigits: ['5', { id: 'box1', correct: '6' }],
        bottomDigits: [{ id: 'box2', correct: '3' }, '8'],
        resultDigits: ['9', '4'],
        explanation: '6 + 8 = 14 (nhớ 1) => ? là 6.\n5 + ? + 1 = 9 => ? là 3.\nPhép tính là: 56 + 38 = 94.'
      },
      {
        id: 'de9_q10',
        section: 'Bài 3: Đặt tính & Hình học',
        topic: 'geometry',
        difficulty: 'hard',
        type: 'fill_blank',
        content: 'Quan sát hình vẽ tam giác ABC có đáy chia làm 4 đoạn đơn bằng nhau (như hình bên dưới): Trong hình vẽ có tất cả bao nhiêu hình tam giác?',
        diagram: { type: 'apex_triangle', baseSegments: 4 },
        correctAnswer: '10',
        hint: 'Đáy chia 4 đoạn: 4 + 3 + 2 + 1 = 10 hình tam giác.',
        explanation: 'Số hình tam giác có chung đỉnh A là:\n4 + 3 + 2 + 1 = 10 (hình tam giác).'
      },
      {
        id: 'de9_q11',
        section: 'Bài 3: Đặt tính & Hình học',
        topic: 'patterns_sequences',
        difficulty: 'hard',
        type: 'fill_blank',
        content: 'Điền số thích hợp tiếp theo vào chỗ chấm: 3, 5, 9, 15, 23, ........',
        correctAnswer: '33',
        hint: 'Khoảng cách giữa các số tăng dần: +2, +4, +6, +8, +10. Lấy 23 + 10 = 33.',
        explanation: 'Khoảng cách giữa các số liền kề: 5 - 3 = 2; 9 - 5 = 4; 15 - 9 = 6; 23 - 15 = 8.\nKhoảng cách tiếp theo là 10. Số cần điền là: 23 + 10 = 33.'
      },
      {
        id: 'de9_q12',
        section: 'Bài 3: Đặt tính & Hình học',
        topic: 'word_problems',
        difficulty: 'hard',
        type: 'fill_blank',
        content: 'Một cửa hàng có hai thùng dầu chứa tất cả 90 lít dầu. Nếu chuyển 10 lít dầu từ thùng thứ nhất sang thùng thứ hai thì số dầu ở hai thùng bằng nhau. Hỏi lúc đầu thùng thứ nhất có bao nhiêu lít dầu? ........ lít.',
        correctAnswer: '55',
        hint: 'Khi hai thùng bằng nhau, mỗi thùng có 90 : 2 = 45 l. Lúc đầu thùng 1 có: 45 + 10 = 55 l.',
        explanation: 'Khi số dầu hai thùng bằng nhau, mỗi thùng có: 90 : 2 = 45 (lít).\nLúc đầu thùng thứ nhất có: 45 + 10 = 55 (lít).'
      },
      {
        id: 'de9_q13',
        section: 'Bài 3: Đặt tính & Hình học',
        topic: 'missing_components',
        difficulty: 'medium',
        type: 'fill_blank',
        content: 'Điền số thích hợp: 5 x 4 + ........ = 50',
        correctAnswer: '30',
        hint: '5 x 4 = 20. 20 + 30 = 50.',
        explanation: '5 x 4 = 20. Số cần điền là: 50 - 20 = 30.'
      },
      {
        id: 'de9_q14',
        section: 'Bài 3: Đặt tính & Hình học',
        topic: 'digit_riddles',
        difficulty: 'hard',
        type: 'fill_blank',
        content: 'Tìm số tự nhiên có hai chữ số biết rằng khi viết thêm chữ số 0 vào giữa hai chữ số của nó thì được số mới hơn số cũ 180 đơn vị: Số đó là: ........',
        correctAnswer: '20',
        hint: 'Số có dạng a0. Đề bài Violympic quen thuộc số 20 (thành 200 hơn 20 là 180).',
        explanation: 'Số đó là 20. Khi viết thêm số 0 vào giữa ta được 200. Hiệu là: 200 - 20 = 180.'
      },
      {
        id: 'de9_q15',
        section: 'Bài 3: Đặt tính & Hình học',
        topic: 'addition_subtraction',
        difficulty: 'medium',
        type: 'multiple_choice',
        content: 'Số thích hợp điền vào chỗ chấm để 48 + ..... = 50 + 26 là:',
        options: ['28', '26', '24', '30'],
        correctAnswer: '28',
        hint: 'Vế phải 50 + 26 = 76. Số cần tìm = 76 - 48 = 28.',
        explanation: '50 + 26 = 76. Số cần tìm là: 76 - 48 = 28.'
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
    subtitle: 'Tổng hợp đỉnh cao Violympic lớp 2: Ma trận 16 ô, hình học, logic điểm 10',
    level: 'Xuất sắc',
    levelColor: 'bg-purple-100 text-purple-800 border-purple-300',
    timeLimit: 1200,
    questionsCount: 15,
    questions: [
      {
        id: 'de10_q1',
        section: 'Bài 1: Sắp xếp bảng ma trận tổng hợp',
        topic: 'addition_subtraction',
        difficulty: 'hard',
        type: 'matrix_order',
        content: 'Điền số thứ tự từ 1 đến 16 để sắp xếp các ô giá trị sau theo thứ tự TĂNG DẦN:',
        items: [
          { id: 1, text: '2 x 6', value: 12 },
          { id: 2, text: '35 - 16', value: 19 },
          { id: 3, text: '5 x 5 - 1', value: 24 },
          { id: 4, text: '31', value: 31 },
          { id: 5, text: '2 x 8 + 20', value: 36 },
          { id: 6, text: '5 x 8 + 2', value: 42 },
          { id: 7, text: '49', value: 49 },
          { id: 8, text: '55', value: 55 },
          { id: 9, text: '80 - 18', value: 62 },
          { id: 10, text: '68', value: 68 },
          { id: 11, text: '5 x 10 + 24', value: 74 },
          { id: 12, text: '81', value: 81 },
          { id: 13, text: '100 - 13', value: 87 },
          { id: 14, text: '92', value: 92 },
          { id: 15, text: '95', value: 95 },
          { id: 16, text: '100', value: 100 }
        ],
        hint: 'Tính giá trị các biểu thức cẩn thận rồi xếp từ bé đến lớn.',
        explanation: 'Thứ tự từ bé đến lớn: 12 < 19 < 24 < 31 < 36 < 42 < 49 < 55 < 62 < 68 < 74 < 81 < 87 < 92 < 95 < 100.'
      },
      {
        id: 'de10_q2',
        section: 'Bài 2: Điền kết quả thích hợp vào chỗ trống',
        topic: 'patterns_sequences',
        difficulty: 'hard',
        type: 'fill_blank',
        content: 'Tính: 5 x 8 + 2 x 7 = ........',
        correctAnswer: '54',
        hint: '5 x 8 = 40; 2 x 7 = 14; 40 + 14 = 54.',
        explanation: '5 x 8 = 40; 2 x 7 = 14.\n40 + 14 = 54.'
      },
      {
        id: 'de10_q3',
        section: 'Bài 2: Điền kết quả thích hợp vào chỗ trống',
        topic: 'digit_riddles',
        difficulty: 'hard',
        type: 'fill_blank',
        content: 'Có bao nhiêu số có hai chữ số mà chữ số hàng chục nhỏ hơn chữ số hàng đơn vị 2 đơn vị? ........ số.',
        correctAnswer: '7',
        hint: 'Các số: 13, 24, 35, 46, 57, 68, 79.',
        explanation: 'Các số thỏa mãn: 13, 24, 35, 46, 57, 68, 79 (có tất cả 7 số).'
      },
      {
        id: 'de10_q4',
        section: 'Bài 2: Điền kết quả thích hợp vào chỗ trống',
        topic: 'word_problems',
        difficulty: 'hard',
        type: 'fill_blank',
        content: 'Người ta trồng các cây ven một con đường thẳng dài 40 m. Cứ cách 5 m lại trồng một cây. Biết cả hai đầu đường đều có trồng cây. Hỏi có tất cả bao nhiêu cây? ........ cây.',
        correctAnswer: '9',
        hint: 'Số khoảng cách = 40 : 5 = 8 khoảng. Vì trồng cả 2 đầu nên số cây = 8 + 1 = 9 cây.',
        explanation: 'Số khoảng cách là: 40 : 5 = 8 (khoảng cách).\nVì hai đầu đường đều trồng cây nên số cây là: 8 + 1 = 9 (cây).'
      },
      {
        id: 'de10_q5',
        section: 'Bài 2: Điền kết quả thích hợp vào chỗ trống',
        topic: 'geometry',
        difficulty: 'hard',
        type: 'fill_blank',
        content: 'Trong hình chữ nhật bị cắt xiên bởi 2 đoạn thẳng (như hình vẽ bên dưới), có tất cả bao nhiêu hình tứ giác?',
        diagram: { type: 'composite_quadrilateral' },
        correctAnswer: '6',
        hint: '3 hình đơn + 2 hình đôi + 1 hình lớn = 6 hình tứ giác.',
        explanation: '3 hình tứ giác đơn (1, 2, 3) + 2 hình tứ giác đôi (1+2, 2+3) + 1 hình tứ giác ba bao ngoài = 6 hình tứ giác.'
      },
      {
        id: 'de10_q6',
        section: 'Bài 2: Điền kết quả thích hợp vào chỗ trống',
        topic: 'missing_components',
        difficulty: 'hard',
        type: 'fill_blank',
        content: 'Tìm x biết: 100 - x = 5 x 6 + 15. Giá trị của x là: ........',
        correctAnswer: '55',
        hint: '5 x 6 + 15 = 45. x = 100 - 45 = 55.',
        explanation: 'Vế phải: 5 x 6 + 15 = 30 + 15 = 45.\nx = 100 - 45 = 55.'
      },
      {
        id: 'de10_q7',
        section: 'Bài 2: Điền kết quả thích hợp vào chỗ trống',
        topic: 'patterns_sequences',
        difficulty: 'hard',
        type: 'fill_blank',
        content: 'Điền số tiếp theo vào dãy số sau: 2, 3, 5, 8, 12, 17, ........',
        correctAnswer: '23',
        hint: 'Cộng thêm lần lượt: +1, +2, +3, +4, +5, +6. Lấy 17 + 6 = 23.',
        explanation: 'Khoảng cách giữa các số: +1, +2, +3, +4, +5. Tiếp theo là +6: 17 + 6 = 23.'
      },
      {
        id: 'de10_q8',
        section: 'Bài 2: Điền kết quả thích hợp vào chỗ trống',
        topic: 'measurement_time',
        difficulty: 'hard',
        type: 'fill_blank',
        content: 'Hôm nay là thứ Sáu ngày 12 tháng 5. Hỏi thứ Sáu cuối cùng của tháng 5 là ngày mấy? Ngày ........',
        correctAnswer: '26',
        hint: 'Cộng thêm các tuần: ngày 12, ngày 19, ngày 26. Tháng 5 có 31 ngày nên ngày 26 là thứ Sáu cuối cùng.',
        explanation: 'Các ngày thứ Sáu tiếp theo: 12 + 7 = 19; 19 + 7 = 26. (26 + 7 = 33 > 31 nên không có). Thứ Sáu cuối cùng là ngày 26.'
      },
      {
        id: 'de10_q9',
        section: 'Bài 3: Đặt tính & Hình học',
        topic: 'addition_subtraction',
        difficulty: 'hard',
        type: 'vertical_math',
        content: 'Điền chữ số thích hợp vào ô trống để được phép trừ đúng:',
        operation: '-',
        topDigits: ['8', { id: 'box1', correct: '1' }],
        bottomDigits: [{ id: 'box2', correct: '3' }, '7'],
        resultDigits: ['4', '4'],
        explanation: '11 - 7 = 4 => ? là 1.\n8 - ? - 1 = 4 => ? là 3.\nPhép tính là: 81 - 37 = 44.'
      },
      {
        id: 'de10_q10',
        section: 'Bài 3: Đặt tính & Hình học',
        topic: 'geometry',
        difficulty: 'hard',
        type: 'fill_blank',
        content: 'Một hình tam giác ABC có cạnh đáy BC được chia làm 5 đoạn đơn bằng nhau (như hình bên dưới). Trong hình vẽ có tất cả bao nhiêu hình tam giác?',
        diagram: { type: 'apex_triangle', baseSegments: 5 },
        correctAnswer: '15',
        hint: 'Cộng dãy số: 5 + 4 + 3 + 2 + 1 = 15 hình tam giác.',
        explanation: 'Số hình tam giác có chung đỉnh A là: 5 + 4 + 3 + 2 + 1 = 15 (hình tam giác).'
      },
      {
        id: 'de10_q11',
        section: 'Bài 3: Đặt tính & Hình học',
        topic: 'word_problems',
        difficulty: 'hard',
        type: 'fill_blank',
        content: 'Ba bạn An, Bình, Chi có tất cả 45 viên kẹo. An có 15 viên kẹo, Bình có nhiều hơn Chi 4 viên kẹo. Hỏi bạn Bình có bao nhiêu viên kẹo? ........ viên.',
        correctAnswer: '17',
        hint: 'Tổng số kẹo của Bình và Chi là: 45 - 15 = 30 viên. Bình hơn Chi 4 viên: (30 + 4) : 2 = 17 viên.',
        explanation: 'Tổng số kẹo của Bình và Chi là: 45 - 15 = 30 (viên).\nBạn Bình có số kẹo là: (30 + 4) : 2 = 17 (viên).'
      },
      {
        id: 'de10_q12',
        section: 'Bài 3: Đặt tính & Hình học',
        topic: 'digit_riddles',
        difficulty: 'hard',
        type: 'fill_blank',
        content: 'Tìm số có hai chữ số, biết rằng nếu lấy chữ số hàng chục cộng với chữ số hàng đơn vị thì được 15, còn nếu lấy chữ số hàng chục trừ đi chữ số hàng đơn vị thì được 3. Số đó là: ........',
        correctAnswer: '96',
        hint: 'Hàng chục = (15 + 3) : 2 = 9. Hàng đơn vị = 9 - 3 = 6. Số đó là 96.',
        explanation: 'Chữ số hàng chục là: (15 + 3) : 2 = 9.\nChữ số hàng đơn vị là: 9 - 3 = 6.\nVậy số đó là 96 (vì 9 + 6 = 15 và 9 - 6 = 3).'
      },
      {
        id: 'de10_q13',
        section: 'Bài 3: Đặt tính & Hình học',
        topic: 'measurement_time',
        difficulty: 'hard',
        type: 'fill_blank',
        content: 'Một sợi dây thép dài 1 m. Người ta dùng sợi dây đó uốn thành một hình tam giác có ba cạnh bằng nhau. Hỏi mỗi cạnh của tam giác dài bao nhiêu xăng-ti-mét và còn thừa bao nhiêu xăng-ti-mét? Nhập độ dài mỗi cạnh của tam giác: ........ cm.',
        correctAnswer: '33',
        hint: '1 m = 100 cm. 100 : 3 = 33 (dư 1 cm). Mỗi cạnh dài 33 cm.',
        explanation: 'Đổi 1 m = 100 cm.\n100 : 3 = 33 (dư 1).\nVậy mỗi cạnh tam giác dài 33 cm (thừa 1 cm).'
      },
      {
        id: 'de10_q14',
        section: 'Bài 3: Đặt tính & Hình học',
        topic: 'addition_subtraction',
        difficulty: 'hard',
        type: 'fill_blank',
        content: 'Tính giá trị của biểu thức: 100 - 90 + 80 - 70 + 60 - 50 + 40 - 30 + 20 - 10 = ........',
        correctAnswer: '50',
        hint: 'Mỗi cặp trừ bằng 10: (100 - 90) + (80 - 70) + (60 - 50) + (40 - 30) + (20 - 10) = 10 x 5 = 50.',
        explanation: 'Nhóm từng cặp:\n(100 - 90) + (80 - 70) + (60 - 50) + (40 - 30) + (20 - 10) = 10 + 10 + 10 + 10 + 10 = 50.'
      },
      {
        id: 'de10_q15',
        section: 'Bài 3: Đặt tính & Hình học',
        topic: 'digit_riddles',
        difficulty: 'hard',
        type: 'multiple_choice',
        content: 'Cho 4 chữ số: 0, 2, 5, 8. Có thể lập được bao nhiêu số có hai chữ số khác nhau từ 4 chữ số trên?',
        options: ['12 số', '9 số', '8 số', '6 số'],
        correctAnswer: '9 số',
        hint: 'Hàng chục có 3 cách chọn (2, 5, 8). Với mỗi cách chọn hàng chục, hàng đơn vị có 3 cách chọn còn lại. 3 x 3 = 9 số.',
        explanation: 'Chữ số hàng chục có 3 cách chọn (2, 5, 8; không chọn 0).\nVới mỗi cách chọn hàng chục, chữ số hàng đơn vị có 3 cách chọn trong 3 chữ số còn lại.\nSố các số lập được là: 3 x 3 = 9 (số).\nCác số đó là: 20, 25, 28, 50, 52, 58, 80, 82, 85.'
      }
    ]
  }
]
