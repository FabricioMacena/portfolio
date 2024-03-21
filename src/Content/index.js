import MainPage from "../Pages/MainPage"
import DataSciencePage from "../Pages/DataSciencePage";
import DevelopmentPage from "../Pages/DevelopmentPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

export default function Content(){
    return(
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/datascience" element={<DataSciencePage />} />
                <Route path="/development" element={<DevelopmentPage />} />
            </Routes>
        </Router>
    )
}