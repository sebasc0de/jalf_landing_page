import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/Product";

export function useCart() {
  // Cart content
  const [cart, setCart] = useState<ProductInCart[]>([]);

  // Cart total
  const [cartTotal, setCartTotal] = useState(0);

  // Add item to cart
  const addItem = (item: Product, quantity: number = 1) => {
    setCart((prev) => {
      const oldValues = [...prev];

      console.log("this is my cart", oldValues);

      return prev;
    });

    setCartTotal((prev) => prev + item.attributes.regular_price);
  };

  // Remove item from cart
  const removeItem = (item: Product) => {
    setCartTotal((prev) => prev - item.attributes.regular_price);

    const personIndex = cart.findIndex((p) => p.id === item.id);

    if (personIndex !== -1) cart.splice(personIndex, 1);
  };

  // Reset cart
  const resetCart = () => {
    setCart([]);
  };

  return { cart, cartTotal, setCart, addItem, resetCart, removeItem };
}
