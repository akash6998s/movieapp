import "./App.scss";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Home from "./components/Home/Home";
import MovieDetail from "./components/MovieDetail/MovieDetail";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:imbdID" element={<MovieDetail />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
