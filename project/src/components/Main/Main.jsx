import s from "./Main.module.css";
import CustomInputSearch from "../CustomInputSearch/CustomInputSearch";
import CardProductList from "../CardProductList/CardProductList";
import Banner from "../Banner/Banner";

function Main() {
  return (
    <main className={s.main}>
      <Banner />
      <CustomInputSearch placeholder="Busca tu bebida favorita" radius={0.5} />
      <CardProductList />
    </main>
  );
}

export default Main;
