/**
You are given the head of a singly linked-list. The list can be represented as:

L0 → L1 → … → Ln - 1 → Ln
Reorder the list to be on the following form:

L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
You may not modify the values in the list's nodes. Only nodes themselves may be changed.
Example 1:
Input: head = [1,2,3,4]
Output: [1,4,2,3]
Example 2:
Input: head = [1,2,3,4,5]
Output: [1,5,2,4,3]
*/

import { ListNode, printListNode } from "./utils";

function reorderList(head: ListNode | null): ListNode|null {
    if(head?.next == null) {
        return head;;
    }
    let len = getListLength(head);
    let [front, back] = splitList(head, len);
    back = reverseList(back);
    while(front && back) {
        const temp1 = front.next;
        const temp2 = back.next;

        front.next = back;
        back.next = temp1;

        front = temp1;
        back = temp2;
    }
    return head;
}

function reverseList(node: ListNode|null) : ListNode|null {
    let reverse: ListNode|null = null;
    let curr: ListNode|null = node;
    while (curr != null) {
        let temp: ListNode|null = curr.next;
        curr.next = reverse;
        reverse = curr;
        curr = temp;

    }
    return reverse;
};

function splitList(node: ListNode, len: number): (ListNode|null)[]{
    let front : ListNode|null = node;
    for(let i = 0; i < Math.round(len/2)-1; i++){
        front = front?.next ?? null;
    }
    let back : ListNode|null = front?.next ?? null;
    if(front?.next){
        front.next = null;
    }
    front = node;
    return [front, back];
};

function getListLength(node: ListNode|null): number {
    let len = 0;
    while(node != null) {
        len++;
        node = node.next;
    }
    return len;
}

printListNode([[1,2,3,4], [1,2,3,4,5]],reorderList);