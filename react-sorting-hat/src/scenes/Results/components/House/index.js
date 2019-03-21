import React from "react";
import houses from "./assets/houses.js";

const uppercase = (str) => str.charAt(0).toUpperCase() +  str.slice(1);

const House = ({house, closeCall}) => {
    return (
        <div className={"house " + house}>
          <div>
            {closeCall
             ? <h3>{uppercase(closeCall)}<br /> No? Well if you are sure, better be...</h3>
             : <h3>Hmm... I know...</h3>}
            <h2>{uppercase(house)}!</h2>
          </div>
          <div className="description">
            {houses[house].about}
          </div>
          <div className="wizards">
            {houses[house].wizards.map((w, idx) => <h4 key={idx}>{w}</h4>)}
          </div>
        </div>
    );
};

export default House;
