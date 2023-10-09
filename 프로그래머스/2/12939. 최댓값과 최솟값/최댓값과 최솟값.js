function solution(s) {
    let array = s
    .split(" ")
    .sort((a,b) => a - b);
    
    return `${array[0]} ${array.at(-1)}`;
}