function solution(n, k) {
    let foodPrice = 12000
    let drinkPrice = 2000
    const serviceDrink = parseInt(n/10)
    const answer = (n * foodPrice) + (k * drinkPrice) - ( serviceDrink * 2000 )
    return answer;

}