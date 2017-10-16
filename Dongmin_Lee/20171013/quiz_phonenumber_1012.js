// 6. 핸드폰번호 가리기

// 핸드폰 요금 고지서에 표시할 전화번호는 개인정보 보호를 위해 맨 뒷자리 4 자리를 제외한 나머지를 ''
// 으로 바꿔야 한다.전화번호를 나타내는 문자열 str을 입력받는 hideNumbers 함수를 완성하라
// 예를들어 s가 '01033334444'
// 면 '**4444'
// 를 리턴하고, '027778888'
// 인 경우는 '*****8888'
// 을 리턴한다.

function hideNumbers(str) {
  //   var a = str.split('');
  //   var i = a.splice(0, a.length - 4, '*');
  //   return a.join('');
  var star = '';
  var len = str.length;
  for (var i = 0; i < len - 4; i++) {
    star += '*';
  }
  return star + str.substring(len - 4);

}

console.log(hideNumbers('01033334444')); // *******4444
console.log(hideNumbers('027778888')); // *****8888