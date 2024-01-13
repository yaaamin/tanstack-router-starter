import { Route as rootRoute } from "./routes/__root";
import { Route as HomerImport } from "./routes/homer";
import { Route as IndexImport } from "./routes/index";

const HomerRoute = HomerImport.update({
  path: "/homer",
  getParentRoute: () => rootRoute,
} as any);

const IndexRoute = IndexImport.update({
  path: "/",
  getParentRoute: () => rootRoute,
} as any);
declare module "@tanstack/react-router" {
  interface FileRoutesByPath {
    "/": {
      preLoaderRoute: typeof IndexImport;
      parentRoute: typeof rootRoute;
    };
    "/homer": {
      preLoaderRoute: typeof HomerImport;
      parentRoute: typeof rootRoute;
    };
  }
}
export const routeTree = rootRoute.addChildren([IndexRoute, HomerRoute]);
