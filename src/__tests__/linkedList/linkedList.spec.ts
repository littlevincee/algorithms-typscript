import { expect } from 'chai';
import { LinkedList } from '../../algorithms/dataStructures/linkedList/linkedList'
import { LinkedListNode } from '../../algorithms/dataStructures/linkedListNode/linkedListNode';

describe('linked list', () => {
  it('should create a new linked list', () => {
    const linkedList = new LinkedList();

    linkedList.add(1, 'abc');

    expect(linkedList.head).not.null;
  })
})
// jest.mock("../../algorithms/dataStructures/linkedList/linkedList");

// const lm = jest.fn();

// beforeAll(() => {
//   LinkedList.mockImplementation(() => {

//   })
// })
// it("link list", () => {
//   const linkedList = LinkedList;

//   //linkedList.add(1, 'a');

//   //expect(linkedList)

// })

// describe('LinkedList', () => {
//   const linkedList = new LinkedList();

//   test("if linked list is a class (object)", () => {
//     expect(typeof linkedList).toBe("object");
//   })

//   test("if linked list is a called", () => {
//     const setRuleSpy = jest.spyOn(linkedList, "add");
//     expect(typeof linkedList).toBe("object");
//   })


//   describe('.add', () => {
//     test("if add is a function", () => {
//       expect(typeof linkedList.add).toBe("function")
//     })

//     test("if add is a void function", () => {
//       expect(linkedList.add(1, 1)).toBeUndefined();
//     })

//     test("add() is called with arguments", () => {
//       const setRuleSpy = jest.spyOn(linkedList, "add");

//       const result = linkedList.add(1, 'a');

//       expect(result).toBeUndefined();

//       expect(setRuleSpy).toHaveBeenCalledWith(1, "a");

//       expect(setRuleSpy).toHaveBeenCalledTimes(2);

//       setRuleSpy.mockClear();
//     })
//   })
//  })