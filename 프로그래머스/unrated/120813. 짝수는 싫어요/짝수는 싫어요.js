function solution(n) {
    let answer = [];
    for(let i = n; i !== 0; i--) {
        if(i % 2 !== 0) {
            answer.unshift(i)
        }
    }
    return answer;
}