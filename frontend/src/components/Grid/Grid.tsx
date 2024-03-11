import { ReactNode } from "react";
import "./Grid.css";

interface GridProps {
  children: ReactNode;
}

function Grid(props: GridProps) {
  return <div className="Grid-parent">{props.children}</div>;
}

export default Grid;
