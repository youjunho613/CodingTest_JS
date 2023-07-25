function solution(slice, n) {
    let answer = 0;
    let i = 0
    do {
        i += slice
        answer++
    } while (i / n < 1)
    return answer;
}