import { createContext, ReactNode, useEffect, useState } from "react";
import { Coffee } from "../pages/Home/components/ProdCard";
import {produce} from "immer";

export interface CartItem extends Coffee{
    quantity: number;
}

interface CartContextType{
    cartItems: CartItem[];
    cartQuantity: number;
    cartItemsTotal: number;
    addCoffeeToCart: (coffee: CartItem) => void;
    changeCartItemQuantity: (
        cartItemId: number,
        type: "increase" | "decrease"
      ) => void;
    removeCartItem: (cartItemId: number) => void;
    cleanCart: () => void;
}

interface CartContextProviderProps{
    children: ReactNode
}

const COFFEE_ITEMS_STORAGE_KEY = "coffeeDelivery:cartItems";

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
    const [cartItems, setCartItems] = useState<CartItem[]>(() => {
      const storedCartItems = localStorage.getItem(COFFEE_ITEMS_STORAGE_KEY);
      if (storedCartItems) {
        return JSON.parse(storedCartItems);
      }
      return [];
    });

    const cartQuantity = cartItems.length;





      function removeCartItem(cartItemId: number) {
        const newCart = produce(cartItems, (draft) => {
          const coffeeExistsInCart = cartItems.findIndex(
            (cartItem) => cartItem.id === cartItemId
          );
    
          if (coffeeExistsInCart >= 0) {
            draft.splice(coffeeExistsInCart, 1);
          }
        });
    
        setCartItems(newCart);
      }

      function cleanCart() {
        setCartItems([]);
      }
    

      useEffect(() => {
        localStorage.setItem(COFFEE_ITEMS_STORAGE_KEY, JSON.stringify(cartItems));
      }, [cartItems]);
      
    return(
        <CartContext.Provider value={{ cartItems, cleanCart, cartQuantity, removeCartItem }}>
            {children}
        </CartContext.Provider>
    )
}