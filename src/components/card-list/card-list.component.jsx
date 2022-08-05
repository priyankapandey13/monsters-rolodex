import "./card-list.styles.css";
import Card from "../card/card.component";

const CardList = ({ monsterlist }) => {
  return (
    <div className="card-list">
      {monsterlist.map((monster) => {
        return <Card monster={monster} key={monster.id} />;
      })}
    </div>
  );
};

export default CardList;
