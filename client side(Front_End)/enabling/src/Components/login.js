import React from 'react';
import './login.css';
function LoginPage() {
  return (
    <div class="cardPart">
        <div class="leftCard">
              <img className='logOne' src="loginLogo.png" alt="no image" />  
        </div>
        <div class="RightCard">
        <form action="">
            <label htmlFor="Name"><b>UserName:</b></label>
            <input type="text" name="Name" placeholder="Enteryourname" id="Name" /><br />
            <label htmlFor='password'><b>Password:</b></label>
            <input type="text" name="Password" placeholder="*********" id="password" />
        </form>
        </div>
    </div>
  );

}

export default LoginPage;
