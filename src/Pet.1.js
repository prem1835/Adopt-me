import React from "react";
export default function Pet({ name }) {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Luna"),
    React.createElement("h1", {}, name),
    React.createElement("h1", {}, "Havanse"),
  ]);
}
