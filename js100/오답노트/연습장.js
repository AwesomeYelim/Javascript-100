const route = [];

function hanoi(num, start, end, temp){
  // 원판이 한개 일때는 바로 옮기면 됩니다.
  if (num === 1){
    route.push([start, end]);
    return NaN;
  }

  // 원반이 n-1개를 경유기둥으로 옮기고
  hanoi()
  // 가장 큰 원반은 목표기둥으로
  route.push()
  // 경유기둥과 시작기둥을 바꿉니다.
  hanoi()
}

hanoi(3, 'A', 'B', 'C');
console.log(route);
console.log(route.length);