import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Body from "./Body";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Body />
      </Router>
    </>
  );
}

export default App;
