import useDebounce from "../../hooks/useDebounce";

function Search({updateSearchTerm}) {
    const debouncedCallback = useDebounce((e) => updateSearchTerm(e.target.value))
  return (
    <input
      className="search w-[50%]  py-[20px] px-[30px]  my-[20px] text-black placeholder:text-black"
      placeholder="pokemon name...."
      onChange={debouncedCallback}

    />
  );
}

export default Search;
