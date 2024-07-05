function solution(n) {
  let answer = '';
  function DFS(L) {
    if (L <= 1) {
      answer += 1;
      return;
    } else {
      DFS(Math.floor(L / 2));
      answer += L % 2;
    }
  }
  DFS(n);
  return answer;
}

console.log(solution(11));
