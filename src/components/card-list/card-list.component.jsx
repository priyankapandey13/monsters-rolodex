import { Component } from "react";

class CardList extends Component {
render(){
    console.log(this.props);
    return(
         <div>{this.props.monsterlist.map((items) => (
            <p key={items.id}>{items.name}</p>
          ))}</div>
         )
    
}
}

export default CardList;