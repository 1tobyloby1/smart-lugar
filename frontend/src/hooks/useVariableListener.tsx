import { Dispatch, useEffect } from "react";
import { toast } from "react-toastify";

const useVariableListener = (nodeId: string, onUpdate: Dispatch<any>) => {
  useEffect(() => {
    /* const initFetch = async () => {
      const response = await Interact(parentId, nodeId);
      if (response.successful) {
        console.log("1:", response.data);
        
        onUpdate(response.data as number);
      }
    };

    initFetch(); */
    const socket = new WebSocket(process.env.REACT_APP_SOCKET ?? "");

    socket.addEventListener("open", () => {
      socket.send(nodeId);
    });

    socket.addEventListener("message", (event) => {
      if (event.data === "-1") {
        toast.error("Something went wrong");
        return;
      }

      let value = !isNaN(Number(event.data)) ? Number(event.data) : event.data;

      if (value === "true") {
        value = true;
      } else if (value === "false") {
        value = false;
      }

      onUpdate(value);
    });

    return () => {
      socket.close();
    };
  }, [nodeId, onUpdate]);
};

export default useVariableListener;
