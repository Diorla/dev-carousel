import Position from "./Position";

export default function getZIndex(val: Position) {
  if (val === "current") return 1;
  return 0;
}
