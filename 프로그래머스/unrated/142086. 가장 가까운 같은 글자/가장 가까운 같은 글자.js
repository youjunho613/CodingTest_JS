function solution(s) {
    let answer = [];
    let staticWord = [];
    for (let i = 0; i < s.length; i++) {
        !staticWord.includes(s[i])
        ? answer.push(-1)
        : answer.push(staticWord.length - staticWord.lastIndexOf(s[i]));
        staticWord.push(s[i]);
    }
    return answer;
}