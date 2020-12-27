/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * 
 * 暴力破解法，时间复杂度高(0.5s)
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  const start = Date.now();
  let cur = head;

  while (cur && cur.next) {
    const end = Date.now();
    const elapsed = end - start;
    if (elapsed > 500) {
      return true;
    }

    cur = cur.next;
  }

  return false;
};
