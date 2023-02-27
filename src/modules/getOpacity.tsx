import Position from "./Position";

export default function getOpacity(val: Position) {
  if (val === "current") return 1;
  return 0.4;
}
