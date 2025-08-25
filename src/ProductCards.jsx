import Card from "./Card.jsx";
import { products } from "./data.js";

export default function ProductCards(){
const elm = products.map(product=>(
<Card
      key={product.id}     
      title={product.title}
      category={product.category}
      price={product.price}
      image={product.image}
    />

));

return (
    <div className="c">
        {elm}
    </div>
)
}