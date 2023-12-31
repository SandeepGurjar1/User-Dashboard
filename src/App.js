import logo from './logo.svg';
import Team from './Pages/TeamMembers/Team';
import './App.css';
import Home from "./Pages/Home/Home"
import Salary from "./Pages/Salaries/Salary";
import {createBrowserRouter, RouterProvider,} from "react-router-dom"
const router = createBrowserRouter([
  {
    path:"/",
    element :<Home/>,
    
  },
  {
    path:"/team",
    element :<Team/>,
    
  },
  {
    path:"/salary",
    element :<Salary/>,
    
  },
]);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
