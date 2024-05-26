import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "@/routes";
import { UIContextProviders } from "./contaxt/ui-context";

function App() {
  return (
    <UIContextProviders>
      <RouterProvider router={router} />
    </UIContextProviders>
  );
}

export default App;
