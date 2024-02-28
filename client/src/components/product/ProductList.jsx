import ProductBox from './ProductBox'

function ProductList({ data }) {
    return (
        <div className="w-full min-h-svh grid grid-cols-1 grid-rows-auto gap-4 p-4 md:grid-cols-2 lg:grid-cols-4">
            {data.map(item => {
                return (
                    <>
                        <ProductBox
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            img={item.image}
                            desc={item.description}
                            price={item.price}
                            type={item.type}
                        ></ProductBox>
                    </>
                )
            })}
        </div>
    )
}

export default ProductList