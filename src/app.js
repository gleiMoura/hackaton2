import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function app() {
    return (
        <BrowserRouter>
            <Routes>
                <Route />
            </Routes>
        </BrowserRouter>
    )
}
import ReactDom from 'react-dom';
import App from "./app";

ReactDom.render(<App />, document.querySelector(".root"));