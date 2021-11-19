/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    var firstNode = new ListNode(0);

    firstNode.next = head;
    var cur = head;
    var prev = firstNode;

    var nextKeep;

    while (cur!=null && cur.next!=null){
        nextKeep = cur.next.next;
        cur.next.next = cur;
        prev.next = cur.next;

        cur.next = nextKeep;

        prev = cur;
        cur = cur.next;        
    }
    return firstNode.next;
};