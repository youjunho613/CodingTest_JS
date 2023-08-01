function solution(food) {
  let answer = "";
  let arr = [];
  for (let i = 1; i < food.length; i++) {
    food[i] % 2 !== 0
      ? arr.push(String(i).repeat((food[i] - 1) / 2))
      : arr.push(String(i).repeat(food[i] / 2));
  }
  answer = arr.join("") + "0" + arr.reverse().join("");
  return answer;
}