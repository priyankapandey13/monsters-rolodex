import { Component } from "react";

class SearchBox extends Component{
    render(){
        return(
            <input type="text" onChange={this.props.onChangehandler} placeholder={this.props.placeholder}/>
        )
    }
}

export default SearchBox;