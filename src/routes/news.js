const express = require('express');
const router = express.Router();

const newsController = require('../app/controllers/NewsController');
// chú ý tuyến đường sẽ đọc từ trên xuống nếu như mặc định ưu tiên để đầu thì nó sẽ k đọc tiếp những route sau nữa
router.use('/:slug', newsController.show);
router.use('/', newsController.index);

module.exports = router;