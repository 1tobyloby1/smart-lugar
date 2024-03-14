import express, { Request, Response } from 'express';

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
mapRoutes.post('/', (req: Request, res: Response) => {
  // map data here
  res.status(201).json({message: 'Successfully mapped'});
});

export default mapRoutes;
