# VIOLYMPIC TOÁN LỚP 2 - ĐẤU TRƯỜNG TRÍ TUỆ NHÍ 🌟

Hệ thống website tương tác trực tuyến luyện thi **Violympic Toán lớp 2** theo chuẩn chương trình Giáo dục phổ thông Việt Nam (GDPT).

Dự án được xây dựng dựa trên cấu trúc các vòng thi thực tế từ tài liệu đề thi Violympic chính thức (trọn bộ từ Vòng 1 đến Vòng 18).

---

## 🚀 Điểm Nổi Bật

1. **Giao diện thân thiện trẻ em (7–8 tuổi)**:
   - Màu sắc tươi sáng, font chữ lớn, nút bấm to bo tròn dễ thao tác bằng chuột hoặc màn hình cảm ứng.
   - Nhân vật hoạt hình đồng hành vui nhộn: *Ong Vàng Thông Thái*, *Cóc Vàng Tài Ba*, *Khỉ Con Nhanh Trí*.
   - Hiệu ứng pháo hoa chúc mừng (confetti), sao thưởng và âm thanh tương tác sinh động bằng Web Audio API (chạy 100% offline, không cần tải tệp mp3 ngoài, có nút bật/tắt âm lượng tiện lợi).

2. **Cấu trúc 3 bài thi chuẩn Violympic**:
   - **Bài 1 - Điền số vào bảng theo thứ tự tăng dần**: Bảng lưới 16 đến 20 ô chứa số hoặc biểu thức (`98`, `76 - 32`, `29 + 13`...). Học sinh có thể **gõ số thứ tự** hoặc **nhấn chuột liên tiếp** vào từng ô để điền thứ tự tăng dần cực kỳ nhanh chóng và trực quan.
   - **Bài 2 - Cặp đôi hoàn hảo / Điền kết quả / Cóc vàng tài ba**: Hỗ trợ đầy đủ các dạng bài tìm cặp bằng nhau, trắc nghiệm 4 đáp án (A, B, C, D) và điền số vào chỗ trống.
   - **Bài 3 - Đặt tính hàng dọc & Toán tư duy**: Mô phỏng vở ô ly tiểu học với phép tính cộng/trừ hàng dọc có các ô vuông điền chữ số bí ẩn, quy luật dãy số, bài toán thực tế (can dầu, bao gạo, số viên bi, tuổi tác, ngày tháng...).

3. **Chấm điểm thông minh & Lời giải sư phạm**:
   - Bộ xử lý toán học tự động chuẩn hóa đáp án (chấp nhận cả số, đơn vị đo kèm theo, chữ số viết hoa/thường, không so sánh chuỗi máy móc).
   - Chấm điểm chi tiết từng ô của bảng số tăng dần và từng ô đặt tính hàng dọc.
   - Lời giải từng bước chi tiết, ngôn từ đơn giản, giải thích rõ ràng dành riêng cho học sinh lớp 2.
   - **Nút "Làm lại câu này"**: Cho phép bé thử sức ngay tại chỗ câu vừa làm sai để nhận thưởng sao.
   - **Nút "Luyện câu tương tự"**: Tự động sinh một câu hỏi cùng dạng với số liệu mới để bé rèn luyện.

4. **Ngân hàng câu hỏi & Bộ sinh đề tự động**:
   - **160 câu hỏi mẫu ban đầu** được trích xuất trực tiếp từ các vòng thi PDF chuẩn.
   - **Bộ sinh đề vô tận (Dynamic Question Generator)**: Tự động sinh ngẫu nhiên các đề thi đảm bảo tính logic toán học, số liệu không mâu thuẫn, phạm vi kiến thức chuẩn lớp 2.

5. **Lưu trữ tiến độ & Góc phụ huynh**:
   - Tự động lưu bài đang làm vào `localStorage`, không lo mất bài khi bé vô tình tải lại trang.
   - Bảng phân tích mức độ thuần thục theo từng chủ đề: phát hiện nhanh phần kiến thức còn yếu.
   - Nút 1-chạm: **"Tạo ngay đề ôn tập cho chủ đề này"** giúp phụ huynh bồi dưỡng đúng trọng tâm cho con.
   - In / Lưu báo cáo kết quả học tập trực tiếp.

---

## 📁 Cấu Trúc Thư Mục

