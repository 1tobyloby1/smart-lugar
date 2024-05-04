import "./PageLayout.css";
import { ReactNode } from "react";
import BackBtn from "../BackBtn/BackBtn";

interface PageLayoutProps {
  title: string;
  children: ReactNode;
}

function PageLayout(props: PageLayoutProps) {
  return (
    <>
      <div className="PageLayout-parent">
        <h1>{props.title}</h1>
        <div className="PageLayout-children">{props.children}</div>
      </div>
      <BackBtn />
    </>
  );
}

export default PageLayout;
