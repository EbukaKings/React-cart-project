import React from "react";
import NavBar from "../components/NavBar";
import { useEffect, useState } from 'react';
import { Navigate, useNavigate } from "react-router-dom";

function Dashboard() {
    const [user, setUser] = useState({});
    const navigate = useNavigate
    // const [newName, setNewName] = useState('');
    function Location() {
        fetch()
    }

    useEffect(() => {
        const user = localStorage.getItem('user');
        if(user === null) {
            Navigate("login");
        }
        setUser(JSON.parse(user));
    });

    

    return (
        <div>
            <NavBar />
            <h1>Welcome Back, {user.username}!</h1>
            <p>Your last login IP: </p>

            <div>
                <p><h4>Portflio Overview</h4></p>
            </div>
            
        </div>
    );
}
export default Dashboard ;
