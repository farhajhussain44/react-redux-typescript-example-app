import { ItemAction } from "../actions";
import { ItemActionType } from "../action-types";

type ObjectWithNameArray = Array<{ item: string ,amount: number}>;

const initialArray = [{ item: '' ,amount: 0}];

const reducers = (state : ObjectWithNameArray =  initialArray , action: ItemAction) => {
  console.log("action payload",action.payload);
  switch (action.type) {
    case ItemActionType.ADD:
      return [...state,action.payload];
    case ItemActionType.UPDATE:
      return state;
    case ItemActionType.DELETE:
      return state;
    default:
      return state;
  }
};
export default reducers;