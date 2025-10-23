/* React Libraries */
import { Routes, Route } from "react-router-dom";

/* Components */
import Home from "../components/layout/Home";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import WhoWeAre from "../components/about/WhoWeAre";
import Objective from "../components/about/Objective";
import FoodList from "../components/database/FoodList";
import ContactUs from "../components/contact/ContactUs";
import Institution from "../components/contact/Institution";

function App() {
    return (
        <div className="font-main bg-main text-main min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <Routes>
                    <Route path="/Health_Factory_Website/" element={ <Home /> } />
                    <Route path="Health_Factory_Website/quemsomos" element={ <WhoWeAre /> } />
                    <Route path="Health_Factory_Website/objetivo" element={ <Objective /> } />
                    <Route path="Health_Factory_Website/alimentos" element={ <FoodList /> } />
                    <Route path="Health_Factory_Website/contatos" element={ <ContactUs /> } />
                    <Route path="Health_Factory_Website/instituicao" element={ <Institution /> } />
                </Routes>
            </main>
            <Footer />
        </div>
    );
};

export default App;