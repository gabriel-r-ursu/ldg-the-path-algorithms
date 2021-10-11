const LinkedList = require('../../../../src/LinkedList/pairs/gabriel-adrian/LinkedList')
const ListNode = require('../../../../src/LinkedList/pairs/gabriel-adrian/LinkedList')


describe('LinkedList', () => {
    const list = new LinkedList();

    test('can create a new list', () => {
        expect(list).toBeDefined()
    })

    test('can add head', () => {
        // const list = new LinkedList();
        expect(list.addElement(1)).toEqual(1);
    })

    test('updates the next element accordingly', () => {
        expect(list.addElement(2).toEqual(2));
    })

    test('updates the next element accordingly', () => {
        expect(list.addElement(3).toEqual(3));
    })

    test('updates the next element accordingly', () => {
        expect(list.addElement(4).toEqual(4));
    })

    test('get the size of the LinkedList', () => {
        expect(list.getSizeList().toEqual(list.length));
    })

    test('clear out the list', () => {
        expect(list.clearList().toEqual(null));
    })

    test('get the first node value', () => {
        expect(list.getLastNode().toEqual(list.head.data));
    })

    test('get the last node value', () => {
        expect(list.getFirstNode().toEqual(list.tail.data));
    })

    test('get the first node', () => {
        expect(list.getLastNode().toEqual(list.head));
    })

    test('get the last node', () => {
        expect(list.getFirstNode().toEqual(list.tail));
    })

})

