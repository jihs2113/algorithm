//최대공약수 최소공배수 구하기
//두 수를 입력받아 두 수의 최대공약수와 최소공배수를 return하는 함수를 구현

function gcdlcm(a, b) {
  var gcd = calc_gcd(a, b);
  var lcm = (a * b) / gcd;

  return [gcd, lcm];
}

function calc_gcd(a, b) {
  if (b == 0) return a;
  return a > b ? calc_gcd(b, a % b) : calc_gcd(a, b % a);
}

console.log(gcdlcm(3, 12));
//최대공약수 최소공배수
