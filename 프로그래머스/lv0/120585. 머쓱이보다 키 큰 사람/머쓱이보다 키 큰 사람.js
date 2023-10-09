function solution(array, height) {
    const thanHeight = array.filter((h) => h > height)
    return thanHeight.length;
}