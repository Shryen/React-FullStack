import { useStateContext } from "@/lib/context"
import { Card, CardInfo, CartQty, CartStyle, CartWrapper, EmptyStyle, Checkout } from "@/styles/CartStyles";
import { Quantity } from "@/styles/ProductStyle";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
CartWrapper
import { FaShoppingCart } from 'react-icons/fa';

export default function Cart() {

    const { cartItems, setShowCart, onAdd, onRemove, totalPrice } = useStateContext();

    return (
        <CartWrapper onClick={() => setShowCart(false)}>
            <CartStyle onClick={(e) => e.stopPropagation()}>
                {cartItems.length < 1 && (
                    <EmptyStyle>
                        <h1>You have more shopping to do. </h1>
                        <FaShoppingCart />
                    </EmptyStyle>
                )}
                {cartItems.length >= 1 && (
                    cartItems.map((item) => {
                        return (
                            <Card key={item.slug}>
                                <img src={item.Image.data.attributes.formats.thumbnail.url} alt={item.Title} />
                                <CardInfo>
                                    <h2>{item.Title}</h2>
                                    <h3>€{item.Price}</h3>
                                    <Quantity>
                                        <span>Quantity</span>
                                        <button>
                                            <AiFillMinusCircle onClick={() => onRemove(item)} />
                                        </button>
                                        <p>{item.quantity}</p>
                                        <button>
                                            <AiFillPlusCircle onClick={() => onAdd(item, 1)} />
                                        </button>
                                    </Quantity>
                                </CardInfo>
                            </Card>
                        )
                    })
                )}
                {cartItems.length >= 1 && (
                    <Checkout>
                        <h3>Subtotal:<b> €{totalPrice.toFixed(2)}</b></h3>
                        <button>Purchase</button>
                    </Checkout>
                )}
            </CartStyle>
        </CartWrapper>
    )
}