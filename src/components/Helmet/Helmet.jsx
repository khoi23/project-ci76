import React from "react";

const Helmet = (props) => {
    document.title = "Store Fizza - " + props.title;
    return <div className="w-100">{props.children}</div>;
};

export default Helmet;
