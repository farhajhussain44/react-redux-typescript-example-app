interface DepositAction {
  type: "deposit";
  payload: number;
}

interface WithdrawAction {
  type: "withdraw";
  payload: number;
}

interface BancruptAction {
  type: "bankrupt";
}

interface AddItemAction {
  type: "add";
  payload: object;
}

interface UpdateItemAction {
  type: "update";
  payload: object;
}

interface DeleteItemAction {
  type: "delete";
  payload: number;
}

export type ItemAction = AddItemAction | UpdateItemAction | DeleteItemAction

export type Action = DepositAction | WithdrawAction | BancruptAction;
