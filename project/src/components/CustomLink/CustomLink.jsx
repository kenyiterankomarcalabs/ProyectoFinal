import s from "./CustomLink.module.css";
import { Link } from "react-router-dom";

function CustomLink({ text, icon, route }) {
  return (
    <Link to={route} className={s.link}>
      <span>{icon}</span>
      <span>{text}</span>
    </Link>
  );
}

export default CustomLink;
