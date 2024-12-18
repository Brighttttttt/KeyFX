import './App.css';
import MainPage from './pages/Index';
import {createBrowserRouter, RouterProvider} from "react-router";
import AboutPage from "./pages/AboutPage";
import ContactUsPage from "./pages/ContactUsPage";
import {NextUIProvider} from "@nextui-org/react";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage/>,
    },
    {
        path: "/about",
        element: <AboutPage/>,
    },
    {
        path: "/contact-us",
        element: <ContactUsPage/>,
    },
], {});

function App() {
    return (
        <NextUIProvider>
            <RouterProvider router={router}/>
        </NextUIProvider>
    );
}

export default App;
