import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actioncreators, State } from "../../state";
const ListItem = () => {
  const dispatch = useDispatch();
  const initialStateData = { item: "", amount: 0 };
  const [objects, setObjects] = useState(initialStateData);
  const { addItem } = bindActionCreators(actioncreators, dispatch);
  const { item } = useSelector((state: State) => state);
  console.log("item =>>>",item)
  return (
    <div>
      <ul>
        <li>
          <h1>List</h1>
          <input type="text"></input>
          <button onClick={() => addItem(objects)}>Add item</button>
        </li>
      </ul>
    </div>
  );
};

export default ListItem;
