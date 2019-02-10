const express = require('express');
const router = express.Router();
const newsController = require('../app/api/controllers/news');

router.get('/', newsController.getAll);
router.post('/', newsController.create);
router.get('/:newsId', newsController.getById);
router.put('/:newsId', newsController.updateById);
router.delete('/:newsId', newsController.deleteById);

module.exports = router;