import { LinkedList } from '../../algorithms/dataStructures/linkedList/linkedList'

jest.mock('../../algorithms/dataStructures/linkedList/linkedList')

it('it should be calling linkedList constructor to create an empty linked link', () => {
  const linkedList = new LinkedList();
  expect(LinkedList).toHaveBeenCalledTimes(1);
})