```
violympic-toan-lop-2/
├── index.html                   # Trang chủ HTML chứa phông chữ Nunito & Quicksand
├── package.json                 # Cấu hình dự án Vue 3, Vite, Tailwind CSS
├── vite.config.js               # Cấu hình Vite & Tailwind v4
├── chay_website.bat             # File kích hoạt 1-click trên máy tính Windows
├── test/
│   └── mathTest.js              # Bộ kiểm thử tự động 87 bài test chuẩn xác
├── src/
│   ├── main.js                  # Entry point
│   ├── style.css                # CSS giao diện trẻ em, hiệu ứng động
│   ├── App.vue                  # Layout ứng dụng & điều hướng view
│   ├── data/
│   │   └── questionsData.js     # Ngân hàng 160 câu hỏi chuẩn từ 18 vòng thi PDF
│   ├── store/
│   │   └── examStore.js         # Quản lý trạng thái thi, lưu trữ LocalStorage, lịch sử
│   ├── utils/
│   │   ├── mathEvaluator.js     # Bộ chuẩn hóa và chấm điểm toán học
│   │   ├── questionGenerator.js # Bộ sinh câu hỏi tự động ngẫu nhiên
│   │   ├── soundEffects.js      # Bộ tổng hợp âm thanh Web Audio API offline
│   │   └── confetti.js          # Hiệu ứng pháo hoa chúc mừng
│   ├── components/
│   │   ├── AppHeader.vue        # Thanh điều hướng, chọn ảnh đại diện bé, nút âm thanh
│   │   ├── MascotGuide.vue      # Nhân vật hoạt hình hướng dẫn bé
│   │   ├── QuestionPalette.vue  # Lưới danh sách câu hỏi trực quan
│   │   ├── ConfirmSubmitModal.vue # Hộp thoại xác nhận trước khi nộp bài
│   │   ├── RetryQuestionModal.vue # Hộp thoại làm lại nhanh từng câu sai
│   │   └── questions/
│   │       ├── MatrixOrderQuestion.vue    # Bài 1: Bảng số tăng dần
│   │       ├── MatchPairsQuestion.vue     # Bài 2: Cặp bằng nhau
│   │       ├── VerticalMathQuestion.vue   # Bài 3: Đặt tính hàng dọc ô vuông
│   │       ├── FillBlankQuestion.vue      # Điền vào chỗ trống & bàn phím số
│   │       └── MultipleChoiceQuestion.vue # Cóc vàng tài ba trắc nghiệm
│   └── views/
│       ├── HomeView.vue         # Trang chủ & các chế độ thi
│       ├── RoundsView.vue       # Danh sách 18 vòng thi Violympic chuẩn
│       ├── TopicPracticeView.vue # Luyện tập theo chủ đề & cấu hình đề
│       ├── ExamView.vue         # Màn hình làm bài trực tiếp & đồng hồ bấm giờ
│       ├── ResultView.vue       # Bảng điểm, phân tích lời giải, sao thưởng
│       └── ParentDashboard.vue  # Góc phụ huynh, thống kê tiến độ & chủ đề yếu
```

---

## 💻 Hướng Dẫn Cài Đặt Và Chạy Trên Windows

### Cách 1: Chạy nhanh bằng 1-Click (Khuyên dùng trên Windows)
1. Mở thư mục `C:\Users\Administrator\.gemini\antigravity\scratch\violympic-toan-lop-2`.
2. Nhấp đúp chuột vào tệp **`chay_website.bat`**.
3. Trình duyệt web sẽ tự động mở trang web tại địa chỉ: `http://localhost:5173`.

### Cách 2: Chạy qua PowerShell / Command Prompt
1. Mở PowerShell hoặc Terminal tại thư mục dự án:
   ```powershell
   cd C:\Users\Administrator\.gemini\antigravity\scratch\violympic-toan-lop-2
   ```
2. Cài đặt các gói phụ thuộc (nếu chưa cài):
   ```powershell
   npm install
   ```
3. Khởi động máy chủ phát triển:
   ```powershell
   npm run dev
   ```
4. Mở trình duyệt và truy cập: `http://localhost:5173`.

---

## 🧪 Chạy Kiểm Thử Tự Động (Automated Tests)

Để kiểm tra độ chuẩn xác của bộ giải toán, bộ chấm điểm và bộ sinh câu hỏi:
```powershell
npm test
```
*Kết quả: 87/87 kịch bản kiểm thử toán học tự động đều đạt 100% thành công.*

---

## 🏆 Đóng Gói Bản Chạy Độc Lập (Build Production)

Để đóng gói thành các tệp HTML/CSS/JS tĩnh có thể tải lên hosting hoặc chạy offline:
```powershell
npm run build
```
Toàn bộ mã nguồn đã tối ưu sẽ nằm trong thư mục `dist/`.
