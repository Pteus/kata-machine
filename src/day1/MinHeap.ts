export default class MinHeap {
    public length: number;
    private data: number[];
    // arraylist

    constructor() {
        this.data = [];
        this.length = 0;
    }

    insert(value: number): void {
        this.data[this.length] = value;
        this.heapifyUp(this.length);
        this.length++;
    }
    delete(): number {
        if (this.length === 0) {
            return -1;
        }

        this.length--;
        const out = this.data[0];
        if (this.length === 0) {
            this.data = [];
            return out;
        }
        this.data[0] = this.data[this.length]; // swap the last node with the root
        this.heapifyDown(0); // and heapify down
        return out;
    }

    // get the parent of the current node
    getParent(idx: number): number {
        return Math.floor((idx - 1) / 2);
    }

    // get the left child of the current node
    getLeftChild(idx: number): number {
        return 2 * idx + 1;
    }

    // get the right child of the current node
    getRightChild(idx: number): number {
        return 2 * idx + 2;
    }

    // heapify down
    heapifyDown(idx: number): void {
        if (idx >= this.length) {
            return;
        }

        const leftChildIdx = this.getLeftChild(idx);
        if (leftChildIdx >= this.length) {
            return;
        }

        const rightChildIdx = this.getRightChild(idx);
        const leftChildValue = this.data[leftChildIdx];
        const rightChildValue = this.data[rightChildIdx];
        const currVal = this.data[idx];

        // if the right child is the smallest and we are bigger than the smallest
        // we need to swap and heapifydown
        if (leftChildValue > rightChildValue && currVal > rightChildValue) {
            [this.data[rightChildIdx], this.data[idx]] = [
                currVal,
                rightChildValue,
            ];
            this.heapifyDown(rightChildIdx);
        } else if (
            rightChildValue > leftChildValue &&
            currVal > leftChildValue
        ) {
            [this.data[leftChildIdx], this.data[idx]] = [
                currVal,
                leftChildValue,
            ];
            this.heapifyDown(leftChildIdx);
        }
    }

    // heapify up
    heapifyUp(index: number): void {
        if (index === 0) {
            return;
        }

        const currVal = this.data[index];
        const parentIdx = this.getParent(index);
        const parentVal = this.data[parentIdx];

        if (parentVal > currVal) {
            [this.data[index], this.data[parentIdx]] = [parentVal, currVal];
            this.heapifyUp(parentIdx);
        }
    }
}
