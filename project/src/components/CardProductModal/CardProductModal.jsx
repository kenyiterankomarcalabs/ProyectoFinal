import { IconMinus, IconPlus, IconX } from "@tabler/icons-react";
import s from "./CardProductModal.module.css";
import ReactDOM from "react-dom";
import { useState } from "react";
import Image from "../Image/Image";

function CardProductModal({ handleModal, product }) {
  const [counter, setCounter] = useState(0);
  const element = document.getElementById("modal");

  function onCloseModal() {
    handleModal();
  }

  function incrementar() {
    setCounter(counter + 1);
  }
  function decrementar() {
    if (counter == 0) return;
    setCounter(counter - 1);
  }

  return ReactDOM.createPortal(
    <div className={s.modal}>
      <div className={s.modal__content}>
        <button className={s.close} onClick={onCloseModal}>
          <IconX />
        </button>
        <div className={s.modal__content__image}>
          <Image image={product.image} />
        </div>
        <div className={s.modal__content__info}>
          <h2>{product.name}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            culpa dignissimos voluptatum totam repudiandae voluptate maiores.
          </p>

          <h4>Más opciones</h4>
          <button className={s.modal__content__button}>
            <span>Comprar solo uno </span>
            <span>{product.price}</span>
          </button>
          <button className={s.modal__content__button}>
            <span>Comprar 12 unidades</span>
            <span>$ 100.0</span>
          </button>

          <div className={s.modal__content__add}>
            <div className={s.modal__content__counter}>
              <button onClick={incrementar}>
                <IconPlus />
              </button>
              <span>{counter}</span>
              <button onClick={decrementar}>
                <IconMinus />
              </button>
            </div>
            <button className={s.modal__content__car}>Añadir al carrito</button>
          </div>
        </div>
      </div>
    </div>,
    element
  );
}

export default CardProductModal;
