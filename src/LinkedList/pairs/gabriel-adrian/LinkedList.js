class LinkedList {
    constructor() {
        this.head = this.tail = null;
        this.size = 0;
    }

    addElement(value) {
        const test = new ListNode(value);
        this.head = test;
        this.size += 1;
        return this;
    }
}

class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null ;               
    }
}

module.exports = LinkedList;