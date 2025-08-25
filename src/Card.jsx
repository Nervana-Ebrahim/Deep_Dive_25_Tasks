import { products } from "./data";

export default function Card({id,image,title,category,price}) {
    return(
        
            <div className="card">
                 <img src={image}/>
                 <h3>{title}</h3>
                 <h4>{category}</h4>
                 <p>{price}</p>
            </div>
    

    );
}
