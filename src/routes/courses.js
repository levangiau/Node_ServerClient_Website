const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');
// chú ý tuyến đường sẽ đọc từ trên xuống nếu như mặc định ưu tiên để đầu thì nó sẽ k đọc tiếp những route sau nữa
router.post('/store', courseController.store);
router.get('/create', courseController.create);
router.get('/:slug', courseController.show);


module.exports = router;
