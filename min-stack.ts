/**
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
Implement the MinStack class:
MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
You must implement a solution with O(1) time complexity for each function.

Example 1:
Input
["MinStack","push","push","push","getMin","pop","top","getMin"]
[[],[-2],[0],[-3],[],[],[],[]]

Output
[null,null,null,null,-3,null,0,-2]
Explanation
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin(); // return -3
minStack.pop();
minStack.top();    // return 0
minStack.getMin(); // return -2
*/

class StackNode {
    val:number|null;
    next: StackNode|null;
    min: number;
    constructor(val: number|null, next: StackNode|null, min: number){
        this.val = val;
        this.next = next;
        this.min = min;
    }
}

class MinStack {
    private head: StackNode|null;
    private min: number;
    constructor() {
        this.head = new StackNode(null, null, Number.MAX_SAFE_INTEGER);
        this.min = Number.MAX_SAFE_INTEGER;
    }

    push(val: number): void {
        const minVal = Math.min(this.min, val);
        const node = new StackNode(val, this.head, minVal);
        this.head = node;
        this.min = minVal;
    }

    pop(): void {
        this.head = this.head?.next ?? null;
        this.min = this.head?.min ?? Number.MAX_SAFE_INTEGER;
    }

    top(): number|null {
        return this.head?.val ?? null;
    }

    getMin(): number {
        return this.min;
    }

    getHead(): StackNode|null {
        return this.head;
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

var obj = new MinStack();
obj.push(-2);
obj.push(0);
obj.push(-3);
console.log(obj.getMin());
obj.pop();
console.log(obj.top());
console.log(obj.getMin());
