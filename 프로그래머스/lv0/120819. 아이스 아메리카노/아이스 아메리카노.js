function solution(money) {
    let coffeePrice = 5500
    let coffeeNum = Math.floor( money / coffeePrice )
    let changes = money % coffeePrice
    const answer = [ coffeeNum, changes ]
    return answer
}