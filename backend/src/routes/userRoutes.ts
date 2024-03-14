import express, { Request, Response } from 'express';

const userRouter = express.Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     responses:
 *       '200':
 *         description: A list of users
 */
userRouter.get('/users', (req: Request, res: Response) => {
  // Your logic to fetch users
  const users = [{ id: 1, name: 'John' }, { id: 2, name: 'Alice' }];
  res.json(users);
});

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Get a user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user to get
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: A single user
 */
userRouter.get('/users/:id', (req: Request, res: Response) => {
  const userId = parseInt(req.params.id);
  // Your logic to fetch a user by ID
  const user = { id: userId, name: 'User ' + userId };
  res.json(user);
});

export default userRouter;
