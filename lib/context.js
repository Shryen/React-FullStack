import React, { createContext, useContext, useState } from 'react';

const ShopContext = createContext(); //Create context

export const StateContext = ({ children }) => {
    //Add our state
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [qty, setQty] = useState(1);

    //Increase Product quantity
    const increaseQty = () => {
        setQty((prevQty) => prevQty + 1)
    }

    //Decrease Product quantity
    const decreaseQty = () => {
        setQty((prevQty) => {
            if (prevQty - 1 < 1) return 1;
            return prevQty - 1;
        })
    }

    //Add Product to Cart
    const onAdd = (product, quantity) => {
        //Check if the product is already in the cart
        const exist = cartItems.find(item => item.slug === product.slug);
        if (exist) {
            setCartItems(cartItems.map((item) => 
            item.slug === product.slug ? 
            { ...exist, quantity: exist.quantity + quantity } 
            : item))
        } else{
            setCartItems([...cartItems, {...product, quantity: quantity}])
        }
    }

    return (
        <ShopContext.Provider value={{ qty, increaseQty, decreaseQty, showCart, setShowCart, cartItems, onAdd }}>
            {children}
        </ShopContext.Provider>
    )
}

export const useStateContext = () => useContext(ShopContext);