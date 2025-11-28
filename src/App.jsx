import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Navbar from "./componets/Navbar";
import Home from "./componets/Home";
import Pastes from "./componets/Pastes";
import ViewPaste from "./componets/ViewPaste";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Home />
      </div>
    ),
  },
  {
    path: "/pastes",
    element: (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <Pastes />
      </div>
    ),
  },
  {
    path: "/pastes/:id",
    element: (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <ViewPaste />
      </div>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
