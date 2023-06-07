import React from 'react';
//connect rect.css  page 
import './sign.css';

//creating function
function Signup () {
    return (
            <div id="CardDepart">
                <div class="LeftSide">
                    <form>
                    <h1>SignUp</h1>
                    <input type="text" name="Name" placeholder="Enteryourname" id="Name" />
                    <input type="text" name="Password" placeholder="*********" id="password" />
                    <input type="text" name="Email" placeholder="Enter Your Email" id="password" />
                    <div className='BoxContainer'>
                    <input type='checkbox' className='checkBox' placeholder='ok'></input>
                    <label>i agree all terms policy</label>
                    </div>
                    <button class="signBtn">SignUp</button> <br />              
                    <span>Forget Password?</span>
                   
                    </form>
                </div>
                <div class="RightSide">
                    <img className='signOne' src="loginLogo.png" alt="no image" /> 
                </div>
            </div>
        
    )
}
export default Signup ;