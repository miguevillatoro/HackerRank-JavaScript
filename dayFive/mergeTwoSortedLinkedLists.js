class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

function mergeLists(head1, head2) {
  if (!head1) {
    return head2;
  }
  if (!head2) {
    return head1;
  }

  var mergedHead = null;

  if (head1.data <= head2.data) {
    mergedHead = head1;
    head1 = head1.next;
  } else {
    mergedHead = head2;
    head2 = head2.next;
  }

  var current = mergedHead;

  while (head1 && head2) {
    if (head1.data <= head2.data) {
      current.next = head1;
      head1 = head1.next;
    } else {
      current.next = head2;
      head2 = head2.next;
    }
    current = current.next;
  }

  if (head1) {
    current.next = head1;
  }
  if (head2) {
    current.next = head2;
  }

  return mergedHead;
}