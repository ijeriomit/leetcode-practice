import { ListNode, printListNodes } from "./utils";

/**
Given the head of a linked list, remove the nth node from the end of the list and return its head.

Example 1:
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
Example 2:
Input: head = [1], n = 1
Output: []
Example 3:
Input: head = [1,2], n = 1
Output: [1]
 */


/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if(!head?.next){
        return head?.next ?? null;
    }
    let fast : ListNode|null = head;
    let slow :  ListNode|null = head;
    for(let i=0; i < n; i++) {
        fast = fast?.next ?? null;
    }
    if(!fast) {
        return head.next;
    }
    while(fast?.next != null) {
        fast = fast.next;
        slow = slow?.next ?? null;
    }
    if(slow?.next) {
        slow.next = slow.next?.next;
    }
    return head;
};

printListNodes([[1,2,3,4,5], [1], [1,2]], removeNthFromEnd, [2,1,1]);