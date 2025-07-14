//export는 모듈에서 다른 파일로 함수를 내보내는 역할을 합니다.
//덧셈 결과 리턴하는 함수
export function add(a, b) {
  return a + b;
}
//뺄셈 결과 리턴하는 함수
const subtract = (a, b) => a - b;

export { subtract };