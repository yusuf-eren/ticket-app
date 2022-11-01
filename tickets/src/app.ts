import express from 'express';
import 'express-async-errors';
import { json } from 'body-parser';
import cookieSession from 'cookie-session';

import { currentUser, errorHandler, NotFoundError } from '@yusuferen/common';
import { createTicketRouter } from './routes/new';

const app = express();
app.use(json());
app.use(
    cookieSession({
        signed: false,
    })
);

app.use(currentUser);
app.use(createTicketRouter);

app.all('*', async (req, res) => {
    throw new NotFoundError();
});

app.use(errorHandler);

export { app };
