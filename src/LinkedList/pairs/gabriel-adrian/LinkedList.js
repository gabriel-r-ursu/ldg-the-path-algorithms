
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
        
        return this.size;
    }

    getSizeList() {
        return this.size;
    }

    clearList() {
        this.size = 0;
        this.head = this.tail = null;
        return this.head;
    }

}

class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

module.exports = LinkedList;