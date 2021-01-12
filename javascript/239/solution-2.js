class Comparator {
    /**
     * @param {function(a: *, b: *)} [compareFunction] - It may be custom compare function that, let's
     * say may compare custom objects together.
     */
    constructor(compareFunction) {
      this.compare = compareFunction || Comparator.defaultCompareFunction;
    }
  
    /**
     * Default comparison function. It just assumes that "a" and "b" are strings or numbers.
     * @param {(string|number)} a
     * @param {(string|number)} b
     * @returns {number}
     */
    static defaultCompareFunction(a, b) {
      if (a === b) {
        return 0;
      }
  
      return a < b ? -1 : 1;
    }
  
    /**
     * Checks if two variables are equal.
     * @param {*} a
     * @param {*} b
     * @return {boolean}
     */
    equal(a, b) {
      return this.compare(a, b) === 0;
    }
  
    /**
     * Checks if variable "a" is less than "b".
     * @param {*} a
     * @param {*} b
     * @return {boolean}
     */
    lessThan(a, b) {
      return this.compare(a, b) < 0;
    }
  
    /**
     * Checks if variable "a" is greater than "b".
     * @param {*} a
     * @param {*} b
     * @return {boolean}
     */
    greaterThan(a, b) {
      return this.compare(a, b) > 0;
    }
  
    /**
     * Checks if variable "a" is less than or equal to "b".
     * @param {*} a
     * @param {*} b
     * @return {boolean}
     */
    lessThanOrEqual(a, b) {
      return this.lessThan(a, b) || this.equal(a, b);
    }
  
    /**
     * Checks if variable "a" is greater than or equal to "b".
     * @param {*} a
     * @param {*} b
     * @return {boolean}
     */
    greaterThanOrEqual(a, b) {
      return this.greaterThan(a, b) || this.equal(a, b);
    }
  
    /**
     * Reverses the comparison order.
     */
    reverse() {
      const compareOriginal = this.compare;
      this.compare = (a, b) => compareOriginal(b, a);
    }
  }

class Heap {
    constructor(comparatorFunction) {
        if (new.target === Heap) {
            throw new TypeError('Cannot construct Heap instance directly');
        }

        this.heapContainer = [];
        this.compare =  new Comparator(comparatorFunction);
    }

    getLeftChildIndex(parentIndex) {
        return (2 * parentIndex) + 1;
    }

    getRightChildIndex(parentIndex) {
        return (2 * parentIndex) + 2;
    }

    getParentIndex(childIndex) {
        return Math.floor((childIndex - 1) / 2);
    }

    hasParent(chilidIndex) {
        return this.getParentIndex(chilidIndex) >= 0;
    }

    hasLeftChild(parentIndex) {
        return this.getLeftChildIndex(parentIndex) < this.heapContainer.length;
    }

    hasRightChild(parentIndex) {
        return this.getRightChildIndex(parentIndex) < this.heapContainer.length;
    }

    leftChild(parentIndex) {
        return this.heapContainer[this.getRightChildIndex(parentIndex)];
    }

    rightChild(parentIndex) {
        return this.heapContainer[this.getRightChildIndex(parentIndex)];
    }

    parent(childIndex) {
        return this.heapContainer[this.getParentIndex(childIndex)];
    }

    swap(indexOne, indexTwo) {
        const tmp = this.heapContainer[indexTwo];
        this.heapContainer[indexTwo] = this.heapContainer[indexOne];
        this.heapContainer[indexOne] = tmp;
    }

    peek() {
        if (this.heapContainer.length === 0) {
            return null;
        }

        return this.heapContainer[0];
    }

    poll() {
        if (this.heapContainer.length === 0) {
            return null;
        }

        if (this.heapContainer.length === 1) {
            return this.heapContainer.pop();
        }

        const item = this.heapContainer[0];

        this.heapContainer[0] = this.heapContainer.pop();
        this.heapifyDown();

        return item;
    }

    add(item) {
        this.heapContainer.push(item);
        this.heapifyUp();
        return this;
    }

    // TODO： 
    remove(item, comparator = this.compare) {
        const numberOfItemsToRemove = this.find(item, comparator).length;

        for (let iteration = 0; iteration < numberOfItemsToRemove; iteration += 1) {

        }
    }

    find(item, comparator = this.compare) {
        const foundItemIndices = [];

        for (let itemIndex = 0; itemIndex < this.heapContainer.length; itemIndex += 1) {
            if (comparator.equal(item, this.heapContainer[itemIndex])) {
                foundItemIndices.push(itemIndex);
            }
        }

        return foundItemIndices;
    }

    isEmpty() {
        return !this.heapContainer.length;
    }

    toString() {
        return this.heapContainer.toString();
    }

    heapifyUp() {
        let currentIndex = customStartIndex || this.heapContainer.length - 1;

        while (this.hasParent(currentIndex) &&
        !this.pairIsInCorrectOrder(this.parent(currentIndex), this.heapContainer[currentIndex])) {
            this.swap(currentIndex, this.getParentIndex(currentIndex));
            currentIndex = this.getParentIndex(currentIndex);
        }
    }

    // TODO: 
    heapifyDown() {

    }

    pairIsInCorrectOrder(firstElement, secondElement) {
        throw new Error(`
            You have to implement heap pair comparision method
            for ${firstElement} and ${secondElement} values.
        `);
    }
}