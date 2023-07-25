function solution(numbers) {
    let answer = numbers.reduce((accumulate,number) => accumulate + number)
    let numLength = numbers.length
    return answer / numLength;
}