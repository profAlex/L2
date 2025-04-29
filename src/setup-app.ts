import express, {Express, Request, Response} from "express";

export const setupApp = (app: Express) => {
    app.use(express.json());

    //app.use("/videos", videosRouter);
    //app.use("/testing", testingRouter);

    app.get("/", (req: Request, res: Response) => {
        res.status(200).send("Hello it_incubator! My second lesson!");
    });

    return app;
};
