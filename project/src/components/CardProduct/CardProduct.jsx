import { useState } from "react";
import s from "./CardProduct.module.css";
import CardProductModal from "../CardProductModal/CardProductModal";
import Image from "../Image/Image";

function CardProduct({ name, price, image }) {
  let [modal, setModal] = useState(false);
  let [errorImage, setErrorImage] = useState(false);
  function handleModal() {
    setModal(!modal);
  }

  function handleError() {
    setErrorImage(true);
  }
  return (
    <>
      {modal && (
        <CardProductModal
          handleModal={handleModal}
          product={{ name, price, image }}
        />
      )}

      <button className={s.card} onClick={handleModal}>
        <Image image={image} />
        <h4>{name}</h4>
        <p>{price}</p>
      </button>
    </>
  );
}
export default CardProduct;
