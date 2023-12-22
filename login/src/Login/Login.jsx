import React from "react";

const Login = () => {
    return(
            <div>

                <form action="">
                    <h1>LogIn</h1>
                    
                    <div>
                    <input type="text" placeholder="UserName" required />
                    </div>

                    <div>
                    <input type="password" placeholder="Password" required />
                    </div>

                    <button>LogIn</button>
                    <div>
                    <a href="#">LogIn with Facebook</a>
                    </div>
                    
                    <div>
                    <a href="#">Forgot Password</a><span>?</span>
                    </div>
                    
                </form>

                <div>
                    <div>
                        <p>Don't have an account<a href="#">SignUp</a></p>
                    </div>
                </div>
            </div>
    )
} 

export default Login;