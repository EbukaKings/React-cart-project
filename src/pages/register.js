import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import { useNavigate } from "react-router-dom";

function Register() {
    const [inputValues, setInputValues] = useState({
        email: '',
        role: 'patient',
        username: '',
        password: '',
    });
    const [response, setResponse] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    function handleChange(e) {
        const { name, value } = e.target;
        setInputValues(prevValues => ({ ...prevValues, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        setResponse('');

        fetch('https://api.medlifelink.life/api/create_user', {
            method: 'POST',
            body: JSON.stringify(inputValues),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === true) {
                localStorage.setItem("user", JSON.stringify(data.data));
                navigate("/dashboard");
            }
            setIsLoading(false);
            console.log(data);
            setResponse(data.message || ''); // Extract a message or set empty if undefined
        })
        .catch(err => {
            console.error('Request failed:', err);
            setResponse(`Error: ${err.message}`);
            setIsLoading(false);
        });
    }

    return (
        <div>
            <NavBar />
            <div>
                <div className="m-5 p-5">
                    <form onSubmit={handleSubmit}>
                        <center>
                            <h1>Register</h1>
                        </center>
                        <p>{typeof response === 'string' ? response : JSON.stringify(response)}</p>
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Email"
                            value={inputValues.email}
                            onChange={handleChange}
                            required
                        />
                        <br />
                        <input
                            type="text"
                            name="username"
                            className="form-control"
                            placeholder="Username"
                            value={inputValues.username}
                            onChange={handleChange}
                            required
                        />
                        <br />
                        <input
                            type="password"
                            name="password"
                            className="form-control"
                            placeholder="Password"
                            value={inputValues.password}
                            onChange={handleChange}
                            required
                        />
                        <br />
                        <select
                            name="role"
                            className="form-control"
                            value={inputValues.role}
                            onChange={handleChange}
                        >
                            <option value="patient">Patient</option>
                            <option value="doctor">Doctor</option>
                            <option value="admin">Admin</option>
                        </select>
                        <br />
                        {isLoading && <div className="spinner-border"></div>}
                        <button type="submit" className="btn btn-primary">
                            Create User
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Register;
