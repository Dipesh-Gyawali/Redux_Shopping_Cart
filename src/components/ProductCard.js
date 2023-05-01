import { add } from "../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";



import "./ProductCard.css";
import { useEffect } from "react";

export const ProductCard = ({product}) => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.cartState.cartList);
  const [isInCart, setIsInCart] = useState(false);

  const {id, name, price, image} = product;

  
  useEffect(() => {
    const productInCart = products.find(item => item.id ===id);

    if(productInCart){
      setIsInCart(true);
    }else {
      setIsInCart(false);
    }
  },[products,id]);


  return (
    <div className="productCard">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>${price}</p>
        <button onClick={() => dispatch(add(product))}>Add To Cart</button>
      </div>
    </div>
  )
}

