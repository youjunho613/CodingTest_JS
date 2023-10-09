function solution(s){
    let answer = 0
    for(let i = 0; i < s.length; i++) {
        if(answer === -1) return false
        if(s.at(i) === "(") {
            answer += 1
        } else {
            answer -= 1
        }
    }
    return answer === 0;
}