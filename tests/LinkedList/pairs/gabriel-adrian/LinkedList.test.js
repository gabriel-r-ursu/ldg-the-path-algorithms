const LinkedList = require('../../../../src/LinkedList/pairs/gabriel-adrian/LinkedList')
const ListNode = require('../../../../src/LinkedList/pairs/gabriel-adrian/LinkedList')


describe('LinkedList', () => {

    test('can create a new list', () => {
        const list = new LinkedList()
        expect(list).toBeDefined()
    })

    test('add new Node', () => {
        const node = new ListNode(1);
        const list = new LinkedList();
        expect(list.addElement(node)).toBe(1);
    })



})

