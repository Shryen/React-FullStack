import { useStateContext } from "@/lib/context"
import { Card, CardInfo, CartQty, CartStyle, CartWrapper, EmptyStyle } from "@/styles/CartStyles";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
CartWrapper
import { FaShoppingCart } from 'react-icons/fa';

export default function Cart() {
    const { cartItems, setShowCart } = useStateContext();
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
                            <Card>
                                <img src={item.Image.data.attributes.formats.thumbnail.url} alt={item.Title} />
                                <CardInfo>
                                    <h2>{item.Title}</h2>
                                    <h3>{item.Price}</h3>
                                    <CartQty>
                                        <span>Quantity</span>
                                        <button>
                                            <AiFillMinusCircle />
                                        </button>
                                        <p>{item.quantity}</p>
                                        <button>
                                            <AiFillPlusCircle />
                                        </button>
                                    </CartQty>
                                </CardInfo>
                            </Card>
                        )
                    })
                )}
            </CartStyle>
        </CartWrapper>
    )
}