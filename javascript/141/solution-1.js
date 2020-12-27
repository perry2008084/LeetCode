/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * 
 * 标记法，时间复杂度为o(n)
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let cur = head;
  let iterateValues = new Set();

  while (cur) {
    if (iterateValues.has(cur)) {
      return true;
    }
    iterateValues.add(cur);
    cur = cur.next;
  }

  return false;
};