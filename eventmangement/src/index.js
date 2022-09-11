import React from "react"
import { createRoot } from "react-dom/client"
import App from "./component/App"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  Facilities,
  Signin,
  Signup,
} from "./component/App";
import 'bootstrap/dist/css/bootstrap.min.css';
import"./index.css"
import CreateEventPage from "./component/CreateEventPage";
const root = createRoot(document.getElementById("root"));
root.render(
  <>
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Facilities" element={<Facilities />} />
        <Route path="/CreateEventPage" element={<CreateEventPage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup/>} />
      </Routes>
      <Footer />
    </Router>
    <App />
  </>


)