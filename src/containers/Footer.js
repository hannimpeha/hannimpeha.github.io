import React from "react";

const footerStyle = {
    backgroundColor: "#e36209",
    color: "white",
    textAlign: "left",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%"
};

const phantomStyle = {
    display: "block",
    padding: "20px",
    height: "30px",
    width: "100%"
};


export default function Footer({ children }) {
    return (
        <div>
            <div style={phantomStyle} />
            <div style={footerStyle}>{children}</div>
        </div>
    );
}