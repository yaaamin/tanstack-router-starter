import { FileRoute } from "@tanstack/react-router";

export const Route = new FileRoute('/homer').createRoute({
  component: Homer,
});

function Homer() {
  return <div>homer</div>;
}
