import CardText from "./CardText";

const RightContentCard = (props) => {
  return (
    <div className="h-full shadow-lg w-80 rounded-4xl shrink-0 relative">
      <img
        className="object-cover rounded-4xl w-full h-full"
        src={props.img}
        alt=""
      />
      <CardText tag = {props.tag} id = {props.id}/>
    </div>
  );
};

export default RightContentCard;
