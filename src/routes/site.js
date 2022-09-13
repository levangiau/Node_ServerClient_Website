const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');
// chú ý tuyến đường sẽ đọc từ trên xuống nếu như mặc định ưu tiên để đầu thì nó sẽ k đọc tiếp những route sau nữa
router.use('/search', siteController.search);
router.use('/', siteController.home);

module.exports = router;
