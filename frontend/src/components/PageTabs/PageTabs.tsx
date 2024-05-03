import Controller from "shared/Models/Controller";
import "./PageTabs.css";

interface PageTabsProps {
  controllers: Controller[];
  current: number;
  onChange: (index: number) => void;
}

const PageTabs = (props: PageTabsProps) => {
  return (
    <ul className="page-tabs-parent">
      {props.controllers.map((controller, index) => {
        return (
          <li
            className={props.current === index ? "page-active" : ""}
            key={controller.room}
            onClick={() => props.onChange(index)}
          >
            {controller.room}
          </li>
        );
      })}
    </ul>
  );
};

export default PageTabs;
