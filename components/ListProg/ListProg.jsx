import React from "react";
import "./ListProg.css";

function ListProg({ data, oneDelete }) {
  return (
    <div>
      {data.map((item) => {
        return (
          <div className="progaming" key={item.id}>
            <div>
              <span>
                {item.firstName} {item.lastName}
              </span>
              <p>{item.position}</p>
              <button onClick={() => oneDelete(item.id)}>Smazat</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ListProg;
