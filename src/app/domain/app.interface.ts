import { IHeroe } from "./heroes.interface";

export interface IApp {
  heroe: IHeroe;
  setHeroe: (heroe: IHeroe) => void;
}
