import React from "react";
import crash from "@assets/crash.jpg";
import "@assets/css/error.css";

const Error = () => {
    return (
        <div className="error">
            <img src={crash} alt="Plane crash" />
            <div>
                <h1>Error</h1>
                <p>Well, good luck.</p>
            </div>
        </div>
    );
};

export default Error;
