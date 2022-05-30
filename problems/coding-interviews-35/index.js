/**
 * @param {Node} head
 * @return {number}
 */
const getIndex = (head) => {
  if (!head) return -1;
  let i = 0;
  while (head) {
    head = head.next;
    i++;
  }
  return i;
}
/**
 * @param {Node} head
 * @return {number}
 */
const getNode = (head, index) => {
  if (index === -1) return null;
  let i = 0;
  while (head) {
    if (i === index) {
      return head;
    }
    head = head.next;
    i++;
  }
  return null;
}
/**
 * @param {Node} head
 * @return {Node}
 */
const copyRandomList = (head) => {
  let newHead = new Node();
  let newTemp = newHead;
  let temp = head;
  let len = 0;
  let indexArray = [];
  while (temp) {
    newTemp.next = new Node(temp.val, null, null);
    indexArray.push(getIndex(temp.random));
    newTemp = newTemp.next;
    temp = temp.next;
    len++;
  }
  let randomTemp = newHead.next;
  for (let i = 0; i < indexArray.length; i++) {
    const index = indexArray[i];
    randomTemp.random = getNode(newHead.next, len - index);
    randomTemp = randomTemp.next;
  }
  return newHead.next;
}
