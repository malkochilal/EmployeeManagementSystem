import { useState } from "react";
import {
  loginAPICall,
  saveLoggedInUser,
  storeToken,
} from "../services/AuthService";
import { useNavigate } from "react-router-dom";

const LoginComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigator = useNavigate();

  async function handleLoginForm(e) {
    e.preventDefault();

    await loginAPICall(username, password)
      .then((response) => {
        console.log(response.data);

        const token = "Basic " + window.btoa(username + ":" + password);
        //window.btoa() yöntemi, verilen bir dizgiyi Base64 formatında kodlamak için kullanılan bir JavaScript fonksiyonudur. "btoa" kısaltması "binary to ASCII"
        //(ikili veriden ASCII'ye) anlamına gelir. Bu yöntem, özellikle kullanıcı arayüzü tarafından oluşturulan verileri kodlamak için sıkça kullanılır.
        storeToken(token);

        saveLoggedInUser(username);
        navigator("/randevu");

        window.location.reload(false);
        //bu sayfayı önbellekten yeniden yükler.tarayıcının önbelleğinde saklanan kaynakları kullanarak sayfayı yeniden yükler.
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <div className="container">
      <br /> <br />
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header">
              <h2 className="text-center"> Kulanıcı Girişi </h2>
            </div>

            <div className="card-body">
              <form>
                <div className="row mb-3">
                  <label className="col-md-3 control-label">
                    {" "}
                    Kullanıcı Adı veya Email
                  </label>
                  <div className="col-md-9">
                    <input
                      type="text"
                      name="username"
                      className="form-control"
                      placeholder="Kullanıcı Adınızı Giriniz"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    ></input>
                  </div>
                </div>

                <div className="row mb-3">
                  <label className="col-md-3 control-label"> Password </label>
                  <div className="col-md-9">
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Şifrenizi Giriniz"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    ></input>
                  </div>
                </div>

                <div className="form-group mb-3">
                  <button
                    className="btn btn-primary"
                    onClick={(e) => handleLoginForm(e)}
                  >
                    Giriş Yap
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
