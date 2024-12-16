import './App.css';
import MainPage from './pages/Index';
import {createBrowserRouter, RouterProvider} from "react-router";
import AboutPage from "./pages/AboutPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage/>,
    },
    {
        path: "/about",
        element: <AboutPage/>,
    },
], {});

function App() {
    return (
        <RouterProvider router={router}/>
    );
}

export default App;
