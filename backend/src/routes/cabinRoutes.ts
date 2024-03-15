import express, { Request, Response } from 'express';
import TestDataCabins from 'shared/TestData/Cabins';

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
 *     summary: Get a list off all available cabins
 *     tags: [Cabin]
 *     responses:
 *       '200':
 *         description: A list of cabins
 */
cabinRoutes.get('/', (req: Request, res: Response) => {
  res.json(TestDataCabins);
});

/**
 * @swagger
 * /cabin/{cabinID}:
 *   get:
 *     summary: Get cabin by id
 *     tags: [Cabin]
 *     parameters:
 *       - in: path
 *         name: cabinID
 *         required: true
 *         description: ID of the cabin to get
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: A single cabin
 */
cabinRoutes.get('/:cabinID', (req: Request, res: Response) => {
  const result = TestDataCabins.find((cabin) => cabin.id === req.params.cabinID);
  res.json(result);
});

export default cabinRoutes;
