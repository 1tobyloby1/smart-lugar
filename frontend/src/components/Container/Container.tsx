import { useMemo } from "react";
import "./Container.css";
import { useNavigate } from "react-router-dom";
import { findIcon } from "../../functions/findIcon";

interface ContainerProps {
  title: string;
  image: string;
  href: string;
}

function Container(props: ContainerProps) {
  const navigate = useNavigate();

  return useMemo(() => {
    return (
      <div className="Container-parent" onClick={() => navigate(props.href)}>
        <div>
          <img className="Container-icon" src={findIcon(props.image)} alt="icon" />
          <h3>{props.title}</h3>
        </div>
      </div>
    );
  }, [props, navigate]);
}

export default Container;
