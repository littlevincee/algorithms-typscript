import { expect } from 'chai';
import { spy } from 'sinon';

import { LinkedList } from '../../algorithms/dataStructures/linkedList/linkedList';

describe('linked list', () => {
  it('should create a new linked list', () => {
    const linkedList = new LinkedList<string>();

    let linkedListSpy = spy(linkedList, 'add');

    const { key, value } = { key: 1, value: 'a' };

    linkedList.add(key, value);

    expect(linkedListSpy.calledOnce).to.true;

    expect(linkedListSpy.calledWith(key, value)).to.true;

    expect(linkedList.head).not.null;
  });

  it('should delete a node at index 2', () => {
    const linkedList = new LinkedList<string>();

    let linkedListSpy = spy(linkedList, 'deleteAt');

    const deleteIndex = 3;

    linkedList.add(1, 'a');
    linkedList.add(2, 'b');
    linkedList.add(3, 'c');
    linkedList.add(4, 'd');

    linkedList.deleteAt(deleteIndex);

    expect(linkedListSpy.calledOnce).to.true;

    expect(linkedListSpy.calledWith(deleteIndex)).to.true;

    expect(linkedList.getSize()).equal(3);
  });
});
