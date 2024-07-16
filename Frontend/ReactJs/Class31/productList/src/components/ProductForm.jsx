const ProductForm = ({ handleProductAdd }) => {
    return (
        <input placeholder="Add Product" onKeyDown={handleProductAdd} />
    )
}

export default ProductForm;