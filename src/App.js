import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import Home from './pages/home';
import Q1 from './pages/q1';
import Q2 from './pages/q2';
import Q3 from './pages/q3';
import Q4 from './pages/q4';
import Q5 from './pages/q5.js';
import End from './pages/end';

import './App.css';

function App() {

  // const [ user, setUser ] = useState({
  //   email: localStorage.getItem('email'),
  //   access: localStorage.getItem('access')
  // })
  // const [access, setaccess] = useState(
  //   localStorage.getItem('access')
  // )

  // const unsetUser = () => {
  //   localStorage.clear();
  // }

  return (
    <Router>
        <Routes>
          <Route exact path="/" element= {<Home />} /> 
          <Route exact path="Q1" element= {<Q1 />} /> 
          <Route exact path="Q2" element= {<Q2 />} />
          <Route exact path="Q3" element= {<Q3 />} />
          <Route exact path="Q4" element= {<Q4 />} />
          <Route exact path="Q5" element= {<Q5 />} />
          <Route exact path="end" element= {<End />} /> */}
        </Routes>
    </Router>
  );
}

export default App;