const express = require('express')
const router = express.Router()
const productosService = require('../services/productosService')

router.get('/', (_, res) => {
    res.render("pages/index.ejs", { title: null })
})

router.get('/productos', async (_, res) => {
    const allProducts = await productosService.getAllProducts()
    console.log(allProducts)
    res.render("pages/productos.ejs", { allProducts })
})

router.post('/productos', async (req, res) => {
    const { title, price, thumbnail } = req.body
    await productosService.addProduct(title, +price, thumbnail)
    res.render("pages/index.ejs", { title })
})

module.exports = router