import { Component } from "react";
import "./search-box.styles.css";

class SearchBox extends Component {
  render() {
    return (
      <input
        type="text"
        onChange={this.props.onChangehandler}
        placeholder={this.props.placeholder}
        className="search-box"
      />
    );
  }
}

export default SearchBox;
