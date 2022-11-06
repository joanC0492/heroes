import { createContext, useReducer } from "react";
import { reducer } from "./reducer";
import { IApp } from "../domain/app.interface";
import { IHeroe } from "../domain/heroes.interface";

interface IProps {
  children?: React.ReactNode;
}

const initialState: IApp = {
  heroe: {} as IHeroe,
  setHeroe: (heroe: IHeroe) => {},
};

const AppContext = createContext(initialState);

const AppProvider: React.FC<IProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setHeroe = (heroe: IHeroe) => {
    dispatch({
      type: "SET_HEROE",
      payload: heroe,
    });
  };

  return (
    <AppContext.Provider
      value={{
        heroe: state.heroe,
        setHeroe: (heroe: IHeroe) => setHeroe(heroe),
      }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };