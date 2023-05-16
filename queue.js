function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

// need this .next

function ListNode(node, next) {
    this.node = (val===undefined ? 0 : node)
    this.next = (next===undefined ? null : next)
}


// have to implement a linked list 
class Queue{
    constructor(){
        this.head = null;
        this.tail= null;
        this.length = 0;
    }
    enqueue(node){
        let newNode = new ListNode(node);
        // if head = null
        if(!head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = this.tail.next;
        }
        this.length++;
        return
    }
    dequeue(){
        if(!head) throw new Error;

        let removedNode;

        // only head exists
        // update the tail
        // head.next === null
        if(this.head && !this.head.next){
            removedNode = this.head;
            this.head = this.head.next;
            this.tail = this.head;

            // head will now equal null
            // tail already equaled null
            return removedNode;
        }

        // 2+ nodes
        // don't update the tail
        if(this.head && this.head.next){
            removedNode = this.head;
            this.head = this.head.next;
        }

        this.length --;

        return removedNode;

    }
    isEmpty(){
        if(this.length === 0){
            return true;
        }else{
            return false;
        }
    }
}