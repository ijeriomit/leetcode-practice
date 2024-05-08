export function printOutputs(inputs: any[], fn : Function, targets? : any[]) {
    for(let i = 0; i < inputs.length; i++) {
        if(targets) {
            console.log(fn(inputs[i], targets[i]));
        } else {
            console.log(fn(inputs[i]));
        }
    }
}

export function printListNodes(inputs: any[], fn: Function, targets?: any[]) {
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

export function printTreeNodes(inputs: any[], fn: Function, targets?: any[]) {

    // const printTree = (root: TreeNode|null) => {
    //     if (!root) {
    //         return;
    //     }
    //     printTree(root.left);
    //     console.log(root.val + " ");
    //     printTree(root.right);
    // }

    for(let i = 0; i < inputs.length; i++) {
        if(targets){
            console.log(fn(buildTree(inputs[i]), targets));
        }
        else {
            console.log(fn(buildTree(inputs[i])));
        }
    }
    
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

function buildTree(input: any[]): TreeNode | null{
    if (input.length === 0) {
        return null;
    }
    let root = new TreeNode(input[0]);
    let q = [root];
    let i = 1;
    while (i < input.length) {
        let curr = q.shift()!;
        if (i < input.length) {
            curr.left = new TreeNode(input[i++]);
            q.push(curr.left);
        }
        if (i < input.length) {
            curr.right = new TreeNode(input[i++]);
            q.push(curr.right);
        }
    }
    return root;
    
}

export class ListNode {
    val: number;
    next: ListNode | null;
    random: ListNode | null;
    constructor(val?: number, next?: ListNode | null, random?: ListNode | null) {
        this.val = (val===undefined ? 0 : val);
        this.next = (next===undefined ? null : next);
        this.random =(next===undefined ? null : next);
     }
}

export class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null ) {
        this.val = val ?? 0;
        this.right = right ?? null;
        this.left = left ?? null;
    }   

 }

