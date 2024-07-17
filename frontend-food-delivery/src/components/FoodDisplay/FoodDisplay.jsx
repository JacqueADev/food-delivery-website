import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";

/*novo "chefe", tem a função de saber quais alimentos estão disponíveis. Ele acessa as infos em storecontext e pega  as infos necessárias dentro de food_list*/
const FoodDisplay = ({category}) => {

    const {food_list} = useContext(StoreContext)

  return (
    <div className="food-display" id="food-display">
        <h2>Principais pratos perto de você</h2>

    </div>
);
};

export default FoodDisplay;
