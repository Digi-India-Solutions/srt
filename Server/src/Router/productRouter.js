const express = require('express');

const productRouter = express.Router();

const {allproduct,addproduct,updataproduct,deleteproduct,ProdbyCategory,Sgnproduct} = require('../controller/productController.js')

productRouter.route('/').get(allproduct).post(addproduct);
productRouter.route('/:id').patch(updataproduct).delete(deleteproduct).get(ProdbyCategory);
productRouter.route('/sing/:id').get(Sgnproduct);

module.exports = productRouter;