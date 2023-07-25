function solution(my_string) {
    const vowels = /[aeiou]/g
    const answer = my_string.replace(vowels,"")
    return answer
}