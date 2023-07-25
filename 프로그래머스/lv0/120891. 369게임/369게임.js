function solution(order) {
const arr = [...String(order)]
const answer = arr.filter((e) => ["3","6","9"].includes(e))
return answer.length
}