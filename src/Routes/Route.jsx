import { Navigate, createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Category from "../Pages/Home/Category";
import NewsLayout from "../Layouts/NewsLayout";
import News from "../Pages/News/News";
import LoginLayout from "../Layouts/LoginLayout";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import PrivateRoute from "./PrivateRoute";
import Terms from "../Pages/Shared/Terms";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginLayout></LoginLayout>,
    children: [
      {
        path: "/",
        element: <Navigate to="/category/0"></Navigate>
      },
      {
        path: "login",
        element: <Login></Login>
      },
      {
        path: "register",
        element: <Register></Register>
      },
      {
        path: "terms",
        element: <Terms></Terms>
      }
    ]
  },
  {
    path: "/category",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: ":id",
        element: <Category></Category>,
        loader: ({params})=> fetch(`https://the-news-dragon-server-shakib232002-gmailcom.vercel.app/categories/${params.id}`)
      },
    ],
  },
  {
    path: "news",
    element: <NewsLayout></NewsLayout>,
    children: [
      {
        path: ":id",
        element: <PrivateRoute><News></News></PrivateRoute>,
        loader: ({params}) => fetch(`https://the-news-dragon-server-shakib232002-gmailcom.vercel.app/news/${params.id}`)
      }
    ]
  }
]);

export default router;
