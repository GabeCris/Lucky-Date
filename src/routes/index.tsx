import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Home from "@src/pages/Home";
import Category from "@src/pages/Category";
import Items from "@src/pages/Items/Items";
import Games from "@src/pages/Games/Games";

const routes = (
    <BrowserRouter>
        <Routes>
            <Route element={<App />} >
                <Route path="/" index element={<Home />} />
                <Route path="*" element={<></>} />
                <Route path="/:game/categoria" element={<Category />} />
                <Route path="/:game/:category/items" element={<Items />} />
                <Route path="/:game/:category/jogar" element={<Games />} />
            </Route>
        </Routes>
    </BrowserRouter>
);


export default routes;
