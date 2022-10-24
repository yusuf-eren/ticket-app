import { NextFunction, Request, Response } from 'express';

export const errorHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    console.log('Something Went wrong', err);

    res.status(400).send({
        message: 'Something went wrong',
    });
};
