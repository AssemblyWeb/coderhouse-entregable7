const knexConfig = require('../../model/ecommerce/config.knex.js')
const knex = require('knex')
class Contenedor {
    constructor(config, tableName) {
        this.config = config
        this.tableName = tableName
    }
    async getAllProducts() {
        try {
            const allProductsFromDB = await knex(this.config).from(this.tableName).select('*')
            return allProductsFromDB
        } catch (error) {
            console.log(`Hubo un error al leer la base de datos: ${error}`)
        } finally {
            knex(this.config).destroy()
        }
    }

    async addProduct(title, price, thumbnail) {
        try {
            const allProducts = await this.getAllProducts()
            let newProduct = {
                id: JSON.parse(JSON.stringify(allProducts)).length + 1,
                title, price, thumbnail
            }
            await knex(this.config)(this.tableName).insert(newProduct)
            return newProduct
        } catch (error) {
            console.log(`Hubo un error al agregar un producto a la base de datos: ${error}`)
        } finally {
            knex(this.config).destroy()
        }
    }

}

const productosService = new Contenedor(knexConfig, "products")

module.exports = productosService
