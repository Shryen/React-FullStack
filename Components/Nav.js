import Link from "next/link";
import { HiShoppingCart } from 'react-icons/hi'

export default function Nav() {
    return (
        <div>
            <Link href={'/'}>Styled.</Link>
            <div>
                <div>
                    <HiShoppingCart />
                    <h3>Cart</h3>
                </div>
            </div>
        </div>
    )
}