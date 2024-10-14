import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <ul className="Container footer-categories">
        <li><Link to={"/posts/categories/SouthAmerica"}> South America </Link></li>
        <li><Link to={"/posts/categories/Asia"}> Asia </Link></li>
        <li><Link to={"/posts/categories/NorthAmerica"}> North America </Link></li>
        <li><Link to={"/posts/categories/Europe"}> Europe </Link></li>
        <li><Link to={"/posts/categories/Oceania"}> Oceania </Link></li>
        <li><Link to={"/posts/categories/Africa"}> Africa </Link></li>
        <li><Link to={"/posts/categories/CaribbeanCountries"}> Caribbean Countries </Link></li>
      </ul>
      <div className="footer-copyright">
       <small> &copy; Copyright all right reserve to - Gustavo Alvarado And Jovenes Creativos for ROFE Fundation
        </small>     </div>
    </footer>
  );
}

export default Footer;
