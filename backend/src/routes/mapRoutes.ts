import express, { Request, Response } from "express";
import OPCUA from "../services/OPCUA";
import MapOPCUA from "../functions/MapOPCUA";
import { NodeClass, ResultMask } from "node-opcua-client";

const mapRoutes = express.Router();

/**
 * @swagger
 * tags:
 *   name: Mapping
 *   description: Map opc-ua server
 */

/**
 * @swagger
 * /mapping:
 *   post:
 *     summary: Map opc-ua server
 *     tags: [Mapping]
 *     responses:
 *       '201':
 *         description: Successfully mapped
 */
mapRoutes.post("/", async (req: Request, res: Response) => {
  const cabins = await MapOPCUA();
  
  res.json({ message: "Successfully mapped", data: cabins });
});

/**
 * @swagger
 * /mapping/interact:
 *   get:
 *     summary: Map opc-ua server
 *     tags: [Mapping]
 *     parameters:
 *       - in: query
 *         name: parentId
 *         required: true
 *         schema:
 *           type: string
 *         description: The node ID of the parent object
 *       - in: query
 *         name: nodeId
 *         required: true
 *         schema:
 *           type: string
 *         description: The node ID to interact with
 *       - in: query
 *         name: setValue
 *         required: false
 *         schema:
 *           type: string
 *         description: The value to set
 *     responses:
 *       '200':
 *         description: Successfully interacted
 *       '400':
 *        description: Invalid nodeId
 */
mapRoutes.get("/interact", async (req: Request, res: Response) => {
  const nodeId = req.query.nodeId;
  const parentId = req.query.parentId;
  const setValue = req.query.setValue;

  if (!nodeId || !parentId) {
    res.status(400).json({ message: "Missing nodeId or parentId" });
    return;
  }

  const opcuaInstance = OPCUA();
  await opcuaInstance.connect();
  
  const object = await opcuaInstance.browseObject(parentId.toString(), {
    resultMask: ResultMask.NodeClass,
    filter: (r) => r.nodeId.toString() === nodeId.toString(),
  });
  
  if (!object || object.length === 0) {
    res.status(400).json({ message: "Invalid nodeId" });
    return;
  }
  
  const nodeClass = object[0].nodeClass;
  if (nodeClass === NodeClass.Method) {
    const result = await opcuaInstance.callMethod(parentId.toString(), nodeId.toString());
    res.status(200).json(result);
  } else if (nodeClass === NodeClass.Variable && !setValue) {
    const result = await opcuaInstance.readVariable(nodeId.toString());
    res.status(200).json(result.value.value);
  } else if (nodeClass === NodeClass.Variable && setValue) {
    const result = await opcuaInstance.updateVariable(nodeId.toString(), setValue.toString());
    res.status(200).json(result.value);
  } else {
    res.status(400).json({ message: "Unknown nodeClass" });
  }
  await opcuaInstance.disconnect();
});

export default mapRoutes;