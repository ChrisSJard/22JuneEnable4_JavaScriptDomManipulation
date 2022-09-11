import React from "react";

const BlogHeader = ({ title, description }) => {

    const headerStyle = {
        backgroundColor: "rgb(50, 58, 110)",
        color: "white"
    }

    return (
        <header style={headerStyle}>
            <h1>{title}</h1>
            <p>{description}</p>
        </header>
    );
}

export default BlogHeader;