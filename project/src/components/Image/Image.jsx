import React from "react";
import { useState } from "react";

function Image({ image }) {
  let [errorImage, setErrorImage] = useState(false);
  function handleError() {
    setErrorImage(true);
  }
  return (
    <img
      src={
        errorImage
          ? "https://images.pexels.com/photos/4271933/pexels-photo-4271933.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          : image
      }
      alt="image"
      onError={handleError}
    />
  );
}

export default Image;
