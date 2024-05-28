import { useState } from "react";
import { registerAPICall } from "../services/AuthService";

const RegisterComponent = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleRegistrationForm(e) {
    e.preventDefault();

    const register = { name, username, email, password };

    console.log(register);

    registerAPICall(register)
      .then((response) => {
        console.log(response.data);
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
              <h2 className="text-center"> Kullanıcı Kayıt Ekranı</h2>
            </div>

            <div className="card-body">
              <form>
                <div className="row mb-3">
                  <label className="col-md-3 control-label"> İsim</label>
                  <div className="col-md-9">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="İsminizi Giriniz"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    ></input>
                  </div>
                </div>
                <div className="row mb-3">
                  <label className="col-md-3 control-label">
                    {" "}
                    Kullanıcı Adı
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
                  <label className="col-md-3 control-label"> Email </label>
                  <div className="col-md-9">
                    <input
                      type="text"
                      name="email"
                      className="form-control"
                      placeholder="Email Adresinizi Giriniz"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    ></input>
                  </div>
                </div>

                <div className="row mb-3">
                  <label className="col-md-3 control-label"> Şifre: </label>
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
                    onClick={(e) => handleRegistrationForm(e)}
                  >
                    Kayıt Ol
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

export default RegisterComponent;
