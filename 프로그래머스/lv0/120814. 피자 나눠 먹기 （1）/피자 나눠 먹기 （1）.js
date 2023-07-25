function solution(n) {
    let pizzaSlice = 7
    const answer = Math.ceil( n / pizzaSlice )
    return answer;
}