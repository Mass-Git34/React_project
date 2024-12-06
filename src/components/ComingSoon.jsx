import React from "react";   //React library to create component and use jsx

const ComingSoon = ({ message = "Coming Soon..." }) => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                fontSize: "3rem",
                fontWeight: "bold",
                textAlign: "center",
            }}
        >
            <h1
                style={{
                    background: "linear-gradient(90deg, #ff7eb3, #ff758c, #ff4a68, #ff758c, #ff7eb3)",
                    backgroundSize: "400% 100%",
                    color: "transparent",
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    animation: "colorShift 3s ease infinite",
                }}
            >
                {message}
            </h1>
            <style>
                {`
                @keyframes colorShift {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                `}
            </style>
        </div>
    );
};

export default ComingSoon;
