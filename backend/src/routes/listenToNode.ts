import { WebSocketServer } from "ws";
import { Server } from "http";
import { OPCUAProps } from "../services/OPCUA";

const listenToNode = async (server: Server, opcua: OPCUAProps) => {
  const wsServer = new WebSocketServer({
    server: server,
    clientTracking: true,
  });

  wsServer.on("connection", async (socket, request) => {
    if (request.url !== "/listenToNode") {
      socket.close();
      return;
    }

    socket.on("message", async (nodeId) => {
      const subscription = await opcua.subscribe(nodeId.toString());

      if (!subscription) {
        socket.send("-1");
        return;
      }

      subscription.on("changed", (dataValue) => {
        socket.send(dataValue.value.value.toString());
      });
    });
  });
};

export default listenToNode;
