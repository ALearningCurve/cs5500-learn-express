import express, { Response } from 'express';
import { UserRequest } from './types';
const router = express.Router();


router.get('/usernames', (req: UserRequest, res: Response) => {
    let usernames = req.users?.map((user) => {
        return { id: user.id, username: user.username };
    });
    res.send(usernames);
});

router.get('/username/:name', (req: UserRequest, res: Response) => {
    const name = req.params.name;
    const matchingUsers = req.users?.filter((user) => user.username === name);
    if (matchingUsers) {
        res.status(200).json(matchingUsers);
    } else {
        res.status(400).send({ error: 'no users found' });
    }
});

export default router;