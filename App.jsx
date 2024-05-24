import { useEffect, useState } from "react";
import "./App.css";
import rawData from "./progList.json";
import ListProg from "./components/ListProg/ListProg";
import ProgForm from "./components/ProgForm/ProgForm";
import Togglers from "./components/Togglers/Togglers";
import Work from "./components/Work/Work";

function App() {
  const [listWork, setListWork] = useState(rawData.workers);
  const [newProg, setNewProg] = useState({
    id:
      listWork.length > 0
        ? Math.max(...listWork.map((worker) => worker.id)) + 1
        : 1,
    firstName: "",
    lastName: "",
    position: "Senior",
  });

  const [active, setActive] = useState(1);
  const [hodnota, setHodnota] = useState();
  const [valid, setValid] = useState(false);

  useEffect(() => {
    let senior = 0;
    let junior = 0;
    for (const work of listWork) {
      if (work.position === "Senior") {
        senior += 200;
      } else {
        junior += 100;
      }
    }
    const celkem = senior + junior;
    setHodnota(celkem);
  }, [listWork]);

  const validateData = (worker) => {
    if (worker.firstName.trim().length === 0) {
      setValid(false);
    } else if (worker.lastName.trim().length === 0) {
      setValid(false);
    } else {
      setValid(true);
    }
  };

  const handleChange = (e) => {
    const updateWork = { ...newProg, [e.target.name]: e.target.value };
    setNewProg(updateWork);
    validateData(updateWork);
  };

  const handleAdd = () => {
    setListWork((listWork) => {
      return [...listWork, newProg];
    });
    const newId = newProg.id + 1;
    const udpateWork = {
      id: newId,
      firstName: "",
      lastName: "",
      position: "Senior",
    };
    setNewProg(udpateWork);
    validateData(udpateWork);
  };

  const oneDelete = (idToDelete) => {
    setListWork(listWork.filter((work) => work.id !== idToDelete));
  };

  const buttons = (source) => {
    switch (source) {
      case "prog": {
        setActive(1);
        break;
      }
      case "work": {
        setActive(2);
        break;
      }
      default:
        break;
    }
  };

  return (
    <div className="App">
      <Togglers data={buttons} />
      <div>
        {active === 1 && (
          <>
            <h1>Programatori</h1>
            <ListProg data={listWork} oneDelete={oneDelete} />
            <ProgForm
              data={newProg}
              onChange={handleChange}
              onAdd={handleAdd}
              validation={valid}
            />
          </>
        )}
        {active === 2 && (
          <>
            <h1>Ukoly</h1>
            <p>
              Programatori zvladnout <span>{hodnota}</span> radku dene
            </p>
            <Work data={hodnota} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
