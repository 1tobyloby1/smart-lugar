import "./ListItem.css";
import Component from "shared/Models/Component";

function ListItem(props: Component) {
  return <div className="list-item-parent">
    <strong>{props.label}</strong>
    <div>{props.value}</div>
  </div>;
}

export default ListItem;
