import React from 'react'
import { Route, HashRouter } from "react-router-dom";
import Home from "./Home";
import Skills from "./Skills";
import Contact from "./Contact";
import Services from "./Services";
import Experience from "./Experience";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer'

const Main = () => {
    return (
      <HashRouter>
        <div className="bg-gray-50 dark:bg-gray-900">
          <Navbar />
          <div className="relative">
            <Route exact path="/" component={Home} />
            <Route path="/Skills" component={Skills} />
            <Route path="/contact" component={Contact} />
            <Route path="/Services" component={Services} />
            <Route path="/Experience" component={Experience} />
          </div>
          <Footer />
        </div>
      </HashRouter>
    );
}

export default Main
