function solution(n) {
    let answer = 0;
    let i = 0
    while (i < 1000000) {
        if (n % i === 1) {
            answer = i
            break;
        }
        i++
    }
    return answer;
}