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
      <div className="list-item-wrapper">
        <strong>{props.room}</strong>
        <Toggle {...props} />
      </div>
      {props.SetPoint && (
        <>
          <div
            className="list-expandable"
            style={{ width: isExpanded ? "350px" : "0" }}
          >
            <div className="expandable-content">
              <Slider {...props} />
            </div>
          </div>
          {ExpandedBtn}
        </>
      )}
    </div>
  );
}

export default ListItem;
