// 2. 짝수와 홀수

// evenOrOdd 함수는 정수 num을 매개변수로 받는다.num은 1 이상의 정수이며, num이 음수인 경우는 없다.num이 짝수일 경우 'Even'
// 을 반환하고 홀수인 경우 'Odd'
// 를 반환하도록 evenOrOdd에 코드를 작성하라.

// 단, if문을 사용한 답과 3 항 연산자를 사용하는 답 두가지를 제시하여야 한다.

// if문

function evenOrOdd(num) {
  if (num % 2 === 0) {
    return 'Even';
  } else {
    return 'Odd';
  }
}

console.log(evenOrOdd(2)); // Even
console.log(evenOrOdd(3)); // Odd
console.log(evenOrOdd(1000)); // Even

// 3 항 연산자

function evenOrOdd(num) {
  return (num % 2 !== 0) ? "Odd" : "Even";

}

console.log(evenOrOdd(2)); // Even
console.log(evenOrOdd(3)); // Odd
console.log(evenOrOdd(1000)); // Even