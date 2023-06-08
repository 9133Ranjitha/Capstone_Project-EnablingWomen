import React from 'react';
import './login.css';
//using state 
function LoginPage() {
  return (
    <body>
    <div class="cardPart">
        <div class="leftCard">
              <img className='logOne' src="loginLogo.png" alt="no image" />  
        </div>
        <div class="RightCard">
        <form>
            <h1>Login</h1>
            <input type="text" name="Name" placeholder="Enteryourname" id="Name" value={intailValue} />
            <input type="text" name="Password" placeholder="*********" id="password" value={intailpassword}  />
            <button class="LoginBtn">login</button>
            <p> not registed? <a href='SignUp.js'>SignUp</a></p>
        </form>
        </div>
    </div>
    </body>
  );

}

export default LoginPage;
