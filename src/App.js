import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstPage from "./firstPage";
import Content from "./content";

import PutContent from "./putContent";

export default function app() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<FirstPage />}/>
                <Route path="/content" element={<Content />} />
                <Route path="/putContent" element={<PutContent />} />
            </Routes>
        </BrowserRouter>
    )
}
