import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Controller from "shared/Models/Controller";

interface SubPagesProps {
    children: JSX.Element[];
    controllers: Controller[];
};

const SubPages = (props: SubPagesProps) => {
    return (
        <Tabs>
            <TabList>
                {props.controllers.map((controller) => {
                    return <Tab key={controller.room}>{controller.room}</Tab>
                })}
            </TabList>
            {props.children.map((child, index) => {
                return <TabPanel key={props.controllers[index].nodeId}>{child}</TabPanel>;
            })}
        </Tabs>
    );
};

export default SubPages;