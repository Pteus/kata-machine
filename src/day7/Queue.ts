export default class Queue<T> {
  public length: number;
  private head?: ListNode<T>;
  private tail?: ListNode<T>;

  constructor() {
    this.length = 0;
    this.head = this.tail = undefined;
  }

  enqueue(item: T): void {
    this.length++;

    const newNode: ListNode<T> = { value: item };

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

    const head = this.head;

    this.length--;
    if (this.length === 0) {
      this.head = this.tail = undefined;
      return head.value;
    }

    this.head = this.head.next;
    return head.value;
  }

  peek(): T | undefined {
    return this.head?.value;
  }
}

