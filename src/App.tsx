import React, { useState } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actioncreators, State } from "./state";
import ListItem from "./components/list/list"

function App() {
  const dispatch = useDispatch();
  const initialStateData = { item: "", amount: 0 };
  const [objects, setObjects] = useState(initialStateData);
  const { depositMoney, withdrawMoney, bankruptMoney } = bindActionCreators(
    actioncreators,
    dispatch
  );
  const { bank } = useSelector((state: State) => state);

  return (
    <div className="App">
      <h1>{bank}</h1>
      <input
        type="text"
        value={objects.amount}
        onChange={(e) => {
          setObjects({ ...objects, amount: Number(e.target.value) });
        }}
      ></input>
      <button onClick={() => depositMoney(objects.amount)}>Deposit</button>
      <button onClick={() => withdrawMoney(objects.amount)}> withdraw</button>
      <button onClick={() => bankruptMoney()}>Bankrupt</button>
      <div>
     <ListItem/>
      </div>
    </div>
  );
}

export default App;
