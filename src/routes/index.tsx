import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Home from "@src/pages/Home";
import Category from "@src/pages/Category";

const routes = (
    <BrowserRouter>
        <Routes>
            <Route element={<App />} >
                <Route path="/" index element={<Home />} />
                <Route path="*" element={<></>} />
                <Route path="/:game/categoria" element={<Category />} />
            </Route>
        </Routes>
    </BrowserRouter>
);


export default routes;
