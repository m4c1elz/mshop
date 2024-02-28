import { Link } from 'react-router-dom'

function ProductBox({ img, id, name, price, desc, type }) {

    function Image() {
        if (!img) {
            return <div className="w-full h-48 bg-zinc-200 border-b-2 border-black flex justify-center items-center overflow-hidden">
                <img src="/no-image.png" alt="sem imagem" className="h-full opacity-20 p-4" />
            </div>
        }

        return (
            <div className="flex w-full h-48 justify-center items-center border-b-2 border-black overflow-hidden">
                <img src={img} alt={name} className="w-full" />
            </div>
        )
    }

    return (
        <Link to={`/products/${id}`} key={id} className="transition ease flex w-auto h-96 flex-col shadow-md rounded-xl overflow-hidden hover:bg-zinc-100">
            <Image />
            <div className="h-2/3 flex flex-col justify-between p-4">
                <h1 className="text-3xl font-bold">{name}</h1>
                <p className="text-md">{desc}</p>
                <h3 className="text-2xl text-emerald-500 font-bold">${price}</h3>
                <h1><span className="text-xl font-semibold">Tipo:</span> {type}</h1>
            </div>
        </Link>
    );
}

export default ProductBox;