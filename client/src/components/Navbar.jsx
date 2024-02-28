import { Link } from 'react-router-dom'


function Navbar() {
    return (
        <nav className="w-full h-32 px-4 flex justify-between items-center border-b-2 md:justify-around">
            <h1 className="text-3xl font-bold">MShop</h1>
            <ul className="flex gap-8 justify-center">
                <li><Link to="/" className="text-xl font-medium hover:text-sky-500">Home</Link></li>
                <li><Link to="/products" className="text-xl font-medium hover:text-sky-500">Produtos</Link></li>
                <li><Link to="/cart" className="text-xl font-medium hover:text-sky-500">Carrinho</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;