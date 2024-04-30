export function printOutput(inputs: any[], fn : Function, targets? : any[]) {
    for(let i = 0; i < inputs.length; i++) {
        if(targets) {
            console.log(fn(inputs[i], targets[i]));
        } else {
            console.log(fn(inputs[i]));
        }
    }
}

export function printListNode(inputs: any[], fn: Function, targets?: any[]) {
    for(let i = 0; i < inputs.length; i++) {
        let listNode: ListNode|null = buildList(inputs[i]);
        if(targets) {
            listNode = fn(listNode, buildList(targets[i]));
        } else {
            listNode = fn(listNode);
        }
        while(listNode) {
            console.log(listNode.val);
            listNode = listNode.next;
        }
        console.log(" ");
    }
    // console.log(buildList(inputs));
   
}

function buildList(input:any[]): ListNode {
    const head = new ListNode(input[0]);
    let curr = head;
    for(let i =1; i < input.length;i++){
        curr.next = new ListNode(input[i], null);
        curr = curr.next;
    }
    return head;
}

export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val);
        this.next = (next===undefined ? null : next);
     }
}