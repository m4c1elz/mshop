import pool from '../db.js'

export async function getCart(clientId) {
    const [response] = await pool.query(
        `
        SELECT purchase.id, client.name AS client, product.name AS product, product.price, purchase.purchase_date AS date
        FROM purchase
        INNER JOIN client ON client.id = purchase.client_id
        INNER JOIN product ON product.id = purchase.product_id
        WHERE client.id = ?
        ORDER BY purchase.id ASC
        `,
        [clientId]
    )
    return response
}

export async function addToCart(clientId, productId, date) {
    try {
        await pool.query(
            `
        INSERT INTO purchase VALUES(
            null,
            ?,
            ?,
            ?
        )`,
            [clientId, productId, date]
        )
        return "Item adicionado ao carrinho com sucesso!"
    } catch (error) {
        return {
            msg: "Houve um erro ao adicionar o item no carrinho!",
            error,
        }
    }
}

export async function removeFromCart(id) {
    try {
        await pool.query(
            `
        DELETE FROM purchase
        WHERE id = ?`,
            [id]
        )
        return "Item removido do carrinho com sucesso!"
    } catch (error) {
        return {
            msg: "Houve um erro ao remover o item do carrinho!",
            error,
        }
    }
}