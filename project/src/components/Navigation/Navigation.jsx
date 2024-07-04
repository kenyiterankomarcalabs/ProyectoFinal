import s from "./Navigation.module.css";
import CustomLink from "../CustomLink/CustomLink";
import {
  IconFileDescription,
  IconShoppingCart,
  IconUser,
} from "@tabler/icons-react";
import CustomInputSearch from "../CustomInputSearch/CustomInputSearch";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

function Navigation() {
  return (
    <header>
      <nav className={s.nav}>
        <ul>
          <li>
            <Link to="/">
              <img className={s.logo} src={logo} alt="logo" />
            </Link>
          </li>
        </ul>
        <CustomInputSearch
          placeholder="Ingresa tus productos favoritos"
          radius={5}
        />
        <ul>
          <li>
            <CustomLink
              icon={<IconFileDescription size={18} strokeWidth={1.5} />}
              route="/"
              text="Ordenes"
            />
          </li>
          <li>
            <CustomLink
              icon={<IconShoppingCart size={18} strokeWidth={1.5} />}
              route="/"
              text="Carrito"
            />
          </li>
          <li>
            <CustomLink
              icon={<IconUser size={18} strokeWidth={1.5} />}
              route="/"
              text="Perfil"
            />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navigation;
