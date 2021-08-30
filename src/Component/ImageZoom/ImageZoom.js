import React, { useState } from "react";
import { SideBySideMagnifier, TOUCH_ACTIVATION } from "react-image-magnifiers";
import { Link } from "react-router-dom";
import imageData from "./imageData";

const ImageZoom = () => {
  const [index, setIndex] = useState(0);

  const { image } = imageData[index];
  return (
    <div className="container">
      <nav>
        <ul>
          <li>
            <Link to="/">Back</Link>
          </li>
        </ul>
      </nav>
      <div className="imageZoom">
        <div
          style={{
            width: "auto",
            height: "400px",
            overflowY: "scroll",
            marginTop: "20px",
          }}
        >
          {imageData.map((img, ind) => (
            <div>
              <img
                style={{ width: "100px" }}
                onClick={() => setIndex(ind)}
                src={img.image}
                alt=""
              />
            </div>
          ))}
        </div>

        <div>
          <SideBySideMagnifier
            style={{ width: "400px" }}
            imageSrc={image}
            imageAlt="Example"
            touchActivation={TOUCH_ACTIVATION.DOUBLE_TAP}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageZoom;
