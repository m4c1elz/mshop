import { useParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Loader from '../components/Loader'
import LinkButton from '../components/LinkButton'
import ProductInfo from '../components/product/ProductInfo'


function Single() {

    const { id } = useParams()

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    async function getData() {
        try {
            setLoading(true)
            const response = await fetch(`http://localhost:8080/products/${id}`)
            const [result] = await response.json()
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

    if (loading) return <Loader />
    if (error) return <h1>Houve um erro!</h1>
    if (data) return <ProductInfo data={data} />
}

export default Single