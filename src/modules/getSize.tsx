export default function getSize(width: number) {
  if (width > 1000) return 450;
  if (width > 900) return 400;
  if (width > 800) return 350;
  if (width > 700) return 300;
  if (width > 600) return 250;
  if (width > 500) return 200;
  if (width > 320) return 150;
  return 100;
}
