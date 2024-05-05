import express, { Request, Response } from "express";
import Cabin from "shared/Models/Cabin";
import MapOPCUA from "../functions/MapOPCUA";
import StoredScreen from "../services/StoredScreen";

let data: Cabin[] = [];
(async () => {
  data = await MapOPCUA();
})();

const cabinRoutes = express.Router();

/**
 * @swagger
 * tags:
 *   name: Cabin
 *   description: Cabin management
 */

/**
 * @swagger
 * /cabin:
 *   get:
 *     summary: Get your cabin
 *     tags: [Cabin]
 *     responses:
 *       '200':
 *         description: Your cabin
 *       '404':
 *         description: No cabin found
 */
cabinRoutes.get("/", async (req: Request, res: Response) => {
  if (data.length === 0) {
    res.status(500).json({ message: "Backend is booting up" });
    return;
  }

  const storedScreen = StoredScreen();
  const takenScreens = await storedScreen.getStoredScreens();

  const cabinId = takenScreens.find((screen) => screen.ip === req.ip)?.nodeid;
  const cabin = data.find((cabin) => cabin.nodeId === cabinId);

  if (!cabin) {
    res.status(404).json({ message: "No cabin found", ip: req.ip });
    return;
  } else {
    res.status(200).json(cabin);
  }
});

/**
 * @swagger
 * /cabin/listeners:
 *   get:
 *     summary: Get all nodes to listen to
 *     tags: [Cabin]
 *     responses:
 *       '200':
 *         description: List of nodes
 *       '404':
 *         description: No cabin found
 */
cabinRoutes.get("/listeners", async (req: Request, res: Response) => {
  if (data.length === 0) {
    res.status(500).json({ message: "Backend is booting up" });
    return;
  }

  const storedScreen = StoredScreen();
  const takenScreens = await storedScreen.getStoredScreens();

  const cabinId = takenScreens.find((screen) => screen.ip === req.ip)?.nodeid;
  const cabin = data.find((cabin) => cabin.nodeId === cabinId);

  if (!cabin) {
    res.status(404).json({ message: "No cabin found", ip: req.ip });
    return;
  }

  const allNodesToListen = cabin.zones
    .map((zone) =>
      zone.rooms
        .map((room) =>
          room.controllers
            .map((controller) => {
              return [
                controller.ActualValue,
                controller.IsEnabled,
                controller.SetPoint,
              ];
            })
            .flat()
        )
        .flat()
    )
    .flat();
  res.status(200).json(allNodesToListen);
});

/**
 * @swagger
 * /cabin/all:
 *   get:
 *     summary: Get all available cabins
 *     tags: [Cabin]
 *     responses:
 *       '200':
 *         description: List of cabins
 */
cabinRoutes.get("/all", async (req: Request, res: Response) => {
  /*const storedScreen = StoredScreen();
  const takenScreens = await storedScreen.getStoredScreens();

  const availableCabins: Cabin[] = data.filter((cabin) => {
    return !takenScreens.some((screen) => screen.nodeid === cabin.nodeId);
  }).map((cabin) => {
    return {
      nodeId: cabin.nodeId,
      displayName: cabin.displayName,
      zones: [],
    };
  });*/

  const availableCabins: Cabin[] = data.map((cabin) => {
    return {
      nodeId: cabin.nodeId,
      displayName: cabin.displayName,
      zones: [],
    };
  });

  res.status(200).json(availableCabins);
});

/**
 * @swagger
 * /cabin/assign:
 *   post:
 *     summary: Assign cabin to screen
 *     tags: [Cabin]
 *     parameters:
 *       - in: query
 *         name: nodeId
 *         required: true
 *         schema:
 *           type: string
 *         description: The cabin ID to assign
 *     responses:
 *       '201':
 *         description: Successfully assigned
 *     '400':
 *      description: Invalid nodeId or missing IP
 */
cabinRoutes.post("/assign", async (req: Request, res: Response) => {
  const nodeId = req.query.nodeId;
  if (!nodeId) {
    res.status(400).json({ message: "Missing nodeId" });
    return;
  }

  if (req.ip === undefined) {
    res.status(400).json({ message: "Missing IP" });
    return;
  }

  const storedScreen = StoredScreen();
  const addScreen = await storedScreen.storeScreen({
    ip: req.ip,
    nodeid: nodeId.toString(),
  });

  if (!addScreen) {
    res.status(400).json({ message: "Unable to assign cabin" });
    return;
  } else {
    res.status(201).json({ message: "Successfully assigned" });
  }
});

export default cabinRoutes;
