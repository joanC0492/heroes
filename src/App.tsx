import { AppRouter } from "./app/routes/AppRouter";
import { BrowserRouter } from "react-router-dom";
import { NavBar } from "./shared/components/NavBar/NavBar";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
