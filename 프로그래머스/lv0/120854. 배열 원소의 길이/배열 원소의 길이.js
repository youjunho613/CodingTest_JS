function solution(strlist) {
    let answer = [];
    let arrLength = 0
    for (let i = 0; i < strlist.length; i++) {
        arrLength = strlist[i].length
        answer.push(arrLength)
    }
    return answer;
}