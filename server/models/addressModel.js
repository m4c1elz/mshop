import pool from "../db.js"

export async function getAddresses() {
	const [response] = await pool.query("SELECT * FROM address")
	return response
}

export async function getAddress(clientId) {
	const [response] = await pool.query(
		`
    SELECT *
    FROM address
    WHERE client_id = ?`,
		[clientId]
	)
	return response
}
export async function addAddress(
	userId,
	road,
	number,
	city,
	county,
	neighborhood,
	complement
) {
	try {
		await pool.query(
			`
        INSERT INTO address VALUES(
            null,
            ?,
            ?,
            ?,
            ?,
            ?,
            ?,
            ?
        );`,
			[userId, road, number, city, county, neighborhood, complement]
		)
		return "Endereço de usuário adicionado com sucesso!"
	} catch (error) {
		return {
			msg: "Houve um erro ao cadastrar o endereço!",
			error,
		}
	}
}

export async function deleteAddress(id) {
	try {
		await pool.query(
			`
        DELETE FROM address
        WHERE id = ?`,
			[id]
		)
		return "Endereço deletado com sucesso!"
	} catch (error) {
		return {
			msg: "Houve um erro ao deletar o endereço!",
			error,
		}
	}
}

export default pool
