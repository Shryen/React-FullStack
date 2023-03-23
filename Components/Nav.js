import Link from "next/link";
import { HiShoppingCart } from 'react-icons/hi'
import { NavItems, NavStyles } from "@/styles/NavStyles";

export default function Nav() {
    return (
        <NavStyles>
            <Link href={'/'}>Styled.</Link>
            <NavItems>
                <div>
                    <HiShoppingCart />
                    <h3>Cart</h3>
                </div>
            </NavItems>
        </NavStyles>
    )
}