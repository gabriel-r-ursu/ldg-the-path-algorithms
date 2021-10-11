const LinkedList = require('../../../../src/LinkedList/pairs/gabriel-adrian/LinkedList')
const ListNode = require('../../../../src/LinkedList/pairs/gabriel-adrian/LinkedList')


describe('LinkedList', () => {
    const list = new LinkedList();

    test('can create a new list', () => {
        expect(list).toBeDefined()
    })

    test('adding a node in the LinkedList', () => {
        // const list = new LinkedList();
        expect(list.addElement(1)).toEqual(1);
    })

    test('adding a node in the LinkedList', () => {
        expect(list.addElement(5)).toEqual(2);
    })

    test('adding a node in the LinkedList', () => {
        expect(list.addElement(10)).toEqual(3);
    })

    test('adding a node in the LinkedList', () => {
        expect(list.addElement(3)).toEqual(4);
    })

    test('get the size of the LinkedList', () => {
        expect(list.getSizeList()).toEqual(list.size);
    })

    test('get nth node from the list', () => {
        expect(list.getNthNode(3)).toEqual(10);
    })

    test('throws error if search is out of bounds', () => {
        expect(() => {list.getNthNode(100)}).toThrow();
    })

    test('throws error if input is a negative number', () => {
        expect(() => {list.getNthNode(-4)}).toThrow();
    })

    test('remove the last node from linkedList', () => {
        expect(list.popNode()).toEqual(3);
    })

    test('deletes a certain node', () => {
        expect(list.removeElement(1)).toEqual(list.size);
    })

    test('clear out the list', () => {
        expect(list.clearList()).toEqual(null);
    })
})

