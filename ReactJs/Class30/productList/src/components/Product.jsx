import Counter from "./Counter"

export const Product = ({ name, quantity }) => {
    return (
        <div>
            {name} <Counter initialCount={quantity}/>
        </div>
    )
}