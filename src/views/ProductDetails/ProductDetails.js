import { useEffect, useState } from "react";
import { useRoute } from "wouter";
import Description from "../../components/Description/Description";
import Actions from "../../components/Actions/Actions";
import { getProduct } from "../../services/productsService";
import './ProductDetails.scss';

const ProductDetails = () => {

    const [productDetails, setProductDetails]= useState(null)

    const [match, params] = useRoute("/product/:id");

    useEffect(() => {
        getProduct(params.id).then( res => { 
            setProductDetails(res)
            console.log(res)
        })
    },[params.id]);

    return (match && productDetails) && (
        <>
            <div className="flex p-8 gap-8">
                <div className="basis-1/3 pt-16">
                    <img alt={productDetails.id} src={productDetails.imgUrl} width={256} />
                </div>
                <section className="basis-2/3">
                    <div className="accordion-wrapper">
                        <Description details={productDetails}/>
                    </div>
                </section>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" >
                <Actions colors={productDetails.colors}/>
            </div>

        </>
    );
}

export default ProductDetails;
