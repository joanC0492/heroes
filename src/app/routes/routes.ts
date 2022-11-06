import { Dc, Login, Marvel, Search } from "../pages";

export enum AppRoutes {
  "DC" = "dc",
  "LOGIN" = "login",
  "MARVEL" = "marvel",
  "SEARCH" = "search",
}

interface IRoute {
  name: string;
  path: string;
  component: () => JSX.Element;
  to?: string;
}

export const routes: IRoute[] = [
  {
    name: "Login",
    component: Login,
    path: AppRoutes.LOGIN,
  },
  {
    name: "Marvel",
    component: Marvel,
    path: AppRoutes.MARVEL,
  },
  {
    name: "DC",
    component: Dc,
    path: AppRoutes.DC,
  },
  {
    name: "Search",
    component: Search,
    path: AppRoutes.SEARCH,
  },
];