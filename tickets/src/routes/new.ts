import express, { Request, Response } from 'express';
import { requireAuth } from '@yusuferen/common';

const router = express.Router();

router.post('/api/tickets', requireAuth, (req: Request, res: Response) => {
    res.status(200).send('hi');
});

export { router as createTicketRouter };
