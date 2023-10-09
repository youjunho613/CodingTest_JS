function solution(my_string) {
    let answer = 0;
    for(let i = 0; i < my_string.length; i++) {
        const str = my_string.at(i)
        if(str < 10) {
            answer += Number(str)
        }
    }
    return answer;
}