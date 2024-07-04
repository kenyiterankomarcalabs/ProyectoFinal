import { IconSearch } from "@tabler/icons-react";
import s from "./CustomInputSearch.module.css";
import useStore from "../../store/store";

function CustomInputSearch({ radius, placeholder }) {
  const { filterByName, backupProducts } = useStore();
  function handleChange(e) {
    const value = e.target.value;
    backupProducts();
    filterByName(value);
  }

  return (
    <div className={s.input__box} style={{ borderRadius: `${radius}rem` }}>
      <IconSearch size={16} />

      <input
        type="text"
        className="input"
        placeholder={placeholder}
        onChange={(e) => handleChange(e)}
      />
    </div>
  );
}

export default CustomInputSearch;
