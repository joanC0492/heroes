import { Routes, Route } from "react-router-dom";
import { Layout } from "../../shared/components/Layout/Layout";
import { AppProvider } from "../store/context";
import { routes } from "./routes";

export const AppRouter = () => {
  return (
    <AppProvider>
      <Layout>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}
            />
          ))}
        </Routes>
      </Layout>
    </AppProvider>
  );
};
