import { useSelector } from "react-redux";

const Search = ({ updateFilteredProducts }) => {

    const storedProducts = useSelector(state => state)

    const searchItems = (value) => {
        const regex = new RegExp(value, "i");
        const newFiltered = storedProducts.filter(product => product.brand.match(regex) || product.model.match(regex))

        updateFilteredProducts(newFiltered)
    }

    return (
        <input type="text" placeholder="Search products" onKeyUp={(e) => searchItems(e.target.value)} />
    )
}

export default Search