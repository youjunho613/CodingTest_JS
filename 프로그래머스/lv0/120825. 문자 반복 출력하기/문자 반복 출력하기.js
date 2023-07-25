function solution(my_string, n) {
    var answer = '';
    let arr = Array.from(my_string)
    for (let i = 0; i<arr.length; i++) {
    answer += String(arr[i]).repeat(n)
    }
    return answer;
}