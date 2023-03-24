import { useStateContext } from "@/lib/context"
import getStripe from "@/lib/getStripe";
import { Card, CardInfo, CartQty, CartStyle, CartWrapper, EmptyStyle, Checkout, Cards } from "@/styles/CartStyles";
import { Quantity } from "@/styles/ProductStyle";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
CartWrapper
import { FaShoppingCart } from 'react-icons/fa';

//Animation Variants
const card = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 }
}

const cards = {
    hidden: { opacity: 1 },
    show: {
        opacity: 1,
        transition: {
            delayChildren: 0.5,
            staggerChildren: 0.1,
        }
    }
}

//Payment
const handleCheckout = async () => {
    const stripe = await getStripe();
    const response = await fetch('/api/stripe', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(cartItems),
    })
    const data = await response.json();
    await stripe.redirectToCheckout({ sessionId: data.id })
}

export default function Cart() {
    const { cartItems, setShowCart, onAdd, onRemove, totalPrice } = useStateContext();
    return (
        <CartWrapper
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowCart(false)}>
            <CartStyle
                initial={{ x: '50%' }}
                animate={{ x: '0%' }}
                transition={{ type: 'tween' }}
                exit={{ x: "50%" }}
                onClick={(e) => e.stopPropagation()}

            >
                {cartItems.length < 1 && (
                    <EmptyStyle
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h1>You have more shopping to do</h1>
                        <FaShoppingCart />
                    </EmptyStyle>
                )}
                <Cards layout variants={cards} initial="hidden" animate="show" >
                    {cartItems.length >= 1 && (
                        cartItems.map((item) => {
                            return (
                                <Card layout variants={card} key={item.slug}>
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
                </Cards>
                {cartItems.length >= 1 && (
                    <Checkout>
                        <h3>Subtotal:<b> €{totalPrice.toFixed(2)}</b></h3>
                        <button onClick={handleCheckout}>Purchase</button>
                    </Checkout>
                )}
            </CartStyle>
        </CartWrapper>
    )
}