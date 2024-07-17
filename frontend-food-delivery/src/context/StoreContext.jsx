import { createContext } from "react";
import { food_list } from "../assets/assets";

export const StoreContext =
  createContext(null); /*criação de uma "caixa" de valor vazio*/

/*StoreContextProvider responsável por essa "caixa"*/
const StoreContextProvider = (props) => {
  /*ContextValue o que será compartilhado - o que tem dentro da "caixa"*/
  const contextValue = {
    food_list
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
