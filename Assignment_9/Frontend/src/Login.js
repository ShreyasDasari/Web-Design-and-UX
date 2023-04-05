import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const LOGIN_URL = 'http://localhost:3001/user/login';


const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [emailValidity, setEmailValidity] = useState(false);
    const [passwordValidity, setPasswordValidity] = useState(false);
    const [credErrors, setcredErrors] = useState("");

    const navigate = useNavigate();

    const validateEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    }

    const validatePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
            let userLoginData = {
                email: email,
                password: password,
            };
            
                let response = await axios.post(LOGIN_URL, userLoginData);
                console.log(response);
                if (response.data.status === "OKAY") {
                   // sessionStorage.setItem("Email", response.data.result.email);
                    navigate("/home");
                }
                else{
                    console.log("Invalid credentials");
                }

            
    }


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-5 mx-auto">
                    <div className="card mt-5">
                        <div className="card-header" style={{backgroundColor: "#000000"}}>
                            <h3 className="mb-3" style={{color: "white"}}>Login</h3>
                        </div>
                        <div className="card-body" style={{backgroundColor: "#ffffff"}}>
                            <form id="loginForm" onSubmit={e => handleSubmit(e) }>
                                <div className="form-group mt-4">
                                    <label htmlFor="email" className="float-start mb-3">Email Id: </label>
                                    <input type="email" className="form-control" name="email" id="email" placeholder="Enter email id"
                                        onChange={validateEmail} value={email} required/>
                                </div>
                                <span className="text-danger">{emailError}</span>
                                <div className="form-group mt-4">
                                    <label htmlFor="pwd" className="float-start mb-3">Password: </label>
                                    <input type="password" className="form-control" name="pwd" id="pwd" placeholder="Enter password"
                                        onChange={validatePassword} value={password} required/>
                                </div>
                                <span className="text-danger float-start">{passwordError}</span>
                                <button type="submit" className="btn btn-primary mt-4">Submit</button>
                                <div className="mt-4"><span className="text-danger">{credErrors}</span></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;