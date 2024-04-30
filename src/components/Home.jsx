import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import convo from '../images/convo.gif';
import './Home.css';
import config from '../config';

const Home = () => {
    const [userName, setUserName] = useState('');
    const [show, setShow] = useState(false);

    const userHome = async () => {
        try {
            const res = await fetch("/getdata", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            });
            const data = await res.json();
            setUserName(data.name);
            setShow(true);
            if (!res.status === 200) {
                throw new Error(res.error);
            }
        } catch (err) {
            console.error('Error fetching user data:', err);
        }
    }

    useEffect(() => {
        userHome();
    }, []);

    return (
        <div className="container">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <img src={convo} alt="Conversation" className="img-fluid" />
                </div>
                <div className="col-md-6">
                    <div className="text-center">
                        {userName ? (
                            <div>
                                <h2 className="welcome-text">Welcome Back, {userName}!</h2>
                                <p className="sub-text">File your grievances and track their status with ease.</p>
                            </div>
                        ) : (
                            <div>
                                <h2 className="welcome-text">Welcome to Student Grievance Management System</h2>
                                <p className="sub-text">Log in to manage your grievances or register for an account.</p>
                                <div className="mt-4">
                                    <NavLink to="/login" className="btn btn-primary mr-3">Login</NavLink>
                                    <NavLink to="/signup" className="btn btn-success">Sign Up</NavLink>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
