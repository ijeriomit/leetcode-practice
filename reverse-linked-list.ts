import {ListNode, printListNode } from "./utils";

/**
Given the head of a singly linked list, reverse the list, and return the reversed list.
Example 1:
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
Example 2:
Input: head = [1,2]
Output: [2,1]
Example 3:
Input: head = []
Output: []
 */

function reverseList(head: ListNode | null): ListNode | null {
    let fast = head;
    let slow: ListNode|null = null;
    while(fast != null) {
        let temp = fast.next;
        fast.next = slow;
        slow = fast;
        fast = temp; 
    }
    return slow;
};

printListNode([[1,2,3,4,5],[1,2]], reverseList);