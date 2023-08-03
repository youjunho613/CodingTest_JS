function solution(k, m, score) {
    let answer = 0;
    let sortScore = score.sort((a,b)=>b-a)
    
    let boxCount = Math.floor(sortScore.length / m)
    
    for (let i = m-1; i < m * boxCount; i += m) {
        answer += score[i] * m
    }
    return answer;
}