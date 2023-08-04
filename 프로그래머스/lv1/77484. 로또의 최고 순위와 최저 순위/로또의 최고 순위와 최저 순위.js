function solution(lottos, win_nums) {
    let answer = [];
    let max = 0
    let min = 0
    for (let i = 0; i < win_nums.length; i++) {
        let matchNum = win_nums.find(num => num === lottos[i])
        if (lottos[i] === 0) {
            max++
            continue;
        } else if (matchNum === lottos[i]) {
            max++
            min++
        }
    }
    answer = [max === 0 ? 6 : 7 - max, min === 0 ? 6 : 7 - min]
    return answer;
}