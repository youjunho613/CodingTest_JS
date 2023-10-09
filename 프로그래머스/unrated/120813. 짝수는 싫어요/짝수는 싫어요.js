function solution(n) {
    let answer = [];
    console.log(n)
    for(let i = n; i !== 0; i--) {
        if(i % 2 !== 0) {
            answer.unshift(i)
        }
    }
    return answer;
}