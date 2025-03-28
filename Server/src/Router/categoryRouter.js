const express = require('express');

const categoryRouter = express.Router();

const {allCAtegory,addCategory,updataCAtegory,deleteCategory,single} = require('../controller/categoryController.js')

categoryRouter.route('/').get(allCAtegory).post(addCategory);
categoryRouter.route('/:id').patch(updataCAtegory).delete(deleteCategory).get(single);

module.exports = categoryRouter;