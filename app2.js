// get
const express = require('express');
const path= require('path');
const methodOverride = require('method-override');


const app = express();

app.use(methodOverride('_method'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set('view engine', 'ejs');
// __dirname : 현재 디렉토리의 절대경로
// path.join : 경로지정자(\ ro /)를 운영체제에 맞추어 줌
app.set('views', path.join(__dirname, 'views'));




const travelRouter = require('./routes/travelRouter');

app.use('/travel', travelRouter);


// use(전체 method에 대해) + 모든 경로
// 위의 엔드포인트에 해당하지 않으면 유효하지 않는 페이지로 간주 
app.use((req, res) => {
  res.status(404).send('404 not found')
})
app.listen(3001, () => {
  console.log('서버가 http://localhost:3001 에서 실행 중입니다.')
});  

