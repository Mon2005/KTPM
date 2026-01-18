# Báo cáo môn kiểm thử phần mềm 
## Thông tin sinh viên 
- **Họ và tên** : Nguyễn Đức Anh
- **Mã sinh viên** : BIT230027
- **Lớp** : 23IT-GM
- **Môn học** : Kiểm thử phần mềm
- **Giảng viên** : Phạm Tuấn Anh

---
# Bài tập tuần 1 (05/01/2026 - 11/01/2026): Can't Unsee (trang web trò chơi luyện lỗi UI/UX)
### Mô tả Bài tập

**Can't Unsee** (trò chơi luyện nhận diện lỗi) là một trò chơi nhỏ giúp rèn luyện khả năng phát hiện các lỗi trong thiết kế **UI/UX (giao diện người dùng/trải nghiệm người dùng)**.
Bài tập yêu cầu quan sát và nhận diện các vấn đề liên quan đến:

- Căn chỉnh giao diện
- Khoảng cách giữa các thành phần
- Tính nhất quán
- Khả năng đọc và trải nghiệm người dùng

🔗 Liên kết bài tập: https://cantunsee.space (trang web của trò chơi)

### Kết quả đạt được
- Điểm số : 8130
- Xếp hạng : Bậc thầy (Hoàn hảo!)
- Thời gian hoàn thành : 00:13:58

Kết quả cho thấy khả năng quan sát và nhận diện lỗi giao diện ở mức xuất sắc so với đa số người tham gia.

### Minh chứng hoàn thành
Ảnh chụp màn hình kết quả sau khi hoàn thành bài tập:

<img width="1013" height="870" alt="Screenshot 2026-01-08 095128" src="https://github.com/user-attachments/assets/5325a046-be43-46eb-8d49-23e65c1f1e0d" />

> **Minh chứng thể hiện rõ:**
>
> - Tên bài tập : *Can't Unsee*
> - Điểm số đạt được : **8130**
> - Xếp hạng : **Bậc thầy** (Hoàn hảo!)
> - Thời gian hoàn thành bài tập : **00:13:58**

### Nhận xét và đánh giá 

Thông qua bài tập này,em:
- Nâng cao khả năng phát hiện lỗi giao diện người dùng
- Hiểu rõ hơn vai trò của UI/UX trong kiểm thử phần mềm
- Rèn luyện tư duy chi tiết và khả năng đánh giá trải nghiệm người dùng

Bài tập có tính thực tiễn cao, hỗ trợ tốt cho việc học **Kiểm thử phần mềm**. 

### Cam kết 

Em xin cam kết rằng kết quả trên là do **chính em thực hiện**, không sao chép và không sử dụng bất kỳ hình thức gian lận nào.

**Sinh viên thực hiện**

Nguyễn Đức Anh 

---
# Bài tập tuần 2 (12/01/2026 - 18/01/2026): Kiểm thử với JUnit (khung kiểm thử Java)
### 1. Giới thiệu
Bài tập thực hành phân tích dữ liệu điểm số học sinh bằng ngôn ngữ Java, áp dụng kỹ thuật kiểm thử tự động với thư viện **JUnit 5**.

Chương trình bao gồm lớp `StudentAnalyzer` với 2 chức năng chính:
1.  **`countExcellentStudents(List<Double> scores)`**: Đếm số học sinh đạt loại Giỏi (>= 8.0).
2.  **`calculateValidAverage(List<Double> scores)`**: Tính điểm trung bình của các điểm hợp lệ (0..10).

### 1.1. Yêu cầu và ràng buộc chi tiết
- **Đầu vào**: Danh sách `List<Double>` (có thể chứa `null`, giá trị âm, hoặc > 10).
- **Quy tắc hợp lệ**: Chỉ chấp nhận điểm trong đoạn `[0, 10]`. Giá trị `null` hoặc ngoài khoảng này được coi là dữ liệu sai và bị bỏ qua.
- **Giá trị trả về**:
    * `countExcellentStudents`: Trả về số lượng điểm hợp lệ >= 8.0. Nếu danh sách `null` hoặc rỗng trả về `0`.
    * `calculateValidAverage`: Trả về trung bình cộng các điểm hợp lệ. Nếu không có điểm hợp lệ nào, trả về `0.0` (để tránh lỗi chia cho 0).
- **Yêu cầu kỹ thuật**: Sử dụng 2 vòng lặp độc lập để tách biệt logic đếm và tính toán.

