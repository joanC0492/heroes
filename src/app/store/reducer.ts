import { IApp } from "../domain/app.interface";

type Types = "SET_HEROE";

interface Action {
  type: Types;
  payload: any;
}

export const reducer: React.Reducer<IApp, Action> = (state, action) => {
  switch (action.type) {
    case "SET_HEROE":
      console.log("Holi aqui estamos haciendo el set");
      return state;
    default:
      return state;
  }
};
