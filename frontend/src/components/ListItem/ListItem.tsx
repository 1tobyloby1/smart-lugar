import Slider from "../Slider/Slider";
import Toggle from "../Toggle/Toggle";
import "./ListItem.css";
import Component from "shared/Models/Component";

function ListItem(props: Component) {
  return <div className="list-item-parent">
    <strong>{props.label}</strong>
    <Toggle {...props} />
    <Slider {...props} />
  </div>;
}

export default ListItem;
