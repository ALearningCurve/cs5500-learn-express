import express, { Response } from 'express';
import fs from 'fs';
import path from 'path';
import { User, UserRequest } from './types';

const dataFile = '../data/users.json';
const router = express.Router();

router.post('/adduser', (req: UserRequest, res: Response) => {
    let newUser = req.body as User;
    let users = req.users ?? [];
    users.push(newUser);
    fs.writeFile(path.resolve(__dirname, dataFile), JSON.stringify(users), (err) => {
        if (err) console.log('Failed to write');
        else console.log('User Saved');
    });
    res.send('done');
});

export default router;