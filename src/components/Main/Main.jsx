import React, {useEffect, useState} from 'react';
import axios from "axios";
import './Main_style.css';
import MySelect from "./MySelect";
import Order from "./Order";
import Product from "./Product";
import Santa from "./santa.png";


const Main = () => {
    const [products, setProducts] = useState(null);

    const fetchData = async () => {
        const response = await axios.get(
            "https://fakestoreapi.com/products"
        );
        setProducts(response.data);
    };

    useEffect(() => {
        fetchData()
    }, [])

    const [selectedSort, setSelectedSort] = useState('')

    const sortProducts = (sort) => {
        setSelectedSort(sort);
        setProducts([...products].sort((a, b) => a [sort].localeCompare(b[sort])))
    }

    const [listOrder, setListOrder] = useState([]);

    const addNewProduct = (elem) => {
        setListOrder([...listOrder, elem])
    }

    return (
        <>
            <div id="chosenOrders">
                <div style={{filter: "drop-shadow(0 0 10px white)", marginRight: '115px'}}>
                    <img src={Santa} alt="Santa"/>
                </div>
                <Order orders={listOrder} key={products}/></div>
            <div>
                <MySelect
                    value={selectedSort}
                    onChange={sortProducts}
                    defaultValue="Sort by"
                    options={[
                        {value: 'title', name: 'FROM A TO Z'},
                        // {value: 'price', name: 'PRICE (HIGH - LOW)'},
                    ]}/>
            </div>
            <div className="products">
                {products && products.map((product) => {
                    return (
                        <Product
                            addNewProduct={() => addNewProduct(product)}
                            key={product.id}
                            title={product.title}
                            price={product.price + ' $'}
                            image={product.image}
                        />
                    )
                })}
            </div>
        </>
    );
};

export default Main;