function solution(n, arr1, arr2) {
  var answer = [];

  for (let i = 0; i < n; i++) {
    const binary = (arr1[i] | arr2[i]).toString(2);
    let hash = "";
    for (let j = binary.length - n; j < binary.length; j++) {
      if (binary[j] === "1") hash += "#";
      else hash += " ";
    }
    answer.push(hash);
  }
  return answer;
}