function solution(sizes) {
    let bigArr = [];
    let smallArr = [];
    
    sizes.forEach((wallet) => {
        bigArr.push(Math.max(...wallet));
        smallArr.push(Math.min(...wallet));
    })
        
    return Math.max(...bigArr) * Math.max(...smallArr);
}