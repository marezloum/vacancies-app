import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import Home from "./pages/Home";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router";
import ComponentsDemo from "./pages/ComponentsDemo";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Provider } from "react-redux";
import store from "./store";
import Liked from "./pages/Liked";
import AddVacancy from "./pages/AddVacancy/AddVacancy";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/components" element={<ComponentsDemo />} />
            <Route path="/liked" element={<Liked />} />
            <Route path="/add" element={<AddVacancy />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
