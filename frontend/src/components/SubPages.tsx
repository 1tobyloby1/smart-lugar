import Controller from "shared/Models/Controller";
import ReactPageScroller from "react-page-scroller";
import PageTabs from "./PageTabs/PageTabs";
import { useState } from "react";

interface SubPagesProps {
  children: JSX.Element[];
  controllers: Controller[];
}

const SubPages = (props: SubPagesProps) => {
  const [activePage, setactivePage] = useState(0);

  const changePage = (num: number) => {
    setactivePage(num);
  };

  return (
    <>
      <PageTabs
        onChange={changePage}
        current={activePage}
        controllers={props.controllers}
      />
      <ReactPageScroller
        animationTimer={500}
        pageOnChange={changePage}
        blockScrollDown={true}
        blockScrollUp={true}
        customPageNumber={activePage}
      >
        {props.children.map((child, index) => {
          return <div key={props.controllers[index].nodeId}>{child}</div>;
        })}
      </ReactPageScroller>
    </>
  );
};

export default SubPages;
