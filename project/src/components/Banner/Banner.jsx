import React from "react";
import s from "./Banner.module.css";

function Banner() {
  return (
    <section className={s.banner}>
      <img
        src="https://images.pexels.com/photos/1561147/pexels-photo-1561147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="image"
      />
    </section>
  );
}

export default Banner;
