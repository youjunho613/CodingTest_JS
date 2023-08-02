  function solution(a, b, n) {
    let answer = 0;

    while (n >= a) {
      if (n % a === 0) {
        answer += (n / a) * b;

        n = (n / a) * b;
      } else {
        answer += parseInt(n / a) * b;

        n = parseInt(n / a) * b + (n % a);
      }
    }
    return answer;
  }