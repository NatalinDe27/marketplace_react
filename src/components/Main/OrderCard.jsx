
function OrderCard({image, title, price}) {

    return (
        <div className='orderCard'>
            <div className="order_style_img">
                <img src={image} alt={title}/></div>
            <div className="order_style_title"><p>{title}</p></div>
            <div className="order_style_price"><p>{price} $</p></div>
        </div>
    )
}

export default OrderCard;