const express = require('express');
const app = express();

// 라우팅 설정
app.post('/swag', (req, res) => {
  // 클라이언트에게 응답 내용 전송
  res.send('Hello, Node!');
});


app.listen(3000, () => {
  console.log('서버가 http://localhost:3000 에서 실행 중입니다.')
});