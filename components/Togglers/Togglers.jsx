import React from "react";
import "./Togglers.css";

function Togglers({ data }) {
  const click = (e) => {
    data(e.target.name);
  };
  return (
    <div className="buttons">
      <button name="prog" onClick={click}>
        Programatori
      </button>
      <button name="work" onClick={click}>
        Ukoly
      </button>
    </div>
  );
}

export default Togglers;
