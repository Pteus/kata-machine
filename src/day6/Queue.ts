export default class Queue<T> {
  public length: number;
  private head?: ListNode<T>;
  private tail?: ListNode<T>;

  constructor() {
    this.head = this.tail = undefined;
    this.length = 0;
  }

  enqueue(item: T): void {
    const newNode: ListNode<T> = { value: item };

    this.length++;

    if (!this.tail) {
      this.head = this.tail = newNode;
      return;
    }

    this.tail.next = newNode;
    this.tail = newNode;
  }
  deque(): T | undefined {
    if (!this.head) {
      return undefined;
    }

    this.length--;

    const head = this.head;
    this.head = this.head.next;

    if (this.length === 0) {
      this.tail = undefined;
    }
    return head.value;
  }
  peek(): T | undefined {
    return this.head?.value;
  }
}
