import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/AdminLogin.css";

function AdminLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    // Initialize the useNavigate hook
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();

        // Validate credentials
        if (email === "hukuma@gmail.com" && password === "hu123") {
            // Redirect to Admin Dashboard after successful login
            navigate("/admindashboard");
        } else {
            setError("Invalid Credentials. Please try again.");
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="form-group">
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="login-button">
                        Login
                    </button>
                </form>
                {error && <p className="error-message">{error}</p>} {/* Display error message */}
            </div>
        </div>
    );
}

export default AdminLogin;