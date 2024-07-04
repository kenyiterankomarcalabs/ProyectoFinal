import React, { useEffect, useState } from "react";
import CardProduct from "../CardProduct/CardProduct";
import s from "./CardProductList.module.css";
import useStore from "../../store/store";

function CardProductList() {
  const { products, setProducts } = useStore();

  async function getProducts() {
    const response = await fetch("/api/productos.json");
    const json = await response.json();
    setProducts(json);
  }

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <section>
      <h1 className={s.title}>Bebidas</h1>
      <div className={s.products}>
        {products.length > 0 &&
          products.map((item, idx) => (
            <CardProduct
              key={idx}
              name={item.nombre}
              price={item.precio}
              image={item.image}
            />
          ))}
      </div>
    </section>
  );
}

export default CardProductList;
