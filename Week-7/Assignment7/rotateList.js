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

var list = new linkedList();
list.add(0);
list.add(1);
list.add(2);
// list.add(4);
// list.add(5);
// list.add(6);
//list.print();

rotateRight(list.head, 4);
list.printList(list.head);
console.log(2 % 5);

// var rotateRight = function (head, k) {
//     var temp = head;

//     var i = 0;
//     var curr = temp;
//     while (i < k) {
//       i++;
//       console.log('*********${i}********')
//       var slow = getSlowPointer(temp);
//       console.log(slow);
//       temp = slow.next;
//       console.log(temp);
//       slow.next = null;
//       console.log(head);
//       if(temp == null)
//       return temp;
//       temp.next = head;
//       head = temp;
//       console.log(head,temp);
//     }
//     return head;
//   };
//   function getSlowPointer(head1) {
//     console.log(head1)
//     var slow = head1;
//     var fast = head1;
//     while (fast != null && fast.next != null) {
//       slow = slow.next;
//       fast = fast.next.next;
//     }
//     return slow.next;
//   }

// var temp = head;
// var next;

// var i = 0;
// //var curr = temp;
// while (i < k) {
//   i++;
//   var slow = getSlowPointer(head);
//   console.log("Slow value " + slow);
//   next = slow.next;
//   console.log(next);
//   slow.next = null;
//   console.log("Head " + head);
//   next.next = head;
//   head = next;
// }
// //at last we can write
// list.head = temp;
// console.log(list.head);
// //   for (var i = 0; i < k; i++) {
// //     prev.next = head;
// //   }
// };
// function getSlowPointer(head1) {
// var prev, curr;
// curr = head1;
// var length = list.size;
// var i = 0;
// while (i < length - 1) {
//   i++;
//   prev = curr;
//   curr = curr.next;
// }
// return prev;
