import React from "react";

const Header = () => {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0.5rem 1rem",
        backgroundColor: "#f8f9fa",
        borderBottom: "1px solid #ddd",
        fontSize: "14px",
        flexWrap: "wrap", // Allows wrapping for smaller screens
      }}
    >
      {/* Left Part: Logo and Tabler Text */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "0.5rem",
        }}
      >
        <img
          src="logo-placeholder.png"
          alt="Logo"
          style={{
            width: "30px",
            height: "30px",
            marginRight: "0.5rem",
          }}
        />
        <strong style={{ fontSize: "1.2rem", color: "#383838" }}>tabler</strong>
      </div>

      {/* Right Part: Source Code Button, Notification, Profile */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          flexWrap: "wrap", // Wraps content in smaller screens
        }}
      >
        {/* Source Code Button */}
        <button
          style={{
            padding: "0.3rem 0.8rem",
            border: "1px solid #007bff",
            borderRadius: "4px",
            backgroundColor: "transparent",
            color: "#007bff",
            fontWeight: "bold",
            fontSize: "13px",
            cursor: "pointer",
            transition: "background-color 0.2s ease",
          }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = "lightblue")}
          onMouseLeave={(e) => (e.target.style.backgroundColor = "transparent")}
        >
          Source Code
        </button>

        {/* Notification Icon */}
        <span
          style={{
            fontSize: "1.2rem",
            color: "#333",
            cursor: "pointer",
          }}
        >
          🔔
        </span>

        {/* Profile Section */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <img
            src="logo512.png"
            alt="Profile"
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
          <div>
            <p
              style={{
                margin: 0,
                fontWeight: "bold",
                fontSize: "0.9rem",
              }}
            >
              Jane Pearson
            </p>
            <p
              style={{
                margin: 0,
                fontSize: "0.8rem",
                color: "#666",
              }}
            >
              Administrator
            </p>
          </div>
        </div>
      </div>

      {/* Media Queries for Responsiveness */}
      <style>
        {`
          @media (max-width: 768px) {
            header {
              flex-direction: column;
              align-items: flex-start;
            }

            header div {
              margin-bottom: 0.5rem;
            }
          }

          @media (max-width: 480px) {
            header div {
              width: 100%;
              justify-content: space-between;
            }

            button {
              width: 100%;
              text-align: center;
            }
          }
        `}
      </style>
    </header>

  

    
  );
};

export default Header;
