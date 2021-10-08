const LinkedList = require('../../../../src/LinkedList/pairs/gabriel-adrian/LinkedList')
const ListNode = require('../../../../src/LinkedList/pairs/gabriel-adrian/LinkedList')


describe('LinkedList', () => {

    test('can create a new list', () => {
        const list = new LinkedList()
        expect(list).toBeDefined()
    })

    test('add new Node', () => {
        const list = new LinkedList();
        expect(list.addElement(1)).toEqual({"head": {"data": 1, "next": null}, "size": 1, "tail": null});
    })



})

