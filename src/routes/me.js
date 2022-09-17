const express = require('express');
const router = express.Router();

const meController = require('../app/controllers/MeController');
// chú ý tuyến đường sẽ đọc từ trên xuống nếu như mặc định ưu tiên để đầu thì nó sẽ k đọc tiếp những route sau nữa
router.get('/stored/courses', meController.storeCourses);



module.exports = router;
