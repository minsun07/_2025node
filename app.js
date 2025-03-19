const express = require('express');
const app = express();

// json 형태의 데이터를 받으면 처리하겠다는 의미
app.use(express.json());

// 라우팅 설정
app.get('/swag', (req, res) => {
  res.status(200).send('Get swag');
});

app.post('/swag', (req, res) => {
  res.status(200).send('Post swag');
});

app.get('/swag/:person', (req, res) => {
  const persons = req.params.person;
  res.status(200).send(persons);
});


app.listen(3000, () => {
  console.log('서버가 http://localhost:3000 에서 실행 중입니다.')
});  