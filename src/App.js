import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Items from "./components/Items/Items";
import AboutPage from "./components/AboutPage";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <Fragment>
      <Header />
      <Navigation />

      <Routes>
        <Route path="/" element={<Items />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Fragment>
  );
};

export default App;
