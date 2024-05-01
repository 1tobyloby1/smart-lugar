import { useMemo, useState } from "react";
import Slider from "../Slider/Slider";
import Toggle from "../Toggle/Toggle";
import "./ListItem.css";
import Controller from "shared/Models/Controller";

function ListItem(props: Controller) {
  const [isExpanded, setIsExpanded] = useState(false);

  const ExpandedBtn = useMemo(() => {
    return (
      <button
        className="expandable-button"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <img
          src={
            isExpanded ? "assets/icons/close.png" : "assets/icons/settings.png"
          }
          alt="expandable-button"
          height={30}
        />
      </button>
    );
  }, [isExpanded]);

  return (
    <div className="list-item-parent">
      <strong>{props.room}</strong>
      <Toggle {...props} />
      <div
        className="list-expandable"
        style={{ width: isExpanded ? "400px" : "0" }}
      >
        <div className="expandable-content">
          {props.SetPoint && <Slider {...props} />}
        </div>
      </div>
      {props.SetPoint && ExpandedBtn}
    </div>
  );
}

export default ListItem;
