import Counter from "./Counter"

export const Product = ({ name, quantity }) => {
    return (
        <div className="product">
            {name} <Counter initialCount={quantity}/>
        </div>
    )
}