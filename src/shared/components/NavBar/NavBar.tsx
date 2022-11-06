import { routes } from "../../../app/routes/routes";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="bg-gray-900 text-neutral-200 px-5">
      <div className="container mx-auto">
        <ul className="flex items-center ">
          {routes.map((route) => {
            if (route.path === "login") return;
            return (
              <li key={route.name}>
                <NavLink
                  to={route.path}
                  className={({ isActive }) =>
                    `py-3 px-4 inline-block hover:bg-gray-800 ease-in-out duration-300 border-b-2 border-b-transparent ${
                      isActive ? "bg-gray-800 border-b-2 border-b-gray-300" : ""
                    }`
                  }>
                  {route.name}
                </NavLink>
              </li>
            );
          })}
          <li className="ml-auto">Logout</li>
        </ul>
      </div>
    </nav>
  );
};
