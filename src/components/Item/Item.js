import { Link } from "wouter"

const Item = ({ id, imgUrl, brand, model, price,}) => {


    return (
        
        <Link href={`/product/${id}`}>
            <div className="flex">
                <img alt={brand} src={imgUrl} key={id} loading="lazy"></img>
                <div className="flex flex-col">
                    <span>{ brand }</span>
                    <span>{ model }</span>
                    <span>{ price }</span>
                </div>
            </div>
        </Link>
    )
}

export default Item