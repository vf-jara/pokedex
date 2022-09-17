import Header from "./components/header/Header"
import Home from "./pages/Home/Home"
import { MainContainer } from "./styles"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import DisplayDetails from "./pages/DisplayDetails/DisplayDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/pokemon/:pokemon",
    element: <DisplayDetails />,
  },
])
function App() {
  return (
    <>
      <MainContainer>
        <RouterProvider router={router} />
      </MainContainer>

    </>
  )
}

export default App
