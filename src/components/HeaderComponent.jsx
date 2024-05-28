import { NavLink } from "react-router-dom";
import ofisfoto from "./img/ofiskkb.png";

const HeaderComponent = () => {
  return (
    <div>
      <header>
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="https://www.kkb.com.tr/">
            KKB Randevu Sistemine Hoşgeldiniz !
          </a>

          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to="/register" className="nav-link">
                Kayıt Ol
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/login" className="nav-link">
                Giriş Yap
              </NavLink>
            </li>
          </ul>
        </nav>
        <div>
          <img src={ofisfoto} alt="" className="resim" />
        </div>
      </header>
    </div>
  );
};

export default HeaderComponent;
