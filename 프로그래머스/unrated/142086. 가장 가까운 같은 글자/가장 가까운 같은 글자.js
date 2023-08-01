function solution(s) {
  let answer = [];
  let arr = [];
  for (let i = 0; i < s.length; i++) {
    const findIndex = s.indexOf(s[i]);
    if (findIndex === i) {
      answer.push(-1);
      arr.push(s[i]);
    } else {
      arr.push(s[i]);
      answer.push(arr.lastIndexOf(s[i], i) - arr.indexOf(s[i]));
    }
  }
  return answer;
}