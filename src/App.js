import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect, checkAccount } from "./redux/blockchain/blockchainActions";
import { fetchData } from "./redux/data/dataActions";
import * as s from "./styles/globalStyles";
import styled from "styled-components";

import { HomePage } from "./pages/HomePage";
import { MintPage } from "./pages/MintPage";
import { LandingPage } from "./pages/LandingPage";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/mint" element={<MintPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
