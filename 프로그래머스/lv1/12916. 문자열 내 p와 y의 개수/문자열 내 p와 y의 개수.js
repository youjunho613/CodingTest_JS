function solution(s){
    let answer = 0;
    let a = s.toUpperCase()
    for (let i = 0; i < a.length; i++) {
        if (a[i]==="P") answer++
        if (a[i]==="Y") answer--
    }
    return answer === 0;
}