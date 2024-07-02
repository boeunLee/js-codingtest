function solution(s, e) {
  let queue = [];
  let cnt = 0;
  let level = 1;
  let flag = 0;
  queue.push(s);
  while (true) {
    let n = queue.shift();
    for (v of [n - 1, n + 1, n + 5]) {
      if (v === e) {
        flag = 1;
        break;
      } else {
        queue.push(v);
        cnt++;
      }
    }
    // 한 레벨을 다 돌았으면
    if (cnt === 3 ** level) {
      cnt = 0;
      // 레벨 증가
      level++;
    }
    if (flag === 1) break;
  }
  return level;
}

console.log(solution(5, 14)); //3
console.log(solution(8, 3)); //5