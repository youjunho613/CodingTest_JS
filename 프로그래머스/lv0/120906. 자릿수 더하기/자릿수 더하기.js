function solution(n) {
    let answer = 0;
    let arr = Array.from(String(n))
    for (let i = 0; i < arr.length; i++) {
        answer += Number(arr[i])
    }
    return answer;
}