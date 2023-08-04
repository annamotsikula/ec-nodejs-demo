const router = require('express').Router()
// const ProductRoutes = require('./products.routing');
const AuthRoutes = require('./auth.routing');

// router.use('/products', ProductRoutes)
router.use('/auth', AuthRoutes)

module.exports = router