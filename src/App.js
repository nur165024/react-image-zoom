import React, { useState } from "react";
import { SideBySideMagnifier, TOUCH_ACTIVATION } from "react-image-magnifiers";
import "./App.css";

function App() {
  const [index, setIndex] = useState(0);
  const data = [
    {
      image: "https://cdn.wallpapersafari.com/57/71/qJMmQd.jpg",
    },
    {
      image:
        "https://www.planetware.com/wpimages/2020/02/new-zealand-in-pictures-beautiful-places-to-photograph-milford-sound.jpg",
    },
    {
      image: "https://wallpaperaccess.com/full/1622665.jpg",
    },
    {
      image:
        "https://cdnassets.hw.net/79/1a/98d563c942e992b332f6ccbd854c/815389d5d8c74bb1b7219396a9f41cee.jpg",
    },
    {
      image:
        "https://3kjlrg166l6g26b4dd446009-wpengine.netdna-ssl.com/wp-content/uploads/2020/09/1_10784-07.jpg",
    },
    {
      image:
        "https://images.adsttc.com/media/images/500d/eba3/28ba/0d66/2500/1b32/newsletter/stringio.jpg?1414394368",
    },
  ];

  const { image } = data[index];

  const handleClick = (e) => {
    console.log(e);
  };

  return (
    <div className="container">
      <div className="imageZoom">
        <div style={{ cursor: "pointer" }} onClick={() => handleClick("up")}>
          Up
        </div>
        <div
          style={{
            width: "auto",
            height: "400px",
            overflowY: "scroll",
            marginTop: "20px",
          }}
        >
          {data.map((img, ind) => (
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
        <div style={{ cursor: "pointer" }} onClick={() => handleClick("down")}>
          down
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
}

export default App;
