import react from "react";
import reactDom from "react-dom/client";
import "./register.css";

const Register = () => {
    return (
        <div className="container">
                <div className="card">
                    <h2>Login</h2>
                    <form>
                        <input type="text" id="username" name="username" placeholder="Username" required/>
                        <input type="password" id="password" name="password" placeholder="Password" required/>
                        <button type="submit">Login</button>
                    </form>
                </div>
        </div>
    )
}

export default Register;