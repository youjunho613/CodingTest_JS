function solution(k, score) {
    let answer = [];
    let presentScore = []
    
    for (let i = 0 ; i < score.length; i++) {
        presentScore.push(score[i])
        presentScore.sort((a,b)=>b-a).splice(k)
        answer.push(Math.min(...presentScore))
    }
    return answer;
}