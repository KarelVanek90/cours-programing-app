import "./ProgForm.css";
import React from "react";

function ProgForm({ data, onChange, onAdd, validation }) {
  return (
    <div className="prog-form">
      <form>
        <input
          type="text"
          name="firstName"
          placeholder="Jmeno"
          value={data.firstName}
          onChange={onChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Prijmeni"
          value={data.lastName}
          onChange={onChange}
        />
        <label>Pozice:</label>
        <select name="position" value={data.position} onChange={onChange}>
          <option value="Senior" id="Senior">
            Senior
          </option>
          <option value="Junior" id="Junior">
            Junior
          </option>
        </select>
      </form>
      <button
        className={`${!validation ? "des" : ""}`}
        disabled={!validation}
        onClick={onAdd}
      >
        Odeslat
      </button>
    </div>
  );
}

export default ProgForm;
