import Position from "./Position";

export default function getPosition(
  currentPos: number,
  itemIdx: number
): Position {
  const score = currentPos - itemIdx;
  if (score === 0) return "current";
  if (score === -2 || score === 1) return "before";
  // -1, 2
  return "after";
}
