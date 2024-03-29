import { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Register() {

    const nameRef = useRef("")
    const cpfRef = useRef("")

    const [duplicate, setDuplicate] = useState(false)
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    async function handleSubmit(e) {

        e.preventDefault()
        setDuplicate(false)
        setLoading(true)

        try {
            const response = await fetch('http://localhost:8080/clients/register', {
                method: "POST",
                headers: new Headers({ "Content-Type": "application/json" }),
                body: JSON.stringify(
                    {
                        name: nameRef.current.value,
                        cpf: cpfRef.current.value
                    }
                )
            })
            const result = await response.json()
            console.log(result)

            if (result.msg == "success") {
                navigate("/login")
            }

            if (result.msg == "user already exists") {
                setDuplicate(true)
            }

        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <form onSubmit={e => handleSubmit(e)} className="flex w-96 h-96 p-4 mx-auto my-36 flex-col justify-between items-center border-2 rounded-xl">
            <h1 className="text-2xl font-bold">Criar conta</h1>
            <div className="flex flex-col gap-4">
                <label htmlFor="name">Nome:</label>
                <input type="text" ref={nameRef} id="name" name="name" className="px-2 py-1 border-2 border-black rounded" required />
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="cpf">CPF:</label>
                <input type="text" ref={cpfRef} name="cpf" pattern="\d{3}\.\d{3}\.\d{3}-\d{2}" className="px-2 py-1 border-2 border-black rounded" required />
            </div>
            {duplicate && <h1 className="text-red-400">Esse usuário já existe!</h1>}
            <input type="submit" value={loading ? "Enviando..." : "Criar conta"} id="submit-btn" className="px-4 py-2 bg-sky-500 text-white font-bold rounded cursor-pointer hover:bg-sky-600" />
        </form>
    );
}

export default Register;