import java.util.List;

public class StudentAnalyzer {

     /**
     * Phân tích điểm số và trả về số lượng học sinh đạt loại Giỏi (>= 8.0)
     * - Bỏ qua điểm < 0 hoặc > 10
     * - Nếu danh sách rỗng hoặc null, trả về 0
     */

    public int countExcellentStudents(List<Double> scores) {
        if (scores == null || scores.isEmpty()) {
            return 0;
        }
        int count = 0;
        for (Double score : scores) {// Vòng lặp 1
            if (score < 0 || score > 10) {
                continue; // Bỏ qua điểm không hợp lệ
            }
            if (score >= 8.0) {
                count++;
            }
        }
        return count;
    }
    
}