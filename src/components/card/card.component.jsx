import "./card.styles.css";

const Card = ({ monster }) => {
  const {id, name, email} = monster;
  return (
    <div className="card-container">
      <img
        alt={`monsters ${name}`}
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      ></img>
      <h2 key={id}>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
