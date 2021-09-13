import React from "react";

const ChildrenData = ({ children }) => {
  return (
    <ul className="children">
      {children.map((data) => (
        <li>{data.name}</li>
      ))}
    </ul>
  );
};

export default ChildrenData;
