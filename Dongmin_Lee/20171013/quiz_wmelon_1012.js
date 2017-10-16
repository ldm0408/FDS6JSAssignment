// #8. 수박수박수박수박수박수?

// waterMelon 함수는 정수 n을 매개변수로 입력받는다. 
// 길이가 n이고, 수박수박수…와 같은 패턴을 유지하는 문자열을 리턴하도록 함수를 완성하라.

// 예를들어 n이 4이면 '수박수박'을 리턴하고 3이라면 '수박수'를 리턴한다.

function waterMelon(n) {
  var soo = '수';
  var bak = '박';
  var soobak = '';
  for (var i = 1; i <= n; i++) {
    // if (i % 2 !== 0) soobak += soo;
    // if (i % 2 === 0) soobak += bak;
    i % 2 !== 0 ? soobak += soo : soobak += bak;
  }
  return soobak;
}


console.log('n이 3인 경우: ' + waterMelon(3));
console.log('n이 4인 경우: ' + waterMelon(4));