/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
const canVisitAllRooms = (rooms) => {
  let visitedRooms = new Set();
  let keys = [0];
  while (keys.length > 0) {
    const curRoom = keys.pop();
    const curKeys = rooms[curRoom];
    visitedRooms.add(curRoom);
    for (let i = 0; i < curKeys.length; i++) {
      if (!visitedRooms.has(curKeys[i])) {
        keys.push(curKeys[i]);
      }
    }
    if (visitedRooms.size === rooms.length) {
      return true;
    }
  }
  return false;
}
