function solution(M, N) {
    var answer = 0;
    // ((가로 - 1) + (세로 - 1) * (가로 - 1))
    var a = M - 1
    var b = (N - 1) * M
    var answer = a + b
    return answer;
}