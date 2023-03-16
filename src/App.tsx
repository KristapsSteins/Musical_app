
import "./App.css";
import AvatarForm from "./components/AvatarForm/AvatarForm";
import { Routes, Route } from "react-router-dom";
import Gin from "./components/Gin/Gin";

const App = () => (
    <div className="container">
        <Routes>
            <Route path="/" index element={<AvatarForm />} />
            <Route path="/gin/:name/:src" element={<Gin />} />
        </Routes>
    </div>
);


export default App;
