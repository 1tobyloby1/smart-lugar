import { Dispatch, useEffect } from "react";
import { toast } from "react-toastify";

const useVariableListener = (nodeId: string, onUpdate: Dispatch<any>) => {
  useEffect(() => {
    const socket = new WebSocket("ws://localhost:80/listenToNode");

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
