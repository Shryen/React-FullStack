import Link from "next/link";
import { HiShoppingCart } from 'react-icons/hi'
import { NavItems, NavStyles } from "@/styles/NavStyles";
import Cart from "./Cart";
import { useStateContext } from "@/lib/context";

const { AnimatePresence, motion } = require('framer-motion');

export default function Nav() {
    const { showCart, setShowCart, totalQty } = useStateContext();
    return (
        <NavStyles>
            <Link href={'/'}>Styled.</Link>
            <NavItems>
                <div onClick={() => setShowCart(true)}>
                    {totalQty > 0 && <motion.span animate={{ scale: 1 }} initial={{ scale: 0 }}>{totalQty}</motion.span>}
                    <HiShoppingCart />
                    <h3>Cart</h3>
                </div>
            </NavItems>
            <AnimatePresence>
                {showCart && <Cart />}
            </AnimatePresence>
        </NavStyles>
    )
}