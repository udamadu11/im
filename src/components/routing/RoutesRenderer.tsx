import { useRoutes, RouteObject } from "react-router-dom";

interface RoutesRendererProps {
  routes: RouteObject[];
}

function RoutesRenderer({ routes }: RoutesRendererProps) {
  const renderedRoutes = useRoutes(routes);
  return renderedRoutes;
}

export default RoutesRenderer;
