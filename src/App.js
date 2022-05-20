import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstPage from "./firstPage";
import Content from "./content";

import CadastroPosts from "./CadastroPosts";

export default function app() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FirstPage />}/>
                <Route path="/content" element={<Content />} />
                <Route path="/cadastro" element={<CadastroPosts />} />
            </Routes>
        </BrowserRouter>
    )
}
