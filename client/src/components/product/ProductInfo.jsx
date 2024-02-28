import LinkButton from '../LinkButton'

function ProductInfo({ data }) {

    function Image() {
        if (data.image) {
            return <img src={data.image} alt={data.name} className="w-auto h-full object-cover" />
        } else {
            return <div className="flex w-full h-full justify-center items-center bg-slate-200 shrink-0">
                <img src="/no-image.png" alt="sem imagem" className="h-1/2 opacity-30" />
            </div>
        }
    }

    return (
        <div className="flex mx-auto my-36 p-4 justify-between gap-4 items-center flex-col md:flex-row md:justify-around">
            <div className="flex w-96 h-96 justify-center items-center overflow-hidden rounded-xl">
                <Image />
            </div>
            <div className="flex w-1/3 flex-col gap-8 items-center md:items-start">
                <h1 className="text-3xl font-bold">{data.name}</h1>
                <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-semibold">Descrição:</h3>
                    <p className="max-w-96">{data.description}</p>
                </div>
                <h1 className="text-3xl font-bold text-emerald-500">${data.price}</h1>
                <p className="text-lg">
                    <span className="text-xl font-bold">Tipo: </span>{data.type}
                </p>
                <LinkButton to="#">Comprar</LinkButton>
            </div>
        </div>
    );
}

export default ProductInfo;