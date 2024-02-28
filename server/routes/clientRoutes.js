import express from "express"
import * as clientModel from "../models/clientModel.js"

export const router = express.Router()

router.get("/", async (req, res) => {
	const response = await clientModel.getClients()
	res.json(response)
})

router.get("/:id", async (req, res) => {
	const { id } = req.params
	const response = await clientModel.getClient(id)
	res.json(response)
})

router.post("/", async (req, res) => {
	const { name, cpf } = req.body

	const response = await clientModel.addClient(name, cpf)
	res.json(response)
})

router.post("/login", async (req, res) => {
	const { name, cpf } = req.body

	const response = await clientModel.findUser(name, cpf)
	res.json(response)
})

router.delete("/:id", async (req, res) => {
	const { id } = req.params

	const response = await clientModel.deleteClient(id)
	res.json(response)
})
