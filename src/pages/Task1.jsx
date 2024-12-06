import React from "react";  //React library to create component and use jsx
import ColorBox from "../components/ColorBox";

const Task1 = () => {
    const colors = [
        "red", "blue", "green", "yellow",
        "purple", "orange", "cyan", "pink",
    ];

    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)", // 4 columns
                gridTemplateRows: "repeat(2, 1fr)",  // 2 rows
                width: "100%",
                height: "100vh", // Full viewport height
            }}
        >
            {colors.map((color, index) => (
                <ColorBox key={index} color={color} text={`Box ${index + 1}`} />
            ))}
        </div>
    );
};

export default Task1;
