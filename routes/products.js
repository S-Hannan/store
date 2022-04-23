const express = require('express')
const { route } = require('express/lib/router')
const router = express.Router()
const { getAllProductsStatic, getAllProducts } = require('../controllers/products')
router.get('/', getAllProducts)
router.get('/static', getAllProductsStatic)
module.exports = router