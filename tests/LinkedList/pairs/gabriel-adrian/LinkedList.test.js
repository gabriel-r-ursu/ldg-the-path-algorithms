const LinkedList = require('../../../../src/LinkedList/pairs/gabriel-adrian/LinkedList')

describe('LinkedList', () => {

    test('can create a new list', () => {
        const list = new LinkedList()
        expect(list).toBeDefined()
    })

    test('can I add an input?', () => {
        const list = new LinkedList()
        expect(list.addElement(100)).toEqual(100)
    })

    

})

