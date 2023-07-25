function solution(rsp) {
  let answer = "";
  for (let i = 0; i < rsp.length; i++) {
    if (rsp[i] === "0") {
      answer = answer.concat("5")
    } else if (rsp[i] === "2") {
      answer = answer.concat("0")
    } else if (rsp[i] === "5") {
      answer = answer.concat("2")
    }
  }
  return answer;
}