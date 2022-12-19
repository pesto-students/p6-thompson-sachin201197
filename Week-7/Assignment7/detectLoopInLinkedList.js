import { linkedList } from "./singlyLinkedList_templat.js";

var hasCycle = function (head) {
  let slow = head;
  let fast = head;
  let cycleExists = false;

  while (fast && fast.next && !cycleExists) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) cycleExists = true;
  }

  return cycleExists;
};

//TC - O(n)
//SC - O(1)
