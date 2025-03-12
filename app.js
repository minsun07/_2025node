// http 모듈을 가져옵니다
const http = require('http');

// 서버를 만듭니다
const server = http.createServer((req, res) => {
  // 응답 헤더를 설정합니다
  res.writeHead(200, {'Content-Type': 'text/plain'});
    // 상태코드
    // 200 : 성공
    // 404 : 서버는 요청 받은 리소스를 찾을 수 없다는 의미.

  // 클라이언트에게 보낼 응답 메시지를 작성합니다
  res.end('Hello, World!\n');
});

// 서버를 3000번 포트에서 실행합니다
server.listen(3000, '127.0.0.1', () => {
  console.log('서버가 http://127.0.0.1:3000 에서 실행 중입니다.');
});

//callback함수 : 다른 함수가 실행을 끝낸 뒤 실행되는 callback되는 함수 를 말한다
// http 모듈 대신 express를 사용하여 서버를 더 간단하게 만들었습니다.