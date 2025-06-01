import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import "./App.css";
import CreateEmployee from "./pages/create-employee/create-employee";
import Login from "./pages/login/login";
import Layout from "./component/layout/layout";
import NotFound from "./pages/errorpage/notfound";
import Details from "./pages/details/employee-details.tsx";
import EmployeeList from "./pages/employee-list/employee-list";
import EditEmployee from "./pages/edit-employee/edit-employee";
import { Provider } from 'react-redux'
import store from './store/store.ts'

const router = createBrowserRouter([
  { 
    path: "/",
    element: <Navigate to="/login" />


  },
 
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/employees",
    element: <Layout />,
    children: [{ index: true, element: <CreateEmployee /> },
      {  path:"details/:id",element:<Details/>},
    {path:"list",element:<EmployeeList/>},
    {path:":id",element:<EditEmployee/>},
    { path: "*", element: <NotFound /> } 
    ]
  },
  {
    path:"*",
    element:<NotFound/>
  }
  
 
]);

function App() {
  return (
    <>
       <Provider store={store}>
      <RouterProvider router={router} />
      </Provider>
    </>
  );
}

export default App;
 
//   const isLoggedIn=()=>{
//     const token=localStorage.getItem("isLoggedIn");
//     return token==="true";
//   }
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: isLoggedIn()?<Navigate to="/employees"/>:<Login />,
//   },
//   {
//     path: "/login",
//     element: !isLoggedIn()?<Navigate to="/"/>:<Login />,
//   },
 
//   {
//     path: "/employees",
//     element: <Layout />,
//     children: [{ index: true, element: <Employee /> }],
  
   
//   },
//   {
//     path:"*",
//     element:<NotFound/>
//   }
// ]);

