import Position from "./Position";

export default function getPosition(val: Position) {
  if (val === "current") return "translateX(0) scale(1)";
  if (val === "before") return "translateX(40%) scale(0.8)";
  return "translateX(-40%) scale(0.8)";
}
