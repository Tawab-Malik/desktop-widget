import React from 'react';
import './App.css'; // Ensure your CSS is imported

const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Night Mode Button */}
      <div className='mainside'>
      <img src="./images/sidebar/chatui.svg" width={24} height={20}  alt="chatui icon" className="logo" />
      <div className="night-mode">
        <button className="night-mode-btn">NACHTMODUS</button>
      </div>
      </div>
      

      {/* Logo Section */}
      <div className="logo-section">
        <img src="./images/logo.png" width={205} height={67}  alt="ImmoTrust Logo" className="logo" />
        {/* <h1 className="company-name">ImmoTrust SCHWEIZ AG</h1> */}
      </div>

      {/* Menu Items */}
      <div className="menu">
        <MenuItem icon="/images/sidebar/city.svg" title="Immobilienlexikon" description="Immobilienwissen für alle Fälle." label="KI" />
        <MenuItem icon="/images/sidebar/elevator.svg" title="Preisschätzung" description="Den Wert Ihres Hauses schätzen lassen." label="LINK " />
        <MenuItem icon="/images/sidebar/clipboard.svg" title="Checklisten" description="Praktische Checklisten für jeden Schritt." label="PDF" active />
        <MenuItem icon="/images/sidebar/book.svg" title="Ratgeber" description="Immobilien-Expertenrat für Eigentümer." label="PDF" />
        <MenuItem icon="/images/sidebar/compass.svg" title="Mandatsnavigator" description="Verständlich zum Verkaufsabschluss." label="KI" />
        <MenuItem icon="/images/sidebar/golf.svg" title="Wohntraumfinder" description="Zum Traumheim mit KI-Unterstützung." label="KI" />
      </div>

      {/* User Profile */}
      <div className="profile-section">
        <img src="./images/sidebar/owner.svg" width={80} height={81} alt="Profile" className="profile-pic" />
        <div className="profile-details">
          <h2 className="profile-name">Immotrust AG</h2>
          <p className="profile-description">Vertrauensvolle Immobilienberatung seit 2008.</p>
          <p className="profile-owner">Carlos Kuk – Eigentümer</p>
        </div>
      </div>

      {/* Reviews */}
      <div className="reviews-section">
        
        <div className="stars">
          <img src='./images/sidebar/stars.svg' alt='img' />
        </div>
        <span className="reviews-text">4.9 VON 5 BASIEREND AUF 245 BEWERTUNGEN</span>
      </div>
    </div>
  );
};

const MenuItem = ({ icon, title, description, label, active }) => (
  <div className={`menu-item ${active ? 'active' : ''}`}>
    <div className="icon-title">
      <img src={icon} alt={`${title} icon`} className="menu-icon" />
      <div>
        <p className="menu-title">{title}</p>
        <p className="menu-description">{description}</p>
      </div>
    </div>
    <span className="menu-label">{label}</span>
  </div>
);

export default Sidebar;
