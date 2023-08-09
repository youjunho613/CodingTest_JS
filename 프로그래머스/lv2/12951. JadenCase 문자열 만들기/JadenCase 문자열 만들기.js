function solution(s) {
    let wordArr = s.split(" ")
    let answerArr = wordArr.map( word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    let answer = answerArr.join(" ")
    return answer;
}