function 문자출력함수(문자){
    console.log('문자출력함수' + 문자);
}
문자출력함수('a');

// 화살표 함수 : 매개변수가 하나인 경우 소괄호()를 없앤다.
// 함수 body가 return문 하나이거나, 한 줄 일 때 중괄호{}를 없앤다.
문자출력익명함수 = 문자 => console.log('문자출력익명함수' + 문자);
문자출력익명함수('swag');