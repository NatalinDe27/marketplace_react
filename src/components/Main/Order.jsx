import OrderCard from './OrderCard'

function Order ({orders}) {
    return (
        <div className="chosenProducts">
            {orders.map(product => {return (
                        <OrderCard
                            key={product.id}
                            image={product.image}
                            title={product.title}
                            price={product.price}
                        />
                )}
            )}
        </div>
    )
}

export default Order;