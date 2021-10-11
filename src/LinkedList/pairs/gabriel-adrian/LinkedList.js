
class LinkedList {
    constructor() {
        this.head = this.tail = null;
        this.size = 0;
    }

    addElement(value) {
        const node = new ListNode(value);
        this.size++;

        if (!this.head){
            this.head = node;
        } else {
            this.tail.next = node;
        }
        this.tail = node;
        console.log("THIS IS LIST: ",this.head, this.tail);

        console.log("THIS IS NODE: ", node);
        
        return this.head.data;
    }
}

class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

module.exports = LinkedList;