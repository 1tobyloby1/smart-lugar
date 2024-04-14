import { useMemo } from "react";
import "./Container.css";
import { useNavigate } from "react-router-dom";
import { findIcon } from "../../functions/findIcon";
import Zone from "shared/Models/Zone";

function Container(props: Zone) {
  const navigate = useNavigate();

  return useMemo(() => {
    return (
      <div className="Container-parent" onClick={() => navigate(props.browseName)}>
        <div>
          <img className="Container-icon" src={findIcon("")} alt="icon" />
          <h3>{props.displayName}</h3>
        </div>
      </div>
    );
  }, [props, navigate]);
}

export default Container;
