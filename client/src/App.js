import "./App.css";
import Nav from "./components/Navbar/Nav";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Contact from "./Pages/Contact/Contact";
import About from "./Pages/About/About";
import Compose from "./Pages/Compose/Compose";
import Update from "./Pages/Update/Update";
import BlogDetail from "./Pages/BlogDetail/BlogDetail";

function App() {
  return (
    <>
            <Nav />
            {/* <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd-ycf73CqlvFZJrX2dIgxVvsmW5koi0Hpr4ufHeXPIA4QcOQ/viewform?embedded=true" width="640" height="812" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/compose" element={<Compose />} />
          <Route path="/update" element={<Update />} />
          <Route path="/blogs/:id" element={<BlogDetail />} />
        </Routes>
          <Footer />
    </>
  );
}

export default App;
