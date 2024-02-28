import { useState, useEffect } from 'react'
import Loader from '../components/Loader'
import ProductList from '../components/product/ProductList'

function Products() {

    const [data, setData] = useState(null)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    const apiPort = import.meta.env.VITE_API_PORT

    async function getData() {
        try {
            setLoading(true)
            const response = await fetch(`http://localhost:${apiPort}/products`)
            const result = await response.json()
            setData(result)
        } catch (error) {
            console.log(error)
            setError(true)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    if (error) return <h1>Houve um erro ao pegar os dados!</h1>
    if (loading) return <Loader></Loader>
    if (data) return <ProductList data={data} />
}

export default Products