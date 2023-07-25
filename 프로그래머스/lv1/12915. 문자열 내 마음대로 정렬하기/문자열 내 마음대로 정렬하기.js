function solution(strings, n) {
    var answer = [];
    for (let i = 0; i < strings.length; i++) strings[i] = strings[i][n] + strings[i]
    strings.sort()
    for(let l = 0; l < strings.length; l ++) {
        strings[l] = strings[l].replace(strings[l][0],"")
        answer.push(strings[l])
    }
    return answer
}