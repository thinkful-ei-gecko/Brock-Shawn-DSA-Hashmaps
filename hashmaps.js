const LinkedList = require('./ll');

class HashMap {
  constructor(initialCapacity = 8) {
    this.length = 0;
    this._hashTable = [];
    this._capacity = initialCapacity;
    this._deleted = 0;
  }

  getValues() {
    const filter = this._hashTable.filter(obj => {
      if (obj !== null) {
        return obj;
      }
    });
    return filter.map(obj => obj.value);
  }

  get(key) {
    const index = this._findSlot(key);
    if (this._hashTable[index] === undefined) {
      return [];
    }
    let node = this._hashTable[index].head;
    while(node){
      if(node.value.key === key){
        return node.value;
      }
      node = node.next;
    }
    return this._hashTable[index].value;
  }

  set(key, value) {
    const loadRatio = (this.length + this._deleted + 1) / this._capacity;
    if (loadRatio > HashMap.MAX_LOAD_RATIO) {
      this._resize(this._capacity * HashMap.SIZE_RATIO);
    }
    //Find the slot where this key should be in
    const index = this._findSlot(key);

    if (!this._hashTable[index]) {
      this._hashTable[index] = new LinkedList();
      this.length++;
    }
    this._hashTable[index].insertBefore({
      key,
      value,
      DELETED: false
    });    
  }

  delete(key) {
    const index = this._findSlot(key);
    const slot = this._hashTable[index];
    if (slot === undefined) {
      throw new Error("Key error");
    }
    slot.DELETED = true;
    this.length--;
    this._deleted++;
  }

  _findSlotopen(key) {
    const hash = HashMap._hashString(key);
    const start = hash % this._capacity;

    for (let i = start; i < start + this._capacity; i++) {
      const index = i % this._capacity;
      const slot = this._hashTable[index];
      if (slot === undefined || (slot.key === key && !slot.DELETED)) {
        return index;
      }
    }
  }

  _findSlot(key) {
    const hash = HashMap._hashString(key);
    const start = hash % this._capacity;

    const index = start % this._capacity;
    const slot = this._hashTable[index];
    return index;
    /* if(!slot){
      return index;
    }
    let node = slot.head;
    while(node){
      if(node.value.key === key){
        return index;
      }
      node = node.next;
    } */
  }

  _resize(size) {
    const oldSlots = this._hashTable;
    this._capacity = size;
    // Reset the length - it will get rebuilt as you add the items back
    this.length = 0;
    this._deleted = 0;
    this._hashTable = [];

    for (const slot of oldSlots) {
      if (slot !== undefined && !slot.DELETED) {
        this.set(slot.key, slot.value);
      }
    }
  }

  static _hashString(string) {
    let hash = 5381;
    for (let i = 0; i < string.length; i++) {
      //Bitwise left shift with 5 0s - this would be similar to
      //hash*31, 31 being the decent prime number
      //but bit shifting is a faster way to do this
      //tradeoff is understandability
      hash = (hash << 5) + hash + string.charCodeAt(i);
      //converting hash to a 32 bit integer
      hash = hash & hash;
    }
    //making sure hash is unsigned - meaning non-negtive number.
    return hash >>> 0;
  }
}

module.exports = HashMap;
