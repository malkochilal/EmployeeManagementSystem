import { NavLink } from "react-router-dom";

import { isUserLoggedIn } from "../services/AuthService";
import { useNavigate } from "react-router-dom";
import { logout } from "../services/AuthService";
import ofisfoto from "./img/ofiskkb.png";

const HeaderComponent = () => {
  const isAuth = isUserLoggedIn();

  const navigator = useNavigate();
  function handleLogout() {
    logout();
    navigator("/login");
  }

  return (
    <div>
      <header>
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="http://localhost:3000">
            KKB Randevu Sistemine Hoşgeldiniz !
          </a>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav">
              {isAuth && (
                <li className="nav-item">
                  <NavLink to="/randevu" className="nav-link">
                    Randevu
                  </NavLink>
                </li>
              )}
            </ul>
          </div>

          <ul className="navbar-nav">
            {!isAuth && (
              <li className="nav-item">
                <NavLink to="/register" className="nav-link">
                  Kayıt Ol
                </NavLink>
              </li>
            )}
            {/* <li className="nav-item">
              <NavLink to="/register" className="nav-link">
                Kayıt Ol
              </NavLink>
            </li> */}
            {!isAuth && (
              <li className="nav-item">
                <NavLink to="/login" className="nav-link">
                  Giriş Yap
                </NavLink>
              </li>
            )}
            {/* <li className="nav-item">
              <NavLink to="/login" className="nav-link">
                Giriş Yap
              </NavLink>
            </li> */}
            {isAuth && (
              <li className="nav-item">
                <NavLink
                  to="/login"
                  className="nav-link"
                  onClick={handleLogout}
                >
                  Çıkış Yap
                </NavLink>
              </li>
            )}
          </ul>
        </nav>
        <div className="container-fluid p-0">
          <img src={ofisfoto} alt="" className="img-fluid w-100" />
        </div>
      </header>
    </div>
  );
};

export default HeaderComponent;
