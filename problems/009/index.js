/**
 * @param {number} p1x
 * @param {number} p1y
 * @param {number} p2x
 * @param {number} p2y
 */
export const generateCubicBezier = (p1x, p1y, p2x, p2y) => {
  const ax = 3 * p1x - 3 * p2x + 1;
  const bx = 3 * p2x - 6 * p1x;
  const cx = 3 * p1x;
  const ay = 3 * p1y - 3 * p2y + 1;
  const by = 3 * p2y - 6 * p1y;
  const cy = 3 * p1y;
  const getX = (t) => ((ax * t + bx) * t + cx) * t;
  const getDerivativeX = (t) => (2 * ax * t + 2 * bx) * t + cx;
  const getY = (t) => ((ay * t + by) * t + cy) * t;
  const getT = (x, epsilon) => {
    let tempT = x;
    let tempX = getX(tempT) - x;
    let tempD;
    while (Math.abs(tempX) > epsilon) {
      tempX = getX(tempT) - x;
      tempD = getDerivativeX(tempT);
      tempT = tempT - tempX / tempD;
    }
    return tempT;
  };
  const cubicBezier = (x, epsilon = 1e-6) => {
    return getY(getT(x, epsilon));
  };
  return cubicBezier;
};
