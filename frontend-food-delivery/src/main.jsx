import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import StoreContextProvider from "./context/StoreContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StoreContextProvider>
      <App />
    </StoreContextProvider>
  </BrowserRouter>
);

/*- React: Importa a biblioteca React, que é necessária para escrever componentes React.
- ReactDOM: Importa a biblioteca ReactDOM, que é usada para renderizar o aplicativo React no DOM.
- App: Importa o componente principal do seu aplicativo.
- index.css: Importa o arquivo CSS para estilizar o aplicativo.
- BrowserRouter: Importa o BrowserRouter do react-router-dom para gerenciar as rotas do seu aplicativo.
- StoreContextProvider: Importa o provedor de contexto que você criou anteriormente.

-<BrowserRouter> permite navegação entre diferentes páginas/rotas sem recarregar a página inteira, útil para criar uma experiência de navegação eficiente. Tipo um GPS

-<App /> com o <StoreContextProvider> torna o contexto disponível para todos os componentes dentro do App, qualquer componente dentro do App pode acessar e usar o contexto compartilhado. Caixa de insumos compartilhada*/
