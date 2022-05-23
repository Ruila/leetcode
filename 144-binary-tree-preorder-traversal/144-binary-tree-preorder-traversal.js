/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    const stack = [];
    const res = [];
    while (root || stack.length) {
    if (root) {
      stack.push(root);
      res.push(root.val);
      root = root.left;
    } else {
      root = stack.pop();
      root = root.right;
    }
  }
  return res;
};