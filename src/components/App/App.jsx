import Home from "../../views/Home/Home";
import Player from "../../views/Player/Player";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Route, Routes } from "react-router-dom";
import './app.scss';
import { Analytics } from '@vercel/analytics/react';


const App = () => {


    return (
        <div id="app">
            <Analytics />
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/player/:slug" element={<Player />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
