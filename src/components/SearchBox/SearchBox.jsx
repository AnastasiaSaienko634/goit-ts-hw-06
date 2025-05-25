import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";
import { RiPhoneFindLine } from "react-icons/ri";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name);

  const setSearchContact = (event) => {
    const searchQuery = event.target.value;
    dispatch(changeFilter(searchQuery));
  };

  return (
    <div className={css.searchBoxContent}>
      <label htmlFor="searchBox">
        Find contacts by name...
        <RiPhoneFindLine className={css.icon} />
        <input
          className={css.searchBox}
          type="text"
          id="searchBox"
          value={filter}
          onChange={setSearchContact}
        />
      </label>
    </div>
  );
}
