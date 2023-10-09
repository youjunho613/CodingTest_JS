
function solution(operations) {
    let queue = []
    operations.forEach((order) => {
        const number = Number(order.slice(2))
        if (order.slice(0,1) === "D") {
            queue.sort((a,b) => a - b)
            number === 1 ? queue.pop() : queue.shift()
        } else {
            queue.push(number)
        }
    })
    if (queue.length === 0) return [0, 0]
    return [Math.max(...queue), Math.min(...queue)];
}