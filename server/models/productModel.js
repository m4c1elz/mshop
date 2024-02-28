import pool from '../db.js'

export async function getProducts() {
    const [response] = await pool.query("SELECT * FROM product")
    return response
}

export async function getProduct(id) {
    const [response] = await pool.query(
        `
    SELECT *
    FROM product
    WHERE id = ?`,
        [id]
    )
    return response
}

export async function addProduct(name, description, price, type) {
    try {
        await pool.query(
            `
        INSERT INTO product VALUES(
            null,
            ?,
            ?,
            ?,
            ?
        )`,
            [name, description, price, type]
        )
        return "Produto adicionado ao catálogo com sucesso!"
    } catch (error) {
        return {
            msg: "Houve um erro ao adicionar o produto!",
            error,
        }
    }
}

export async function deleteProduct(id) {
    try {
        await pool.query(
            `
        DELETE FROM product
        WHERE id = ?`,
            [id]
        )
        return "Produto deletado com sucesso!"
    } catch (error) {
        return {
            msg: "Houve um erro ao deletar o produto!",
            error,
        }
    }
}