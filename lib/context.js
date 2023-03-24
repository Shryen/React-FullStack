import React, { createContext, useContext, useState } from 'react';

const ShopContext = createContext(); //Create context

export const StateContext = ({ children }) => {
    //Add our state
    const [showCart, setShowCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [qty, setQty] = useState(1);
    const [totalQty, setTotalQty] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);


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
        //Increase Total Price
        setTotalPrice((prevTotal) => prevTotal + product.Price * quantity)

        //Increase total quantity
        setTotalQty((prevTotal) => prevTotal + quantity);
        //Check if the product is already in the cart
        const exist = cartItems.find(item => item.slug === product.slug);
        if (exist) {
            setCartItems(cartItems.map((item) =>
                item.slug === product.slug ?
                    { ...exist, quantity: exist.quantity + quantity }
                    : item))
        } else {
            setCartItems([...cartItems, { ...product, quantity: quantity }])
        }
    }

    //Remove Product
    const onRemove = (product) => {
        //Decrease total price
        setTotalPrice((prevTotal) => prevTotal - product.Price)

        //decrase total quantity
        setTotalQty((prevTotal) => prevTotal - 1);
        const exist = cartItems.find(item => item.slug === product.slug);
        if (exist.quantity === 1) {
            setCartItems(cartItems.filter(item => item.slug !== product.slug))
        } else {
            setCartItems(cartItems.map(item =>
                item.slug === product.slug ?
                    { ...exist, quantity: exist.quantity - 1 }
                    : item))
        }
    }

    return (
        <ShopContext.Provider value={{ qty, increaseQty, decreaseQty, showCart, setShowCart, cartItems, onAdd, onRemove, totalQty, totalPrice }}>
            {children}
        </ShopContext.Provider>
    )
}

export const useStateContext = () => useContext(ShopContext);