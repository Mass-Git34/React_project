import React from "react"; //React library to create component and use jsx

const ColorBox = ({ color, text }) => {
  return (
    <div
      style={{
        backgroundColor: color,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        color: "#fff",
        fontSize: "1.5rem",
        fontWeight: "bold",
      }}
    >
      {text}
    </div>
  );
};

export default ColorBox;
