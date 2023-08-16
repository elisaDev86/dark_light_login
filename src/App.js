import React from "react";
import useLocalStorage from "use-local-storage";
import'./index.css'
function App() {

const [theme, setTheme]= useLocalStorage('theme' ? 'dark' : 'light')

const switchTheme = () => {
  const newTheme = theme === 'light' ? 'dark' : 'light';
  setTheme(newTheme)}

  return (
    <div className="app" data-theme={theme}>
      {/* START LOGIN*/}
      <div className="login">
        <h1>Login</h1>
        {/*START CONTAINER*/}
        <div className="container">
          {/*START TOP*/}
          <div className="top">
            <i class="fab fa-google"></i>
            <i class="fab fa-facebook-square"></i>
            <i class="fab fa-linkedin"></i>
            <i class="fab fa-twitter-square"></i>
            <i class="fab fa-apple"></i>
            </div>
          {/*END TOP*/}
           

          {/*START DIVIDER*/}
          <p className="divider"><span>Or</span></p>
          {/*END DIVIDER*/}

          {/*START FORM*/}
          <form>
            <label>E-mail</label>
              <input type="email" placeholder="Enter your email"></input>
            <label>Password</label>
              <input type="password" placeholder="Enter your password"></input>

            <div className="remember">
              <input type="checkbox" checked="cecked"></input>
              <p>Remember Me</p>
              <button>Log In</button>
            </div>
           </form>
            {/* END FORM*/}

            {/*START BOTTOM*/}
            <div className="bottom">
              <p>Forget your password?</p>
              <a href="/">Reset password</a>
            </div>
            {/*END BOTTOM*/}
          <p className="create">Create Account</p>
        </div>
        {/*END CONTAINER*/}

        {/*START TOOGLE*/}
        <div className="theme-toggle">
          <h2>Light Theme</h2>
          <i onClick={switchTheme} class='fas fa-toggle-on'></i>
        </div>
        {/*END TOOGLE*/}

        </div>
      {/* END LOGIN*/}
      
    </div>
  );
}

export default App;
