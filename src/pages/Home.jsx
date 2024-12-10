import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <h1>Welcome to My Tasks</h1>
      <hr />
      <p>Choose a task to view:</p>

      <div>
        <Link
          to="/task1"
          style={{
            margin: "1rem",
            padding: "1rem 2rem",
            backgroundColor: "#007bff",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "5px",
          }}
        >
          Go to Task 1
        </Link>
        <Link
          to="/task2"
          style={{
            margin: "1rem",
            padding: "1rem 2rem",
            backgroundColor: "#28a745",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "5px",
          }}
        >
          Go to Task 2
        </Link>
      </div>
    </div>
  );
};

export default Home;
