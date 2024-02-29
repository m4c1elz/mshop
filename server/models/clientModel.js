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
		// verificar se cliente já existe
		const [user] = await pool.query(
			`
		SELECT * FROM client
		WHERE cpf = ?`,
			[cpf]
		)
		if (user.length > 0) return { msg: "user already exists" }

		// adicionar cliente
		await pool.query(
			`
		INSERT INTO client
		(id, name, cpf)
		VALUES(
            null,
            ?,
            ?
        )`,
			[name, cpf]
		)
		return { msg: "success" }
	} catch (error) {
		return { msg: "error", error }
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
