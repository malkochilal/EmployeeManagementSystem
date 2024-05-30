import axios from "axios";

const AUTH_REST_API_BASE_URL = "http://localhost:8080/api/auth"




const registerAPICall = (registerObj) => axios.post(AUTH_REST_API_BASE_URL + '/register', registerObj)
const loginAPICall = (usernameOrEmail, password) => axios.post(AUTH_REST_API_BASE_URL + '/login', { usernameOrEmail, password });
const storeToken = (token) => localStorage.setItem("token", token); //Bu fonksiyon, belirtilen token değerini localStorage'da "token" adı altında saklar. Bu, tarayıcı kapandığında bile bilginin kaybolmayacağı anlamına gelir ve kullanıcının oturum bilgilerini (veya başka türde kimlik doğrulama belirteçlerini) saklamak için yaygın bir yöntemdir.
const getToken = () => localStorage.getItem("token"); //token'ı localstorage'den alıyor ve geri döndürüyor.Token yoksa null.Bu fonksiyon genellikle kullanıcının oturumunu kontrol etmek veya kimlik doğrulama belirtecini kullanarak API çağrıları yapmak gibi işlemlerde kullanılır.


//Bu fonksiyonlar genellikle kimlik doğrulama işlemlerinde kullanılır. 
//Örneğin, kullanıcı giriş yaptığında sunucudan aldığı JWT'yi storeToken fonksiyonu ile saklar ve sonraki isteklerde 
//bu token'ı almak için getToken fonksiyonunu kullanır.
// Bu sayede kullanıcı oturumunu koruyabilir ve yetkilendirme işlemlerini gerçekleştirebilirsiniz.


const saveLoggedInUser = (username) => sessionStorage.setItem("authenticatedUser", username);
//sessionStorage,bilgileri tarayıcı oturumu boyunca saklamak için kullanılır.tarayıcı yenilenirse kalır.Kapatılırsa silinir.


const isUserLoggedIn = () => {

    const username = sessionStorage.getItem("authenticatedUser");
    const password = sessionStorage.getItem("authenticatedUser")

    if (username == null || password == null) {
        return false;
    }
    else {
        return true;
    }

}


const getLoggedInUser = () => {
    const username = sessionStorage.getItem("authenticatedUser");
    const password = sessionStorage.getItem("authenticatedUser")
    return username, password;
}

const logout = () => {
    localStorage.clear();
    sessionStorage.clear();
}
export { registerAPICall, loginAPICall, isUserLoggedIn, getLoggedInUser, logout, storeToken, getToken, saveLoggedInUser }