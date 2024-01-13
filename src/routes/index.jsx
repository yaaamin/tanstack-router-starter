import React from "react";
import { FileRoute } from "@tanstack/react-router";

export const Route = new FileRoute('/').createRoute({
  component: Index,
});

function Index() {
  return <div>Index</div>;
}
