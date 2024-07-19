import React from "react";
import "./AppDownload.css";
import { assets } from "../../assets/assets";

const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
        <p>Para uma melhor experiência <br /> DelishDash App</p>
        <div className="app-download-plataforms">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>

    </div>
  );
};

export default AppDownload;
