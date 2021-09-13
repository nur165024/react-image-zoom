import CircularProgress from "@material-ui/core/CircularProgress";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ChildrenData from "./ChildrenData";

const Category = () => {
  const [data, setData] = useState([]);
  const [children, setChildren] = useState([]);
  const [childId, setChildId] = useState("");

  useEffect(() => {
    Axios.get("http://localhost:5000/api/category").then((res) =>
      setData(res.data.categoryList)
    );
  }, []);

  const handleClick = (childrenData, id) => {
    setChildren(childrenData);
    setChildId(id);
  };

  // console.log("data", data);
  console.log("children", children);

  return (
    <div className="container">
      <nav>
        <ul>
          <li>
            <Link to="/">Back</Link>
          </li>
        </ul>
      </nav>

      <ul className="categoryList">
        {data.length === 0 ? (
          <CircularProgress />
        ) : (
          data.map((category, index) => (
            <li key={index}>
              <button
                onClick={() => handleClick(category.children, category._id)}
              >
                {category.name}
              </button>
              {category._id === childId && (
                <ChildrenData children={children}></ChildrenData>
              )}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Category;
