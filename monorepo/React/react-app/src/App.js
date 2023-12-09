import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from './Layout'
import TitlePage from './components/TitlePage';
import Menu from './components/Menu';
import { StepProvider } from './context/stepContext';


const router = createBrowserRouter([
  {
    path: "",
    element:<Layout />,
    children: [
      {
        path: "",
        element: <Menu />
      },
      {
        path: "/:id",
        element:<TitlePage />,
      },
    ]
  }
]);


function App() {
  return (
    <StepProvider>
      <RouterProvider router={router} />;
    </StepProvider>
  )
}

export default App;
