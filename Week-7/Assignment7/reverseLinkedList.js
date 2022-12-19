import { linkedList } from "./singlyLinkedList_templat.js";

const reverse = function (head) {
  var prev = null;
  var temp = null;
  while (head) {
    temp = head.next;
    head.next = prev;
    prev = head;
    head = temp;
  }
  return (list.head = prev);
};

//TC - O(n)
//SC - O(1)

var list = new linkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);
list.print();

//console.log(list.head);
reverse(list.head);
list.printList(list.head);
