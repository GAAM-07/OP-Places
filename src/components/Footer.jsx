import { Link } from "react-router-dom";
import JClogo from "../assets/Img/JClogo.PNG"

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
        </small>
        <div className="rofe-logo">
        <img src={JClogo}alt="JC ROFÈ" className="logo-image" />
        <a className="rofeli" href="https://jovenes.tocaunavida.org/" target="_blank" rel="noopener noreferrer">
  Fundación ROFE <br /> Toca una Vida
</a>


      </div>    
         </div>
    </footer>
  );
}

export default Footer;
