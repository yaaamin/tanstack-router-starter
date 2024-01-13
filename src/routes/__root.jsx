import { rootRouteWithContext } from "@tanstack/react-router";
import { Outlet } from "@tanstack/react-router";

export const Route = rootRouteWithContext()({
  component: RootComponent,
});

export default function RootComponent() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
