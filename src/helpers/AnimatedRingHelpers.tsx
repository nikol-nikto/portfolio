/** @format */

export function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

export function generateDash(count: number) {
  return Array.from({ length: count }, () => Math.random() * 120 + 20);
}
