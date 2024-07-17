import { createContext,  useState, useEffect } from "react";
import { food_list } from "../assets/assets";

export const StoreContext =
  createContext(null); /*criação de uma "caixa" de valor vazio*/

/*StoreContextProvider responsável por essa "caixa"*/
const StoreContextProvider = (props) => {
  /*ContextValue o que será compartilhado - o que tem dentro da "caixa"*/

  const [cartItems, setCartItems] = useState({});

  const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev)=>({...prev, [itemId]:1}))
        }
        else {
            setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
  }

useEffect(()=>{
    console.log(cartItems);
},[cartItems]);

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart
  };


  return (
    /*StoreContext.Provider permite "compartilhar" esse conteúdo da caixa com outros*/
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;

/*{props.children} com quem essa caixa será compartilhada e seus conteúdos específicos*/

/*props é o conteúdo específico em questão*/