### 1.2. Thuật toán tóm tắt
- **Bước chung**: Kiểm tra `null`/rỗng ngay đầu hàm và trả về giá trị mặc định.
- **Đếm học sinh Giỏi**: Duyệt từng phần tử, bỏ qua `null` hoặc giá trị ngoài `[0,10]`. Tăng biến đếm nếu giá trị >= 8.0.
- **Tính trung bình hợp lệ**: Duyệt lần hai, cộng dồn các giá trị hợp lệ vào `sum` và tăng biến đếm `validCount`.
    * Nếu `validCount == 0` $\rightarrow$ trả về `0.0`.
    * Ngược lại $\rightarrow$ trả về `sum / validCount`.

### 1.3. Lý do chọn hướng xử lý này
- **Tách biệt logic**: Việc tách hai vòng lặp giúp mã nguồn rõ ràng, dễ bảo trì và mở rộng theo đúng yêu cầu bài toán.
- **An toàn**: Trả về `0` hoặc `0.0` khi dữ liệu không hợp lệ giúp tránh ngoại lệ `ArithmeticException` (lỗi chia cho 0) và phản ánh đúng ngữ nghĩa "không có kết quả".

### 2. Mục tiêu học tập
- ✅ Biết cách viết kiểm thử tự động bằng **JUnit 5**.
- ✅ Hiểu tư duy kiểm tra tính hợp lệ của dữ liệu (Validation) và xử lý các trường hợp biên (Boundary).
- ✅ Thực hành khai thác AI tạo sinh để hỗ trợ lập trình (gợi ý test case, rà soát logic).

### 3. Cấu trúc thư mục

```text
KTPM/
├── unit-test/
│   ├── src/
│   │   └── StudentAnalyzer.java      # Mã nguồn chính
│   └── test/
│       └── StudentAnalyzerTest.java  # Mã nguồn kiểm thử
└── README.md                         # Tài liệu báo cáo (File này)

### 4. Mô tả chức năng chi tiết
* **Điều kiện chung**: Mọi giá trị nằm ngoài đoạn `[0, 10]` hoặc là `null` đều bị bỏ qua (skip).
* **Xử lý rỗng**: Nếu danh sách đầu vào là rỗng hoặc `null`:
    * Hàm đếm trả về `0`.
    * Hàm tính trung bình trả về `0.0`.
* **Vòng lặp 1 (Hàm đếm)**: Duyệt danh sách để đếm số điểm >= 8.0 sau khi đã lọc dữ liệu rác.
* **Vòng lặp 2 (Hàm trung bình)**: Duyệt danh sách để tính tổng và đếm số lượng phần tử hợp lệ, sau đó thực hiện phép chia.

### 5. Kiểm thử đơn vị (JUnit 5 - khung kiểm thử Java)
Các nhóm tình huống đã kiểm thử trong `StudentAnalyzerTest`:

1.  **Trường hợp bình thường**: Danh sách có cả hợp lệ và không hợp lệ.
2.  **Trường hợp biên**: Danh sách trống; danh sách toàn 0; danh sách toàn 10.
3.  **Trường hợp ngoại lệ dữ liệu**: Có điểm <0, >10, hoặc null.
4.  **Độ chính xác**: Số thực so sánh với sai số `±0.01`.

### 5.1. Bảng ca kiểm thử chính

| Tên Test Case | Dữ liệu đầu vào (Input) | Kết quả kỳ vọng (Expected) | Ghi chú |
| :--- | :--- | :--- | :--- |
| **countExcellentStudents** | | | |
| Trộn điểm hợp lệ và không hợp lệ | `[9.0, 8.5, 7.0, 11.0, -1.0]` | `2` | Chỉ lấy 9.0 và 8.5 |
| Rỗng | `[]` | `0` | |
| Toàn 0 | `[0, 0, 0]` | `0` | |
| Toàn 10 | `[10, 10, 10]` | `3` | |
| Toàn dữ liệu sai | `[-5, 11, 12.5]` | `0` | |
| **calculateValidAverage** | | | |
| Trộn điểm hợp lệ và không hợp lệ | `[9.0, 8.5, 7.0, 11.0, -1.0]` | `8.17` | Sai số cho phép 0.01 |
| Rỗng | `[]` | `0.0` | |
| Toàn 0 | `[0, 0, 0]` | `0.0` | |
| Toàn 10 | `[10, 10, 10]` | `10.0` | |
| Toàn dữ liệu sai hoặc null | `[-3.0, 15.0, null]` | `0.0` | Tránh chia cho 0 |

### 6. Cách chạy kiểm thử

### 6.1. Chuẩn bị môi trường
* **Yêu cầu**: JDK 24+ (bộ phát triển Java, có sẵn `javac`, `java`).
* **Tải JUnit Platform Console Standalone** (gói chạy JUnit độc lập, ví dụ 6.0.2): [Link tải tại Maven Repository](https://repo1.maven.org/maven2/org/junit/platform/junit-platform-console-standalone/6.0.2/).
* **Đặt đường dẫn jar vào biến môi trường tạm `JUNIT_JAR`**:

Ví dụ trên Windows (PowerShell - terminal của VS Code/Windows):
```powershell
$env:JUNIT_JAR="D:\junit-platform-console-standalone-6.0.2.jar"

