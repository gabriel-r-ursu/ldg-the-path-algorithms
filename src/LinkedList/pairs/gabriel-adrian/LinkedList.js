
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

    getNthNode(query){
        if(query <= 0) throw new Error('Must be a query starting from one');
        if(query > this.size) throw new Error('Out of bounds!');
        
        let currentItem = this.head;
        let counter = 1;
        while(counter <= query) {
            if(counter === query) return currentItem.data;
            currentItem = currentItem.next;
            counter++;
        }
    }

    popNode() {
        console.log(this.size);
        this.tail.data = this.getNthNode(this.size - 1);
        this.tail.next = null;
        --this.size;

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