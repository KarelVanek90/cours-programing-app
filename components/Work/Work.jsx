import React, { useEffect, useState } from "react";
import "./Work.css";

function Work({ data }) {
  const [days, setDays] = useState(0);
  const [rows, setRows] = useState(0);
  const [forPrograming, setForPrograming] = useState(true);
  const [hodnota, setHodnota] = useState(0);
  const [forValid, setForValid] = useState(false);

  useEffect(() => {
    setHodnota(rows / days);
    if (data >= hodnota) {
      setForPrograming(false);
      setForValid(false);
    } else {
      setForPrograming(true);
      setForValid(true);
    }
  }, [rows, days, data, hodnota]);

  return (
    <div className="form-work">
      <form>
        <label htmlFor="rows">Pocet radku</label>
        <input
          type="number"
          id="rows"
          name="rows"
          value={rows}
          onChange={(e) => {
            setRows(e.target.value);
          }}
        />
        <label htmlFor="days">Pocet dnu</label>
        <input
          type="number"
          id="days"
          name="days"
          value={days}
          onChange={(e) => {
            setDays(e.target.value);
          }}
        />
      </form>
      <button
        disabled={forValid}
        className={`${forPrograming ? "active" : "deactive"} ${
          forValid ? "false" : ""
        }`}
      >
        Schvalit
      </button>
    </div>
  );
}

export default Work;
