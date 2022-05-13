import "../Navbar.css";
import logo from "../images/react-icon-small.png"

export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="logo" className="logo-image"></img>
        <h3 className="logo-text">ReactFacts</h3>
      </div>
      <h4>React Course - Project 1</h4>
    </nav>
    );
}
