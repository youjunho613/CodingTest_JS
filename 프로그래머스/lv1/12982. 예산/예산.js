function solution(d, budget) {
  let answer = 0;
  let sortNum = d.sort((a, b) => a - b);
  // while (budget > 0) {
  //   answer++;
  //   budget -= sortNum[answer];
  // }

  for (let i = 0; i < d.length; i++) {
    if (sortNum[i] > budget) break;
    budget -= sortNum[i];
    answer++;
  }

  return answer;
}