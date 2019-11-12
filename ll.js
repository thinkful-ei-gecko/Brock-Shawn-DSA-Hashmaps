const _Node = require('./node');

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    let tempNode = this.head;

    if (tempNode === null) {
      this.insertFirst(item);
      return;
    }

    while (tempNode.next !== null) {
      tempNode = tempNode.next;
    }

    tempNode.next = new _Node(item, null);
  }

  find(item) {
    // start at the head of the linked list
    let currNode = this.head;

    //if the list is empty
    if (!this.head) {
      return null;
    }

    // check for the item
    while (currNode.value !== item) {
      // returns null if its the end of the list and the item is not on the list
      if (currNode.next === null) {
        return null;
      } else {
        currNode = currNode.next;
      }
    }
    return currNode;
  }

  remove(item) {
    //if the list is empty
    if (!this.head) {
      return null;
    }

    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }

    let currentNode = this.head;

    let prevNode = this.head;

    while (currentNode !== null && currentNode.value !== item) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
    if (currentNode === null) {
      console.log('Item not found');
      return;
    }
    prevNode.next = currentNode.next;
  }

  insertBefore(item, itemBefore) {
    if (!this.head) {
      this.insertLast(item);
    }

    let currentNode = this.head;
    let prevNode = this.head;

    while (currentNode !== null && currentNode.value !== itemBefore) {
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
    if (currentNode === null) {
      this.insertLast(item);
      return;
    }
    // make new node - set pointer to currnode
    prevNode.next = new _Node(item, currentNode);
    // set pointer for prevnode to new node
  }

  createCycle(data) {
    let cyclePoint = this.head.next;
    let tempNode = this.head;
    while (tempNode.next !== null) {
      tempNode = tempNode.next;
    }
    tempNode.next = new Node(data, cyclePoint);
  }

  insertAfter(item, itemAfter) {
    if (!this.head) {
      this.insertFirst(item);
    }

    let currNode = this.head;
    let currNodePlusOne = currNode.next;

    while (currNode !== null && currNode.value !== itemAfter) {
      currNode = currNode.next;
      currNodePlusOne = currNode.next;
    }
    if (currNode === null) {
      this.insertLast(item);
      return;
    }
    // make new node - set pointer to currnode
    currNode.next = new _Node(item, currNodePlusOne);
  }

  insertAt(item, pos) {
    if (!this.head) {
      this.insertFirst(item);
    }
    if (pos <= 1) {
      this.head = new _Node(item, this.head);
    }

    let currNode = this.head;
    let prevNode = this.head;
    let currPos = 1;

    while (currPos < pos && currNode !== null) {
      prevNode = currNode;
      currNode = currNode.next;
      currPos += 1;
    }
    prevNode.next = new _Node(item, currNode);
  }
}

function main() {
  let SLL = new LinkedList();
  SLL.insertLast('Apollo');
  SLL.insertLast('Boomer');
  SLL.insertLast('Helo');
  SLL.insertLast('Husker');
  SLL.insertLast('Bust');
  SLL.insertLast('Starbuck');
  SLL.insertLast('Tauhida');
  SLL.insertBefore('Athena', 'Boomer');
  SLL.insertAfter('Hotdog', 'Helo');
  SLL.insertAt('Kat', 3);
  SLL.remove('Tauhida');

  //console.log(SLL.find('Tauhida'));
  //console.log(JSON.stringify(SLL));

  //console.log(listHelpers.cycleList(SLL));
  //listHelpers.display(SLL);
}
main();

module.exports = LinkedList;