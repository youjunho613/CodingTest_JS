  function solution(quiz) {
    let answer = [];

    quiz.map(item => {
      let ans = 0;
      const arr = item.split(" ");

      arr[1] === "+"
        ? (ans = Number(arr[0]) + Number(arr[2]))
        : (ans = Number(arr[0]) - Number(arr[2]));

      ans === Number(arr[4]) ? answer.push("O") : answer.push("X");
    });

    return answer;
  }