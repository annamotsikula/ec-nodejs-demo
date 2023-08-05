const router = require('express').Router()
const ProductRoutes = require('./products.routing');
const AuthRoutes = require('./auth.routing');
const authMiddleWear = require('../middlewear/auth.middlewear')

// router.use('/products', ProductRoutes)
router.use('/auth', AuthRoutes)
router.use(authMiddleWear);
router.use('/products', ProductRoutes)


module.exports = router