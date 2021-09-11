import React from "react";
import { BrowserRouter as Router, Route} from 'react-router-dom'
import LandingPage from 'pages/LandingPage';
import DetailPage from 'pages/DetailPage';
import "./assets/scss/style.scss";
function App() {
  return <>
    <div className="App">
      <Router>
          <Route path="/DetailPage" component={DetailPage}></Route>
          <Route path="/" component={LandingPage}></Route>
         
      </Router>
    </div>
  </>
}

export default App;
