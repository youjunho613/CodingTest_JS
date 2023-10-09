function solution(price) {
    const calc = (percent) => Math.floor(price - (price * percent))
    
    if (price >= 500000) return calc(0.2)
    if (price >= 300000) return calc(0.1)
    if (price >= 100000) return calc(0.05)
    else return price;
}