import { createContext, useContext, useState } from 'react';
import { toast } from 'react-toastify';

const CartContext = createContext({});

export function CartProvider({ children }) {

  const [cart, setCart] = useState([]);

  const addProduct = async (pokemon) => {

    const updatedCart = [...cart]
    const existProduct = updatedCart.find(c => c.id === pokemon.id);
    const stockAmount = pokemon.stock
    const currentAmount = existProduct ? existProduct.amount : 0;
    const amount = currentAmount + 1;

    if (amount > stockAmount) {
      toast.error('Quantidade solicitada fora de estoque');
      return;
    }

    if (existProduct) {
      existProduct.amount = amount;
    } else {
      const newProduct = {
        ...pokemon,
        amount: 1
      }
      updatedCart.push(newProduct)
    }

    setCart(updatedCart);
    toast.success('Produto Adicionado ao carrinho');

  };

  const removeProduct = (productId) => {

    const updatedCart = [...cart]
    const idx = updatedCart.findIndex(c => c.id === productId);

    if (idx !== -1) {
      updatedCart.splice(idx, 1)
      setCart(updatedCart);
    } else {
      toast.error('Erro na remoção do produto');
    }

  };

  const updateProductAmount = async ({
    productId,
    amount,
  }) => {
    if (amount <= 0) {
      return;
    }

    const updatedCart = [...cart]
    const existProduct = updatedCart.find(c => c.id === productId);

    const stockAmount = existProduct ? existProduct.stock : 0;

    if (amount > stockAmount) {
      toast.error('Quantidade solicitada fora de estoque');
      return;
    }

    if (existProduct) {
      existProduct.amount = amount;
      setCart(updatedCart);
    } else {
      toast.error('Erro na alteração de quantidade do produto');
    }

  };

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, updateProductAmount }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  return context;
}
