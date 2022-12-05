import "./App.css";
import Header from "./Header";
import "./Header.css";
import Home from "./Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";

function App() {
  return (
    //BEM
    <Router>
      <div className="app">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/checkout"
            element={
              <div>
                <Header />
                <Checkout />
              </div>
            }
          />
          <Route
            path="/"
            element={
              <div>
                <Header />
                <Home />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
