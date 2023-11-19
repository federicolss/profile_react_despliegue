import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './component/Header';
import Home from './component/Home';
import About from './component/About';
import Hobbies from './component/Hobbies';
import Contact from './component/Contact';
import Footer from './component/Footer';
import NotFound from './component/NotFound';

function App() {
    return (
        <Router>
            <div>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/hobbies" element={<Hobbies />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
