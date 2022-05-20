import { BrowserRouter, Routes, Route } from "react-router-dom";

import CadastroPosts from "./CadastroPosts";

export default function app() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/cadastro" element={<CadastroPosts />} />
            </Routes>
        </BrowserRouter>
    )
}
