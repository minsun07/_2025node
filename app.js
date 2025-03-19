const express = require('express');
const app = express();

// json 형태의 데이터를 받으면 처리하겠다는 의미
app.use(express.json());

// 라우팅 설정
app.post('/swag', (req, res) => {
  // 클라이언트에게 응답 내용 전송
  res.send(req.body);
});


app.listen(3000, () => {
  console.log('서버가 http://localhost:3000 에서 실행 중입니다.')
});  