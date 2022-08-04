import React, { useState, useContext} from "react";
const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext); 

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const addProject = (item, quantity) => {
        if (isInCart(item.id)) {
            setCart(cart.map(project => {
                return project.id === item.id ? { ...project, quantity: project.quantity + quantity } : project
            }));
        }else{
            setCart([...cart, { ...item, quantity}]);
        }
    }

    const totalPrice = () => {
        return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
    }

    const totalProjects = () => cart.reduce((acum, actualProject) => acum + actualProject.quantity, 0); 

    const clearCart = () => setCart([]);

    const isInCart = (id) => cart.find(project => project.id === id) ? true : false;

    const deleteProject = (id) => setCart(cart.filter(project => project.id !== id));

    console.log('cart:', cart)
    
    return (
        <CartContext.Provider value={{
            clearCart,
            isInCart,
            deleteProject,
            addProject,
            totalPrice,
            totalProjects,
            cart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;