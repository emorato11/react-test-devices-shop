import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Item from "../../components/Item/Item";
import Search from "../../components/Search/Search";
import { setNewProducts } from "../../reducers/productReducer";
import { getProducts } from "../../services/productsService";

const ProductsList = () => {

    const state = useSelector(state => state)

    const dispatch = useDispatch()

    const [filteredProducts, setFilteredProducts] = useState(state)

    useEffect(() => {
        
        getProducts().then( res => { 
            dispatch(setNewProducts(res))
            setFilteredProducts(res)
        })
    }, [dispatch]);
    const updateFilteredProducts = (newFiltered) => {
        setFilteredProducts(newFiltered)
    }

    return (
        <React.Fragment>
            <Search updateFilteredProducts={updateFilteredProducts} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" >
                { 
                    filteredProducts.map( ({id, imgUrl, brand, model, price}) => 
                        <Item key={id} id={id} imgUrl={imgUrl} brand={brand} model={model} price={price} />
                    )}
            </div>
        </React.Fragment>
    )
}

export default ProductsList;
