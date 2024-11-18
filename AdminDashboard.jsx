import React from "react";
import { Link } from "react-router-dom";
import "../Styles/AdminDashboard.css";

function AdminDashboard() {
    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <h1>Admin Dashboard</h1>
                <div className="admin-name">Hukuma Gupta</div>
            </header>
            <nav className="dashboard-nav">
                <ul>
                    <li>Home</li>
                    <li><Link to="/createemp">Create Employee</Link></li> {/* Link to create employee page */}
                    <li>Employee List</li>
                    <li>Logout</li>
                </ul>
            </nav>
            <main className="dashboard-content">
                <h2>Welcome!</h2>
                <p>Select an option from the menu to proceed.</p>
            </main>
        </div>
    );
}

export default AdminDashboard;