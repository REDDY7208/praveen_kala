import React, { useState } from 'react';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const [activeComponent, setActiveComponent] = useState('dashboard');

  const renderContent = () => {
    switch (activeComponent) {
      case 'dashboard':
        return <DashboardContent />;
      case 'addReport':
        return <AddReportContent />;
      case 'addUser':
        return <AddUserContent />;
      default:
        return <DashboardContent />;
    }
  };

  return (
    <div className="admin-dashboard-container">
      {/* Sidebar */}
      <div className="admin-dashboard-sidebar">
        <div className="admin-dashboard-logo">Admin Dashboard</div>
        <ul className="admin-dashboard-nav">
          <li onClick={() => setActiveComponent('dashboard')} className={activeComponent === 'dashboard' ? 'active-admin-dashboard-button' : ''}>Dashboard</li>
          {/* <li>My Wallet</li> */}
          <li onClick={() => setActiveComponent('addReport')} className={activeComponent === 'addReport' ? 'active-admin-dashboard-button' : ''}>Add Report</li>
         
        
       
          <li>Transaction</li>
        
          {/* <li onClick={() => setActiveComponent('addUser')} className={activeComponent === 'addUser' ? 'active-admin-dashboard-button' : ''}>Add User</li> */}
          {/* <li>Settings</li> */}
        </ul>
        <div className="admin-dashboard-monthly-report">
          {/* <button onClick={() => setActiveComponent('addReport')}>Generate Monthly Credit Report</button> */}
        </div>
      </div>

      {/* Main Content */}
      <div className="admin-dashboard-main-content">
        {renderContent()}
      </div>
    </div>
  );
};

// Dashboard Content
const DashboardContent = () => {
  return (
    <div className="admin-dashboard-dashboard-content">
      <h2 className="admin-dashboard-title">Dashboard Overview</h2>
      <ProfileSection />
      <ContactsSection />
    </div>
  );
};

// Profile Section Component
const ProfileSection = () => {
  return (
    <div className="admin-dashboard-profile-section">
      <h2>My Profile</h2>
      <div className="admin-dashboard-profile-info">
        <img src="profile-photo-url" alt="Profile" className="profile-photo" />
        <div className="profile-details">
          <h3>AdminName</h3>
          <p>admin@gmail.com</p>
          <p>Join on 24 March 2017</p>
          <div className="profile-social-icons">
            {/* <button>Email</button>
            <button>Phone</button>
            <button>Facebook</button> */}
          </div>
          <button className="edit-profile-btn">Edit Profile</button>
        </div>
      </div>
      <div className="admin-dashboard-coin-holdings">
        <div className="coin-holding">
          <h4>$65,123</h4>
          <p>BTC</p>
        </div>
     
       
      </div>
    </div>
  );
};

// Contacts Section Component
const ContactsSection = () => {
  return (
    <div className="admin-dashboard-contacts-section">
      <h2>User Details</h2>
      <ul className="contact-list">
        <li>
          <div className="contact-item">
            <img src="contact1-photo-url" alt="Contact 1" />
            <p>UserName</p>
            <div className="contact-actions">
              <button>Transfer</button>
           
            </div>
          </div>
        </li>
        <li>
          <div className="contact-item">
            <img src="contact2-photo-url" alt="Contact 2" />
            <p>Benny Cagur</p>
            <div className="contact-actions">
              <button>Transfer</button>
       
            </div>
          </div>
        </li>
        {/* Add more contacts here */}
      </ul>
    </div>
  );
};

// Add Report Content
const AddReportContent = () => {
  return (
    <div className="admin-dashboard-report-content">
      <h2 className="admin-dashboard-title">Generate Monthly Report</h2>
      <p className="admin-dashboard-text">Here you can generate reports for your monthly activities.</p>
      <button className="admin-dashboard-button">Generate Report</button>
    </div>
  );
};

// Add User Content
const AddUserContent = () => {
  return (
    <div className="admin-dashboard-user-content">
      <h2 className="admin-dashboard-title">Add New User</h2>
      <p className="admin-dashboard-text">Here you can add a new user to the system.</p>
      <form className="admin-dashboard-form">
        <div className="admin-dashboard-form-group">
          <label className="admin-dashboard-label">Username: </label>
          <input className="admin-dashboard-input" type="text" placeholder="Enter username" />
        </div>
        <div className="admin-dashboard-form-group">
          <label className="admin-dashboard-label">Email: </label>
          <input className="admin-dashboard-input" type="email" placeholder="Enter email" />
        </div>
        <div className="admin-dashboard-form-group">
          <label className="admin-dashboard-label">Password: </label>
          <input className="admin-dashboard-input" type="password" placeholder="Enter password" />
        </div>
        <button className="admin-dashboard-button" type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AdminDashboard;
