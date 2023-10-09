function solution(array) {
    const centerIndex = Math.floor((array.length - 1) / 2)
    const sortArr = array.sort((a,b) => a - b)
    return sortArr[centerIndex];
}