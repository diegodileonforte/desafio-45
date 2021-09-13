'use strict'
const Producto = use('App/Models/Producto')
class ProductoController {
    async getAll({ views, request, response }) {
        return await Producto.all();
    }

    async get({ views, request, response }) {
        const { id } = request.params
        return await Producto.find(id);
    }

    async add({ views, request, response }) {
        const newProducto = request.body
        const Producto = new Producto()
        Producto.fill({ ...newProducto })
        Producto.save()
        return await Producto
    }

    async delete({ views, request, response }) {
        const { id } = request.params
        const user = await Producto.find(id)
        if (user) {
            await user.delete()
        }
        return user
    }
}

module.exports = ProductoController