function solution(array, n) {
    let answer = array.filter(a => a === n).length
    return answer;
}