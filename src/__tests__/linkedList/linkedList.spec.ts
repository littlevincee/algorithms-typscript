import { expect } from 'chai';
import { spy } from 'sinon';

import { LinkedList } from '../../algorithms/dataStructures/linkedList/linkedList';

describe('linked list', () => {
  it('should create a new linked list', () => {
    const linkedList = new LinkedList();

    let linkedListSpy = spy(linkedList, 'add');

    linkedList.add(1, 'a');

    expect(linkedListSpy.calledOnce).to.true;
    expect(linkedListSpy.calledWith(1, 'a')).to.true;
    expect(linkedList.head).not.null;
  });
});
