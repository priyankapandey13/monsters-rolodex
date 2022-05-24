import { Component } from "react";
import "./card-list.styles.css";
import Card from "../card/card.component";

class CardList extends Component {
render(){
    const {monsterlist} = this.props;
    return(
         <div className="card-list">
         
         {monsterlist.map((monster) => 
         { 
          
          return (
            <Card monster = {monster}/>
           
          )})}
          
          </div>
         );
    
}
}

export default CardList;