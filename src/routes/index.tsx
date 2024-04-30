import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Home from "@src/pages/Home";
import Container from "@src/components/Container";

const routes = (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} >
                <Route index element={<Home />} />
                <Route path="teste" element={<Container><p data-joy="TRES">TESTE</p></Container>} />
            </Route>
        </Routes>
    </BrowserRouter>
);


export default routes;
