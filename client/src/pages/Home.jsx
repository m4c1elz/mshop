import LinkButton from '../components/LinkButton'

function Home() {
    return (
        <div>
            <div className="flex w-full h-96 p-4 flex-col justify-around items-center md:flex-row">
                <div className="w-1/2 text-center md:text-start">
                    <h1 className="text-2xl xl:text-3xl">Os melhores produtos.</h1>
                    <h1 className="text-3xl font-bold xl:text-4xl">Os melhores preços.</h1>
                </div>
                <div>
                    <p className="max-w-96 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eos explicabo voluptatum unde architecto eveniet repudiandae, hic veritatis et dignissimos enim debitis pariatur aut molestias qui necessitatibus quod. Magni, sequi?</p>
                </div>
            </div>
            <div className="mx-auto flex flex-col gap-4 justify-center items-center">
                <h1>O que está esperando?</h1>
                <LinkButton to="/login">Comprar!</LinkButton>
            </div>
        </div>
    )
}

export default Home