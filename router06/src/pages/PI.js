import "./PI.css";
import { NavLink } from "react-router-dom";
import RightArrow from "../images/216151_right_chevron_icon.png";
const Home = () => {
  return (
    <div>
      <h1>Sapataria</h1>
      <NavLink to="/products">Detalhes</NavLink>
    </div>
  );
};
export default Home;
