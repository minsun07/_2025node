const express = require('express');
const app = express();

// json 형태의 데이터를 받으면 처리하겠다는 의미
app.use(express.json());

// 라우팅 파일 불러오기
const swagRoutes = require('./routes/swag');

// 라우팅 설정
app.use('/swag', swagRoutes);

app.listen(3000, () => {
  console.log('서버가 http://localhost:3000 에서 실행 중입니다.')
});  