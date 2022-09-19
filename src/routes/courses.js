const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');
// chú ý tuyến đường sẽ đọc từ trên xuống nếu như mặc định ưu tiên để đầu thì nó sẽ k đọc tiếp những route sau nữa
router.post('/handle-form-action', courseController.handleFormAction);
router.delete('/:id/force', courseController.destroy);
router.patch('/:id/restore', courseController.restore);
router.delete('/:id', courseController.delete);
router.put('/:id', courseController.update);
router.get('/:id/edit', courseController.edit);
router.post('/store', courseController.store);
router.get('/create', courseController.create);
router.get('/:slug', courseController.show);


module.exports = router;
