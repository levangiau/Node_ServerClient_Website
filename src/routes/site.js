const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');
// chú ý tuyến đường sẽ đọc từ trên xuống nếu như mặc định ưu tiên để đầu thì nó sẽ k đọc tiếp những route sau nữa
router.get('/search', siteController.search);
router.get('/', siteController.home);

module.exports = router;
