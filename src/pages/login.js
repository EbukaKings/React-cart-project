import React, { useState } from "react";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router-dom";

function Login() {
    const [inputValues, setInputValues] = useState({});
    const [response, setResponse] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate(); 

    function getInpt(e) {
        const value = e.target.value;
        const name = e.target.name;
        setInputValues(values => ({ ...values, [name]: value }));
    }

    function login() {
        setIsLoading(true);
        setResponse({});
        fetch("https://api.medlifelink.life/api/login_user", {
            method: "POST",
            body: JSON.stringify(inputValues),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
        .then(response => response.json())
        .then(data => {
            if (data["status"] === true) {
                // Proceed to dashboard
                localStorage.setItem("user", JSON.stringify(data["data"]));
                navigate("/dashboard");
            }
            setIsLoading(false);
            console.log(data);
            setResponse(data);
        })
        .catch(err => {
            console.log(err.message);
            setIsLoading(false); // Ensure loading state is stopped on error
        });
    }

    return (
        <div>
            <NavBar />
            <div className="m-5 p-5">
                <form>
                    <center>
                        <h1>Login Form</h1>
                    </center>
                    <p>{JSON.stringify(response)}</p>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        onChange={getInpt} // Use onChange instead of onKeyUp for better UX
                    />
                    <br />
                    <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Password"
                        onChange={getInpt} // Use onChange instead of onKeyUp for better UX
                    />
                    <br />
                    {isLoading ? (
                        <div>
                            <div className="spinner-border"></div>
                        </div>
                    ) : null}
                    <input
                        type="button"
                        value="login"
                        className="btn btn-primary"
                        onClick={login}
                    />
                </form>
            </div>
        </div>
    );
}

export default Login;
