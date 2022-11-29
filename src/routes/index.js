//requiero la clase Router del módulo de express
const router = require('express').Router()

//requiero las rutas de products
const products = require('./productos.js')

//defino que las rutas de products contengan "/"
router.use('/', products)

//exporto para poder usar el enrrutador principal en app.js
module.exports = router