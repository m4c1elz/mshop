import express from "express"
import * as addressModel from "../models/addressModel.js"

export const router = express.Router()

router.get("/", async (req, res) => {
    const response = await addressModel.getAddresses()
    res.json(response)
})

router.get("/:clientId", async (req, res) => {
    const { clientId } = req.params
    const response = await addressModel.getAddress(clientId)
    res.json(response)
})

router.post("/:userId", async (req, res) => {
    const { userId, road, number, city, county, neighborhood, complement } =
        req.body
    const response = await addressModel.addAddress(userId, road, number, city, county, neighborhood, complement)
    res.json(response)
})

router.delete("/:id", async (req, res) => {
    const { id } = req.params

    const response = await addressModel.deleteAddress(id)
    res.json(response)
})
