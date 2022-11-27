const express = require('express')
const router = express.Router()
const { productosService } = require('../services/productosService')

router.get('/', (_, res) => {
    res.render("pages/index.ejs", { title: null })
})

router.get('/productos', (_, res) => {
    const allProducts = productosService.getAllProducts()
    res.render("pages/productos.ejs", { allProducts })
})

router.post('/productos', async (req, res) => {
    const { title, price, thumbnail } = req.body
    await productosService.addProduct(title, +price, thumbnail)
    res.render("pages/index.ejs", { title })
})

// router.get('/:id', (req, res) => {
//     const { id } = req.params
//     const productos = productosService.getProductById(+id)
//     res.status(200).json(productos)
// })

// router.put('/:id', async (req, res) => {
//     try {
//         const { id } = req.params
//         const { title, price, thumbnail } = req.body
//         const productArguments = {
//             id: +id,
//             title: title || null,
//             price: +price || null,
//             thumbnail: thumbnail || null
//         }

//         const updateProduct = await productosService.updateProduct(productArguments)

//         res.status(200).json({ updateProduct })
//     } catch (error) {
//         res.status(404).json({ error: "Hubo un error" })
//     }
// })

// router.delete('/:id', async (req, res) => {
//     try {
//         const { id } = req.params

//         const deleteProduct = await productosService.deleteProduct(+id)

//         res.status(200).json(`El producto con id ${deleteProduct} fue eliminado`)

//     } catch (error) {
//         res.status(404).json("No se pudo borrar el id " + req.params.id)
//     }
// })

module.exports = router