Ví dụ trên CMD (Command Prompt):
```cmd
set JUNIT_JAR=D:\junit-platform-console-standalone-6.0.2.jar

### 6.2. Biên dịch
Tại thư mục gốc của kho mã nguồn (chứa thư mục `unit-test/`), tạo thư mục đầu ra nếu chưa có:
```bash
mkdir unit-test/out

Biên dịch mã nguồn và tệp kiểm thử:

Ví dụ trên Windows (PowerShell - terminal của VS Code/Windows):
```powershell
javac -cp "$env:JUNIT_JAR" -d unit-test\out unit-test\src\StudentAnalyzer.java unit-test\test\StudentAnalyzerTest.java

Ví dụ trên CMD (Command Prompt):
```cmd
javac -cp "%JUNIT_JAR%" -d unit-test/out unit-test/src/StudentAnalyzer.java unit-test/test/StudentAnalyzerTest.java

### 6.3. Chạy kiểm thử 
Chạy bảng điều khiển JUnit để quét classpath (đường dẫn chứa class) và thực thi kiểm thử:

Ví dụ trên Windows (PowerShell - terminal của VS Code/Windows):
```powershell
java -jar "$env:JUNIT_JAR" -cp unit-test\out --scan-class-path

Ví dụ trên CMD (Command Prompt):
```cmd
java -jar "%JUNIT_JAR%" -cp unit-test/out --scan-class-path

### 6.4. Tuỳ chọn: chạy khi đang ở thư mục unit-test
Nếu bạn ```markdown
`cd unit-test` trước, có thể dùng lệnh ngắn gọn:

Ví dụ trên Windows (PowerShell - terminal của VS Code/Windows):
```powershell
javac -cp "$env:JUNIT_JAR" -d out src\StudentAnalyzer.java test\StudentAnalyzerTest.java
java -jar "$env:JUNIT_JAR" -cp out --scan-class-path

Ví dụ trên CMD (Command Prompt):
```cmd
javac -cp "%JUNIT_JAR%" -d out src/StudentAnalyzer.java test/StudentAnalyzerTest.java
java -jar "%JUNIT_JAR%" -cp out --scan-class-path

### 6.5. Kỳ vọng khi chạy
- Toàn bộ kiểm thử trong StudentAnalyzerTest hiển thị trạng thái PASSED (thành công theo thông báo của JUnit).
- Không có lỗi ClassNotFound (không tìm thấy lớp); nếu có, kiểm tra biến JUNIT_JAR và đường dẫn out.

### 6.6. Kết quả 
```arduino
Thanks for using JUnit! Support its development at https://junit.org/sponsoring

.
+-- JUnit Platform Suite [OK]
+-- JUnit Jupiter [OK]
| '-- StudentAnalyzerTest [OK]
|   +-- testCalculateValidAverage_withMixedValidAndInvalid() [OK]
|   +-- testCalculateValidAverage_emptyList() [OK]
|   +-- testCountExcellentStudents_allInvalid() [OK]
|   +-- testCountExcellentStudents_boundaryValues() [OK]
|   +-- testCountExcellentStudents_withMixedValidAndInvalid() [OK]
|   +-- testCountExcellentStudents_emptyList() [OK]
|   +-- testCalculateValidAverage_allInvalid() [OK]
|   '-- testCalculateValidAverage_boundaryValues() [OK]
'-- JUnit Vintage [OK]

Test run finished after 214 ms
[         4 containers found      ]
[         0 containers skipped    ]
[         4 containers started    ]
[         0 containers aborted    ]
[         4 containers successful ]
[         0 containers failed     ]
[         8 tests found           ]
[         0 tests skipped         ]
[         8 tests started         ]
[         0 tests aborted         ]
[         8 tests successful      ]
[         0 tests failed          ]