import './App.css';
import Header from './common/header/header';
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Pages from './pages/pages';
function App() {
  return (
  <>
    <Router>
      <Header /> 
        <Switch>
          <Route path="/" exact >
            <Pages />
          </Route>
        </Switch>
    </Router>
  </>
  );
}

export default App;
