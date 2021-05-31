import './App.css';
import homepage from "./components/homepage";
import userdashboard from "./components/userdashboard";
import { BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <Router>
  
      <Route path="/" exact component={homepage} />
      <Route path="/userdashboard" component= {userdashboard}/>

    </Router>
  );
}

export default App;
