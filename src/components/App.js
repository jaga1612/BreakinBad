import React from "react";
import { unstable_HistoryRouter as Router, Route, Routes } from "react-router-dom";
import CharectorList from "./CherectorList";
import CharectorDetail from "./CherectorDetails";
import RandomCherectorDetails from "./RandomCherectorDetails";
import Header from "./Header";
import history from "../history";


const App = (props) => {
  return (
    <div className="container-fluid">
      <Router history={history}>
        <Header />
        <br/>
          <Routes>
          <Route path="/" element={<CharectorList />} />
          <Route path="/Details/:id" element={<CharectorDetail />} />
          <Route path="/Random" element={<RandomCherectorDetails />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
