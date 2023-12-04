import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./routes/Login";
import Home from "./pages/Home/Home";
import { DropdownProvider } from "./context/DropdownContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home />,
  },
]);

function App() {
  return (
    <DropdownProvider>
      <RouterProvider router={router} />
    </DropdownProvider>
  );
}

export default App;
