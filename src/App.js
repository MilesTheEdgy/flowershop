import logo from './logo.svg';
import SideBar from "./Components/SideBar/SideBar.js";
import Cards from "./Components/Cards/Cards.js";
// import {Container, Row, Col} from "react-bootstrap";
import "./App.css";

function App() {
  return (
    <div>
      <div>
        <SideBar/>
        <Cards className = "Cards" />
      </div>
    </div>
  );
}

export default App;
