function solution(num_list) {
  for (let i = 0; i < num_list.length; i++) {
    const minus = num_list[i];
    if (minus < 0) {
      return num_list.indexOf(minus);
    }
  }
  return -1;
}