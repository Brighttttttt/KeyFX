import './App.css';
import MainPage from './pages/Index';
import {createBrowserRouter, RouterProvider} from "react-router";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage/>,
    },
], {});

function App() {
    return (
        <RouterProvider router={router}/>
    );
}

export default App;
