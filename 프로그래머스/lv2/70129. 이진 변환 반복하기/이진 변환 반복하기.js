function solution(s) {
  let answer = [0, 0];

  while (s !== "1") {
    let newStr = 0;
    for (let i = 0; i < s.length; i++) s[i] === "0" ? answer[1]++ : newStr++
    answer[0]++;
    s = newStr.toString(2);
  }
  return answer;
}