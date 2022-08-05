import "./search-box.styles.css";

const SearchBox = (props) => {
  const {onChangehandler, placeholder} = props;
  return (
    <input
      type="text"
      onChange={onChangehandler}
      placeholder={placeholder}
      className="search-box"
    />
  );
};

export default SearchBox;
