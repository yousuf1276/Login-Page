import {useState } from 'react';
import './main.css'
import './util.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function Login() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log("hello");
        axios.get('http://localhost:8081/exam/login?name=' + name + '&password=' + password).then((res) => {
            console.log(res.data);
            if (res.data=="success"){
                navigate("/home");
            }
            else{
                setName("");
                setPassword("");
                navigate("/");
            }
    })
    }
    return (
        <div className="wrap-login100">
            <form
                onSubmit={handleSubmit}
                className="login100-form validate-form">
                <span className="login100-form-title p-b-43">
                    Login to continue
                </span>


                <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                    <input
                        className="input100"
                        type="text"
                        name="uname"
                        value={name}
                        onChange={(e) => {
                            console.log(e.target.value);
                            setName(e.target.value);
                        }}
                    />
                    <span className="focus-input100"></span>
                    <span className="label-input100">Username</span>
                </div>


                <div className="wrap-input100 validate-input" data-validate="Password is required">
                    <input
                        className="input100"
                        type="password"
                        name="pass"
                        value={password}
                        onChange={(e) => {
                            console.log(e.target.value);
                            setPassword(e.target.value);
                        }}
                    />
                    <span className="focus-input100"></span>
                    <span className="label-input100">Password</span>
                </div>

                <div className="flex-sb-m w-full p-t-3 p-b-32">
                    <div className="contact100-form-checkbox">
                        <input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
                        <label className="label-checkbox100" htmlFor="ckb1">
                            Remember me
                        </label>
                    </div>

                    <div>
                        <a href="#" className="txt1">
                            Forgot Password?
                        </a>
                    </div>
                </div>


                <div className="container-login100-form-btn">
                    <button className="login100-form-btn">
                        Login
                    </button>
                </div>

                <div className="text-center p-t-46 p-b-20">
                    <span className="txt2">
                        or sign up using
                    </span>
                </div>

                <div className="login100-form-social flex-c-m">
                    <a href="#" className="login100-form-social-item flex-c-m bg1 m-r-5">
                        <i className="fa fa-facebook-f" aria-hidden="true"></i>
                    </a>

                    <a href="#" className="login100-form-social-item flex-c-m bg2 m-r-5">
                        <i className="fa fa-twitter" aria-hidden="true"></i>
                    </a>
                </div>
            </form>
        </div>



    )
}
export default Login;