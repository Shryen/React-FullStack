import Link from "next/link";
import { HiShoppingCart } from 'react-icons/hi'
import { NavItems, NavStyles } from "@/styles/NavStyles";
import Cart from "./Cart";
import { useStateContext } from "@/lib/context";

export default function Nav() {
    const { showCart, setShowCart, totalQty } = useStateContext();
    return (
        <NavStyles>
            <Link href={'/'}>Styled.</Link>
            <NavItems>
                <div onClick={() => setShowCart(true)}>
                    {totalQty > 0 && <span>{totalQty}</span>}
                    <HiShoppingCart />
                    <h3>Cart</h3>
                </div>
            </NavItems>
            {showCart && <Cart />}
        </NavStyles>
    )
}