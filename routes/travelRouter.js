const express = require('express');
const travelController = require("../controllers/travelController");

const router = express.Router();

// 게시글의 목록을 보여주는 코드
router.get('/', travelController.getTravelList);

// 게시글 추가 페이지로 이동
router.get('/add', travelController.getAddTravelForm);

// 게시글을 추가
router.post('/', travelController.addTravel);

// 해당 게시글 내용 읽기
router.get('/:id', travelController.getTravelDetail);

// 게시글 수정하는 페이지로 이동
router.get('/:id/edit', travelController.getEditTravelForm);

// 게시글 수정
router.put('/:id', travelController.updateTravel);

// 게시글 삭제
router.delete('/:id', travelController.deleteTravel);

module.exports = router;