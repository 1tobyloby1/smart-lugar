import { useState } from "react";
import Slider from "../Slider/Slider";
import Toggle from "../Toggle/Toggle";
import "./ListItem.css";
import Component from "shared/Models/Component";

function ListItem(props: Component) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="list-item-parent">
      <strong>{props.label}</strong>
      <Toggle {...props} />
      <div
        className="list-expandable"
        style={{ width: isExpanded ? "400px" : "0" }}
      >
        <div className="expandable-content">
          <Slider {...props} />
        </div>
      </div>
      <button
        className="expandable-button"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <img
          src={
            isExpanded ? "assets/icons/close.png" : "assets/icons/settings.png"
          }
          height={30}
        />
      </button>
    </div>
  );
}

export default ListItem;
