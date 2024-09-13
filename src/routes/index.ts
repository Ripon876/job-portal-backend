import { Router, Express } from "express";
import routesV1 from "./v1/routesV1";

type Route = {
  version: string;
  router: Router;
};

const routes: Route[] = [
  {
    version: "v1",
    router: routesV1,
  },
];

export const applyRoutes = (app: Express) => {
  for (const route of routes) {
    app.use(`/api/${route.version}`, route.router);
  }
};
