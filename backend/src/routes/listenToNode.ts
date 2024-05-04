import { WebSocketServer } from "ws";
import { Server } from "http";
import OPCUA, { OPCUAProps } from "../services/OPCUA";

const listenToNode = async (server: Server) => {
  const wsServer = new WebSocketServer({
    server: server,
    clientTracking: true,
  });

  wsServer.on("connection", async (socket, request) => {
    if (request.url !== "/listenToNode") {
      socket.close();
      return;
    }

    let opcuaInstance: OPCUAProps;

    socket.on("message", async (nodeId) => {
      opcuaInstance = OPCUA();
      await opcuaInstance.connect();

      const subscription = await opcuaInstance.subscribe(nodeId.toString());

      if (!subscription) {
        socket.send("-1");
        return;
      }

      subscription.on("changed", (dataValue) => {
        socket.send(dataValue.value.value.toString());
      });
    });

    socket.on("close", () => {
      if (opcuaInstance) {
        opcuaInstance.disconnect();
      }
    });
  });
};

export default listenToNode;
