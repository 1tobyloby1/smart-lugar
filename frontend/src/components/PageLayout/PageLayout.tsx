import "./PageLayout.css";
import { ReactNode } from "react";
import BackBtn from "../BackBtn/BackBtn";

interface PageLayoutProps {
  title: string;
  subTitle: string;
  children: ReactNode;
}

function PageLayout(props: PageLayoutProps) {
  return (
    <div className="PageLayout-parent">
      <h4>{props.subTitle}</h4>
      <h1>{props.title}</h1>
      <div className="PageLayout-children">
        {props.children}
        <BackBtn />
      </div>
    </div>
  );
}

export default PageLayout;
