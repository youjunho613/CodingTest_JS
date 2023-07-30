function solution(t, p) {
  let answer = 0;
  let arr = [];

  for (let i = 0; i < t.length - p.length + 1; i++)
    arr.push(t.slice(i, i + p.length));

  answer = arr.filter(currentString => currentString <= p).length;
  return answer;
}