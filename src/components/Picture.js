import React from "react";

const Picture = ({ data }) => {
  return (
    <div className="picture">
      <p> 攝影師:{data.photographer}</p>
      <div className="imageContainer">
        <img src={data.src.large} alt="" />
      </div>
      <p>
        <a target="_blank" href={data.src.large}>
          下載點這裡一下
        </a>
      </p>
    </div>
  );
};

export default Picture;
