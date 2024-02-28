import pool from "../db.js"

export async function getClients() {
	const [response] = await pool.query("SELECT * FROM client")
	return response
}

export async function getClient(id) {
	try {
		const [response] = await pool.query(
			`
        SELECT *
        FROM client
        WHERE id = ?`,
			[id]
		)
		return response
	} catch (error) {
		return {
			msg: "Houve um erro ao realizar a query!",
			error,
		}
	}
}

export async function findUser(name, cpf) {
	try {
		const [response] = await pool.query(
			`
        SELECT *
        FROM client
        WHERE
        name = ?
        AND
        cpf = ?`,
			[name, cpf]
		)
		return {
			msg: "success",
		}
	} catch (error) {
		return {
			msg: "false",
			error,
		}
	}
}

export async function addClient(name, cpf) {
	try {
		await pool.query(
			`
        INSERT INTO client VALUES(
            null,
            ?,
            ?
        )`,
			[name, cpf]
		)
		return "Usuário inserido com sucesso!"
	} catch (error) {
		return {
			msg: "Houve um erro ao criar o usuário!",
			error,
		}
	}
}

export async function deleteClient(id) {
	try {
		await pool.query(
			`
        DELETE FROM client
        WHERE id = ?`,
			[id]
		)
		return "Usuário deletado com sucesso!"
	} catch (error) {
		return {
			msg: "Houve um erro ao deletar o usuário.",
			error,
		}
	}
}
