function solution(sizes) {
    let bigArr = [];
    let smallArr = [];
    
//     for (let i = 0; i < sizes.length; i++) {
//         let current = sizes[i];
        
//         if (current[0] >= current[1]) {
//             bigArr.push(current[0])
//             smallArr.push(current[1])
//         }
        
//         if (current[1] >= current[0]) {
//             bigArr.push(current[1])
//             smallArr.push(current[0])
//         }
//     }
    
    sizes.map((wallet) => {
        if (wallet[0] >= wallet[1]) {
            bigArr.push(wallet[0]);
            smallArr.push(wallet[1])
        }
        
        if (wallet[1] >= wallet[0]) {
            bigArr.push(wallet[1]);
            smallArr.push(wallet[0])
        }
    })
        
    return Math.max(...bigArr) * Math.max(...smallArr);
}