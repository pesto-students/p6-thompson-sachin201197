import { linkedList } from "./singlyLinkedList_templat.js";
var rotateRight = function (head, k) {
  if (!head || !head.next || !k) return head;
  let newTail = head;
  let tail = head;
  let len = 1;
  // get current tail node and length of linked list
  while (tail.next) {
    tail = tail.next;
    ++len;
  }
  // link current tail to head
  tail.next = head;
  // get the new tail node
  for (let i = 1; i < len - (k % len); ++i) {
    newTail = newTail.next;
  }
  const ret = newTail.next;
  console.log(ret);
  // change it into the real tail
  newTail.next = null;
  return ret;
};

// TC -  O(n)
// SC -  O(1)

var list = new linkedList();
list.add(0);
list.add(1);
list.add(2);
list.add(4);
list.print();

rotateRight(list.head, 4);
list.printList(list.head);
