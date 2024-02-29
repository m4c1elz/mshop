import { useRef, useState } from "react"
import { useNavigate, Link } from "react-router-dom"

function Login() {

    const nameRef = useRef("")
    const cpfRef = useRef("")

    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    async function handleSubmit(e) {

        console.log(nameRef.current.value, cpfRef.current.value)

        e.preventDefault()
        setLoading(true)

        try {
            const response = await fetch('http://localhost:8080/clients/login', {
                method: "POST",
                body: {
                    name: nameRef.current,
                    cpf: cpfRef.current
                }
            })
            const result = await response.json()
            console.log(result)

            if (result.msg == "success") {
                localStorage.setItem("logged user", nameRef.current.value)
                navigate("/products")
            }

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <form onSubmit={e => handleSubmit(e)} className="flex w-96 h-96 p-4 mx-auto my-36 flex-col justify-between items-center border-2 rounded-xl">
            <h1 className="text-2xl font-bold">Login</h1>
            <div className="flex flex-col gap-4">
                <label htmlFor="name">Nome:</label>
                <input type="text" ref={nameRef} id="name" name="name" className="px-2 py-1 border-2 border-black rounded" required />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="cpf">CPF:</label>
                <input type="text" ref={cpfRef} name="cpf" pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" className="px-2 py-1 border-2 border-black rounded" required />
            </div>
            <input type="submit" value={loading ? "Enviando..." : "Enviar"} id="submit-btn" className="px-4 py-2 bg-sky-500 text-white font-bold rounded cursor-pointer hover:bg-sky-600" />
            <p>Ainda não possui uma conta? <Link to="/register" className="text-sky-500">Crie uma agora</Link></p>
        </form>
    )
}

export default Login