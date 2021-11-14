import { Dispatch } from "redux";
import { ActionType, ItemActionType } from "../action-types";
import { Action, ItemAction } from "../actions";

export const depositMoney = (amount: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.DEPOSIT,
      payload: amount,
    });
  };
};

export const withdrawMoney = (amount: number) => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.WITHDRAW,
      payload: amount,
    });
  };
};

export const bankruptMoney = () => {
  return (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.BANKRUPT,
    });
  };
};

export const addItem = (item: object) => {
  return (dispatch: Dispatch<ItemAction>) => {
    dispatch({
      type: ItemActionType.ADD,
      payload: item,
    });
  };
};
